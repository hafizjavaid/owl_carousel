$(document).ready(function () {
  $("#main_crousel").owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    dots: true,
    autoplay: false,
    smartSpeed: 1000,
    responsive: {
      0: {
        items: 1,
        },
        400: {
          items:2,  
        },
      600: {
        items: 3,
        },
        767: {
          items: 4, 
      },
      1000: {
        items: 5,
      },
    },
  });

});