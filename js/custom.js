(function($) {

  "use strict";

    $('.menus-slider').slick({
        slidesToShow: 10,
        infinite: false,
        arrows: true,
        responsive: [{
            breakpoint: 768,
            settings: {
                arrows: true,
                // centerMode: true,
                centerPadding: '40px',
                slidesToShow: 6
            }
        }, {
            breakpoint: 480,
            settings: {
                arrows: false,
                // centerMode: true,
                centerPadding: '40px',
                slidesToShow: 4
            }
    }]
    });

  $('.offer-slider').slick({
      slidesToShow: 4,
      arrows: true,
      responsive: [{
          breakpoint: 768,
          settings: {
              arrows: true,
              centerMode: true,
              centerPadding: '40px',
              slidesToShow: 2
          }
      }, {
          breakpoint: 480,
          settings: {
              arrows: false,
              centerMode: true,
              centerPadding: '40px',
              slidesToShow: 2
          }
      }]
  });
  $('.cat-slider').slick({
      slidesToShow: 8,
      arrows: true,
      responsive: [{
          breakpoint: 768,
          settings: {
              arrows: true,
              centerMode: true,
              centerPadding: '40px',
              slidesToShow: 4
          }
      }, {
          breakpoint: 480,
          settings: {
              arrows: false,
              centerMode: true,
              centerPadding: '40px',
              slidesToShow: 4
          }
      }]
  });
  $('.trending-slider').slick({
      slidesToShow: 3,
      arrows: true,
      responsive: [{
          breakpoint: 768,
          settings: {
              arrows: false,
              centerMode: true,
              centerPadding: '40px',
              slidesToShow: 2
          }
      }, {
          breakpoint: 480,
          settings: {
              arrows: false,
              centerMode: true,
              centerPadding: '40px',
              slidesToShow: 1
          }
      }]
  });
  $('.popular-slider').slick({
      centerMode: true,
      centerPadding: '30px',
      slidesToShow: 1,
      arrows: false,
      responsive: [{
          breakpoint: 768,
          settings: {
              arrows: false,
              centerMode: true,
              centerPadding: '40px',
              slidesToShow: 2
          }
      }, {
          breakpoint: 480,
          settings: {
              arrows: false,
              centerMode: true,
              centerPadding: '40px',
              slidesToShow: 1
          }
      }]
  });
  $('.swiggi-slider').slick({
      centerMode: false,
      slidesToShow: 1,
      arrows: false,
      dots: true
  });
  $('.swiggi-slider-map').slick({
      autoplay: true,
      slidesToShow: 5,
      arrows: true,
      responsive: [{
          breakpoint: 768,
          settings: {
              arrows: false,
              autoplay: true,
              centerMode: true,
              centerPadding: '40px',
              slidesToShow: 3
          }
      }, {
          breakpoint: 480,
          settings: {
              arrows: false,
              autoplay: true,
              centerMode: true,
              centerPadding: '40px',
              slidesToShow: 3
          }
      }]
  });
  var $main_nav = $('#main-nav');
  var $toggle = $('.toggle');
  var defaultOptions = {
      disableAt: false,
      customToggle: $toggle,
      levelSpacing: 40,
      navTitle: 'Askbootstrap',
      levelTitles: true,
      levelTitleAsBack: true,
      pushContent: '#container',
      insertClose: 2
  };
//   var Nav = $main_nav.hcOffcanvasNav(defaultOptions);
//   $('[data-bs-toggle="tooltip"]').tooltip();
})(jQuery);