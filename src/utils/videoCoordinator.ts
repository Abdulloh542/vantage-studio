export interface VideoCoordinatorEntry {
  id: string;
  getElement: () => HTMLElement | null;
  play: () => void;
  pause: () => void;
  isManuallyPaused: () => boolean;
}

const entries = new Map<string, VideoCoordinatorEntry>();
let hoveredId: string | null = null;
let currentActiveId: string | null = null;
let rafId: number | null = null;
let listenersAttached = false;
let sharedObserver: IntersectionObserver | null = null;
let lastScrollY = typeof window !== 'undefined' ? window.scrollY : 0;

function isElementInActiveScrollZone(rect: DOMRect, vh: number): boolean {
  if (rect.height <= 0 || rect.width <= 0) return false;

  const visibleTop = Math.max(0, rect.top);
  const visibleBottom = Math.min(vh, rect.bottom);
  const visibleHeight = Math.max(0, visibleBottom - visibleTop);
  const visibleRatio = visibleHeight / rect.height;

  // Must have at least 35% of the frame visible
  if (visibleRatio < 0.35) return false;

  // If more than 40% of the video has scrolled above the top edge, pause it ("tepadagisi to'xtab turadi")
  if (rect.top < -rect.height * 0.40) return false;

  // If the bottom of the video has risen into the top 36% of the viewport, pause it
  if (rect.bottom < vh * 0.36) return false;

  // Must have entered above the bottom 25% of the viewport
  if (rect.top > vh * 0.75) return false;

  return true;
}

function applyWinner(winnerId: string | null): void {
  currentActiveId = winnerId;
  entries.forEach((entry, id) => {
    if (id === winnerId) {
      if (!entry.isManuallyPaused()) {
        entry.play();
      }
    } else {
      entry.pause();
    }
  });
}

export function evaluateActiveVideos(preferStickyCurrent = false): void {
  if (typeof window === 'undefined') return;

  const vh = window.innerHeight || 800;
  const viewportCenter = vh * 0.5;

  // 1. If a video is currently hovered and still on screen, it has top priority
  if (hoveredId && entries.has(hoveredId)) {
    const hoveredEntry = entries.get(hoveredId)!;
    const el = hoveredEntry.getElement();
    if (el) {
      const rect = el.getBoundingClientRect();
      const stillVisibleOnScreen =
        rect.bottom > vh * 0.30 &&
        rect.top < vh * 0.85 &&
        rect.top > -rect.height * 0.45;

      if (stillVisibleOnScreen) {
        applyWinner(hoveredId);
        return;
      }
    }
    hoveredId = null;
  }

  // 2. If mouse just left a video without scrolling, keep it playing if it is still in the active scroll zone
  if (preferStickyCurrent && currentActiveId && entries.has(currentActiveId)) {
    const activeEntry = entries.get(currentActiveId)!;
    const el = activeEntry.getElement();
    if (el && isElementInActiveScrollZone(el.getBoundingClientRect(), vh)) {
      applyWinner(currentActiveId);
      return;
    }
  }

  // 3. On scroll / layout, pick the single video in the active scroll zone closest to the viewport center
  let bestId: string | null = null;
  let bestDistance = Infinity;

  entries.forEach((entry, id) => {
    const el = entry.getElement();
    if (!el) return;
    const rect = el.getBoundingClientRect();
    if (!isElementInActiveScrollZone(rect, vh)) return;

    const center = (rect.top + rect.bottom) * 0.5;
    const distance = Math.abs(center - viewportCenter);
    if (distance < bestDistance) {
      bestDistance = distance;
      bestId = id;
    }
  });

  applyWinner(bestId);
}

function scheduleEvaluation(): void {
  if (typeof window === 'undefined') return;
  if (rafId !== null) return;
  rafId = window.requestAnimationFrame(() => {
    rafId = null;
    evaluateActiveVideos(false);
  });
}

function handleScroll(): void {
  if (typeof window === 'undefined') return;
  const currentY = window.scrollY;
  // Release hover lock when scrolling so the upper video pauses promptly on scroll down
  if (hoveredId && Math.abs(currentY - lastScrollY) > 18) {
    const hoveredEntry = entries.get(hoveredId);
    const el = hoveredEntry?.getElement();
    if (el) {
      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight || 800;
      if (rect.top < -rect.height * 0.22 || rect.bottom < vh * 0.46 || rect.top > vh * 0.65) {
        hoveredId = null;
      }
    } else {
      hoveredId = null;
    }
    lastScrollY = currentY;
  } else {
    lastScrollY = currentY;
  }
  scheduleEvaluation();
}

function ensureGlobalListeners(): void {
  if (typeof window === 'undefined') return;
  if (!listenersAttached) {
    listenersAttached = true;
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', scheduleEvaluation, { passive: true });
  }
  if (!sharedObserver && typeof IntersectionObserver !== 'undefined') {
    sharedObserver = new IntersectionObserver(
      () => {
        scheduleEvaluation();
      },
      {
        root: null,
        threshold: [0, 0.2, 0.35, 0.5, 0.7, 0.9],
      }
    );
  }
}

export function registerVideoPlayer(entry: VideoCoordinatorEntry): () => void {
  ensureGlobalListeners();
  entries.set(entry.id, entry);

  const el = entry.getElement();
  if (el && sharedObserver) {
    sharedObserver.observe(el);
  }

  scheduleEvaluation();
  const t1 = typeof window !== 'undefined' ? window.setTimeout(scheduleEvaluation, 120) : undefined;
  const t2 = typeof window !== 'undefined' ? window.setTimeout(scheduleEvaluation, 450) : undefined;

  return () => {
    if (t1 !== undefined) window.clearTimeout(t1);
    if (t2 !== undefined) window.clearTimeout(t2);
    if (el && sharedObserver) {
      sharedObserver.unobserve(el);
    }
    entries.delete(entry.id);
    if (hoveredId === entry.id) {
      hoveredId = null;
    }
    if (currentActiveId === entry.id) {
      currentActiveId = null;
    }
    scheduleEvaluation();
  };
}

export function notifyVideoHoverEnter(id: string): void {
  if (typeof window !== 'undefined') {
    lastScrollY = window.scrollY;
  }
  hoveredId = id;
  applyWinner(id);
}

export function notifyVideoHoverLeave(id: string): void {
  if (hoveredId === id) {
    hoveredId = null;
  }
  evaluateActiveVideos(true);
}

export function notifyVideoManualPlay(id: string): void {
  hoveredId = id;
  applyWinner(id);
}
