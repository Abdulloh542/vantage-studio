import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { resetLenisScroll } from './SmoothScroll';

export function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    if ('scrollRestoration' in history) {
      history.scrollRestoration = 'manual';
    }
    resetLenisScroll();
  }, [pathname]);

  return null;
}
