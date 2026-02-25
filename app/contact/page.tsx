import Link from "next/link";
import Preloader from "../components/Preloader";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Contact() {
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
        <div className="contact-section section-padding30">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="section-tittle text-center mb-50">
                  <span>Get in Touch</span>
                  <h2>Contact Us</h2>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-6 col-md-6">
                <div className="contact-info mb-50">
                  <h3>Contact Information</h3>
                  <ul>
                    <li>
                      <i className="ti-location-pin"></i>
                      <span>Address: Your Address Here</span>
                    </li>
                    <li>
                      <i className="ti-email"></i>
                      <span>Email: needhelp@gmail.com</span>
                    </li>
                    <li>
                      <i className="ti-mobile"></i>
                      <span>Phone: 666 7475 25252</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-6 col-md-6">
                <div className="contact-form">
                  <form id="contact-form" action="#" method="post">
                    <div className="row">
                      <div className="col-lg-6">
                        <input type="text" name="name" placeholder="Your Name" required />
                      </div>
                      <div className="col-lg-6">
                        <input type="email" name="email" placeholder="Your Email" required />
                      </div>
                      <div className="col-lg-12">
                        <input type="text" name="subject" placeholder="Subject" required />
                      </div>
                      <div className="col-lg-12">
                        <textarea name="message" rows={5} placeholder="Your Message" required></textarea>
                      </div>
                      <div className="col-lg-12">
                        <button type="submit" className="btn">Send Message</button>
                      </div>
                    </div>
                  </form>
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
