import fs from 'fs';
import path from 'path';
import crypto from 'crypto';
import { execSync } from 'child_process';

/**
 * Cloudinary Direct Upload Utility for Volga Park
 */

const cloudName = process.argv[2] || process.env.CLOUDINARY_CLOUD_NAME || 'mvmsbgon';
const apiKey = process.argv[3] || process.env.CLOUDINARY_API_KEY || '421495126982189';
const apiSecret = process.argv[4] || process.env.CLOUDINARY_API_SECRET || '6joZUmPGAh5FGDsdzCDWLgpSinE';

if (!cloudName || !apiKey || !apiSecret) {
  console.error('Usage: node upload_volga_park.mjs <cloud_name> <api_key> <api_secret>');
  process.exit(1);
}

function generateSignature(params, secret) {
  const sortedKeys = Object.keys(params).sort();
  const toSign = sortedKeys.map((k) => `${k}=${params[k]}`).join('&') + secret;
  return crypto.createHash('sha1').update(toSign).digest('hex');
}

async function uploadFile(filePath, resourceType = 'image', publicId = null) {
  const timestamp = Math.floor(Date.now() / 1000);
  const folder = 'projects/volga-park';
  
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
  console.log(`Uploading ${fileName} (${(fileBuffer.length / 1024 / 1024).toFixed(2)} MB) to ${resourceType}...`);

  const response = await fetch(endpoint, {
    method: 'POST',
    body: formData,
  });

  const result = await response.json();
  if (!response.ok) {
    throw new Error(`Upload failed: ${result.error?.message || response.statusText}`);
  }

  console.log(`✓ Uploaded ${fileName} -> ${result.secure_url}`);
  return result;
}

async function main() {
  const volgaFolder = 'D:\\Site uchun ishlar\\Volga park';
  const optDir = path.join(volgaFolder, 'opt');
  if (!fs.existsSync(optDir)) {
    fs.mkdirSync(optDir, { recursive: true });
  }

  console.log(`Target Cloudinary Cloud: ${cloudName}`);

  const cachePath = path.join(process.cwd(), 'volga_park_cloudinary_urls.json');
  let results = {};
  if (fs.existsSync(cachePath)) {
    try {
      results = JSON.parse(fs.readFileSync(cachePath, 'utf8'));
    } catch (e) {}
  }

  // 1. Upload Video if not yet done
  if (!results['heroVideo']) {
    const videoPath = path.join(volgaFolder, 'volga_park_web.mp4');
    if (fs.existsSync(videoPath)) {
      const res = await uploadFile(videoPath, 'video', 'volga_park_film_v1');
      results['heroVideo'] = res.secure_url;
      fs.writeFileSync(cachePath, JSON.stringify(results, null, 2));
    } else {
      console.warn('volga_park_web.mp4 not found!');
    }
  } else {
    console.log(`Skipping already uploaded video: ${results['heroVideo']}`);
  }

  // 2. Process & Upload Images
  const files = fs.readdirSync(volgaFolder);

  for (const file of files) {
    const ext = path.extname(file).toLowerCase();
    if (!['.jpg', '.jpeg', '.png', '.webp'].includes(ext)) continue;
    if (file.startsWith('opt_')) continue;

    if (results[file]) {
      console.log(`Skipping already uploaded: ${file}`);
      continue;
    }

    const fullPath = path.join(volgaFolder, file);
    const stat = fs.statSync(fullPath);
    let uploadPath = fullPath;

    // Cloudinary Free plan has 10MB limit for images. If > 9.5MB, optimize with ffmpeg q:v 2
    if (stat.size > 9.5 * 1024 * 1024) {
      const cleanSafeName = file.replace(/[^a-zA-Z0-9._-]/g, '_');
      const optFile = path.join(optDir, `opt_${cleanSafeName}.jpg`);
      if (!fs.existsSync(optFile)) {
        console.log(`Optimizing high-res image (${(stat.size / 1024 / 1024).toFixed(2)} MB): ${file}`);
        execSync(`ffmpeg -y -i "${fullPath}" -q:v 2 "${optFile}"`, { stdio: 'inherit' });
      }
      uploadPath = optFile;
    }

    const hash = crypto.createHash('md5').update(file).digest('hex').slice(0, 6);
    const cleanBase = path.basename(file, ext).replace(/[^a-zA-Z0-9_-]/g, '_').slice(0, 25);
    const cleanName = `${cleanBase}_${hash}`;
    const res = await uploadFile(uploadPath, 'image', cleanName);
    results[file] = res.secure_url;
    fs.writeFileSync(cachePath, JSON.stringify(results, null, 2));
  }

  console.log('\n--- UPLOAD SUMMARY ---');
  console.log(JSON.stringify(results, null, 2));
  console.log('Saved volga_park_cloudinary_urls.json');
}

main().catch((err) => {
  console.error('Error:', err.message);
  process.exit(1);
});
