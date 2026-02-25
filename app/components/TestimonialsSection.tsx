'use client';

import { useEffect } from "react";

// Flag to prevent main.js from initializing slick
if (typeof window !== 'undefined') {
  (window as any).__testimonialSlickInitialized = false;
}

export default function TestimonialsSection() {
  useEffect(() => {
    // Initialize carousel after scripts are loaded
    const initCarousel = () => {
      try {
        if (typeof window !== 'undefined' && (window as any).jQuery) {
          const $ = (window as any).jQuery;
          const testimonial = $('.h1-testimonial-active');
          
          // Check if element exists and has children
          if (testimonial.length && testimonial.children().length > 0 && typeof testimonial.slick === 'function') {
            // Destroy existing carousel if any (prevent double initialization)
            if (testimonial.hasClass('slick-initialized')) {
              try {
                testimonial.slick('unslick');
              } catch (e) {
                // Ignore errors when unslicking
                console.log('Carousel already initialized');
              }
            }
            
            // Initialize carousel with error handling
            try {
              testimonial.slick({
                dots: false,
                infinite: true,
                speed: 1000,
                autoplay: true,
                autoplaySpeed: 5000,
                loop: true,
                arrows: true,
                accessibility: false, // Disable accessibility to prevent initADA error
                prevArrow: '<button type="button" class="slick-prev" aria-label="Previous"><i class="ti-angle-left"></i></button>',
                nextArrow: '<button type="button" class="slick-next" aria-label="Next"><i class="ti-angle-right"></i></button>',
                slidesToShow: 1,
                slidesToScroll: 1,
                fade: true,
                cssEase: 'linear',
                responsive: [
                  {
                    breakpoint: 1024,
                    settings: {
                      slidesToShow: 1,
                      slidesToScroll: 1,
                      infinite: true,
                      dots: false,
                      arrows: true
                    }
                  },
                  {
                    breakpoint: 600,
                    settings: {
                      slidesToShow: 1,
                      slidesToScroll: 1,
                      arrows: false
                    }
                  },
                  {
                    breakpoint: 480,
                    settings: {
                      slidesToShow: 1,
                      slidesToScroll: 1,
                      arrows: false
                    }
                  }
                ]
              });
              // Mark as initialized to prevent main.js from re-initializing
              if (typeof window !== 'undefined') {
                (window as any).__testimonialSlickInitialized = true;
              }
            } catch (slickError) {
              console.error('Error initializing slick carousel:', slickError);
            }
          }
        }
      } catch (error) {
        console.error('Error in carousel initialization:', error);
      }
    };

    // Wait for DOM and scripts to be ready
    const initWhenReady = () => {
      if (typeof window !== 'undefined' && document.readyState === 'complete') {
        // Wait a bit more for slick to be fully loaded
        setTimeout(initCarousel, 100);
      } else {
        window.addEventListener('load', () => {
          setTimeout(initCarousel, 100);
        });
      }
    };

    // Try to initialize when component mounts
    initWhenReady();

    // Also try after a delay to ensure scripts are loaded
    const timer = setTimeout(() => {
      initCarousel();
    }, 1500);

    return () => {
      clearTimeout(timer);
      // Cleanup: destroy carousel on unmount
      try {
        if (typeof window !== 'undefined' && (window as any).jQuery) {
          const $ = (window as any).jQuery;
          const testimonial = $('.h1-testimonial-active');
          if (testimonial.length && testimonial.hasClass('slick-initialized')) {
            testimonial.slick('unslick');
          }
        }
      } catch (e) {
        // Ignore cleanup errors
      }
    };
  }, []);

  const testimonials = [
    {
      id: 1,
      text: "My daughter has been learning Quran with Quran Academy for 6 months now. The teachers are patient, certified, and make learning fun. She has memorized so much already! Highly recommended.",
      name: "Sarah Ahmed",
      role: "Parent from USA"
    },
    {
      id: 2,
      text: "As an adult learner, I was nervous about starting Quran classes online. But the flexible schedule and excellent teaching methods have made it so easy. I'm now reading Quran with proper Tajweed!",
      name: "Mohammed Ali",
      role: "Student from UK"
    },
    {
      id: 3,
      text: "Best online Quran academy! My son completed Noorani Qaida and is now reading Quran beautifully. The teachers are from Arab countries and teach with love and dedication.",
      name: "Fatima Khan",
      role: "Parent from Canada"
    },
    {
      id: 4,
      text: "I enrolled my kids in Islamic Studies classes. They love the interactive sessions and are learning so much about Islam. The teachers make every lesson engaging and meaningful.",
      name: "Ayesha Malik",
      role: "Parent from Australia"
    },
    {
      id: 5,
      text: "The Hifz program is excellent! My daughter is memorizing Quran systematically with regular revision. The teachers track progress and provide personalized guidance. Amazing experience!",
      name: "Hassan Rahman",
      role: "Parent from UAE"
    }
  ];

  return (
    <div className="testimonial-area fix pt-180 pb-180 section-bg" style={{backgroundImage: "url('/assets/img/gallery/section_bg03.png')"}}>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-8 col-lg-9 col-md-9">
            <div className="h1-testimonial-active">
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="single-testimonial pt-65">
                  <div className="testimonial-caption text-center">
                    <p>{testimonial.text}</p>
                    <div className="testimonial-ratting">
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                    </div>
                    <div className="rattiong-caption">
                      <span>{testimonial.name}<span> - {testimonial.role}</span></span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
