(function ($)
  { "use strict"
  
/* 1. Proloder */
    $(window).on('load', function () {
      $('#preloader-active').delay(450).fadeOut('slow');
      $('body').delay(450).css({
        'overflow': 'visible'
      });
    });

/* 2. sticky And Scroll UP */
    $(window).on('scroll', function () {
      var scroll = $(window).scrollTop();
      if (scroll < 400) {
        $(".header-sticky").removeClass("sticky-bar");
        $('#back-top').fadeOut(500);
      } else {
        $(".header-sticky").addClass("sticky-bar");
        $('#back-top').fadeIn(500);
      }
    });

  // Scroll Up
    $('#back-top a').on("click", function () {
      $('body,html').animate({
        scrollTop: 0
      }, 800);
      return false;
    });
  

/* 3. slick Nav */
// mobile_menu
    var menu = $('ul#navigation');
    if(menu.length && typeof menu.slicknav === 'function'){
      try {
        menu.slicknav({
          prependTo: ".mobile_menu",
          closedSymbol: '+',
          openedSymbol:'-'
        });
      } catch (e) {
        console.error('Error initializing slicknav:', e);
      }
    }

/* 4. MainSlider-1 */
    // h1-hero-active
    function mainSlider() {
      var BasicSlider = $('.slider-active');
      // Only initialize slick if element exists and has multiple slides
      if (!BasicSlider.length || BasicSlider.children().length <= 1) {
        return; // Skip slick initialization if no element or only one slide
      }
      BasicSlider.on('init', function (e, slick) {
        var $firstAnimatingElements = $('.single-slider:first-child').find('[data-animation]');
        doAnimations($firstAnimatingElements);
      });
      BasicSlider.on('beforeChange', function (e, slick, currentSlide, nextSlide) {
        var $animatingElements = $('.single-slider[data-slick-index="' + nextSlide + '"]').find('[data-animation]');
        doAnimations($animatingElements);
      });
      BasicSlider.slick({
        autoplay: false,
        autoplaySpeed: 5000,
        dots: false,
        fade: true,
        arrows: false, 
        prevArrow: '<button type="button" class="slick-prev"><i class="ti-angle-left"></i></button>',
        nextArrow: '<button type="button" class="slick-next"><i class="ti-angle-right"></i></button>',
        responsive: [{
            breakpoint: 1024,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true,
            }
          },
          {
            breakpoint: 991,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              arrows: false
            }
          },
          {
            breakpoint: 767,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              arrows: false
            }
          }
        ]
      });

      function doAnimations(elements) {
        var animationEndEvents = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
        elements.each(function () {
          var $this = $(this);
          var $animationDelay = $this.data('delay');
          var $animationType = 'animated ' + $this.data('animation');
          $this.css({
            'animation-delay': $animationDelay,
            '-webkit-animation-delay': $animationDelay
          });
          $this.addClass($animationType).one(animationEndEvents, function () {
            $this.removeClass($animationType);
          });
        });
      }
    }
    mainSlider();

/* 5. Testimonial Active*/

/* 4. Testimonial Active*/
    function initTestimonialSlider() {
      // Check if already initialized by React component
      if (typeof window !== 'undefined' && window.__testimonialSlickInitialized) {
        return; // Skip if already initialized
      }
      
      var testimonial = $('.h1-testimonial-active');
      
      // Check if element exists, has children, slick is loaded, and element is in DOM
      if (testimonial.length && 
          testimonial.children().length > 0 && 
          typeof testimonial.slick === 'function' &&
          testimonial[0] && 
          document.body.contains(testimonial[0]) &&
          !testimonial.hasClass('slick-initialized')) {
        try {
          testimonial.slick({
            dots: false,
            infinite: true,
            speed: 1000,
            autoplay: false,
            loop: true,
            arrows: true,
            accessibility: false, // Disable accessibility to prevent initADA error
            prevArrow: '<button type="button" class="slick-prev" aria-label="Previous"><i class="ti-angle-left"></i></button>',
            nextArrow: '<button type="button" class="slick-next" aria-label="Next"><i class="ti-angle-right"></i></button>',
            slidesToShow: 1,
            slidesToScroll: 1,
            responsive: [
              {
                breakpoint: 1024,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  infinite: true,
                  dots: false,
                  arrows: false
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
        } catch (e) {
          console.error('Error initializing testimonial slider:', e);
        }
      }
    }
    
    // Try to initialize testimonial slider
    // Wait a bit to ensure slick is loaded and DOM is ready
    if (typeof window !== 'undefined' && document.readyState === 'complete') {
      setTimeout(initTestimonialSlider, 100);
    } else {
      $(window).on('load', function() {
        setTimeout(initTestimonialSlider, 100);
      });
    }



/* 6. Nice Selectorp  */
  var nice_Select = $('select');
    if(nice_Select.length && typeof nice_Select.niceSelect === 'function'){
      try {
        nice_Select.niceSelect();
      } catch (e) {
        console.error('Error initializing niceSelect:', e);
      }
    }

/* 7. data-background */
    $("[data-background]").each(function () {
      $(this).css("background-image", "url(" + $(this).attr("data-background") + ")")
      });


/* 10. WOW active */
    if (typeof WOW !== 'undefined') {
      try {
        new WOW().init();
      } catch (e) {
        console.error('Error initializing WOW:', e);
      }
    }

// 11. ---- Mailchimp js --------//  
    function mailChimp() {
      var mcForm = $('#mc_embed_signup').find('form');
      // Check if form exists, ajaxChimp is loaded, and function is available
      if (mcForm.length && 
          typeof $.fn.ajaxChimp === 'function') {
        try {
          mcForm.ajaxChimp();
        } catch (e) {
          console.error('Error initializing Mailchimp form:', e);
        }
      }
    }
    // Only initialize if ajaxChimp is loaded, otherwise wait
    if (typeof $.fn.ajaxChimp === 'function') {
      mailChimp();
    } else {
      // Wait for ajaxChimp to load
      $(window).on('load', function() {
        setTimeout(function() {
          if (typeof $.fn.ajaxChimp === 'function') {
            mailChimp();
          }
        }, 500);
      });
    }


// 12 Pop Up Img
    var popUp = $('.single_gallery_part, .img-pop-up');
      if(popUp.length && typeof popUp.magnificPopup === 'function'){
        try {
          popUp.magnificPopup({
            type: 'image',
            gallery:{
              enabled:true
            }
          });
        } catch (e) {
          console.error('Error initializing magnificPopup:', e);
        }
      }
/* 13. counterUp*/
    var counter = $('.counter');
    if(counter.length && typeof counter.counterUp === 'function'){
      try {
        counter.counterUp({
          delay: 10,
          time: 3000
        });
      } catch (e) {
        console.error('Error initializing counterUp:', e);
      }
    }

/* 14. Datepicker */
  var datepicker = $('#datepicker1');
  if(datepicker.length && typeof datepicker.datepicker === 'function'){
    try {
      datepicker.datepicker();
    } catch (e) {
      console.error('Error initializing datepicker:', e);
    }
  }

// 15. Time Picker
  var timepicker = $('#timepicker');
  if(timepicker.length && typeof timepicker.timepicker === 'function'){
    try {
      timepicker.timepicker();
    } catch (e) {
      console.error('Error initializing timepicker:', e);
    }
  }


})(jQuery);
