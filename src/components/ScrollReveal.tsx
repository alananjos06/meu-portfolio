'use client';

import { useEffect, useRef, useState, ReactNode } from 'react';

export default function ScrollReveal({ children }: { children: ReactNode }) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const target = sectionRef.current;
    if (!target) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {
        rootMargin: '0px 0px -8% 0px'
      }
    );

    observer.observe(target);

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={sectionRef}>
      <div className={`reveal-section${isVisible ? ' active' : ''}`}>
        {children}
      </div>
    </div>
  );
}
