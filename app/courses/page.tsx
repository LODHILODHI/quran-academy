"use client";

import Link from "next/link";
import Preloader from "../components/Preloader";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Courses() {
  const courses = [
    {
      id: 1,
      title: "Noorani Qaida For Beginners",
      slug: "noorani-qaida",
      image: "/assets/img/gallery/noorani-qaida.jpg",
      price: "$25",
      description: "Start learning Noorani Qaida online with certified teachers. Best Quran classes for beginners in USA, Europe, and Gulf countries for kids and adults.",
      duration: "6 Months",
      classSize: "Flexible",
      sessionDuration: "30 Minutes",
      teacherImage: "/assets/img/gallery/team1.png"
    },
    {
      id: 2,
      title: "Quran Reading For Beginners",
      slug: "quran-reading",
      image: "/assets/img/gallery/quran-reading.jpg",
      price: "$30",
      description: "Start Quran reading with Tajweed from certified online teachers. Perfect Quran classes for beginners and advanced learners globally.",
      duration: "1 Year",
      classSize: "Flexible",
      sessionDuration: "30 Minutes",
      teacherImage: "/assets/img/gallery/team2.png"
    },
    {
      id: 3,
      title: "Quran Memorization (Hifz)",
      slug: "quran-memorization",
      image: "/assets/img/gallery/quran-memorization.jpg",
      price: "$40",
      description: "Start your Quran memorization journey with certified teachers. Online Hifz classes for kids and adults with flexible schedules worldwide.",
      duration: "3 Years",
      classSize: "Flexible",
      sessionDuration: "30 Minutes",
      teacherImage: "/assets/img/gallery/team3.png"
    },
    {
      id: 4,
      title: "Tajweed Course",
      slug: "tajweed",
      image: "/assets/img/gallery/tajweed-course.jpg",
      price: "$35",
      description: "Learn Quran Tajweed with live practical application. Master every rule with real-time practice and expert guidance from certified teachers.",
      duration: "8 Months",
      classSize: "Flexible",
      sessionDuration: "30 Minutes",
      teacherImage: "/assets/img/gallery/team4.png"
    },
    {
      id: 5,
      title: "Translation & Tafseer",
      slug: "translation-tafseer",
      image: "/assets/img/gallery/translation-tafseer.jpg",
      price: "$45",
      description: "Understand the Quran through translation and detailed Tafseer. Learn meanings, lessons, and deep insights with expert scholars.",
      duration: "2 Years",
      classSize: "Flexible",
      sessionDuration: "30 Minutes",
      teacherImage: "/assets/img/gallery/team1.png"
    },
    {
      id: 6,
      title: "Islamic Studies for Kids",
      slug: "islamic-studies",
      image: "/assets/img/gallery/islamic-studies.jpg",
      price: "$30",
      description: "Fun and interactive Islamic Studies classes for kids online. Teach your child Quran, Hadith, duas, and Islamic values with love.",
      duration: "1 Year",
      classSize: "Flexible",
      sessionDuration: "30 Minutes",
      teacherImage: "/assets/img/gallery/team2.png"
    }
  ];

  return (
    <>
      {/* Preloader */}
      <Preloader />

      {/* Header */}
      <Header />

      <main>
        {/* Hero Start */}
        <div className="slider-area">
          <div className="slider-height2 d-flex align-items-center">
            <div className="container">
              <div className="row">
                <div className="col-xl-12">
                  <div className="hero-cap hero-cap2 text-center">
                    <h2>All Courses</h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Hero End */}

        {/* Courses Section */}
        <section className="categories-area section-padding30">
          <div className="container">
            <div className="row justify-content-sm-center">
              <div className="cl-xl-7 col-lg-8 col-md-10">
                <div className="section-tittle text-center mb-70">
                  <span>BEST ONLINE QURAN ACADEMY</span>
                  <h2>Quran Courses</h2>
                </div>
              </div>
            </div>
            <div className="row">
              {courses.map((course) => (
                <div key={course.id} className="col-lg-4 col-md-6 col-sm-6">
                  <div className="single-course mb-50" style={{
                    background: "#fff",
                    borderRadius: "8px",
                    overflow: "hidden",
                    boxShadow: "0 2px 10px rgba(0,0,0,0.1)"
                  }}>
                    <div className="course-img" style={{
                      position: "relative",
                      width: "100%",
                      height: "250px",
                      overflow: "hidden",
                      flexShrink: 0
                    }}>
                      <img
                        src={course.image}
                        alt={course.title}
                        style={{
                          width: "100%",
                          height: "100%",
                          objectFit: "cover"
                        }}
                      />
                      <span style={{
                        position: "absolute",
                        top: "15px",
                        right: "15px",
                        background: "#ffd700",
                        color: "#000",
                        padding: "8px 15px",
                        borderRadius: "8px",
                        fontWeight: "bold",
                        fontSize: "18px",
                        boxShadow: "0 2px 5px rgba(0,0,0,0.2)"
                      }}>{course.price}</span>
                    </div>
                    <div className="course-caption" style={{padding: "20px"}}>
                      <div className="course-cap-top" style={{
                        display: "flex",
                        alignItems: "center",
                        marginBottom: "10px"
                      }}>
                        <h4 style={{
                          margin: 0,
                          marginRight: "10px",
                          fontSize: "20px",
                          fontWeight: "600"
                        }}>
                          <Link
                            href={`/courses/${course.slug}`}
                            style={{
                              color: "#091a23",
                              textDecoration: "none"
                            }}
                          >
                            {course.title}
                          </Link>
                        </h4>
                        <img
                          src={course.teacherImage}
                          alt="Teacher"
                          style={{
                            width: "40px",
                            height: "40px",
                            borderRadius: "50%",
                            objectFit: "cover",
                            border: "2px solid #ff6b35"
                          }}
                        />
                      </div>
                      <p style={{
                        marginTop: "10px",
                        marginBottom: "15px",
                        fontSize: "14px",
                        color: "#666",
                        lineHeight: "1.6"
                      }}>
                        {course.description}
                      </p>
                      <div className="course-details" style={{
                        display: "flex",
                        flexWrap: "wrap",
                        gap: "15px",
                        marginTop: "15px",
                        paddingTop: "15px",
                        borderTop: "1px solid #eee"
                      }}>
                        <div style={{ flex: "1", minWidth: "100px" }}>
                          <span style={{
                            fontSize: "12px",
                            color: "#999",
                            display: "block",
                            marginBottom: "5px"
                          }}>Course</span>
                          <span style={{
                            fontSize: "14px",
                            color: "#091a23",
                            fontWeight: "600"
                          }}>{course.duration}</span>
                        </div>
                        <div style={{ flex: "1", minWidth: "100px" }}>
                          <span style={{
                            fontSize: "12px",
                            color: "#999",
                            display: "block",
                            marginBottom: "5px"
                          }}>Class Size</span>
                          <span style={{
                            fontSize: "14px",
                            color: "#091a23",
                            fontWeight: "600"
                          }}>{course.classSize}</span>
                        </div>
                        <div style={{ flex: "1", minWidth: "100px" }}>
                          <span style={{
                            fontSize: "12px",
                            color: "#999",
                            display: "block",
                            marginBottom: "5px"
                          }}>Duration</span>
                          <span style={{
                            fontSize: "14px",
                            color: "#091a23",
                            fontWeight: "600"
                          }}>{course.sessionDuration}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </>
  );
}
