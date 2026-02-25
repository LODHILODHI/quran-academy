"use client";

import { useEffect } from "react";

export default function HeadLinks() {
  useEffect(() => {
    // Function to check if all CSS files are loaded
    const checkAllCSSLoaded = (): Promise<void> => {
      return new Promise((resolve) => {
        const stylesheets = Array.from(document.querySelectorAll('link[rel="stylesheet"]')) as HTMLLinkElement[];
        
        if (stylesheets.length === 0) {
          resolve();
          return;
        }

        let loadedCount = 0;
        const totalSheets = stylesheets.length;

        const checkComplete = () => {
          loadedCount++;
          if (loadedCount >= totalSheets) {
            document.documentElement.classList.add('css-loaded');
            resolve();
          }
        };

        stylesheets.forEach((link) => {
          // Check if already loaded
          try {
            if (link.sheet) {
              checkComplete();
              return;
            }
          } catch (e) {
            // Cross-origin stylesheet, assume loaded
            checkComplete();
            return;
          }

          // Wait for load
          if (link.addEventListener) {
            link.addEventListener('load', checkComplete);
            link.addEventListener('error', checkComplete);
          } else {
            // Fallback for older browsers
            (link as any).onload = checkComplete;
            (link as any).onerror = checkComplete;
          }
        });

        // Fallback timeout
        setTimeout(() => {
          if (loadedCount < totalSheets) {
            document.documentElement.classList.add('css-loaded');
            resolve();
          }
        }, 500);
      });
    };

    // Wait for CSS to load, then mark as ready
    const init = async () => {
      // Small delay to ensure stylesheets are in DOM
      await new Promise(resolve => setTimeout(resolve, 50));
      await checkAllCSSLoaded();
    };

    init();
  }, []);

  return null;
}
