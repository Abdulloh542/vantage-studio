import fs from 'fs';
import path from 'path';
import crypto from 'crypto';

/**
 * Cloudinary Direct Upload Utility
 * Usage: node upload_to_cloudinary.mjs <cloud_name> <api_key> <api_secret>
 */

const cloudName = process.argv[2] || process.env.CLOUDINARY_CLOUD_NAME;
const apiKey = process.argv[3] || process.env.CLOUDINARY_API_KEY;
const apiSecret = process.argv[4] || process.env.CLOUDINARY_API_SECRET;

if (!cloudName || !apiKey || !apiSecret) {
  console.error('Usage: node upload_to_cloudinary.mjs <cloud_name> <api_key> <api_secret>');
  process.exit(1);
}

function generateSignature(params, secret) {
  const sortedKeys = Object.keys(params).sort();
  const toSign = sortedKeys.map((k) => `${k}=${params[k]}`).join('&') + secret;
  return crypto.createHash('sha1').update(toSign).digest('hex');
}

async function uploadFile(filePath, resourceType = 'image', publicId = null) {
  const timestamp = Math.floor(Date.now() / 1000);
  const folder = 'projects/bunker-37';
  
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
  const bunkerFolder = 'C:\\Users\\user\\Desktop\\Site uchun ishlar\\Bunker 37';
  console.log(`Target Cloudinary Cloud: ${cloudName}`);

  const cachePath = path.join(process.cwd(), 'bunker37_cloudinary_urls.json');
  let results = {};
  if (fs.existsSync(cachePath)) {
    try {
      results = JSON.parse(fs.readFileSync(cachePath, 'utf8'));
    } catch (e) {}
  }

  const files = fs.readdirSync(bunkerFolder);

  for (const file of files) {
    if (results[file]) {
      console.log(`Skipping already uploaded: ${file}`);
      continue;
    }
    const fullPath = path.join(bunkerFolder, file);
    const ext = path.extname(file).toLowerCase();
    
    // Upload the web-optimized video instead of the 351MB raw file if available
    if (ext === '.mp4') {
      if (file === 'bunker_37_web.mp4') {
        const res = await uploadFile(fullPath, 'video', 'bunker_37_film_v2');
        results['heroVideo'] = res.secure_url;
      }
      continue;
    }

    if (['.jpg', '.jpeg', '.png', '.webp'].includes(ext)) {
      const cleanName = path.basename(file, ext).replace(/[^a-zA-Z0-9_-]/g, '_').slice(0, 40);
      const res = await uploadFile(fullPath, 'image', cleanName);
      results[file] = res.secure_url;
    }
  }

  console.log('\n--- UPLOAD SUMMARY ---');
  console.log(JSON.stringify(results, null, 2));

  fs.writeFileSync(cachePath, JSON.stringify(results, null, 2));
  console.log('Saved bunker37_cloudinary_urls.json');
}

main().catch((err) => {
  console.error('Error:', err.message);
  process.exit(1);
});
