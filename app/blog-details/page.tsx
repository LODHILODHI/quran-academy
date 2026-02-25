import Link from "next/link";
import Preloader from "../components/Preloader";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function BlogDetails() {
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
                    <h2>Blog Details</h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Blog Details Content Area */}
        <div className="home-blog-area section-padding30">
          <div className="container">
            <div className="row">
              <div className="col-lg-8">
                <div className="blog-details mb-50">
                  <div className="blog-img">
                    <img src="/assets/img/gallery/home-blog1.png" alt="" />
                    <div className="blog-date text-center">
                      <span>24</span>
                      <p>Now</p>
                    </div>
                  </div>
                  <div className="blog-cap">
                    <p>| Properties</p>
                    <h2>Footprints in Time is perfect House in Kurashiki</h2>
                    <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don&apos;t look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn&apos;t anything embarrassing hidden in the middle of text.</p>
                    <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don&apos;t look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn&apos;t anything embarrassing hidden in the middle of text.</p>
                    <div className="blog-tags">
                      <span>Tags:</span>
                      <a href="#">Properties</a>
                      <a href="#">Real Estate</a>
                      <a href="#">House</a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="blog-sidebar">
                  <div className="single-sidebar mb-50">
                    <h3>Recent Posts</h3>
                    <ul>
                      <li><Link href="/blog-details">Footprints in Time is perfect House</Link></li>
                      <li><Link href="/blog-details">Footprints in Time is perfect House</Link></li>
                      <li><Link href="/blog-details">Footprints in Time is perfect House</Link></li>
                    </ul>
                  </div>
                  <div className="single-sidebar mb-50">
                    <h3>Categories</h3>
                    <ul>
                      <li><Link href="/blog">Properties</Link></li>
                      <li><Link href="/blog">Real Estate</Link></li>
                      <li><Link href="/blog">House</Link></li>
                    </ul>
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
