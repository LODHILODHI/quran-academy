import Link from "next/link";
import Preloader from "../../components/Preloader";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Quran Translation & Tafseer Course Online | Understand Quran - Quran Academy",
  description: "Understand the Quran through translation and detailed Tafseer. Learn meanings, lessons, and deep insights with expert scholars. 1-year comprehensive course.",
  keywords: ["quran translation", "quran tafseer", "quran translation course", "learn quran meaning", "quran tafseer online"],
};

export default function TranslationTafseer() {
  return (
    <>
      <Preloader />
      <Header />
      <main>
        <div className="slider-area">
          <div className="slider-height2 d-flex align-items-center">
            <div className="container">
              <div className="row">
                <div className="col-xl-12">
                  <div className="hero-cap text-center">
                    <h2>Quran Translation & Tafseer</h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <section className="about-details section-padding30">
          <div className="container">
            <div className="row">
              <div className="col-lg-8">
                <div className="about-details-cap mb-50">
                  <h4>Course Overview</h4>
                  <p>Understand the Quran through translation and detailed Tafseer. Learn meanings, lessons, and deep insights with expert scholars. This course helps you understand the Quran beyond just reading.</p>
                  <h4>Course Details</h4>
                  <ul style={{listStyle: "disc", paddingLeft: "20px"}}>
                    <li><strong>Course Duration:</strong> 1 Year</li>
                    <li><strong>Class Size:</strong> Flexible (One-on-one or Group)</li>
                    <li><strong>Session Duration:</strong> 1 Hour</li>
                    <li><strong>Price:</strong> $45 per month</li>
                  </ul>
                  <h4>What You Will Learn</h4>
                  <ul style={{listStyle: "disc", paddingLeft: "20px"}}>
                    <li>Quran translation in your language</li>
                    <li>Detailed Tafseer (exegesis) of verses</li>
                    <li>Historical context and background</li>
                    <li>Practical lessons and applications</li>
                    <li>Understanding Quranic themes</li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="single-course mb-40" style={{border: "1px solid #ddd", padding: "20px", borderRadius: "8px"}}>
                  <div className="course-caption">
                    <h4>Enroll Now</h4>
                    <p>Understand the Quran deeply!</p>
                    <Link href="/contact" className="btn" style={{width: "100%", marginTop: "15px"}}>Start Free Trial</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
