$(window).on('load', function(){
  $('.loader').fadeOut(500);
});

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
    items: 4,
    responsive:{
        0:{
            items:1
        },
        480:{
            items:2
        },
        768:{
            items:3
        },
        938:{
            items:4
        }
    }
});

  const skillsTopOffset = $('.skillSection').offset().top;
  const statsTopOffset = $('.statsSection').offset().top;
  let countUpFinished = false;

  $(window).scroll(function() {

    if(window.pageYOffset > skillsTopOffset - $(window).height() + 200) {

      $('.chart').easyPieChart({
            easing: 'easeInOut',
            barColor:' #fff',
            trackColor: false,
            scaleColor: false,
            lineWidth: 4,
            size: 152,
            onStep: function(from, to, percent) {
              $(this.el).find('.percent').text(Math.round(percent));
            }
        });
    }

    if(!countUpFinished && window.pageYOffset > statsTopOffset - $(window).height() + 200) {
      $('.counter').each(function() {
        const element = $(this);
        const endVal = parseInt(element.text());

      element.countup(endVal);
    })

      countUpFinished = true;

    }
  }); 

  $('[data-fancybox]').fancybox();

  $('.items').isotope( {
    filter: '*',
    anaimationOptions: {
      duration: 1500,
      easing: 'linear',
      queue: false
    }
  });

  $('#filters a').click(function() {
    $('#filters.current').removeClass('current');
    $(this).addClass('current');

    const selector = $(this).attr('data-filter');

    $('.items').isotope( {
      filter: selector,
      anaimationOptions: {
        duration: 1500,
        easing: 'linear',
        queue: false
    }
  });

    return false;

  });

  $('#navigation li a').click(function(e) {
    e.preventDefault();

    let targetElement = $(this).attr('href');
    let targetPosition = $(targetElement).offset().top;
    $('html, body').animate({ scrollTop: targetPosition - 50 }, 'slow');
  });

  const nav = $('#navigation');
  const navTop = nav.offset().top;

  $(window).on('scroll', stickyNavigation);

  function stickyNavigation() {

    let body = $('body');

    if($(window).scrollTop() >= navTop) {
      body.css('padding-top', nav.outerHeight() + "px");
      body.addClass('fixedNav');
    } else {
      body.css('padding-top', 0);
      body.removeClass('fixedNav');
    }
  }






});