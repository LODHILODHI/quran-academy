export default function Footer() {
  return (
    <>
      <footer>
        <div className="footer-area footer-bg" style={{backgroundColor: "#ffffff"}}>
          <div className="container">
            <div className="footer-top footer-padding">
              <div className="row d-flex justify-content-between">
                <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6">
                  <div className="single-footer-caption mb-50">
                    <div className="footer-tittle">
                      <h4>About Us</h4>
                      <ul>
                        <li><a href="#">Online Learning</a></li>
                        <li><a href="#">About Us</a></li>
                        <li><a href="#">Careers</a></li>
                        <li><a href="#">Press Center</a></li>
                        <li><a href="#">Become an Instructor</a></li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6">
                  <div className="single-footer-caption mb-50">
                    <div className="footer-tittle">
                      <h4>Campus</h4>
                      <ul>
                        <li><a href="#">Our Plans</a></li>
                        <li><a href="#">Free Trial</a></li>
                        <li><a href="#">Academic Solutions</a></li>
                        <li><a href="#">Business Solutions</a></li>
                        <li><a href="#">Government Solutions</a></li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6">
                  <div className="single-footer-caption mb-50">
                    <div className="footer-tittle">
                      <h4>Study</h4>
                      <ul>
                        <li><a href="#">Admissions Policy</a></li>
                        <li><a href="#">Getting Started</a></li>
                        <li><a href="#">Online Application</a></li>
                        <li><a href="#">Visa Information</a></li>
                        <li><a href="#">Tuition Calculator</a></li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6">
                  <div className="single-footer-caption mb-50">
                    <div className="footer-tittle">
                      <h4>Spport</h4>
                      <ul>
                        <li><a href="#">Support</a></li>
                        <li><a href="#">Contact Us</a></li>
                        <li><a href="#">System Requirements</a></li>
                        <li><a href="#">Register Activation Key</a></li>
                        <li><a href="#">Site feedback</a></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="footer-bottom">
              <div className="row d-flex align-items-center">
                <div className="col-lg-6 col-md-6">
                  <div className="footer-contact-info">
                    <p style={{margin: "10px 0", fontSize: "16px", color: "#333"}}>
                      <i className="ti-mobile" style={{marginRight: "8px", color: "#ff6b35"}}></i>
                      <a href="tel:+923285285744" style={{color: "#333", textDecoration: "none"}}>+92 328 5285744</a>
                    </p>
                    <p style={{margin: "10px 0", fontSize: "16px", color: "#333"}}>
                      <i className="ti-email" style={{marginRight: "8px", color: "#ff6b35"}}></i>
                      <a href="mailto:lodhihasnainhaider@gmail.com" style={{color: "#333", textDecoration: "none"}}>lodhihasnainhaider@gmail.com</a>
                    </p>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6">
                  <div className="footer-copy-right text-center">
                    <p>
                      Copyright &copy;{new Date().getFullYear()} All rights reserved | This template is made with <i className="fa fa-heart" aria-hidden="true"></i> by <a href="https://colorlib.com" target="_blank" rel="noopener noreferrer">Colorlib</a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Scroll Up */}
      <div id="back-top">
        <a title="Go to Top" href="#"><i className="fas fa-level-up-alt"></i></a>
      </div>
    </>
  );
}
