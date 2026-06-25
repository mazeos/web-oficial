import { useEffect, useRef, useState } from "react";

interface UseScrollRevealOptions {
  threshold?: number;
  delay?: number;
  direction?: 'up' | 'scale';
}

export const useScrollReveal = (options: UseScrollRevealOptions = {}) => {
  const { threshold = 0.15, delay = 0, direction = 'up' } = options;
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (delay > 0) {
            setTimeout(() => setIsVisible(true), delay);
          } else {
            setIsVisible(true);
          }
          observer.unobserve(entry.target);
        }
      },
      { 
        threshold,
        rootMargin: '0px 0px -80px 0px'
      }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [threshold, delay]);

  const getAnimationClass = () => {
    if (!isVisible) return 'opacity-0';
    
    switch (direction) {
      case 'scale':
        return 'animate-scroll-reveal-scale';
      default:
        return 'animate-scroll-reveal';
    }
  };

  return { ref, isVisible, animationClass: getAnimationClass() };
};

export default useScrollReveal;
