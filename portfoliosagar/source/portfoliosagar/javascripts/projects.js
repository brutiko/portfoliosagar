// Hide Header on on scroll down
var didScroll;
var lastScrollTop = 0;
var delta = 5;
var navbarHeight = $('#menu-hide-scroll').outerHeight();

$(window).scroll(function(event){
    didScroll = true;
});

setInterval(function() {
    if (didScroll) {
        hasScrolled();
        didScroll = false;
    }
}, 250);

function hasScrolled() {
    var st = $(this).scrollTop();
    
    // Make sure they scroll more than delta
    if (Math.abs(lastScrollTop - st) <= delta)
        return;
    
    // If they scrolled down and are past the navbar, add class .nav-up.
    // This is necessary so you never see what is "behind" the navbar.
    if (st > lastScrollTop && st > navbarHeight){
        // Scroll Down
        $('#menu-hide-scroll').removeClass('nav-down').addClass('nav-up');
    } else {
        // Scroll Up
        if(st + $(window).height() < $(document).height()) {
            $('#menu-hide-scroll').removeClass('nav-up').addClass('nav-down');
        }
    }
    
    lastScrollTop = st;
}


// FILTERING PROJECTS THUMBNAILS

var $btns = $('.btn').click(function() {
  if (this.id == 'all') {
    $('#parent > div').fadeIn(450);
  } else {
    var $el = $('.' + this.id).fadeIn(450);
    $('#parent > div').not($el).hide();
  }
  $btns.removeClass('active');
  $(this).addClass('active');
})


// ACCORDION

$(document).ready(function () {
    $('.accordion.first-accordion').on('click', function () { $('.process-description.first-accordion-step').slideToggle( "fast"); });
    $('.accordion.second-accordion').on('click', function () { $('.process-description.second-accordion-step').slideToggle( "fast"); });
    $('.accordion.third-accordion').on('click', function () { $('.process-description.third-accordion-step').slideToggle( "fast"); });
    $('.accordion.forth-accordion').on('click', function () { $('.process-description.forth-accordion-step').slideToggle( "fast"); });
    $('.accordion.fifth-accordion').on('click', function () { $('.process-description.fifth-accordion-step').slideToggle( "fast"); });
});
    
