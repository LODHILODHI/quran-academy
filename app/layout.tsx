import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import HeadLinks from "./components/HeadLinks";
import Scripts from "./components/Scripts";
import StructuredData from "./components/StructuredData";
import WhatsAppButton from "./components/WhatsAppButton";
import AsyncCSS from "./components/AsyncCSS";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
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
        {/* Preload critical resources for faster LCP - Mobile optimized */}
        <link rel="preload" href="/assets/img/hero/learn-quran-online-banner.jpg.jpg" as="image" fetchPriority="high" />
        <link rel="preload" href="/assets/css/bootstrap.min.css" as="style" />
        <link rel="preload" href="/assets/css/style.css" as="style" />
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        
        {/* Load critical CSS files synchronously - Mobile optimized with media queries */}
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
            /* Only hide non-critical content */
            body > header,
            body > footer {
              opacity: 0;
              transition: opacity 0.3s ease;
            }
            body.preloader-hidden > header,
            body.preloader-hidden > footer {
              opacity: 1;
            }
            #preloader-active {
              position: fixed;
              top: 0;
              left: 0;
              width: 100%;
              height: 100%;
              z-index: 1;
              background-color: #f7f7f7;
              pointer-events: none;
            }
            /* Hero section MUST be above preloader for LCP detection */
            body > main .slider-area {
              position: relative;
              z-index: 10 !important;
            }
            /* Ensure hero image is always visible for LCP */
            .slider-area img,
            .slider-area [data-nextjs-image],
            .slider-area picture,
            .slider-area .single-slider {
              visibility: visible !important;
              opacity: 1 !important;
              display: block !important;
              position: relative;
              z-index: 10 !important;
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
            /* Mobile optimizations - reduce font loading delay */
            @media (max-width: 768px) {
              body {
                font-display: swap;
              }
              /* Ensure hero section loads faster on mobile */
              .slider-area {
                min-height: 100vh;
                height: 100vh;
              }
            }
          `
        }} />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <HeadLinks />
        <AsyncCSS />
        <StructuredData />
        {children}
        <WhatsAppButton />
        <Scripts />
      </body>
    </html>
  );
}
