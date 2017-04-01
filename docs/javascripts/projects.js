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


// ACCORDION

$(document).ready(function () {
    $('.accordion-head.first-accordion').on('click', function () { $('.process-description.first-accordion-step').slideToggle( "fast"); });
    $('.accordion-head.second-accordion').on('click', function () { $('.process-description.second-accordion-step').slideToggle( "fast"); });
    $('.accordion-head.third-accordion').on('click', function () { $('.process-description.third-accordion-step').slideToggle( "fast"); });
    $('.accordion-head.forth-accordion').on('click', function () { $('.process-description.forth-accordion-step').slideToggle( "fast"); });
    $('.accordion-head.fifth-accordion').on('click', function () { $('.process-description.fifth-accordion-step').slideToggle( "fast"); });
});
    

// // ACCORDION 2

// $('#accordion-wrapper .accordion').each(function () {
//     var $accordian = $(this);
//     $accordian.find('.accordion-head').on('click', function () {
//         $(this).removeClass('open').addClass('close');
//         $accordian.find('.accordion-body').slideUp();
//         if (!$(this).next().is(':visible')) {
//             $(this).removeClass('close').addClass('open');
//             $(this).next().slideDown();
//         }
//     });
// });
