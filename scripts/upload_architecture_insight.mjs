import fs from 'fs';
import path from 'path';
import crypto from 'crypto';

const cloudName = 'mvmsbgon';
const apiKey = '421495126982189';
const apiSecret = '6joZUmPGAh5FGDsdzCDWLgpSinE';

function generateSignature(params, secret) {
  const sortedKeys = Object.keys(params).sort();
  const toSign = sortedKeys.map((k) => `${k}=${params[k]}`).join('&') + secret;
  return crypto.createHash('sha1').update(toSign).digest('hex');
}

async function uploadFile(filePath, resourceType = 'video', folder = 'projects/architecture-insight', publicId = null) {
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

async function run() {
  const videoPath = 'D:/Site uchun ishlar/effect archi inside/architecture_insight_web.mp4';
  const res = await uploadFile(videoPath, 'video', 'projects/architecture-insight', 'architecture_insight_film_9x16');
  console.log('Done! Secure URL:', res.secure_url);
}

run().catch(console.error);
