//MENU SCROLL DOWN
$(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
  if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
  var target = $(this.hash);
  target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
  if (target.length) {
  $('html, body').animate({
  scrollTop: target.offset().top
  }, 1000);
  return false;
  }
  }
  });
});


//BUTTON SCROLL DOWN
// var aTag = $("div[name='"+ aid +"']");

$(document).ready(function() {
  $(".arrow-down-wrapper").click(function() {
    $('html, body').animate({
          scrollTop: $("how-i-work").offset().top-700
      }, 2000);
  });
});


//LOAD MORE PROJECTS
$(function () {
  $(".box").slice(0, 6).show();
  $("#loadMore").on('click', function (e) {
    e.preventDefault();
  $(".box:hidden").slice(0, 6).slideDown("slow", function() {
    $( "img" ).fadeIn(2000);
  });
  if ($(".box:hidden").length == 0) {
    $("#load").fadeIn('slow');
  }
    $('html,body').animate({
      scrollTop: $(this).offset().top
  }, 2000);
  });
});

// $('a[href="#top"]').click(function () {
//   $('body,html').animate({
//   scrollTop: 0
//   }, 6000);
//   return false;
// });

// $(window).scroll(function () {
//   if ($(this).scrollTop() > 50) {
//   $('.totop a').fadeIn('slow');
//   } else {
//   $('.totop a').fadeOut('slow');
//   }
// });


//LOAD MORE POSTS
$(function () {
  $(".post-thumb").slice(0, 3).show();
  $("#load-more-posts").on('click', function (e) {
  e.preventDefault();
  $(".post-thumb:hidden").slice(0, 3).slideDown("slow", function() {
    $( ".post-thumb" ).fadeIn(2000);
  });
  if ($("post-thumb:hidden").length == 0) {
  $("#load").fadeOut('slow');
  }
  $('html,body').animate({
  scrollTop: $(this).offset().top
  }, 2000);
  });
});


// //SHOW THE ACTIVE LINK ON MENU
// $(document).ready(function () {
//     $(document).on("scroll", onScroll);
    
//     //smoothscroll
//     var nav = $('.menu');
//     if (nav.length) {
//       $('a[href^="#"]').on('click', function (e) {
//           e.preventDefault();
//           $(document).off("scroll");
          
//           $('a').each(function () {
//               $(this).removeClass('active');
//           })
//           $(this).addClass('active');
        
//           var target = this.hash,
//               menu = target;
//           $target = $(target);
//           $('html, body').stop().animate({
//               'scrollTop': $target.offset().top+2
//           }, 500, 'swing', function () {
//               window.location.hash = target;
//               $(document).on("scroll", onScroll);
//           });
//       });
//     }
// });

function onScroll(event){
    var scrollPos = $(document).scrollTop();
    $('#menu-center a').each(function () {
        var currLink = $(this);
        var refElement = $(currLink.attr("href"));
        if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
            $('#menu-center ul li a').removeClass("active");
            currLink.addClass("active");
        }
        else{
            currLink.removeClass("active");
        }
    });
};

// ACCORDION

$(document).ready(function () {
    $('.accordion-head.first-accordion').on('click', function () { $('.process-description.first-accordion-step').slideToggle( "fast"); });
    $('.accordion-head.second-accordion').on('click', function () { $('.process-description.second-accordion-step').slideToggle( "fast"); });
    $('.accordion-head.third-accordion').on('click', function () { $('.process-description.third-accordion-step').slideToggle( "fast"); });
    $('.accordion-head.forth-accordion').on('click', function () { $('.process-description.forth-accordion-step').slideToggle( "fast"); });
    $('.accordion-head.fifth-accordion').on('click', function () { $('.process-description.fifth-accordion-step').slideToggle( "fast"); });
});


// BACK TO TOP
if ($('#back-to-top').length) {
    var scrollTrigger = 100, // px
        backToTop = function () {
            var scrollTop = $(window).scrollTop();
            if (scrollTop > scrollTrigger) {
                $('#back-to-top').addClass('show');
            } else {
                $('#back-to-top').removeClass('show');
            }
        };
    backToTop();
    $(window).on('scroll', function () {
        backToTop();
    });
    $('#back-to-top').on('click', function (e) {
        e.preventDefault();
        $('html,body').animate({
            scrollTop: 0
        }, 3000);
    });
};

// FILTER PROJECTS

// var $btns = $('.btn').click(function() {
//   if (this.id == 'all') {
//     $('#parent > div').fadeIn(450);
//   } else {
//     var $el = $('.' + this.id).fadeIn(450);
//     $('#parent > div').not($el).hide();
//   }
//   $btns.removeClass('active');
//   $(this).addClass('active');
// })

