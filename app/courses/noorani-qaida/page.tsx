import Link from "next/link";
import Preloader from "../../components/Preloader";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Noorani Qaida Course Online | Learn Quran Basics - Quran Academy",
  description: "Start learning Noorani Qaida online with certified teachers. Best Quran classes for beginners in USA, Europe, and worldwide for kids and adults. Flexible schedules, 30-minute sessions.",
  keywords: ["noorani qaida online", "learn noorani qaida", "quran basics for beginners", "quran classes for kids", "quran classes for adults"],
};

export default function NooraniQaida() {
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
                    <h2>Noorani Qaida For Beginners</h2>
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
                  <p>Start learning Noorani Qaida online with certified teachers. This is the best Quran course for beginners, designed for kids and adults in USA, Europe, and Gulf countries. Our flexible schedule allows you to learn at your own pace.</p>
                  <h4>Course Details</h4>
                  <ul style={{listStyle: "disc", paddingLeft: "20px"}}>
                    <li><strong>Course Duration:</strong> 6 Months</li>
                    <li><strong>Class Size:</strong> Flexible (One-on-one or Group)</li>
                    <li><strong>Session Duration:</strong> 30 Minutes</li>
                    <li><strong>Price:</strong> $25 per month</li>
                  </ul>
                  <h4>What You Will Learn</h4>
                  <ul style={{listStyle: "disc", paddingLeft: "20px"}}>
                    <li>Arabic alphabet recognition</li>
                    <li>Basic pronunciation rules</li>
                    <li>Connecting letters</li>
                    <li>Reading simple words and sentences</li>
                    <li>Foundation for Quran reading</li>
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
