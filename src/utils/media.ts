/**
 * Cloudinary high-clarity image and video optimization helpers
 * Uses `q_auto:best` and high resolution so architectural renders stay razor-sharp.
 */

export function optimizeCloudinaryImage(url: string, width = 2200): string {
  if (!url || typeof url !== 'string' || !url.includes('res.cloudinary.com')) {
    return url;
  }
  if (url.includes('/image/upload/') && !url.includes('/image/upload/f_auto')) {
    return url.replace(
      '/image/upload/',
      `/image/upload/f_auto,q_auto:best,w_${width}/`
    );
  }
  return url;
}

export function optimizeCloudinaryVideo(url: string, width = 1440): string {
  if (!url || typeof url !== 'string' || !url.includes('res.cloudinary.com')) {
    return url;
  }
  if (url.includes('/video/upload/') && !url.includes('/video/upload/q_auto')) {
    return url.replace(
      '/video/upload/',
      `/video/upload/q_auto:good,vc_auto,w_${width}/`
    );
  }
  return url;
}
