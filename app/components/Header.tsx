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
                      <li><Link href="/courses">Courses</Link>
                        <ul className="submenu">
                          <li><Link href="/courses/noorani-qaida">Noorani Qaida</Link></li>
                          <li><Link href="/courses/quran-reading">Quran Reading</Link></li>
                          <li><Link href="/courses/quran-memorization">Quran Memorization (Hifz)</Link></li>
                          <li><Link href="/courses/tajweed">Tajweed Course</Link></li>
                          <li><Link href="/courses/translation-tafseer">Translation & Tafseer</Link></li>
                          <li><Link href="/courses/islamic-studies">Islamic Studies for Kids</Link></li>
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
