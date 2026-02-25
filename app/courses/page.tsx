"use client";

import Link from "next/link";
import Preloader from "../components/Preloader";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useState } from "react";

export default function Courses() {
  const [activeTab, setActiveTab] = useState("nav-home");

  const courses = {
    all: [
      { id: 1, title: "Graphic Design", image: "/assets/img/gallery/popular_sub1.png" },
      { id: 2, title: "Web Development", image: "/assets/img/gallery/popular_sub2.png" },
      { id: 3, title: "Digital Marketing", image: "/assets/img/gallery/popular_sub3.png" },
      { id: 4, title: "Graphic Design", image: "/assets/img/gallery/popular_sub2.png" },
      { id: 5, title: "Web Development", image: "/assets/img/gallery/popular_sub3.png" },
      { id: 6, title: "Digital Marketing", image: "/assets/img/gallery/popular_sub1.png" },
    ],
    web: [
      { id: 1, title: "Graphic Design", image: "/assets/img/gallery/popular_sub3.png" },
      { id: 2, title: "Web Development", image: "/assets/img/gallery/popular_sub2.png" },
      { id: 3, title: "Digital Marketing", image: "/assets/img/gallery/popular_sub1.png" },
      { id: 4, title: "Graphic Design", image: "/assets/img/gallery/popular_sub2.png" },
      { id: 5, title: "Web Development", image: "/assets/img/gallery/popular_sub3.png" },
      { id: 6, title: "Digital Marketing", image: "/assets/img/gallery/popular_sub1.png" },
    ],
    graphic: [
      { id: 1, title: "Graphic Design", image: "/assets/img/gallery/popular_sub2.png" },
      { id: 2, title: "Web Development", image: "/assets/img/gallery/popular_sub1.png" },
      { id: 3, title: "Digital Marketing", image: "/assets/img/gallery/popular_sub3.png" },
      { id: 4, title: "Graphic Design", image: "/assets/img/gallery/popular_sub2.png" },
      { id: 5, title: "Web Development", image: "/assets/img/gallery/popular_sub3.png" },
      { id: 6, title: "Digital Marketing", image: "/assets/img/gallery/popular_sub1.png" },
    ],
    video: [
      { id: 1, title: "Graphic Design", image: "/assets/img/gallery/popular_sub1.png" },
      { id: 2, title: "Web Development", image: "/assets/img/gallery/popular_sub2.png" },
      { id: 3, title: "Digital Marketing", image: "/assets/img/gallery/popular_sub3.png" },
      { id: 4, title: "Graphic Design", image: "/assets/img/gallery/popular_sub2.png" },
      { id: 5, title: "Web Development", image: "/assets/img/gallery/popular_sub3.png" },
      { id: 6, title: "Digital Marketing", image: "/assets/img/gallery/popular_sub1.png" },
    ],
    language: [
      { id: 1, title: "Graphic Design", image: "/assets/img/gallery/popular_sub1.png" },
      { id: 2, title: "Web Development", image: "/assets/img/gallery/popular_sub2.png" },
      { id: 3, title: "Digital Marketing", image: "/assets/img/gallery/popular_sub3.png" },
      { id: 4, title: "Graphic Design", image: "/assets/img/gallery/popular_sub2.png" },
      { id: 5, title: "Web Development", image: "/assets/img/gallery/popular_sub3.png" },
      { id: 6, title: "Digital Marketing", image: "/assets/img/gallery/popular_sub1.png" },
    ],
  };

  const getCurrentCourses = () => {
    switch (activeTab) {
      case "nav-home":
        return courses.all;
      case "nav-profile":
        return courses.web;
      case "nav-contact":
        return courses.graphic;
      case "nav-last":
        return courses.video;
      case "nav-nav-Sport":
        return courses.language;
      default:
        return courses.all;
    }
  };

  const CourseCard = ({ course }: { course: { id: number; title: string; image: string } }) => (
    <div className="col-xl-4 col-lg-4 col-md-6">
      <div className="single-course mb-70">
        <div className="course-img">
          <img src={course.image} alt={course.title} />
        </div>
        <div className="course-caption">
          <div className="course-cap-top">
            <h4><a href="#">{course.title}</a></h4>
          </div>
          <div className="course-cap-mid d-flex justify-content-between">
            <div className="course-ratting">
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
            </div>
            <ul><li>52 Review</li></ul>
          </div>
          <div className="course-cap-bottom d-flex justify-content-between">
            <ul>
              <li><i className="ti-user"></i> 562</li>
              <li><i className="ti-heart"></i> 562</li>
            </ul>
            <span>Free</span>
          </div>
        </div>
      </div>
    </div>
  );

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

        {/* all-course Start */}
        <section className="all-course section-padding30">
          <div className="container">
            <div className="row">
              <div className="all-course-wrapper">
                {/* Heading & Nav Button */}
                <div className="row mb-15">
                  <div className="col-lg-12">
                    <div className="properties__button mb-90">
                      <nav>
                        <div className="nav nav-tabs" id="nav-tab" role="tablist">
                          <button
                            className={`nav-item nav-link ${activeTab === "nav-home" ? "active" : ""}`}
                            onClick={() => setActiveTab("nav-home")}
                            type="button"
                          >
                            All
                          </button>
                          <button
                            className={`nav-item nav-link ${activeTab === "nav-profile" ? "active" : ""}`}
                            onClick={() => setActiveTab("nav-profile")}
                            type="button"
                          >
                            Web
                          </button>
                          <button
                            className={`nav-item nav-link ${activeTab === "nav-contact" ? "active" : ""}`}
                            onClick={() => setActiveTab("nav-contact")}
                            type="button"
                          >
                            Graphic
                          </button>
                          <button
                            className={`nav-item nav-link ${activeTab === "nav-last" ? "active" : ""}`}
                            onClick={() => setActiveTab("nav-last")}
                            type="button"
                          >
                            Video
                          </button>
                          <button
                            className={`nav-item nav-link ${activeTab === "nav-nav-Sport" ? "active" : ""}`}
                            onClick={() => setActiveTab("nav-nav-Sport")}
                            type="button"
                          >
                            Language
                          </button>
                        </div>
                      </nav>
                    </div>
                  </div>
                </div>

                {/* Tab content */}
                <div className="row">
                  <div className="col-12">
                    <div className="tab-content" id="nav-tabContent">
                      <div className={`tab-pane fade ${activeTab === "nav-home" ? "show active" : ""}`}>
                        <div className="row">
                          {getCurrentCourses().map((course) => (
                            <CourseCard key={course.id} course={course} />
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* all-course End */}
      </main>

      {/* Footer */}
      <Footer />
    </>
  );
}
