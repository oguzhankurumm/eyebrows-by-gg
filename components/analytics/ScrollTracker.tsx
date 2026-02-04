'use client';

import { useEffect, useState, useRef } from 'react';
import { usePathname } from 'next/navigation';
import { trackEvent } from '@/lib/analytics';

export function ScrollTracker() {
  const pathname = usePathname();
  return <ScrollTrackerLogic key={pathname} pathname={pathname} />;
}

function ScrollTrackerLogic({ pathname }: { pathname: string }) {
  const [maxScroll, setMaxScroll] = useState(0);
  const trackedDepths = useRef<Set<number>>(new Set());
  const trackedTimes = useRef<Set<number>>(new Set());
  const startTime = useRef<number>(0);

  // Initialize start time on mount
  useEffect(() => {
    startTime.current = Date.now();
  }, []);

  // Scroll Tracking
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = (scrollTop / docHeight) * 100;
      
      if (scrollPercent > maxScroll) {
        setMaxScroll(scrollPercent);
      }
    };

    const debouncedHandleScroll = debounce(handleScroll, 100);
    window.addEventListener('scroll', debouncedHandleScroll);

    return () => window.removeEventListener('scroll', debouncedHandleScroll);
  }, [maxScroll]);

  // Check depths against maxScroll
  useEffect(() => {
    const depths = [25, 50, 75, 90];
    
    depths.forEach(depth => {
      if (maxScroll >= depth && !trackedDepths.current.has(depth)) {
        trackedDepths.current.add(depth);
        trackEvent('Scroll Depth', {
          depth: `${depth}%`,
          page: pathname
        });
      }
    });
  }, [maxScroll, pathname]);

  // Time Tracking
  useEffect(() => {
    const timeIntervals = [30, 60, 120, 300]; // seconds

    const intervalId = setInterval(() => {
      const elapsedSeconds = Math.floor((Date.now() - startTime.current) / 1000);

      timeIntervals.forEach(time => {
        if (elapsedSeconds >= time && !trackedTimes.current.has(time)) {
          trackedTimes.current.add(time);
          
          let durationLabel = `${time}s`;
          if (time >= 60) durationLabel = `${time / 60}m`;
          
          trackEvent('Engagement', {
            duration: durationLabel,
            page: pathname
          });
        }
      });
    }, 1000);

    return () => clearInterval(intervalId);
  }, [pathname]);

  return null;
}

function debounce<T extends (...args: unknown[]) => void>(func: T, wait: number) {
  let timeout: NodeJS.Timeout;
  return function executedFunction(...args: Parameters<T>) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}
