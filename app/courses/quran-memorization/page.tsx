import Link from "next/link";
import Preloader from "../../components/Preloader";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Quran Memorization (Hifz) Course Online | Learn Hifz - Quran Academy",
  description: "Start your Quran memorization journey with certified teachers. Online Hifz classes for kids and adults with flexible schedules worldwide. 3-year comprehensive program.",
  keywords: ["quran memorization", "hifz course online", "learn hifz", "quran hifz classes", "memorize quran online"],
};

export default function QuranMemorization() {
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
                    <h2>Quran Memorization (Hifz)</h2>
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
                  <p>Start your Quran memorization journey with certified teachers. Online Hifz classes for kids and adults with flexible schedules worldwide. Our comprehensive 3-year program helps you memorize the entire Quran with proper Tajweed.</p>
                  <h4>Course Details</h4>
                  <ul style={{listStyle: "disc", paddingLeft: "20px"}}>
                    <li><strong>Course Duration:</strong> 3 Years</li>
                    <li><strong>Class Size:</strong> Flexible (One-on-one or Group)</li>
                    <li><strong>Session Duration:</strong> 30 Minutes</li>
                    <li><strong>Price:</strong> $40 per month</li>
                  </ul>
                  <h4>What You Will Learn</h4>
                  <ul style={{listStyle: "disc", paddingLeft: "20px"}}>
                    <li>Complete Quran memorization (Hifz)</li>
                    <li>Revision techniques and strategies</li>
                    <li>Proper recitation with Tajweed</li>
                    <li>Memorization retention methods</li>
                    <li>Regular testing and evaluation</li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="single-course mb-40" style={{border: "1px solid #ddd", padding: "20px", borderRadius: "8px"}}>
                  <div className="course-caption">
                    <h4>Enroll Now</h4>
                    <p>Start your Hifz journey today!</p>
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
