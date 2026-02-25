import Link from "next/link";
import Preloader from "../../components/Preloader";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Islamic Studies for Kids Online | Learn Islam - Quran Academy",
  description: "Fun and interactive Islamic Studies classes for kids online. Teach your child Quran, Hadith, duas, and Islamic values with love. 1-year comprehensive program.",
  keywords: ["islamic studies for kids", "kids islamic classes", "learn islam for kids", "islamic education kids", "kids quran classes"],
};

export default function IslamicStudies() {
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
                    <h2>Islamic Studies For Kids</h2>
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
                  <p>Fun and interactive Islamic Studies classes for kids online. Teach your child Quran, Hadith, duas, and Islamic values with love. Our engaging curriculum makes learning Islam enjoyable for children.</p>
                  <h4>Course Details</h4>
                  <ul style={{listStyle: "disc", paddingLeft: "20px"}}>
                    <li><strong>Course Duration:</strong> 1 Year</li>
                    <li><strong>Class Size:</strong> Flexible (One-on-one or Group)</li>
                    <li><strong>Session Duration:</strong> 30 Minutes</li>
                    <li><strong>Price:</strong> $45 per month</li>
                  </ul>
                  <h4>What Your Child Will Learn</h4>
                  <ul style={{listStyle: "disc", paddingLeft: "20px"}}>
                    <li>Basic Quran reading and recitation</li>
                    <li>Important Hadith and stories</li>
                    <li>Daily duas and supplications</li>
                    <li>Islamic values and manners</li>
                    <li>Prophet stories and Islamic history</li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="single-course mb-40" style={{border: "1px solid #ddd", padding: "20px", borderRadius: "8px"}}>
                  <div className="course-caption">
                    <h4>Enroll Now</h4>
                    <p>Start your child&apos;s Islamic journey!</p>
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
