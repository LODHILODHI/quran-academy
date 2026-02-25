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
    <>
      <style dangerouslySetInnerHTML={{
        __html: `
          @keyframes preloader-spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
          .simple-loader {
            width: 60px;
            height: 60px;
            border: 4px solid #f3f3f3;
            border-top: 4px solid #ff6b35;
            border-radius: 50%;
            animation: preloader-spin 1s linear infinite;
            margin: 0 auto;
          }
        `
      }} />
      <div id="preloader-active" style={{ position: "fixed", top: 0, left: 0, width: "100%", height: "100%", zIndex: 999999, backgroundColor: "#f7f7f7" }}>
        <div className="preloader d-flex align-items-center justify-content-center" style={{ width: "100%", height: "100%" }}>
          <div className="preloader-inner position-relative">
            <div className="simple-loader"></div>
          </div>
        </div>
      </div>
    </>
  );
}
