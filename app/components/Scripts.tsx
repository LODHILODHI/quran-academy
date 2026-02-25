"use client";

import { useEffect } from "react";

export default function Scripts() {
  useEffect(() => {
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

        // Load remaining scripts
        await Promise.all([
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
        ]);

        // Load plugins and main.js last
        await loadScript("/assets/js/plugins.js");
        await loadScript("/assets/js/main.js");
        
        // Small delay to ensure DOM is ready and scripts are fully initialized
        await new Promise((resolve) => setTimeout(resolve, 50));
      } catch (error) {
        console.error("Error loading scripts:", error);
      }
    };

    loadScripts();
  }, []);

  return null;
}
