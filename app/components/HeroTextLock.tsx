"use client";

import { useEffect } from "react";

export default function HeroTextLock() {
  useEffect(() => {
    // Aggressively prevent any scroll-based transforms on hero text
    const lockHeroText = () => {
      const heroCaption = document.querySelector('.hero__caption');
      const sliderArea = document.querySelector('.slider-area');
      
      if (heroCaption) {
        // Force reset any transforms continuously
        const resetAll = () => {
          // Reset hero caption children (but keep container absolute)
          const allElements = heroCaption.querySelectorAll('*');
          allElements.forEach((el: Element) => {
            const htmlEl = el as HTMLElement;
            htmlEl.style.transform = 'none';
            htmlEl.style.transition = 'none';
            htmlEl.style.position = 'relative';
          });
          
          // Keep container absolute positioned and fixed - use !important via setProperty
          const heroEl = heroCaption as HTMLElement;
          heroEl.style.setProperty('position', 'absolute', 'important');
          heroEl.style.setProperty('top', '50%', 'important');
          heroEl.style.setProperty('left', '0', 'important');
          heroEl.style.setProperty('transform', 'translateY(-50%)', 'important');
          heroEl.style.setProperty('transition', 'none', 'important');
          heroEl.style.setProperty('will-change', 'auto', 'important');
          heroEl.style.setProperty('z-index', '101', 'important');
          heroEl.style.setProperty('width', '100%', 'important');
        };
        
        // Reset on scroll, resize, and continuously
        const resetOnScroll = () => resetAll();
        window.addEventListener('scroll', resetOnScroll, { passive: true });
        window.addEventListener('resize', resetOnScroll, { passive: true });
        
        // Reset very frequently to prevent any JavaScript from changing it
        const interval = setInterval(resetAll, 50);
        
        // Initial reset
        resetAll();
        
        return () => {
          window.removeEventListener('scroll', resetOnScroll);
          window.removeEventListener('resize', resetOnScroll);
          clearInterval(interval);
        };
      }
    };
    
    // Run immediately and after DOM is ready
    lockHeroText();
    const timer = setTimeout(lockHeroText, 100);
    const timer2 = setTimeout(lockHeroText, 500);
    
    return () => {
      clearTimeout(timer);
      clearTimeout(timer2);
    };
  }, []);

  return null;
}
