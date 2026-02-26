'use client';

import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
              <div style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                width: "100%",
                padding: "0 20px"
              }}>
                {/* Logo - Left Side */}
                <Link href="/" style={{
                  display: "flex",
                  alignItems: "center",
                  textDecoration: "none",
                  zIndex: 1000
                }}>
                  <div style={{
                    fontSize: "24px",
                    fontWeight: "700",
                    color: "#fff",
                    textShadow: "0 2px 4px rgba(0, 0, 0, 0.5)",
                    display: "flex",
                    alignItems: "center",
                    gap: "8px"
                  }}>
                    <span style={{
                      width: "40px",
                      height: "40px",
                      background: "linear-gradient(135deg, #ff6b35 0%, #f7931e 100%)",
                      borderRadius: "8px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "#fff",
                      fontSize: "20px",
                      fontWeight: "700",
                      boxShadow: "0 2px 8px rgba(0, 0, 0, 0.3)"
                    }}>Q</span>
                    <span className="logo-text">Quran Academy</span>
                  </div>
                </Link>

                {/* Desktop Menu */}
                <div className="menu-wrapper" style={{
                  justifyContent: "flex-end",
                  alignItems: "center",
                  flex: 1
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

                {/* Mobile Menu Button */}
                <button
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                  className="d-block d-lg-none"
                  style={{
                    background: "rgba(255, 255, 255, 0.2)",
                    border: "2px solid rgba(255, 255, 255, 0.3)",
                    borderRadius: "6px",
                    padding: "8px 12px",
                    cursor: "pointer",
                    display: "flex",
                    flexDirection: "column",
                    gap: "4px",
                    alignItems: "center",
                    justifyContent: "center",
                    zIndex: 1000,
                    backdropFilter: "blur(10px)",
                    WebkitBackdropFilter: "blur(10px)"
                  }}
                  aria-label="Toggle mobile menu"
                >
                  <span style={{
                    width: "24px",
                    height: "3px",
                    background: "#fff",
                    borderRadius: "2px",
                    transition: "all 0.3s ease",
                    transform: mobileMenuOpen ? "rotate(45deg) translate(5px, 5px)" : "none"
                  }}></span>
                  <span style={{
                    width: "24px",
                    height: "3px",
                    background: "#fff",
                    borderRadius: "2px",
                    transition: "all 0.3s ease",
                    opacity: mobileMenuOpen ? 0 : 1
                  }}></span>
                  <span style={{
                    width: "24px",
                    height: "3px",
                    background: "#fff",
                    borderRadius: "2px",
                    transition: "all 0.3s ease",
                    transform: mobileMenuOpen ? "rotate(-45deg) translate(7px, -6px)" : "none"
                  }}></span>
                </button>

                {/* Mobile Menu Dropdown */}
                {mobileMenuOpen && (
                  <div style={{
                    position: "fixed",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100vh",
                    background: "rgba(0, 0, 0, 0.95)",
                    zIndex: 999,
                    padding: "80px 20px 20px",
                    overflowY: "auto"
                  }}>
                    <nav>
                      <ul style={{
                        listStyle: "none",
                        padding: 0,
                        margin: 0
                      }}>
                        <li style={{marginBottom: "20px"}}>
                          <Link href="/" onClick={() => setMobileMenuOpen(false)} style={{
                            color: "#fff",
                            fontSize: "20px",
                            fontWeight: "600",
                            textDecoration: "none",
                            display: "block",
                            padding: "12px 0",
                            borderBottom: "1px solid rgba(255, 255, 255, 0.1)"
                          }}>Home</Link>
                        </li>
                        <li style={{marginBottom: "20px"}}>
                          <Link href="/about" onClick={() => setMobileMenuOpen(false)} style={{
                            color: "#fff",
                            fontSize: "20px",
                            fontWeight: "600",
                            textDecoration: "none",
                            display: "block",
                            padding: "12px 0",
                            borderBottom: "1px solid rgba(255, 255, 255, 0.1)"
                          }}>About</Link>
                        </li>
                        <li style={{marginBottom: "20px"}}>
                          <Link href="/courses" onClick={() => setMobileMenuOpen(false)} style={{
                            color: "#fff",
                            fontSize: "20px",
                            fontWeight: "600",
                            textDecoration: "none",
                            display: "block",
                            padding: "12px 0",
                            borderBottom: "1px solid rgba(255, 255, 255, 0.1)"
                          }}>Courses</Link>
                        </li>
                        <li style={{marginBottom: "20px"}}>
                          <Link href="/instructor" onClick={() => setMobileMenuOpen(false)} style={{
                            color: "#fff",
                            fontSize: "20px",
                            fontWeight: "600",
                            textDecoration: "none",
                            display: "block",
                            padding: "12px 0",
                            borderBottom: "1px solid rgba(255, 255, 255, 0.1)"
                          }}>Instructors</Link>
                        </li>
                        <li style={{marginBottom: "20px"}}>
                          <Link href="/blog" onClick={() => setMobileMenuOpen(false)} style={{
                            color: "#fff",
                            fontSize: "20px",
                            fontWeight: "600",
                            textDecoration: "none",
                            display: "block",
                            padding: "12px 0",
                            borderBottom: "1px solid rgba(255, 255, 255, 0.1)"
                          }}>Blog</Link>
                        </li>
                        <li style={{marginBottom: "20px"}}>
                          <Link href="/contact" onClick={() => setMobileMenuOpen(false)} style={{
                            color: "#fff",
                            fontSize: "20px",
                            fontWeight: "600",
                            textDecoration: "none",
                            display: "block",
                            padding: "12px 0",
                            borderBottom: "1px solid rgba(255, 255, 255, 0.1)"
                          }}>Contact</Link>
                        </li>
                      </ul>
                    </nav>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
