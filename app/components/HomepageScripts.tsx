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
            
            // Load only absolutely necessary scripts for homepage
            // Skip main.js initially - it contains 748 KiB unused code
            // Only load what's needed for basic functionality
            const loadMinimalScripts = () => {
              // Only load slicknav for mobile menu - load much later
              if (typeof window !== "undefined") {
                if ("requestIdleCallback" in window) {
                  (window as any).requestIdleCallback(() => {
                    loadScript("/assets/js/jquery.slicknav.min.js");
                  }, { timeout: 10000 });
                  
                  // Load main.js ONLY on user interaction (scroll, click, etc.)
                  // This prevents loading 748 KiB unused code on initial page load
                  let mainJsLoaded = false;
                  const loadMainJsOnInteraction = () => {
                    if (!mainJsLoaded) {
                      mainJsLoaded = true;
                      loadScript("/assets/js/main.js");
                      // Remove listeners after loading
                      window.removeEventListener("scroll", loadMainJsOnInteraction);
                      window.removeEventListener("click", loadMainJsOnInteraction);
                      window.removeEventListener("touchstart", loadMainJsOnInteraction);
                    }
                  };
                  
                  // Load main.js only when user interacts
                  window.addEventListener("scroll", loadMainJsOnInteraction, { once: true, passive: true });
                  window.addEventListener("click", loadMainJsOnInteraction, { once: true });
                  window.addEventListener("touchstart", loadMainJsOnInteraction, { once: true, passive: true });
                  
                  // Fallback: load after 30 seconds if no interaction
                  setTimeout(() => {
                    if (!mainJsLoaded) {
                      loadMainJsOnInteraction();
                    }
                  }, 30000);
                } else {
                  window.addEventListener("load", () => {
                    setTimeout(() => {
                      loadScript("/assets/js/jquery.slicknav.min.js");
                      // Load main.js on interaction
                      let mainJsLoaded = false;
                      const loadMainJs = () => {
                        if (!mainJsLoaded) {
                          mainJsLoaded = true;
                          loadScript("/assets/js/main.js");
                          window.removeEventListener("scroll", loadMainJs);
                          window.removeEventListener("click", loadMainJs);
                        }
                      };
                      window.addEventListener("scroll", loadMainJs, { once: true, passive: true });
                      window.addEventListener("click", loadMainJs, { once: true });
                      setTimeout(() => {
                        if (!mainJsLoaded) loadMainJs();
                      }, 30000);
                    }, 2000);
                  });
                }
              }
            };

            // Delay minimal scripts significantly - only after page is fully loaded and idle
            loadMinimalScripts();
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
