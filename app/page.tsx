import Link from "next/link";
import Image from "next/image";
import Preloader from "./components/Preloader";
import Header from "./components/Header";
import Footer from "./components/Footer";
import CategoriesSection from "./components/CategoriesSection";
import TestimonialsSection from "./components/TestimonialsSection";
import HeroButton from "./components/HeroButton";
import HomepageScripts from "./components/HomepageScripts";
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
        {/* Preloader */}
        <Preloader />

        {/* Header */}
        <Header />

        <main>
          {/* Slider Area */}
          <div className="slider-area" style={{margin: 0, padding: 0}}>
            <div className="slider-active" style={{height: "100vh", margin: 0, padding: 0}}>
              <div 
                className="single-slider slider-height d-flex align-items-center"
                style={{
                  position: "relative",
                  height: "100vh",
                  minHeight: "100vh",
                  width: "100%",
                  overflow: "hidden"
                }}
              >
                {/* Hero Image with Next.js Image component for better LCP */}
                <Image
                  src="/assets/img/hero/learn-quran-online-banner.jpg.jpg"
                  alt="Learn Quran Online with Certified Tutors"
                  fill
                  priority
                  quality={75}
                  fetchPriority="high"
                  style={{
                    objectFit: "cover",
                    objectPosition: "center center"
                  }}
                  sizes="100vw"
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
                
                <div className="container" style={{position: "relative", zIndex: 2}}>
                  <div className="row align-items-center">
                    <div className="col-xl-6 col-lg-7 col-md-8">
                      <div className="hero__caption" style={{color: "#fff"}}>
                        <HeroButton />
                        <h1 
                          data-animation="fadeInLeft" 
                          data-delay=".4s"
                          style={{
                            fontSize: "60px",
                            fontWeight: "700",
                            color: "#ff6b35",
                            marginBottom: "15px",
                            lineHeight: "1.2",
                            marginTop: "0"
                          }}
                        >
                          Learn Quran Online
                        </h1>
                        <h2 
                          data-animation="fadeInLeft" 
                          data-delay=".5s"
                          style={{
                            fontSize: "60px",
                            fontWeight: "700",
                            color: "#fff",
                            marginBottom: "25px",
                            lineHeight: "1.2",
                            marginTop: "0"
                          }}
                        >
                          with Certified Tutors
                        </h2>
                        <p 
                          data-animation="fadeInLeft" 
                          data-delay=".6s"
                          style={{
                            fontSize: "24px",
                            color: "#fff",
                            marginBottom: "0",
                            lineHeight: "1.5",
                            marginTop: "0",
                            whiteSpace: "nowrap"
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
