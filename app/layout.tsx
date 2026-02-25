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
        {/* Preload critical resources for faster LCP */}
        <link rel="preload" href="/assets/img/hero/learn-quran-online-banner.jpg.jpg" as="image" fetchPriority="high" />
        <link rel="preload" href="/assets/css/bootstrap.min.css" as="style" />
        <link rel="preload" href="/assets/css/style.css" as="style" />
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        
        {/* Load critical CSS files synchronously */}
        <link rel="stylesheet" href="/assets/css/bootstrap.min.css" />
        <link rel="stylesheet" href="/assets/css/style.css" />
        
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
              z-index: 999999;
              background-color: #f7f7f7;
              pointer-events: none;
            }
            /* Ensure hero image is always visible for LCP */
            .slider-area img,
            .slider-area [data-nextjs-image],
            .slider-area picture {
              visibility: visible !important;
              opacity: 1 !important;
              display: block !important;
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
