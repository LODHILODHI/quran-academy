'use client';

import { useState } from "react";
import Link from "next/link";
import Preloader from "../components/Preloader";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const phoneNumber = '923285285744';
    const message = encodeURIComponent(
      `Hello! I'm interested in learning Quran online.\n\n` +
      `Name: ${formData.name}\n` +
      `Email: ${formData.email}\n` +
      `Phone: ${formData.phone}\n\n` +
      `Please provide me with more information.`
    );
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
    
    window.open(whatsappUrl, '_blank');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };
  return (
    <>
      {/* Preloader */}
      <Preloader />

      {/* Header */}
      <Header />

      <main>
        {/* Breadcrumb Area */}
        <div className="slider-area">
          <div className="slider-height2 d-flex align-items-center">
            <div className="container">
              <div className="row">
                <div className="col-xl-12">
                  <div className="hero-cap text-center">
                    <h2>Contact Us</h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Content Area */}
        <div className="contact-section section-padding30" style={{background: "#f5f5f5", minHeight: "60vh"}}>
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-8 col-md-10">
                <div className="contact-form" style={{
                  background: "#fff",
                  padding: "50px 40px",
                  borderRadius: "15px",
                  boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
                  marginTop: "30px"
                }}>
                  <h2 style={{
                    textAlign: "center",
                    marginBottom: "40px",
                    fontSize: "32px",
                    fontWeight: "700",
                    color: "#333"
                  }}>Contact Us</h2>
                  <form id="contact-form" onSubmit={handleSubmit}>
                    <div style={{marginBottom: "25px"}}>
                      <label htmlFor="name" style={{
                        display: "block",
                        marginBottom: "10px",
                        fontSize: "15px",
                        fontWeight: "600",
                        color: "#333"
                      }}>Name</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your Name"
                        required
                        style={{
                          width: "100%",
                          padding: "14px 18px",
                          border: "1px solid #ddd",
                          borderRadius: "8px",
                          fontSize: "16px",
                          outline: "none",
                          transition: "border-color 0.3s",
                          boxSizing: "border-box"
                        }}
                        onFocus={(e) => e.currentTarget.style.borderColor = "#ff6b35"}
                        onBlur={(e) => e.currentTarget.style.borderColor = "#ddd"}
                      />
                    </div>
                    <div style={{marginBottom: "25px"}}>
                      <label htmlFor="email" style={{
                        display: "block",
                        marginBottom: "10px",
                        fontSize: "15px",
                        fontWeight: "600",
                        color: "#333"
                      }}>Email Address</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Your Email Address"
                        required
                        style={{
                          width: "100%",
                          padding: "14px 18px",
                          border: "1px solid #ddd",
                          borderRadius: "8px",
                          fontSize: "16px",
                          outline: "none",
                          transition: "border-color 0.3s",
                          boxSizing: "border-box"
                        }}
                        onFocus={(e) => e.currentTarget.style.borderColor = "#ff6b35"}
                        onBlur={(e) => e.currentTarget.style.borderColor = "#ddd"}
                      />
                    </div>
                    <div style={{marginBottom: "35px"}}>
                      <label htmlFor="phone" style={{
                        display: "block",
                        marginBottom: "10px",
                        fontSize: "15px",
                        fontWeight: "600",
                        color: "#333"
                      }}>Phone Number</label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="Your Phone Number"
                        required
                        style={{
                          width: "100%",
                          padding: "14px 18px",
                          border: "1px solid #ddd",
                          borderRadius: "8px",
                          fontSize: "16px",
                          outline: "none",
                          transition: "border-color 0.3s",
                          boxSizing: "border-box"
                        }}
                        onFocus={(e) => e.currentTarget.style.borderColor = "#ff6b35"}
                        onBlur={(e) => e.currentTarget.style.borderColor = "#ddd"}
                      />
                    </div>
                    <button
                      type="submit"
                      style={{
                        width: "100%",
                        padding: "16px 30px",
                        backgroundColor: "#25D366",
                        color: "#fff",
                        border: "none",
                        borderRadius: "10px",
                        fontSize: "18px",
                        fontWeight: "600",
                        cursor: "pointer",
                        transition: "all 0.3s ease",
                        boxShadow: "0 4px 12px rgba(37, 211, 102, 0.3)"
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundColor = "#20BA5A";
                        e.currentTarget.style.transform = "translateY(-2px)";
                        e.currentTarget.style.boxShadow = "0 6px 16px rgba(37, 211, 102, 0.4)";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor = "#25D366";
                        e.currentTarget.style.transform = "translateY(0)";
                        e.currentTarget.style.boxShadow = "0 4px 12px rgba(37, 211, 102, 0.3)";
                      }}
                    >
                      Send to WhatsApp
                    </button>
                  </form>
                </div>
              </div>
            </div>
            <div className="row" style={{marginTop: "50px"}}>
              <div className="col-lg-12">
                <div className="contact-info mb-50" style={{textAlign: "center"}}>
                  <h3 style={{marginBottom: "30px", fontSize: "24px", color: "#333"}}>Contact Information</h3>
                  <ul style={{listStyle: "none", padding: 0}}>
                    <li style={{marginBottom: "15px", fontSize: "16px"}}>
                      <i className="ti-email" style={{marginRight: "10px", color: "#ff6b35"}}></i>
                      <a href="mailto:lodhihasnainhaider@gmail.com" style={{color: "#333", textDecoration: "none"}}>lodhihasnainhaider@gmail.com</a>
                    </li>
                    <li style={{marginBottom: "15px", fontSize: "16px"}}>
                      <i className="ti-mobile" style={{marginRight: "10px", color: "#ff6b35"}}></i>
                      <a href="tel:+923285285744" style={{color: "#333", textDecoration: "none"}}>+92 328 5285744</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </>
  );
}
