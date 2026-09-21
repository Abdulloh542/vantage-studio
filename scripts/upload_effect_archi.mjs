import fs from 'fs';
import path from 'path';
import crypto from 'crypto';

/**
 * Cloudinary Direct Upload Utility for Effect Archi Inside
 */

const cloudName = process.argv[2] || process.env.CLOUDINARY_CLOUD_NAME || 'mvmsbgon';
const apiKey = process.argv[3] || process.env.CLOUDINARY_API_KEY || '421495126982189';
const apiSecret = process.argv[4] || process.env.CLOUDINARY_API_SECRET || '6joZUmPGAh5FGDsdzCDWLgpSinE';

if (!cloudName || !apiKey || !apiSecret) {
  console.error('Usage: node upload_effect_archi.mjs <cloud_name> <api_key> <api_secret>');
  process.exit(1);
}

function generateSignature(params, secret) {
  const sortedKeys = Object.keys(params).sort();
  const toSign = sortedKeys.map((k) => `${k}=${params[k]}`).join('&') + secret;
  return crypto.createHash('sha1').update(toSign).digest('hex');
}

async function uploadFile(filePath, resourceType = 'image', publicId = null) {
  const timestamp = Math.floor(Date.now() / 1000);
  const folder = 'projects/effect-archi';
  
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
  const targetFolder = 'D:\\Site uchun ishlar\\effect archi inside';
  console.log(`Target Cloudinary Cloud: ${cloudName}`);

  const cachePath = path.join(process.cwd(), 'effect_archi_cloudinary_urls.json');
  let results = {};
  if (fs.existsSync(cachePath)) {
    try {
      results = JSON.parse(fs.readFileSync(cachePath, 'utf8'));
    } catch (e) {}
  }

  // 1. Upload Video
  if (!results['heroVideo']) {
    const videoPath = path.join(targetFolder, 'effect_archi_web.mp4');
    if (fs.existsSync(videoPath)) {
      const res = await uploadFile(videoPath, 'video', 'effect_archi_film_9x16');
      results['heroVideo'] = res.secure_url;
      fs.writeFileSync(cachePath, JSON.stringify(results, null, 2));
    }
  } else {
    console.log(`Skipping already uploaded video: ${results['heroVideo']}`);
  }

  // 2. Process & Upload Images
  const files = fs.readdirSync(targetFolder);

  for (const file of files) {
    const ext = path.extname(file).toLowerCase();
    if (!['.jpg', '.jpeg', '.png', '.webp'].includes(ext)) continue;

    if (results[file]) {
      console.log(`Skipping already uploaded: ${file}`);
      continue;
    }

    const fullPath = path.join(targetFolder, file);
    const hash = crypto.createHash('md5').update(file).digest('hex').slice(0, 6);
    const cleanBase = path.basename(file, ext).replace(/[^a-zA-Z0-9_-]/g, '_').slice(0, 25);
    const cleanName = `${cleanBase}_${hash}`;

    const res = await uploadFile(fullPath, 'image', cleanName);
    results[file] = res.secure_url;
    fs.writeFileSync(cachePath, JSON.stringify(results, null, 2));
  }

  console.log('\n--- UPLOAD SUMMARY ---');
  console.log(JSON.stringify(results, null, 2));
  console.log('Saved effect_archi_cloudinary_urls.json');
}

main().catch((err) => {
  console.error('Error:', err.message);
  process.exit(1);
});
