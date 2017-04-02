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

//LOAD MORE PROJECT PROCESS IMAGES
$(function () {
  $(".project-process-images").slice(0, 3).show();
  $("#load-more-project-images").on('click', function (e) {
  e.preventDefault();
  $(".project-process-images:hidden").slice(0, 3).slideDown(); 
  if ($(".project-process-images:hidden").length == 0) {
  $("#load").fadeOut('slow');
  }
  $('html,body').animate({
  scrollTop: $(this).offset().top
  }, 1500);
  });
});












