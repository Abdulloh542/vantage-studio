import { useEffect } from 'react';
import Lenis from 'lenis';

export function resetLenisScroll() {
  window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  document.documentElement.scrollTop = 0;
  document.body.scrollTop = 0;

  const lenis = (window as any).lenis;
  if (lenis && typeof lenis.scrollTo === 'function') {
    try {
      lenis.scrollTo(0, { immediate: true, force: true });
    } catch {
      // safe fallback
    }
  }
}

export function pauseLenis() {
  const lenis = (window as any).lenis;
  if (lenis && typeof lenis.stop === 'function') {
    try {
      lenis.stop();
    } catch {}
  }
}

export function resumeLenis() {
  const lenis = (window as any).lenis;
  if (lenis && typeof lenis.start === 'function') {
    try {
      lenis.start();
    } catch {}
  }
}

export function SmoothScroll() {
  useEffect(() => {
    const isTouch =
      typeof window !== 'undefined' &&
      ('ontouchstart' in window || navigator.maxTouchPoints > 0);

    const lenis = new Lenis({
      duration: isTouch ? 0.8 : 1.1,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      syncTouch: false, // Enables native 60/120Hz GPU momentum on touch devices, preventing lag on mobile!
      autoResize: true,
    });

    (window as any).lenis = lenis;

    let animId: number;
    function raf(time: number) {
      lenis.raf(time);
      animId = requestAnimationFrame(raf);
    }

    animId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(animId);
      lenis.destroy();
      delete (window as any).lenis;
    };
  }, []);

  return null;
}
