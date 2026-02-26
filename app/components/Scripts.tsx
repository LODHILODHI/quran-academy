"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function Scripts() {
  const pathname = usePathname();
  
  useEffect(() => {
    // Skip loading scripts on homepage - HomepageScripts handles it
    if (pathname === "/") {
      return;
    }
    // Load scripts in correct order
    const loadScript = (src: string): Promise<void> => {
      return new Promise((resolve, reject) => {
        // Check if script already exists
        const existingScript = document.querySelector(`script[src="${src}"]`);
        if (existingScript) {
          resolve();
          return;
        }

        const script = document.createElement("script");
        script.src = src;
        script.async = false;
        script.onload = () => resolve();
        script.onerror = () => reject(new Error(`Failed to load script: ${src}`));
        document.body.appendChild(script);
      });
    };

    // Load scripts sequentially to ensure proper order
    const loadScripts = async () => {
      try {
        // Load modernizr first (it will handle the no-js class)
        await loadScript("/assets/js/vendor/modernizr-3.5.0.min.js");
        
        // Load jQuery
        await loadScript("/assets/js/vendor/jquery-1.12.4.min.js");
        
        // Wait for jQuery to be available
        await new Promise((resolve) => {
          if (typeof window !== "undefined" && (window as any).jQuery) {
            resolve(undefined);
            return;
          }
          const checkJQuery = setInterval(() => {
            if (typeof window !== "undefined" && (window as any).jQuery) {
              clearInterval(checkJQuery);
              resolve(undefined);
            }
          }, 10);
        });

        // Load jQuery plugins that contact.js depends on
        await Promise.all([
          loadScript("/assets/js/popper.min.js"),
          loadScript("/assets/js/jquery.form.js"),
          loadScript("/assets/js/jquery.validate.min.js"),
        ]);

        // Wait a bit to ensure jQuery.validate is fully initialized
        await new Promise((resolve) => setTimeout(resolve, 100));

        // Now load contact.js after dependencies are ready
        await loadScript("/assets/js/contact.js");

        // Delay non-critical scripts to improve initial load
        // Use requestIdleCallback for better performance, fallback to setTimeout
        const loadNonCriticalScripts = () => {
          Promise.all([
            loadScript("/assets/js/bootstrap.min.js"),
            loadScript("/assets/js/jquery.slicknav.min.js"),
            loadScript("/assets/js/owl.carousel.min.js"),
            loadScript("/assets/js/slick.min.js"),
            loadScript("/assets/js/wow.min.js"),
            loadScript("/assets/js/animated.headline.js"),
            loadScript("/assets/js/jquery.magnific-popup.js"),
            loadScript("/assets/js/gijgo.min.js"),
            loadScript("/assets/js/jquery.nice-select.min.js"),
            loadScript("/assets/js/jquery.sticky.js"),
            loadScript("/assets/js/waypoints.min.js"),
            loadScript("/assets/js/jquery.counterup.min.js"),
            loadScript("/assets/js/jquery.ajaxchimp.min.js"),
            loadScript("/assets/js/mail-script.js"),
          ]).then(() => {
            // Load plugins and main.js last
            loadScript("/assets/js/plugins.js").then(() => {
              loadScript("/assets/js/main.js");
            });
          });
        };

        // Delay non-critical scripts significantly to improve initial render
        // Load only after page is interactive
        if (typeof window !== "undefined") {
          if ("requestIdleCallback" in window) {
            (window as any).requestIdleCallback(loadNonCriticalScripts, { timeout: 3000 });
          } else if (document.readyState === "complete") {
            // If page already loaded, wait a bit more
            setTimeout(loadNonCriticalScripts, 500);
          } else {
            // Wait for page to be fully loaded
            (window as Window).addEventListener("load", () => {
              setTimeout(loadNonCriticalScripts, 500);
            });
          }
        }
      } catch (error) {
        console.error("Error loading scripts:", error);
      }
    };

    loadScripts();
  }, []);

  return null;
}
