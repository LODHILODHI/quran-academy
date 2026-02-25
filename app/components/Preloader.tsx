"use client";

import { useEffect, useState } from "react";

export default function Preloader() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const hidePreloader = () => {
      // Wait for CSS to be loaded
      const cssLoaded = document.documentElement.classList.contains('css-loaded');
      
      if (!cssLoaded) {
        // Wait a bit more for CSS
        setTimeout(hidePreloader, 100);
        return;
      }

      const preloader = document.getElementById("preloader-active");
      if (preloader) {
        setTimeout(() => {
          preloader.style.transition = "opacity 0.5s ease";
          preloader.style.opacity = "0";
          setTimeout(() => {
            preloader.style.display = "none";
            document.body.style.overflow = "visible";
            document.body.classList.add("preloader-hidden");
            setIsLoading(false);
          }, 500);
        }, 450);
      }
    };

    // Hide preloader when window is fully loaded AND CSS is loaded
    const checkAndHide = () => {
      if (document.readyState === "complete" && document.documentElement.classList.contains('css-loaded')) {
        hidePreloader();
      } else {
        window.addEventListener("load", hidePreloader);
        // Also listen for CSS loaded class
        const observer = new MutationObserver(() => {
          if (document.documentElement.classList.contains('css-loaded') && document.readyState === "complete") {
            hidePreloader();
            observer.disconnect();
          }
        });
        observer.observe(document.documentElement, {
          attributes: true,
          attributeFilter: ['class']
        });
      }
    };

    checkAndHide();

    // Fallback: hide preloader after 2 seconds regardless
    const fallbackTimeout = setTimeout(() => {
      hidePreloader();
    }, 2000);

    return () => {
      window.removeEventListener("load", hidePreloader);
      clearTimeout(fallbackTimeout);
    };
  }, []);

  return (
    <div id="preloader-active" style={{ position: "fixed", top: 0, left: 0, width: "100%", height: "100%", zIndex: 999999, backgroundColor: "#f7f7f7" }}>
      <div className="preloader d-flex align-items-center justify-content-center" style={{ width: "100%", height: "100%" }}>
        <div className="preloader-inner position-relative">
          <div className="preloader-circle"></div>
          <div className="preloader-img pere-text">
            <img src="/assets/img/logo/loder.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
