$(document).ready(function() {

  $('#slides').superslides({
    animation: 'fade',
    play: 5000,
    pagination: false
  });

  const typed = new Typed('.typed', {
    strings: ['Junior Programmer.',"Student.", 'Looking for a junior position.'],
    typeSpeed: 60,
    loop: true,
    startDelay: 1000,
    showCursor: false
  });

  $('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
});

});