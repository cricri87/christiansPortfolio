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
});