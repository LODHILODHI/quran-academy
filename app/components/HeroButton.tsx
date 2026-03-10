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
        color: "white",
        marginBottom: "30px",
        display: "inline-block",
        textTransform: "uppercase",
        letterSpacing: "1px",
        lineHeight: "1.2",
        textDecoration: "none",
        cursor: "pointer"
      }}
    >
      Start Free Trial / Enroll Now
    </Link>
  );
}
