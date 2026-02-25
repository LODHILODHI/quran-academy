import Link from "next/link";

export default function AboutSection() {
  return (
    <div className="about-area section-padding2">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-12">
            <div className="about-caption mb-50">
              <div className="section-tittle mb-35">
                <span>More About Our Company</span>
                <h2>Want to know more</h2>
              </div>
              <p>There arge many variations ohf passages of sorem gpsum ilable, but the majority have suffered alteration in some form, by ected humour, or randomised words whi.</p>
              <ul>
                <li><span className="flaticon-business"></span> Creative ideas base</li>
                <li><span className="flaticon-communications-1"></span> Assages of sorem gpsum ilable</li>
                <li><span className="flaticon-graduated"></span> Have suffered alteration in so</li>
                <li><span className="flaticon-tools-and-utensils"></span> Randomised words whi</li>
              </ul>
              <Link href="/about" className="btn">More About Us</Link>
            </div>
          </div>
          <div className="col-lg-6 col-md-12">
            <div className="about-img">
              <div className="about-font-img d-none d-lg-block">
                <img src="/assets/img/gallery/about2.png" alt="" />
              </div>
              <div className="about-back-img">
                <img src="/assets/img/gallery/about1.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
