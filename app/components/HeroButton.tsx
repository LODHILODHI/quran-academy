'use client';

import Link from "next/link";

export default function HeroButton() {
  return (
    <Link 
      href="/contact"
      data-animation="fadeInLeft" 
      data-delay=".2s"
      style={{
        fontSize: "28px",
        fontWeight: "500",
        color: "#fff",
        marginBottom: "30px",
        display: "inline-block",
        textTransform: "uppercase",
        letterSpacing: "1px",
        lineHeight: "1.2",
        textDecoration: "none",
        transition: "color 0.3s ease",
        cursor: "pointer"
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.color = "#ff6b35";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.color = "#fff";
      }}
    >
      Start Free Trial / Enroll Now
    </Link>
  );
}
