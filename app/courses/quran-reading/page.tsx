import Link from "next/link";
import Preloader from "../../components/Preloader";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Quran Reading Course Online | Learn Quran with Tajweed - Quran Academy",
  description: "Start Quran reading with Tajweed from certified online teachers. Perfect Quran classes for beginners and advanced learners globally. Flexible schedules, 30-minute sessions.",
  keywords: ["quran reading online", "learn quran reading", "quran reading with tajweed", "online quran classes", "quran reading course"],
};

export default function QuranReading() {
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
                    <h2>Quran Reading For Beginners</h2>
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
                  <p>Start Quran reading with Tajweed from certified online teachers. Perfect Quran classes for beginners and advanced learners globally. Learn to read the Quran correctly with proper pronunciation and Tajweed rules.</p>
                  <h4>Course Details</h4>
                  <ul style={{listStyle: "disc", paddingLeft: "20px"}}>
                    <li><strong>Course Duration:</strong> 1 Year</li>
                    <li><strong>Class Size:</strong> Flexible (One-on-one or Group)</li>
                    <li><strong>Session Duration:</strong> 30 Minutes</li>
                    <li><strong>Price:</strong> $30 per month</li>
                  </ul>
                  <h4>What You Will Learn</h4>
                  <ul style={{listStyle: "disc", paddingLeft: "20px"}}>
                    <li>Proper Quran reading with Tajweed</li>
                    <li>Pronunciation of Arabic letters</li>
                    <li>Basic Tajweed rules</li>
                    <li>Reading fluency and accuracy</li>
                    <li>Understanding Quranic text structure</li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="single-course mb-40" style={{border: "1px solid #ddd", padding: "20px", borderRadius: "8px"}}>
                  <div className="course-caption">
                    <h4>Enroll Now</h4>
                    <p>Start your journey to learn Quran today!</p>
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
