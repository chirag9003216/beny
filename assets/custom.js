$(window).scroll(function(){
    if ($(this).scrollTop() > 200) {
       $('.header-wrapper').addClass('scrolled_down');
    } else {
       $('.header-wrapper').removeClass('scrolled_down');
    }
});



$(document).ready(function(){

    var $slider = $('.athletes-grid');
    var slideCount = $slider.children().length;

    $slider.slick({
      slidesToShow: 3.6,
      slidesToScroll: 2,
      arrows: false,
          autoplay: false,
          autoplaySpeed: 3000,
      dots: slideCount > 4,  
      infinite: false,
      appendDots: $('.custom_dots'),
      responsive: [
        {
          breakpoint: 1050,
          settings: {
            slidesToShow: 2,
            dots: slideCount > 2
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            dots: slideCount > 1
          }
        }
      ]
    });

  });
$(document).ready(function(){

    var $slider = $('.testimonial-grid');
    var slideCount = $slider.children().length;

    $slider.slick({
      slidesToShow: 4,
      slidesToScroll: 1,
          autoplay: false,
           autoplaySpeed: 3000,
      arrows: false,
      dots: slideCount > 4,  
      infinite: false,
      appendDots: $('.custom_review_slider'),
      responsive: [
        {
          breakpoint: 1050,
          settings: {
            slidesToShow: 3,
            dots: slideCount > 2
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: slideCount > 1
          }
        }
      ]
    });

  });


//   $(window).scroll(function(){
//     if ($(this).scrollTop() > 100) {
//        $('.header-wrapper').addClass('scrolled_down');
//     } else {
//        $('.header-wrapper').removeClass('scrolled_down');
//     }
// });

  function initMapleSlider() {
    if ($(window).width() < 768) {
      if (!$('.maple-benefits-grid').hasClass('slick-initialized')) {
        $('.maple-benefits-grid').slick({
          slidesToShow: 1.5,
          slidesToScroll: 1,
          arrows: false,
          dots: false,
          infinite: true,
          speed: 4000,
          autoplay: true,
          autoplaySpeed: 0,
          cssEase: 'linear',
          pauseOnHover: false,
          pauseOnFocus: false
        });
      }
    } else {
      if ($('.maple-benefits-grid').hasClass('slick-initialized')) {
        $('.maple-benefits-grid').slick('unslick');
      }
    }
  }

  $(document).ready(function () {
    initMapleSlider();
  });

  $(window).on('resize', function () {
    initMapleSlider();
  });


    function initBicSlider() {
    if (window.innerWidth < 768) {
      if (!$('.bic-features').hasClass('slick-initialized')) {
        $('.bic-features').slick({
          slidesToShow: 1.5,
          slidesToScroll: 1,
          arrows: false,
          dots: false,
          infinite: true,
          speed: 4000,
          autoplay: true,
          autoplaySpeed: 0,
          cssEase: 'linear',
          pauseOnHover: false,
          pauseOnFocus: false
        });
      }
    } else {
      if ($('.bic-features').hasClass('slick-initialized')) {
        $('.bic-features').slick('unslick');
      }
    }
  }

  document.addEventListener('DOMContentLoaded', function () {
    initBicSlider();
  });

  window.addEventListener('resize', function () {
    initBicSlider();
  });


  $(document).ready(function(){
    $('.hydration-grid').slick({
      centerMode: true,
      slidesToShow: 3,
      arrows: false,
      dots: false,
      centerPadding: '0px',
      responsive: [
        {
          breakpoint: 768, // tablet & mobile
          settings: {
            slidesToShow: 1,
            centerMode: true,
            centerPadding: '20px'
          }
        }
      ]
    });
  });


  function initMobileSlider() {
  if (window.innerWidth <= 767) {

    if (!$('.mobile_slider').hasClass('slick-initialized')) {
      $('.mobile_slider').slick({
        slidesToShow: 2,
        slidesToScroll: 2,
        arrows: false,
        dots: true,
        infinite: true,
        adaptiveHeight: true
      });
    }

  } else {
    if ($('.mobile_slider').hasClass('slick-initialized')) {
      $('.mobile_slider').slick('unslick');
    }
  }
}

$(document).ready(function () {
  initMobileSlider();
});

$(window).on('resize', function () {
  initMobileSlider();
});