"use client";

import { useEffect } from "react";

export default function AsyncCSS() {
  useEffect(() => {
    // Load non-critical CSS files asynchronously
    const loadAsyncCSS = (href: string) => {
      const link = document.createElement("link");
      link.rel = "stylesheet";
      link.href = href;
      link.media = "print";
      link.onload = () => {
        link.media = "all";
      };
      document.head.appendChild(link);
    };

    // Load non-critical CSS after page load
    const nonCriticalCSS = [
      "/assets/css/owl.carousel.min.css",
      "/assets/css/slicknav.css",
      "/assets/css/flaticon.css",
      "/assets/css/gijgo.css",
      "/assets/css/animate.min.css",
      "/assets/css/magnific-popup.css",
      "/assets/css/fontawesome-all.min.css",
      "/assets/css/themify-icons.css",
      "/assets/css/slick.css",
      "/assets/css/nice-select.css",
    ];

    // Delay loading to improve initial render
    if (typeof window !== "undefined") {
      if ("requestIdleCallback" in window) {
        (window as any).requestIdleCallback(
          () => {
            nonCriticalCSS.forEach(loadAsyncCSS);
          },
          { timeout: 1000 }
        );
      } else {
        setTimeout(() => {
          nonCriticalCSS.forEach(loadAsyncCSS);
        }, 100);
      }
    }
  }, []);

  return null;
}
