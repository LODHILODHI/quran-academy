import Link from "next/link";

export default function PopularCoursesSection() {
  return (
    <div className="popular-course section-padding30">
      <div className="container">
        <div className="row justify-content-sm-center">
          <div className="cl-xl-7 col-lg-8 col-md-10">
            <div className="section-tittle text-center mb-70">
              <span>Best Online Quran Academy</span>
              <h2>Quran Courses</h2>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-xl-4 col-lg-4 col-md-6">
            <div className="single-course mb-40">
              <div className="course-img" style={{position: "relative"}}>
                <img src="/assets/img/gallery/popular_sub1.png" alt="Noorani Qaida Course" />
                <span style={{
                  position: "absolute",
                  top: "15px",
                  right: "15px",
                  background: "#ff6b35",
                  color: "white",
                  padding: "8px 15px",
                  borderRadius: "5px",
                  fontWeight: "bold",
                  fontSize: "18px"
                }}>$25</span>
              </div>
              <div className="course-caption">
                <div className="course-cap-top">
                  <h4><Link href="/courses/noorani-qaida">Noorani Qaida For Beginners</Link></h4>
                </div>
                <p style={{marginTop: "10px", marginBottom: "15px", fontSize: "14px", color: "#666"}}>Start learning Noorani Qaida online with certified teachers. Best Quran classes for beginners in USA, Europe, and worldwide for kids and adults.</p>
                <div className="course-cap-bottom d-flex justify-content-between" style={{marginTop: "15px"}}>
                  <ul style={{listStyle: "none", padding: 0, margin: 0}}>
                    <li style={{display: "inline-block", marginRight: "15px", fontSize: "14px"}}><i className="ti-time"></i> 6 Months</li>
                    <li style={{display: "inline-block", fontSize: "14px"}}><i className="ti-user"></i> Flexible</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-lg-4 col-md-6">
            <div className="single-course mb-40">
              <div className="course-img" style={{position: "relative"}}>
                <img src="/assets/img/gallery/popular_sub2.png" alt="Quran Reading Course" />
                <span style={{
                  position: "absolute",
                  top: "15px",
                  right: "15px",
                  background: "#ff6b35",
                  color: "white",
                  padding: "8px 15px",
                  borderRadius: "5px",
                  fontWeight: "bold",
                  fontSize: "18px"
                }}>$30</span>
              </div>
              <div className="course-caption">
                <div className="course-cap-top">
                  <h4><Link href="/courses/quran-reading">Quran Reading For Beginners</Link></h4>
                </div>
                <p style={{marginTop: "10px", marginBottom: "15px", fontSize: "14px", color: "#666"}}>Start Quran reading with Tajweed from certified online teachers. Perfect Quran classes for beginners and advanced learners globally.</p>
                <div className="course-cap-bottom d-flex justify-content-between" style={{marginTop: "15px"}}>
                  <ul style={{listStyle: "none", padding: 0, margin: 0}}>
                    <li style={{display: "inline-block", marginRight: "15px", fontSize: "14px"}}><i className="ti-time"></i> 1 Year</li>
                    <li style={{display: "inline-block", fontSize: "14px"}}><i className="ti-user"></i> Flexible</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-lg-4 col-md-6">
            <div className="single-course mb-40">
              <div className="course-img" style={{position: "relative"}}>
                <img src="/assets/img/gallery/popular_sub3.png" alt="Quran Memorization Course" />
                <span style={{
                  position: "absolute",
                  top: "15px",
                  right: "15px",
                  background: "#ff6b35",
                  color: "white",
                  padding: "8px 15px",
                  borderRadius: "5px",
                  fontWeight: "bold",
                  fontSize: "18px"
                }}>$40</span>
              </div>
              <div className="course-caption">
                <div className="course-cap-top">
                  <h4><Link href="/courses/quran-memorization">Quran Memorization (Hifz)</Link></h4>
                </div>
                <p style={{marginTop: "10px", marginBottom: "15px", fontSize: "14px", color: "#666"}}>Start your Quran memorization journey with certified teachers. Online Hifz classes for kids and adults with flexible schedules worldwide.</p>
                <div className="course-cap-bottom d-flex justify-content-between" style={{marginTop: "15px"}}>
                  <ul style={{listStyle: "none", padding: 0, margin: 0}}>
                    <li style={{display: "inline-block", marginRight: "15px", fontSize: "14px"}}><i className="ti-time"></i> 3 Years</li>
                    <li style={{display: "inline-block", fontSize: "14px"}}><i className="ti-user"></i> Flexible</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <div className="browse-btn2 text-center mt-50">
              <Link href="/courses" className="btn">Find More Courses</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
