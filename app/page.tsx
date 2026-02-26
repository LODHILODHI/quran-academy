import Link from "next/link";
import Preloader from "./components/Preloader";
import Header from "./components/Header";
import Footer from "./components/Footer";
import CategoriesSection from "./components/CategoriesSection";
import TestimonialsSection from "./components/TestimonialsSection";
import HeroButton from "./components/HeroButton";
import HomepageScripts from "./components/HomepageScripts";
import HeroTextLock from "./components/HeroTextLock";
import type { Metadata } from "next";

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
    openGraph: {
      title: "Online Quran Classes for Kids | Noorani Qaida, Tajweed | Free Trial",
      description: "Special Quran classes for kids! Learn Noorani Qaida, Quran reading, Tajweed, Islamic studies with Arab Sheikhs. 3 days free trial with certified tutors.",
      type: "website",
      locale: "en_US",
    },
    twitter: {
      card: "summary_large_image",
      title: "Online Quran Classes for Kids | Free Trial - Quran Academy",
      description: "Special Quran classes for kids! Learn Noorani Qaida, Quran reading, Tajweed with Arab Sheikhs. 3 days free trial.",
    },
  };

  export default function Home() {
    return (
      <>
        {/* Lock hero text position - prevent scroll movement */}
        <HeroTextLock />
        
        {/* Preloader */}
        <Preloader />

        {/* Header */}
        <Header />

        <main>
          {/* Slider Area - LCP Element */}
          <div className="slider-area" style={{margin: 0, padding: 0, position: "relative", transform: "none", minHeight: "100vh"}}>
            <div className="slider-active" style={{height: "100vh", margin: 0, padding: 0, position: "relative", transform: "none", minHeight: "100vh"}}>
              <div 
                className="single-slider slider-height d-flex align-items-center"
                style={{
                  position: "relative",
                  height: "100vh",
                  minHeight: "100vh",
                  width: "100%",
                  overflow: "hidden",
                  zIndex: 10,
                  willChange: "auto",
                  transform: "none",
                  top: 0,
                  left: 0
                }}
              >
                {/* Hero Image - Using regular img tag for better LCP detection */}
                <img
                  src="/assets/img/hero/learn-quran-online-banner.jpg.jpg"
                  alt="Learn Quran Online with Certified Tutors"
                  width={1920}
                  height={1080}
                  fetchPriority="high"
                  loading="eager"
                  decoding="async"
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    objectPosition: "center center",
                    zIndex: 0,
                    display: "block"
                  }}
                />
                {/* Dark overlay for better text readability */}
                <div style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  backgroundColor: "rgba(0, 0, 0, 0.4)",
                  zIndex: 1
                }}></div>
                
                {/* Hero Text - Fixed Position */}
                <div className="hero__caption" style={{
                  color: "#fff", 
                  opacity: 1, 
                  visibility: "visible", 
                  position: "absolute", 
                  top: "50%",
                  left: "0",
                  transform: "translateY(-50%)",
                  zIndex: 101, 
                  display: "block",
                  width: "100%",
                  padding: "0 20px",
                  willChange: "auto",
                  pointerEvents: "none"
                }}>
                  <div className="container" style={{position: "relative", zIndex: 100, width: "100%", pointerEvents: "auto"}}>
                    <div className="row align-items-center">
                      <div className="col-xl-6 col-lg-7 col-md-8">
                        <HeroButton />
                        <h1 
                          style={{
                            fontSize: "clamp(28px, 8vw, 60px)",
                            fontWeight: "700",
                            color: "#ff6b35",
                            marginBottom: "15px",
                            lineHeight: "1.2",
                            marginTop: "0",
                            opacity: 1,
                            visibility: "visible",
                            position: "relative",
                            transform: "none",
                            animation: "none"
                          }}
                        >
                          Learn Quran Online
                        </h1>
                        <h2 
                          style={{
                            fontSize: "clamp(28px, 8vw, 60px)",
                            fontWeight: "700",
                            color: "#fff",
                            marginBottom: "25px",
                            lineHeight: "1.2",
                            marginTop: "0",
                            opacity: 1,
                            visibility: "visible",
                            position: "relative",
                            transform: "none",
                            animation: "none"
                          }}
                        >
                          with Certified Tutors
                        </h2>
                        <p 
                          style={{
                            fontSize: "clamp(16px, 4vw, 24px)",
                            color: "#fff",
                            marginBottom: "0",
                            lineHeight: "1.5",
                            marginTop: "0",
                            whiteSpace: "nowrap",
                            opacity: 1,
                            visibility: "visible",
                            position: "relative",
                            transform: "none",
                            animation: "none"
                          }}
                        >
                          Quran Classes for Kids & Adults Worldwide
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Categories Area */}
          <CategoriesSection />

          {/* Testimonial */}
          <TestimonialsSection />
        </main>

        {/* Footer */}
        <Footer />
        
        {/* Homepage-specific optimized scripts */}
        <HomepageScripts />
      </>
    );
  }
