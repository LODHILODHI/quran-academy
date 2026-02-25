import Link from "next/link";
import Preloader from "../../components/Preloader";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tajweed Course Online | Learn Quran Tajweed Rules - Quran Academy",
  description: "Learn Quran Tajweed with live practical application. Master every rule with real-time practice and expert guidance. 4-month comprehensive course.",
  keywords: ["tajweed course online", "learn tajweed", "quran tajweed rules", "online tajweed classes", "tajweed course"],
};

export default function Tajweed() {
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
                    <h2>Quran Tajweed Course</h2>
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
                  <p>Learn Quran Tajweed with live practical application. Master every rule with real-time practice and expert guidance from certified teachers. Perfect your Quran recitation with proper Tajweed rules.</p>
                  <h4>Course Details</h4>
                  <ul style={{listStyle: "disc", paddingLeft: "20px"}}>
                    <li><strong>Course Duration:</strong> 4 Months</li>
                    <li><strong>Class Size:</strong> Flexible (One-on-one or Group)</li>
                    <li><strong>Session Duration:</strong> 1 Hour</li>
                    <li><strong>Price:</strong> $40 per month</li>
                  </ul>
                  <h4>What You Will Learn</h4>
                  <ul style={{listStyle: "disc", paddingLeft: "20px"}}>
                    <li>All Tajweed rules and principles</li>
                    <li>Proper pronunciation of Arabic letters</li>
                    <li>Rules of Noon and Meem</li>
                    <li>Madd rules and application</li>
                    <li>Practical recitation with correction</li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="single-course mb-40" style={{border: "1px solid #ddd", padding: "20px", borderRadius: "8px"}}>
                  <div className="course-caption">
                    <h4>Enroll Now</h4>
                    <p>Master Tajweed today!</p>
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
