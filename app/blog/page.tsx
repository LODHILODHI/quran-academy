import Link from "next/link";
import Preloader from "../components/Preloader";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Blog() {
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
                    <h2>Blog</h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Blog Content Area */}
        <div className="home-blog-area section-padding30">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="section-tittle text-center mb-50">
                  <span>Our Latest News From Our Blog</span>
                  <h2>Latest News From Blog</h2>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-xl-6 col-lg-6 col-md-6">
                <div className="home-blog-single mb-30">
                  <div className="blog-img-cap">
                    <div className="blog-img">
                      <img src="/assets/img/gallery/home-blog1.png" alt="" />
                      <div className="blog-date text-center">
                        <span>24</span>
                        <p>Now</p>
                      </div>
                    </div>
                    <div className="blog-cap">
                      <p>| Properties</p>
                      <h3><Link href="/blog-details">Footprints in Time is perfect House in Kurashiki</Link></h3>
                      <Link href="/blog-details" className="more-btn">Read more »</Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-6 col-lg-6 col-md-6">
                <div className="home-blog-single mb-30">
                  <div className="blog-img-cap">
                    <div className="blog-img">
                      <img src="/assets/img/gallery/home-blog2.png" alt="" />
                      <div className="blog-date text-center">
                        <span>24</span>
                        <p>Now</p>
                      </div>
                    </div>
                    <div className="blog-cap">
                      <p>| Properties</p>
                      <h3><Link href="/blog-details">Footprints in Time is perfect House in Kurashiki</Link></h3>
                      <Link href="/blog-details" className="more-btn">Read more »</Link>
                    </div>
                  </div>
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
