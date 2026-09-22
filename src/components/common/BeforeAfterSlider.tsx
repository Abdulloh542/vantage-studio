import React, { useState, useRef, useCallback, useEffect } from 'react';

interface BeforeAfterSliderProps {
  beforeImage: string;
  beforeLabel?: string;
  afterImage: string;
  afterLabel?: string;
  aspectRatio?: string;
  className?: string;
}

export function BeforeAfterSlider({
  beforeImage,
  beforeLabel = 'SOURCE CAD',
  afterImage,
  afterLabel = 'FINAL DUSK CGI',
  aspectRatio = 'aspect-[16/9]',
  className = '',
}: BeforeAfterSliderProps) {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(percentage);
  }, []);

  const handleMouseDown = () => setIsDragging(true);
  const handleTouchStart = () => setIsDragging(true);

  useEffect(() => {
    const handleMouseUp = () => setIsDragging(false);
    const handleMouseMove = (e: MouseEvent) => {
      if (isDragging) {
        handleMove(e.clientX);
      }
    };
    const handleTouchMove = (e: TouchEvent) => {
      if (isDragging && e.touches[0]) {
        if (e.cancelable) {
          e.preventDefault();
        }
        handleMove(e.touches[0].clientX);
      }
    };

    if (isDragging) {
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseup', handleMouseUp);
      window.addEventListener('touchmove', handleTouchMove, { passive: false });
      window.addEventListener('touchend', handleMouseUp);
    }

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', handleMouseUp);
    };
  }, [isDragging, handleMove]);

  // Keyboard accessibility
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowLeft') {
      setSliderPosition((prev) => Math.max(0, prev - 5));
    } else if (e.key === 'ArrowRight') {
      setSliderPosition((prev) => Math.min(100, prev + 5));
    }
  };

  return (
    <div
      ref={containerRef}
      onKeyDown={handleKeyDown}
      tabIndex={0}
      role="slider"
      aria-valuenow={Math.round(sliderPosition)}
      aria-valuemin={0}
      aria-valuemax={100}
      aria-label="Image comparison slider"
      className={`relative select-none overflow-hidden cursor-ew-resize group outline-none focus-visible:ring-1 focus-visible:ring-white touch-pan-y ${aspectRatio} ${className}`}
      onClick={(e) => handleMove(e.clientX)}
    >
      {/* Background (After / Final Image) */}
      <img
        src={afterImage}
        alt={afterLabel}
        loading="lazy"
        className="absolute inset-0 w-full h-full object-cover pointer-events-none"
      />

      {/* Foreground (Before / Source Image - Clipped) */}
      <div
        className="absolute inset-0 overflow-hidden pointer-events-none"
        style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
      >
        <img
          src={beforeImage}
          alt={beforeLabel}
          loading="lazy"
          className="absolute inset-0 w-full h-full object-cover pointer-events-none"
        />
      </div>

      {/* Vertical Hairline Divider */}
      <div
        className="absolute top-0 bottom-0 w-[1.5px] bg-white pointer-events-none shadow-[0_0_10px_rgba(0,0,0,0.5)] z-20"
        style={{ left: `${sliderPosition}%` }}
      >
        {/* Minimalist Drag Handle Indicator */}
        <div
          onMouseDown={handleMouseDown}
          onTouchStart={handleTouchStart}
          className="pointer-events-auto absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-white/95 text-black flex items-center justify-center shadow-lg transition-transform duration-150 group-hover:scale-110 active:scale-95"
        >
          <div className="flex items-center gap-1 text-[9px] font-semibold tracking-tighter">
            <span>‹</span>
            <span>›</span>
          </div>
        </div>
      </div>

      {/* Badges: SOURCE and FINAL (only if non-empty) */}
      {beforeLabel ? (
        <div className="absolute top-4 left-4 z-20 pointer-events-none">
          <span className="px-2.5 py-1 bg-black/70 backdrop-blur-sm text-[10px] uppercase tracking-widest text-zinc-300 font-mono border border-white/10">
            {beforeLabel}
          </span>
        </div>
      ) : null}
      {afterLabel ? (
        <div className="absolute top-4 right-4 z-20 pointer-events-none">
          <span className="px-2.5 py-1 bg-black/70 backdrop-blur-sm text-[10px] uppercase tracking-widest text-zinc-300 font-mono border border-white/10">
            {afterLabel}
          </span>
        </div>
      ) : null}
    </div>
  );
}
