import React from 'react';

export interface ScrollToOptions {
  target: string | HTMLElement | number;
  offset?: number;
  duration?: number;
  easing?: (t: number) => number;
  onComplete?: () => void;
}

/**
 * Custom Cubic-Bezier Easing matching @beui/scroll-to & Outcrowd deck transitions
 */
export const beuiEaseInOutQuart = (t: number): number => {
  return t < 0.5 ? 8 * t * t * t * t : 1 - Math.pow(-2 * t + 2, 4) / 2;
};

export const beuiEaseOutExpo = (t: number): number => {
  return t === 1 ? 1 : 1 - Math.pow(2, -10 * t);
};

export function scrollToTarget({
  target,
  offset = -40,
  duration = 1.4,
  easing = beuiEaseOutExpo,
  onComplete,
}: ScrollToOptions): void {
  if (typeof window === 'undefined') return;

  let targetPosition = 0;

  if (typeof target === 'number') {
    targetPosition = target;
  } else if (typeof target === 'string') {
    const el = document.querySelector(target) as HTMLElement | null;
    if (!el) return;
    targetPosition = el.getBoundingClientRect().top + window.scrollY + offset;
  } else if (target instanceof HTMLElement) {
    targetPosition = target.getBoundingClientRect().top + window.scrollY + offset;
  }

  // Check if Lenis is active globally
  const win = window as any;
  if (win.lenis && typeof win.lenis.scrollTo === 'function') {
    win.lenis.scrollTo(targetPosition, {
      offset: 0,
      duration,
      easing,
      onComplete,
    });
    return;
  }

  // Fallback smooth window animation
  const startY = window.scrollY;
  const distance = targetPosition - startY;
  const startTime = performance.now();
  const durationMs = duration * 1000;

  function step(currentTime: number) {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / durationMs, 1);
    const easedProgress = easing(progress);

    window.scrollTo(0, startY + distance * easedProgress);

    if (progress < 1) {
      requestAnimationFrame(step);
    } else if (onComplete) {
      onComplete();
    }
  }

  requestAnimationFrame(step);
}

export interface ScrollToButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  target: string;
  offset?: number;
  duration?: number;
  children: React.ReactNode;
}

export const ScrollToButton: React.FC<ScrollToButtonProps> = ({
  target,
  offset = -40,
  duration = 1.4,
  children,
  onClick,
  className = '',
  ...props
}) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    scrollToTarget({ target, offset, duration });
    if (onClick) onClick(e);
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      className={className}
      {...props}
    >
      {children}
    </button>
  );
};
