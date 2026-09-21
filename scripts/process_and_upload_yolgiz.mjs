import fs from 'fs';
import path from 'path';
import crypto from 'crypto';
import { execSync } from 'child_process';

const cloudName = 'mvmsbgon';
const apiKey = '421495126982189';
const apiSecret = '6joZUmPGAh5FGDsdzCDWLgpSinE';

const baseDir = 'D:/Site uchun ishlar/yolgiz videolar';
const tempDir = path.join(baseDir, 'processed_temp');

if (!fs.existsSync(tempDir)) {
  fs.mkdirSync(tempDir, { recursive: true });
}

function generateSignature(params, secret) {
  const sortedKeys = Object.keys(params).sort();
  const toSign = sortedKeys.map((k) => `${k}=${params[k]}`).join('&') + secret;
  return crypto.createHash('sha1').update(toSign).digest('hex');
}

async function uploadFile(filePath, resourceType = 'video', folder = 'projects/misc', publicId = null) {
  const timestamp = Math.floor(Date.now() / 1000);
  
  const signParams = {
    folder,
    timestamp,
  };
  if (publicId) {
    signParams.public_id = publicId;
  }

  const signature = generateSignature(signParams, apiSecret);

  const fileBuffer = fs.readFileSync(filePath);
  const fileName = path.basename(filePath);

  const formData = new FormData();
  formData.append('file', new Blob([fileBuffer]), fileName);
  formData.append('api_key', apiKey);
  formData.append('timestamp', timestamp.toString());
  formData.append('folder', folder);
  formData.append('signature', signature);
  if (publicId) {
    formData.append('public_id', publicId);
  }

  const endpoint = `https://api.cloudinary.com/v1_1/${cloudName}/${resourceType}/upload`;
  console.log(`Uploading ${fileName} (${(fileBuffer.length / 1024 / 1024).toFixed(2)} MB) to ${endpoint}...`);

  const response = await fetch(endpoint, {
    method: 'POST',
    body: formData,
  });

  const result = await response.json();
  if (!response.ok) {
    throw new Error(`Upload failed for ${fileName}: ${result.error?.message || JSON.stringify(result)}`);
  }

  console.log(`Uploaded ${fileName} -> ${result.secure_url}`);
  return result;
}

function getVideoDuration(filePath) {
  const stdout = execSync(`ffprobe -v error -show_entries format=duration -of default=noprint_wrappers=1:nokey=1 "${filePath}"`).toString().trim();
  return parseFloat(stdout);
}

const configs = [
  {
    rawName: '1_F.mp4',
    slug: 'lotus-mall',
    title: 'Lotus Mall & 5 Star Hotel',
    folder: 'projects/lotus-mall',
    webName: 'lotus_mall_web.mp4',
    bitrate: '5000k',
    scale: '-vf "scale=-2:1080"',
    aspectRatio: '16:9',
    stillPoints: [8, 22, 40, 58, 76]
  },
  {
    rawName: 'Pool_F.mp4',
    slug: 'collective-dubai-hills',
    title: 'Collective – Dubai Hills Estate',
    folder: 'projects/collective-dubai-hills',
    webName: 'collective_dubai_hills_web.mp4',
    bitrate: '4200k',
    scale: '-vf "scale=-2:1080"',
    aspectRatio: '16:9',
    stillPoints: [12, 38, 70, 100, 125]
  },
  {
    rawName: '1.mp4',
    slug: 'navoi-plaza',
    title: 'Navoi Plaza',
    folder: 'projects/navoi-plaza',
    webName: 'navoi_plaza_web.mp4',
    bitrate: '4500k',
    scale: '', // already 1080x1920 vertical
    aspectRatio: '9:16',
    stillPoints: [10, 25, 45, 62, 75]
  }
];

async function main() {
  const finalResults = {};

  for (const cfg of configs) {
    console.log(`\n======================================================`);
    console.log(`Processing: ${cfg.title} (${cfg.rawName})`);
    console.log(`======================================================`);

    const rawPath = path.join(baseDir, cfg.rawName);
    const totalDuration = getVideoDuration(rawPath);
    console.log(`Raw video duration: ${totalDuration.toFixed(2)}s`);

    // Rule: cut 5.5s from start, cut 6s from end
    const cutStart = 5.5;
    const cutEnd = 6.0;
    const trimDuration = totalDuration - cutStart - cutEnd;
    console.log(`Trim duration: ${trimDuration.toFixed(2)}s (from ${cutStart}s to ${(totalDuration - cutEnd).toFixed(2)}s)`);

    const trimmedWebPath = path.join(tempDir, cfg.webName);
    
    // 1. FFmpeg encode trimmed video
    console.log(`Encoding trimmed video...`);
    const ffmpegCmd = `ffmpeg -y -ss ${cutStart} -i "${rawPath}" -t ${trimDuration.toFixed(2)} ${cfg.scale} -c:v libx264 -preset fast -b:v ${cfg.bitrate} -c:a aac -b:a 192k -movflags +faststart "${trimmedWebPath}"`;
    execSync(ffmpegCmd, { stdio: 'inherit' });

    const trimmedSizeMB = fs.statSync(trimmedWebPath).size / (1024 * 1024);
    console.log(`Trimmed video size: ${trimmedSizeMB.toFixed(2)} MB`);

    // 2. Extract still frames
    console.log(`Extracting still frames...`);
    const stillPaths = [];
    for (let i = 0; i < cfg.stillPoints.length; i++) {
      const stillSec = cfg.stillPoints[i];
      const stillFile = path.join(tempDir, `${cfg.slug}_still_${i + 1}.jpg`);
      const stillCmd = `ffmpeg -y -ss ${stillSec} -i "${trimmedWebPath}" -vframes 1 -q:v 2 "${stillFile}"`;
      execSync(stillCmd, { stdio: 'ignore' });
      stillPaths.push(stillFile);
      console.log(`  Extracted frame at ${stillSec}s -> ${path.basename(stillFile)}`);
    }

    // 3. Upload video to Cloudinary
    console.log(`Uploading trimmed video to Cloudinary...`);
    const videoUpload = await uploadFile(trimmedWebPath, 'video', cfg.folder, `${cfg.slug}_film`);
    
    // 4. Upload stills to Cloudinary
    console.log(`Uploading stills to Cloudinary...`);
    const stillUploads = [];
    for (let i = 0; i < stillPaths.length; i++) {
      const res = await uploadFile(stillPaths[i], 'image', cfg.folder, `${cfg.slug}_still_${i + 1}`);
      stillUploads.push(res.secure_url);
    }

    finalResults[cfg.slug] = {
      title: cfg.title,
      aspectRatio: cfg.aspectRatio,
      videoUrl: videoUpload.secure_url,
      stills: stillUploads
    };
  }

  const outJsonPath = path.join(process.cwd(), 'scripts', 'yolgiz_upload_results.json');
  fs.writeFileSync(outJsonPath, JSON.stringify(finalResults, null, 2));
  console.log(`\nALL DONE! Upload results saved to: ${outJsonPath}`);
}

main().catch(err => {
  console.error('ERROR in process_and_upload_yolgiz:', err);
  process.exit(1);
});
