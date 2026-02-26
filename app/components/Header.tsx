import Link from "next/link";

export default function Header() {
  return (
    <header style={{
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      zIndex: 999,
      background: "transparent"
    }}>
      <div className="header-area" style={{background: "transparent"}}>
        <div className="main-header">
          <div className="header-bottom header-sticky" style={{
            background: "transparent",
            backdropFilter: "none",
            WebkitBackdropFilter: "none"
          }}>
            <div className="container-fluid">
              <div className="menu-wrapper" style={{
                justifyContent: "flex-end",
                alignItems: "center",
                width: "100%"
              }}>
                <div className="main-menu d-none d-lg-block" style={{width: "100%"}}>
                  <nav>
                    <ul id="navigation" style={{
                      display: "flex",
                      justifyContent: "flex-end",
                      alignItems: "center",
                      margin: "0",
                      padding: "0",
                      width: "100%"
                    }}>
                      <li><Link href="/">Home</Link></li>
                      <li><Link href="/about">About</Link></li>
                      <li style={{position: "relative"}}>
                        <Link href="/courses" style={{
                          cursor: "pointer",
                          color: "inherit",
                          fontSize: "20px",
                          fontWeight: "700",
                          textShadow: "0 2px 4px rgba(0, 0, 0, 0.3)",
                          transition: "color 0.3s ease",
                          textDecoration: "none"
                        }}>Courses</Link>
                        <ul className="submenu" style={{
                          position: "absolute",
                          top: "100%",
                          left: "0",
                          background: "#ffffff",
                          borderTop: "5px solid #ff6b35",
                          boxShadow: "0 4px 12px rgba(0, 0, 0, 0.15)",
                          width: "300px",
                          minWidth: "300px",
                          padding: "17px 0",
                          margin: "0",
                          listStyle: "none",
                          visibility: "hidden",
                          opacity: "0",
                          transition: "all 0.3s ease",
                          zIndex: "999"
                        }}>
                          <li style={{display: "block", width: "100%", margin: "0"}}>
                            <Link href="/courses/noorani-qaida" style={{
                              display: "block",
                              padding: "10px 20px",
                              color: "#091a23",
                              textDecoration: "none",
                              fontSize: "16px",
                              fontWeight: "600",
                              transition: "all 0.3s ease"
                            }}>Noorani Qaida</Link>
                          </li>
                          <li style={{display: "block", width: "100%", margin: "0"}}>
                            <Link href="/courses/quran-reading" style={{
                              display: "block",
                              padding: "10px 20px",
                              color: "#091a23",
                              textDecoration: "none",
                              fontSize: "16px",
                              fontWeight: "600",
                              transition: "all 0.3s ease"
                            }}>Quran Reading</Link>
                          </li>
                          <li style={{display: "block", width: "100%", margin: "0"}}>
                            <Link href="/courses/quran-memorization" style={{
                              display: "block",
                              padding: "10px 20px",
                              color: "#091a23",
                              textDecoration: "none",
                              fontSize: "16px",
                              fontWeight: "600",
                              transition: "all 0.3s ease"
                            }}>Quran Memorization (Hifz)</Link>
                          </li>
                          <li style={{display: "block", width: "100%", margin: "0"}}>
                            <Link href="/courses/tajweed" style={{
                              display: "block",
                              padding: "10px 20px",
                              color: "#091a23",
                              textDecoration: "none",
                              fontSize: "16px",
                              fontWeight: "600",
                              transition: "all 0.3s ease"
                            }}>Tajweed Course</Link>
                          </li>
                          <li style={{display: "block", width: "100%", margin: "0"}}>
                            <Link href="/courses/translation-tafseer" style={{
                              display: "block",
                              padding: "10px 20px",
                              color: "#091a23",
                              textDecoration: "none",
                              fontSize: "16px",
                              fontWeight: "600",
                              transition: "all 0.3s ease"
                            }}>Translation & Tafseer</Link>
                          </li>
                          <li style={{display: "block", width: "100%", margin: "0"}}>
                            <Link href="/courses/islamic-studies" style={{
                              display: "block",
                              padding: "10px 20px",
                              color: "#091a23",
                              textDecoration: "none",
                              fontSize: "16px",
                              fontWeight: "600",
                              transition: "all 0.3s ease"
                            }}>Islamic Studies for Kids</Link>
                          </li>
                        </ul>
                      </li>
                      <li><Link href="/instructor">Instructors</Link></li>
                      <li><Link href="/blog">Blog</Link>
                        <ul className="submenu">
                          <li><Link href="/blog">Blog</Link></li>
                          <li><Link href="/blog-details">Blog Details</Link></li>
                          <li><Link href="/elements">Element</Link></li>
                        </ul>
                      </li>
                      <li><Link href="/contact">Contact</Link></li>
                    </ul>
                  </nav>
                </div>
              </div>
              <div className="col-12">
                <div className="mobile_menu d-block d-lg-none"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
