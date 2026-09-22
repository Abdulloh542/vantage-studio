/**
 * Cloudinary image and video optimization helpers
 */

export function optimizeCloudinaryImage(url: string, width = 1600): string {
  if (!url || typeof url !== 'string' || !url.includes('res.cloudinary.com')) {
    return url;
  }
  if (url.includes('/image/upload/') && !url.includes('/image/upload/f_auto')) {
    return url.replace('/image/upload/', `/image/upload/f_auto,q_auto,w_${width}/`);
  }
  return url;
}

export function optimizeCloudinaryVideo(url: string, width = 1280): string {
  if (!url || typeof url !== 'string' || !url.includes('res.cloudinary.com')) {
    return url;
  }
  if (url.includes('/video/upload/') && !url.includes('/video/upload/q_auto')) {
    return url.replace('/video/upload/', `/video/upload/q_auto,vc_auto,w_${width}/`);
  }
  return url;
}

