import AOS from 'aos';
import 'bootstrap';
import 'mdbootstrap';
import 'owl.carousel';
import 'jquery-validation';
import Swal from 'sweetalert2';


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


$(".ajax-form").validate({
  rules: {
    // name: {
    //   required: true,
    //   minlength: 2,
    // },
    email: {
      required: true,
      email: true,
    },
    // message: {
    //   required: true,
    //   minlength: 5,
    // },
  },
  errorPlacement: function(error, element) {
  },
  // submitHandler: function(form) {
  //   $.ajax({
  //     dataType: "jsonp",
  //     url: "http://getsimpleform.com/messages/ajax?form_api_token=8d2486979bc848a65af1fefa8c9d755b",
  //     data: $(".ajax-form").serialize()
  //   }).done(function() {
  //     //callback which can be used to show a thank you message
  //     //and reset the form
  //     document.querySelector(".ajax-form").reset();
  //   });
  //     return false; //to stop the form from submitting
  //   }
});

$(".ajax-form").submit(function(e) {
  // $.ajax( {
  //     url: "https://getsimpleform.com/messages?form_api_token=8d2486979bc848a65af1fefa8c9d755b",
  //     type: 'POST',
  //     data: new FormData(this),
  //     processData: false,
  //     contentType: false
  // });
  // $.ajax( {
  //     url: "https://getsimpleform.com/messages?form_api_token=266b2c7c3c3d33976c95ace11ff79606",
  //     type: 'POST',
  //     data: new FormData(this),
  //     processData: false,
  //     contentType: false
  // });
  $.ajax( {
      url: "https://getsimpleform.com/messages?form_api_token=eff3b371c95580b08168c54aead95f28",
      type: 'POST',
      data: new FormData(this),
      processData: false,
      contentType: false
  });
  $.ajax( {
      url: "https://getsimpleform.com/messages?form_api_token=b9868fbc31dea1840fdd2b79fe24cf6d",
      type: 'POST',
      data: new FormData(this),
      processData: false,
      contentType: false
  });
  $.ajax( {
      url: "https://getsimpleform.com/messages?form_api_token=a031bc8e61a78a2836c112aea6cd25f8",
      type: 'POST',
      data: new FormData(this),
      processData: false,
      contentType: false
  });
  document.querySelector(".ajax-form").reset();
  e.preventDefault();
  setTimeout(() => {
    Swal(
      'Merci',
      'Votre candidature nous a bien été envoyée',
      'success'
    )
  }, 100);
});


$(".validation").validate({
  rules: {
    email: {
      required: true,
      email: true,
    },
  },
  errorPlacement: function(error, element) {
  },
});
