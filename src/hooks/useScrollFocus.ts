'use client';

import { useEffect, useRef, useState } from 'react';

interface UseScrollFocusOptions {
  threshold?: number;
  rootMargin?: string;
  scale?: number;
}

export function useScrollFocus({
  threshold = 0.3,
  rootMargin = '0px',
  scale = 1.02,
}: UseScrollFocusOptions = {}) {
  const ref = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      {
        threshold,
        rootMargin,
      }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [threshold, rootMargin]);

  return { ref, isInView, scale };
}
