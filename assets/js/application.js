import AOS from 'aos';
import 'bootstrap';
import 'mdbootstrap';
import 'owl.carousel';

$(document).ready(function() {
  AOS.init({
      duration: 600,
      easing: 'ease',
    });
});

$(document).ready(() => {
  // Add smooth scrolling to all links
  $(".smooth").on('click', function(event) {
    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();
      // Store hash
      const hash = this.hash;
      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, () => {
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    }
  });
});

// Back to top
$(window).scroll(() => {
  if ($(window).scrollTop() > 600) {
    $('button.back-to-top').addClass('show');
  } else {
    $('button.back-to-top').removeClass('show');
  }
});

$('button.back-to-top').click(() => {
  $('html, body').animate({ scrollTop: 0 }, 800);
  return false;
});
// Add waves effect
Waves.attach('button.back-to-top', 'waves-effect');
Waves.init();

jQuery(document).ready(function($) {
  "use strict";
  //  TESTIMONIALS CAROUSEL HOOK
  $('.owl-carousel').owlCarousel({
      loop: true,
      center: true,
      items: 3,
      margin: 0,
      autoplay: true,
      dots:true,
      autoplayTimeout: 8500,
      smartSpeed: 450,
      responsive: {
        0: {
          items: 1
        },
        768: {
          items: 2
        },
        1170: {
          items: 3
        }
      }
  });
});
