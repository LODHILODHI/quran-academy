"use client";

import { useEffect } from "react";

export default function HomepageScripts() {
  useEffect(() => {
    // Load only essential scripts for homepage
    const loadScript = (src: string): Promise<void> => {
      return new Promise((resolve, reject) => {
        const existingScript = document.querySelector(`script[src="${src}"]`);
        if (existingScript) {
          resolve();
          return;
        }

        const script = document.createElement("script");
        script.src = src;
        script.async = true; // Use async for non-blocking
        script.onload = () => resolve();
        script.onerror = () => reject(new Error(`Failed to load script: ${src}`));
        document.body.appendChild(script);
      });
    };

    // Load only essential scripts for homepage - heavily delayed
    const loadEssentialScripts = () => {
      // Load jQuery (needed for slick carousel in testimonials) - async
      loadScript("/assets/js/vendor/jquery-1.12.4.min.js").then(() => {
        // Wait for jQuery
        const waitForJQuery = () => {
          if (typeof window !== "undefined" && (window as any).jQuery) {
            // Load slick carousel for testimonials
            loadScript("/assets/js/slick.min.js");
            
            // Bootstrap for layout (load async, non-blocking)
            loadScript("/assets/js/bootstrap.min.js");
            
            // Load remaining scripts much later
            const loadNonCriticalScripts = () => {
              Promise.all([
                loadScript("/assets/js/jquery.slicknav.min.js"),
                loadScript("/assets/js/wow.min.js"),
                loadScript("/assets/js/jquery.sticky.js"),
              ]).then(() => {
                // Load main.js last
                loadScript("/assets/js/main.js");
              });
            };

            // Delay non-critical scripts significantly
            if (typeof window !== "undefined") {
              if ("requestIdleCallback" in window) {
                (window as any).requestIdleCallback(loadNonCriticalScripts, { timeout: 5000 });
              } else {
                setTimeout(loadNonCriticalScripts, 2000);
              }
            }
          } else {
            setTimeout(waitForJQuery, 50);
          }
        };
        waitForJQuery();
      });
    };

    // Delay ALL script loading significantly to improve initial render
    // Only load after page is fully interactive
    if (typeof window !== "undefined") {
      if ("requestIdleCallback" in window) {
        (window as any).requestIdleCallback(loadEssentialScripts, { timeout: 3000 });
      } else {
        window.addEventListener("load", () => {
          setTimeout(loadEssentialScripts, 1000);
        });
      }
    }
  }, []);

  return null;
}
