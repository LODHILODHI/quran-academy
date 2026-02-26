import type { Metadata } from "next";
import { Poppins, Inter, Amiri } from "next/font/google";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";
import HeadLinks from "./components/HeadLinks";
import Scripts from "./components/Scripts";
import StructuredData from "./components/StructuredData";
import WhatsAppButton from "./components/WhatsAppButton";
import AsyncCSS from "./components/AsyncCSS";

// Headings Font - Poppins (Optimized: only essential weights for mobile)
const poppins = Poppins({
  variable: "--font-headings",
  subsets: ["latin"],
  weight: ["600", "700"], // Reduced from 5 to 2 weights for mobile performance
  display: "swap",
  preload: true,
});

// Body Font - Inter (Optimized: only essential weights)
const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "600"], // Reduced from 4 to 2 weights for mobile performance
  display: "swap",
  preload: true,
});

// Arabic Font - Amiri (Optimized: only regular weight)
const amiri = Amiri({
  variable: "--font-arabic",
  subsets: ["arabic", "latin"],
  weight: ["400"], // Reduced from 2 to 1 weight for mobile performance
  display: "swap",
  preload: true,
});

export const metadata: Metadata = {
  title: "Online Quran Classes for Kids | Noorani Qaida, Tajweed | Free Trial - Quran Academy",
  description: "Special Quran classes for kids! Learn Noorani Qaida, Quran reading, Tajweed, Islamic studies with Arab Sheikhs. 3 days free trial with certified tutors, Tajweed, Hifz, Tafseer, Arabic speaking.",
  keywords: [
    "online quran classes for kids", // Primary
    "quran classes for kids", // Secondary
    "learn quran online", // Secondary
    "online tajweed classes", // Secondary
    "noorani qaida online" // Related/LSI
  ],
  authors: [{ name: "Quran Academy" }],
  openGraph: {
    title: "Online Quran Classes for Kids | Noorani Qaida, Tajweed | Free Trial",
    description: "Special Quran classes for kids! Learn Noorani Qaida, Quran reading, Tajweed, Islamic studies with Arab Sheikhs. 3 days free trial with certified tutors.",
    type: "website",
    locale: "en_US",
    url: "https://quran-academy-two.vercel.app",
    siteName: "Quran Academy",
    images: [
      {
        url: "/assets/img/logo/logo.png",
        width: 1200,
        height: 630,
        alt: "Quran Academy - Online Quran Classes",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Online Quran Classes for Kids | Free Trial - Quran Academy",
    description: "Special Quran classes for kids! Learn Noorani Qaida, Quran reading, Tajweed with Arab Sheikhs. 3 days free trial.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Preload critical hero image for faster LCP - ONLY image preload (CSS already loaded synchronously) */}
        <link rel="preload" href="/assets/img/hero/learn-quran-online-banner.jpg.jpg" as="image" fetchPriority="high" />
        
        {/* Load critical CSS files synchronously - No duplicate preload needed */}
        <link rel="stylesheet" href="/assets/css/bootstrap.min.css" media="all" />
        <link rel="stylesheet" href="/assets/css/style.css" media="all" />
        
        <link rel="shortcut icon" type="image/x-icon" href="/assets/img/favicon.ico" />
        <style dangerouslySetInnerHTML={{
          __html: `
            /* Don't hide html - it prevents LCP detection */
            /* Hero section (LCP element) must be visible immediately */
            body > main .slider-area,
            body > main .slider-area *,
            .slider-area,
            .slider-area * {
              visibility: visible !important;
              opacity: 1 !important;
            }
            /* Preloader removed - no longer blocking LCP */
            /* Hero section - LCP element */
            body > main .slider-area {
              position: relative;
              z-index: 10 !important;
              /* Critical: Ensure hero is visible for LCP */
              visibility: visible !important;
              opacity: 1 !important;
            }
            /* Ensure main element doesn't block LCP */
            body > main {
              position: relative;
              z-index: 10 !important;
            }
            /* Ensure hero image is always visible for LCP - Critical for LCP detection */
            .slider-area img,
            .slider-area [data-nextjs-image],
            .slider-area picture,
            .slider-area picture img {
              visibility: visible !important;
              opacity: 1 !important;
              display: block !important;
              position: absolute !important;
              width: 100% !important;
              height: 100% !important;
              z-index: 0 !important;
            }
            /* Hero text must also be visible - override any CSS that hides it */
            .slider-area .hero__caption,
            .slider-area .hero__caption *,
            .slider-area .hero__caption h1,
            .slider-area .hero__caption h2,
            .slider-area .hero__caption p,
            .slider-area h1,
            .slider-area h2,
            .slider-area p,
            .hero__caption,
            .hero__caption h1,
            .hero__caption h2,
            .hero__caption p,
            body .slider-area .hero__caption,
            body .slider-area .hero__caption * {
              visibility: visible !important;
              opacity: 1 !important;
              display: block !important;
            }
            /* Override any CSS that hides animated elements - maximum specificity */
            body .slider-area [data-animation],
            body .slider-area [data-animation] *,
            body .hero__caption [data-animation],
            body .hero__caption [data-animation] *,
            .slider-area .hero__caption [data-animation],
            .slider-area .hero__caption [data-animation] * {
              opacity: 1 !important;
              visibility: visible !important;
              display: block !important;
            }
            /* Ensure hero text container is visible and stays in place - FIXED POSITION */
            .hero__caption {
              position: absolute !important;
              top: 50% !important;
              left: 0 !important;
              transform: translateY(-50%) !important;
              z-index: 101 !important;
              display: block !important;
              width: 100% !important;
              padding: 0 20px !important;
              will-change: auto !important;
            }
            /* Prevent any animations or transforms on hero text children */
            .hero__caption *,
            .slider-area .hero__caption *,
            .slider-area .hero__caption h1,
            .slider-area .hero__caption h2,
            .slider-area .hero__caption p {
              animation: none !important;
              transform: none !important;
              transition: none !important;
              position: relative !important;
              will-change: auto !important;
            }
            /* Prevent parallax or scroll effects on hero section */
            .slider-area,
            .slider-active,
            .single-slider {
              transform: none !important;
              will-change: auto !important;
            }
            /* Lock hero text position - prevent any movement - MAXIMUM FORCE */
            .hero__caption {
              position: absolute !important;
              top: 50% !important;
              left: 0 !important;
              transform: translateY(-50%) !important;
            }
            /* Prevent any JavaScript from moving hero text */
            body .slider-area .hero__caption {
              position: absolute !important;
              top: 50% !important;
              left: 0 !important;
              transform: translateY(-50%) !important;
            }
            /* Mobile optimizations - reduce font loading delay and improve LCP */
            @media (max-width: 768px) {
              body {
                font-display: swap;
              }
              /* Ensure hero section loads faster on mobile */
              .slider-area {
                min-height: 100vh;
                height: 100vh;
              }
              /* Critical: Ensure image loads immediately on mobile for LCP */
              .slider-area img,
              .slider-area .single-slider img {
                display: block !important;
                visibility: visible !important;
                opacity: 1 !important;
                width: 100% !important;
                height: 100% !important;
                position: absolute !important;
                top: 0 !important;
                left: 0 !important;
              }
              /* Reduce render blocking on mobile */
              body > header,
              body > footer {
                content-visibility: auto;
              }
            }
          `
        }} />
      </head>
      <body
        className={`${poppins.variable} ${inter.variable} ${amiri.variable} antialiased`}
      >
        <HeadLinks />
        <AsyncCSS />
        <StructuredData />
        {children}
        <WhatsAppButton />
        <Scripts />
        <SpeedInsights />
      </body>
    </html>
  );
}
