import Link from "next/link";
import Image from "next/image";

export default function CategoriesSection() {
  return (
    <div className="categories-area section-padding30">
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
          <div className="col-lg-4 col-md-6 col-sm-6">
            <div className="single-course mb-50" style={{background: "#fff", borderRadius: "8px", overflow: "hidden", boxShadow: "0 2px 10px rgba(0,0,0,0.1)"}}>
              <div className="course-img" style={{position: "relative", width: "100%", height: "250px", overflow: "hidden"}}>
                <Image 
                  src="/assets/img/gallery/noorani-qaida.jpg" 
                  alt="Noorani Qaida Course" 
                  fill
                  quality={70}
                  loading="lazy"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  style={{objectFit: "cover"}}
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
                }}>$25</span>
              </div>
              <div className="course-caption" style={{padding: "20px"}}>
                <div className="course-cap-top" style={{display: "flex", alignItems: "center", marginBottom: "10px"}}>
                  <h4 style={{margin: 0, marginRight: "10px", fontSize: "20px", fontWeight: "600"}}>
                    <Link href="/courses/noorani-qaida" style={{color: "#091a23", textDecoration: "none"}}>Noorani Qaida For Beginners</Link>
                  </h4>
                  <img 
                    src="/assets/img/gallery/team1.png" 
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
                <p style={{marginTop: "10px", marginBottom: "15px", fontSize: "14px", color: "#666", lineHeight: "1.6"}}>
                  Start learning Noorani Qaida online with certified teachers. Best Quran classes for beginners in USA, Europe, and Gulf countries for kids and adults.
                </p>
                <div className="course-details" style={{display: "flex", flexWrap: "wrap", gap: "15px", marginTop: "15px", paddingTop: "15px", borderTop: "1px solid #eee"}}>
                  <div style={{flex: "1", minWidth: "100px"}}>
                    <span style={{fontSize: "12px", color: "#999", display: "block", marginBottom: "5px"}}>Course</span>
                    <span style={{fontSize: "14px", color: "#091a23", fontWeight: "600"}}>6 Months</span>
                  </div>
                  <div style={{flex: "1", minWidth: "100px"}}>
                    <span style={{fontSize: "12px", color: "#999", display: "block", marginBottom: "5px"}}>Class Size</span>
                    <span style={{fontSize: "14px", color: "#091a23", fontWeight: "600"}}>Flexible</span>
                  </div>
                  <div style={{flex: "1", minWidth: "100px"}}>
                    <span style={{fontSize: "12px", color: "#999", display: "block", marginBottom: "5px"}}>Duration</span>
                    <span style={{fontSize: "14px", color: "#091a23", fontWeight: "600"}}>30 Minutes</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-6">
            <div className="single-course mb-50" style={{background: "#fff", borderRadius: "8px", overflow: "hidden", boxShadow: "0 2px 10px rgba(0,0,0,0.1)"}}>
              <div className="course-img" style={{position: "relative", width: "100%", height: "250px", overflow: "hidden"}}>
                <Image 
                  src="/assets/img/gallery/quran-reading.jpg" 
                  alt="Quran Reading Course" 
                  fill
                  quality={70}
                  loading="lazy"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  style={{objectFit: "cover"}}
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
                }}>$30</span>
              </div>
              <div className="course-caption" style={{padding: "20px"}}>
                <div className="course-cap-top" style={{display: "flex", alignItems: "center", marginBottom: "10px"}}>
                  <h4 style={{margin: 0, marginRight: "10px", fontSize: "20px", fontWeight: "600"}}>
                    <Link href="/courses/quran-reading" style={{color: "#091a23", textDecoration: "none"}}>Quran Reading For Beginners</Link>
                  </h4>
                  <Image 
                    src="/assets/img/gallery/team2.png" 
                    alt="Teacher" 
                    width={40}
                    height={40}
                    style={{
                      borderRadius: "50%",
                      objectFit: "cover",
                      border: "2px solid #ff6b35"
                    }}
                  />
                </div>
                <p style={{marginTop: "10px", marginBottom: "15px", fontSize: "14px", color: "#666", lineHeight: "1.6"}}>
                  Start Quran reading with Tajweed from certified online teachers. Perfect Quran classes for beginners and advanced learners globally.
                </p>
                <div className="course-details" style={{display: "flex", flexWrap: "wrap", gap: "15px", marginTop: "15px", paddingTop: "15px", borderTop: "1px solid #eee"}}>
                  <div style={{flex: "1", minWidth: "100px"}}>
                    <span style={{fontSize: "12px", color: "#999", display: "block", marginBottom: "5px"}}>Course</span>
                    <span style={{fontSize: "14px", color: "#091a23", fontWeight: "600"}}>1 Year</span>
                  </div>
                  <div style={{flex: "1", minWidth: "100px"}}>
                    <span style={{fontSize: "12px", color: "#999", display: "block", marginBottom: "5px"}}>Class Size</span>
                    <span style={{fontSize: "14px", color: "#091a23", fontWeight: "600"}}>Flexible</span>
                  </div>
                  <div style={{flex: "1", minWidth: "100px"}}>
                    <span style={{fontSize: "12px", color: "#999", display: "block", marginBottom: "5px"}}>Duration</span>
                    <span style={{fontSize: "14px", color: "#091a23", fontWeight: "600"}}>30 Minutes</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-6">
            <div className="single-course mb-50" style={{background: "#fff", borderRadius: "8px", overflow: "hidden", boxShadow: "0 2px 10px rgba(0,0,0,0.1)"}}>
              <div className="course-img" style={{position: "relative", width: "100%", height: "250px", overflow: "hidden"}}>
                <Image 
                  src="/assets/img/gallery/quran-memorization.jpg" 
                  alt="Quran Memorization Course" 
                  fill
                  quality={70}
                  loading="lazy"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  style={{objectFit: "cover"}}
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
                }}>$40</span>
              </div>
              <div className="course-caption" style={{padding: "20px"}}>
                <div className="course-cap-top" style={{display: "flex", alignItems: "center", marginBottom: "10px"}}>
                  <h4 style={{margin: 0, marginRight: "10px", fontSize: "20px", fontWeight: "600"}}>
                    <Link href="/courses/quran-memorization" style={{color: "#091a23", textDecoration: "none"}}>Quran Memorization (Hifz)</Link>
                  </h4>
                  <Image 
                    src="/assets/img/gallery/team3.png" 
                    alt="Teacher" 
                    width={40}
                    height={40}
                    style={{
                      borderRadius: "50%",
                      objectFit: "cover",
                      border: "2px solid #ff6b35"
                    }}
                  />
                </div>
                <p style={{marginTop: "10px", marginBottom: "15px", fontSize: "14px", color: "#666", lineHeight: "1.6"}}>
                  Start your Quran memorization journey with certified teachers. Online Hifz classes for kids and adults with flexible schedules worldwide.
                </p>
                <div className="course-details" style={{display: "flex", flexWrap: "wrap", gap: "15px", marginTop: "15px", paddingTop: "15px", borderTop: "1px solid #eee"}}>
                  <div style={{flex: "1", minWidth: "100px"}}>
                    <span style={{fontSize: "12px", color: "#999", display: "block", marginBottom: "5px"}}>Course</span>
                    <span style={{fontSize: "14px", color: "#091a23", fontWeight: "600"}}>3 Year</span>
                  </div>
                  <div style={{flex: "1", minWidth: "100px"}}>
                    <span style={{fontSize: "12px", color: "#999", display: "block", marginBottom: "5px"}}>Class Size</span>
                    <span style={{fontSize: "14px", color: "#091a23", fontWeight: "600"}}>Flexible</span>
                  </div>
                  <div style={{flex: "1", minWidth: "100px"}}>
                    <span style={{fontSize: "12px", color: "#999", display: "block", marginBottom: "5px"}}>Duration</span>
                    <span style={{fontSize: "14px", color: "#091a23", fontWeight: "600"}}>30 Minutes</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-6">
            <div className="single-course mb-50" style={{background: "#fff", borderRadius: "8px", overflow: "hidden", boxShadow: "0 2px 10px rgba(0,0,0,0.1)"}}>
              <div className="course-img" style={{position: "relative", width: "100%", height: "250px", overflow: "hidden"}}>
                <Image 
                  src="/assets/img/gallery/tajweed-course.jpg" 
                  alt="Tajweed Course" 
                  fill
                  quality={70}
                  loading="lazy"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  style={{objectFit: "cover"}}
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
                }}>$35</span>
              </div>
              <div className="course-caption" style={{padding: "20px"}}>
                <div className="course-cap-top" style={{display: "flex", alignItems: "center", marginBottom: "10px"}}>
                  <h4 style={{margin: 0, marginRight: "10px", fontSize: "20px", fontWeight: "600"}}>
                    <Link href="/courses/tajweed" style={{color: "#091a23", textDecoration: "none"}}>Tajweed Course</Link>
                  </h4>
                  <Image 
                    src="/assets/img/gallery/team4.png" 
                    alt="Teacher" 
                    width={40}
                    height={40}
                    style={{
                      borderRadius: "50%",
                      objectFit: "cover",
                      border: "2px solid #ff6b35"
                    }}
                  />
                </div>
                <p style={{marginTop: "10px", marginBottom: "15px", fontSize: "14px", color: "#666", lineHeight: "1.6"}}>
                  Learn Quran Tajweed with live practical application. Master every rule with real-time practice and expert guidance from certified teachers.
                </p>
                <div className="course-details" style={{display: "flex", flexWrap: "wrap", gap: "15px", marginTop: "15px", paddingTop: "15px", borderTop: "1px solid #eee"}}>
                  <div style={{flex: "1", minWidth: "100px"}}>
                    <span style={{fontSize: "12px", color: "#999", display: "block", marginBottom: "5px"}}>Course</span>
                    <span style={{fontSize: "14px", color: "#091a23", fontWeight: "600"}}>8 Months</span>
                  </div>
                  <div style={{flex: "1", minWidth: "100px"}}>
                    <span style={{fontSize: "12px", color: "#999", display: "block", marginBottom: "5px"}}>Class Size</span>
                    <span style={{fontSize: "14px", color: "#091a23", fontWeight: "600"}}>Flexible</span>
                  </div>
                  <div style={{flex: "1", minWidth: "100px"}}>
                    <span style={{fontSize: "12px", color: "#999", display: "block", marginBottom: "5px"}}>Duration</span>
                    <span style={{fontSize: "14px", color: "#091a23", fontWeight: "600"}}>30 Minutes</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-6">
            <div className="single-course mb-50" style={{background: "#fff", borderRadius: "8px", overflow: "hidden", boxShadow: "0 2px 10px rgba(0,0,0,0.1)"}}>
              <div className="course-img" style={{position: "relative", width: "100%", height: "250px", overflow: "hidden"}}>
                <Image 
                  src="/assets/img/gallery/translation-tafseer.jpg" 
                  alt="Translation & Tafseer Course" 
                  fill
                  quality={70}
                  loading="lazy"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  style={{objectFit: "cover"}}
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
                }}>$45</span>
              </div>
              <div className="course-caption" style={{padding: "20px"}}>
                <div className="course-cap-top" style={{display: "flex", alignItems: "center", marginBottom: "10px"}}>
                  <h4 style={{margin: 0, marginRight: "10px", fontSize: "20px", fontWeight: "600"}}>
                    <Link href="/courses/translation-tafseer" style={{color: "#091a23", textDecoration: "none"}}>Translation & Tafseer</Link>
                  </h4>
                  <Image 
                    src="/assets/img/gallery/team1.png" 
                    alt="Teacher" 
                    width={40}
                    height={40}
                    style={{
                      borderRadius: "50%",
                      objectFit: "cover",
                      border: "2px solid #ff6b35"
                    }}
                  />
                </div>
                <p style={{marginTop: "10px", marginBottom: "15px", fontSize: "14px", color: "#666", lineHeight: "1.6"}}>
                  Understand the Quran through translation and detailed Tafseer. Learn meanings, lessons, and deep insights with expert scholars.
                </p>
                <div className="course-details" style={{display: "flex", flexWrap: "wrap", gap: "15px", marginTop: "15px", paddingTop: "15px", borderTop: "1px solid #eee"}}>
                  <div style={{flex: "1", minWidth: "100px"}}>
                    <span style={{fontSize: "12px", color: "#999", display: "block", marginBottom: "5px"}}>Course</span>
                    <span style={{fontSize: "14px", color: "#091a23", fontWeight: "600"}}>2 Years</span>
                  </div>
                  <div style={{flex: "1", minWidth: "100px"}}>
                    <span style={{fontSize: "12px", color: "#999", display: "block", marginBottom: "5px"}}>Class Size</span>
                    <span style={{fontSize: "14px", color: "#091a23", fontWeight: "600"}}>Flexible</span>
                  </div>
                  <div style={{flex: "1", minWidth: "100px"}}>
                    <span style={{fontSize: "12px", color: "#999", display: "block", marginBottom: "5px"}}>Duration</span>
                    <span style={{fontSize: "14px", color: "#091a23", fontWeight: "600"}}>30 Minutes</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-6">
            <div className="single-course mb-50" style={{background: "#fff", borderRadius: "8px", overflow: "hidden", boxShadow: "0 2px 10px rgba(0,0,0,0.1)"}}>
              <div className="course-img" style={{position: "relative", width: "100%", height: "250px", overflow: "hidden"}}>
                <Image 
                  src="/assets/img/gallery/islamic-studies.jpg" 
                  alt="Islamic Studies Course" 
                  fill
                  quality={70}
                  loading="lazy"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  style={{objectFit: "cover"}}
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
                }}>$30</span>
              </div>
              <div className="course-caption" style={{padding: "20px"}}>
                <div className="course-cap-top" style={{display: "flex", alignItems: "center", marginBottom: "10px"}}>
                  <h4 style={{margin: 0, marginRight: "10px", fontSize: "20px", fontWeight: "600"}}>
                    <Link href="/courses/islamic-studies" style={{color: "#091a23", textDecoration: "none"}}>Islamic Studies for Kids</Link>
                  </h4>
                  <Image 
                    src="/assets/img/gallery/team2.png" 
                    alt="Teacher" 
                    width={40}
                    height={40}
                    style={{
                      borderRadius: "50%",
                      objectFit: "cover",
                      border: "2px solid #ff6b35"
                    }}
                  />
                </div>
                <p style={{marginTop: "10px", marginBottom: "15px", fontSize: "14px", color: "#666", lineHeight: "1.6"}}>
                  Fun and interactive Islamic Studies classes for kids online. Teach your child Quran, Hadith, duas, and Islamic values with love.
                </p>
                <div className="course-details" style={{display: "flex", flexWrap: "wrap", gap: "15px", marginTop: "15px", paddingTop: "15px", borderTop: "1px solid #eee"}}>
                  <div style={{flex: "1", minWidth: "100px"}}>
                    <span style={{fontSize: "12px", color: "#999", display: "block", marginBottom: "5px"}}>Course</span>
                    <span style={{fontSize: "14px", color: "#091a23", fontWeight: "600"}}>1 Year</span>
                  </div>
                  <div style={{flex: "1", minWidth: "100px"}}>
                    <span style={{fontSize: "12px", color: "#999", display: "block", marginBottom: "5px"}}>Class Size</span>
                    <span style={{fontSize: "14px", color: "#091a23", fontWeight: "600"}}>Flexible</span>
                  </div>
                  <div style={{flex: "1", minWidth: "100px"}}>
                    <span style={{fontSize: "12px", color: "#999", display: "block", marginBottom: "5px"}}>Duration</span>
                    <span style={{fontSize: "14px", color: "#091a23", fontWeight: "600"}}>30 Minutes</span>
                  </div>
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
