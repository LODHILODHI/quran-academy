import Link from "next/link";
import Preloader from "../components/Preloader";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Elements() {
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
                    <h2>Elements</h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Elements Content Area */}
        <div className="elements-area section-padding30">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="section-tittle text-center mb-50">
                  <span>UI Elements</span>
                  <h2>Elements Page</h2>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-6">
                <div className="element-box mb-50">
                  <h3>Buttons</h3>
                  <div className="button-group">
                    <a href="#" className="btn">Primary Button</a>
                    <a href="#" className="btn white-btn">Secondary Button</a>
                    <a href="#" className="btn hero-btn">Hero Button</a>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="element-box mb-50">
                  <h3>Headings</h3>
                  <h1>Heading 1</h1>
                  <h2>Heading 2</h2>
                  <h3>Heading 3</h3>
                  <h4>Heading 4</h4>
                  <h5>Heading 5</h5>
                  <h6>Heading 6</h6>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="element-box mb-50">
                  <h3>Lists</h3>
                  <ul>
                    <li>List item 1</li>
                    <li>List item 2</li>
                    <li>List item 3</li>
                    <li>List item 4</li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="element-box mb-50">
                  <h3>Paragraph</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.</p>
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
