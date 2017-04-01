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
  $(".project-row").slice(0, 2).show();
  $("#loadMore").on('click', function (e) {
    e.preventDefault();
  $(".project-row:hidden").slice(0, 2).slideDown("slow", function() {
    $( "img" ).fadeIn( 12000 );
  });
  if ($(".project-row:hidden").length == 0) {
    $("#load").fadeIn('slow');
  }
    $('html,body').animate({
      scrollTop: $(this).offset().top
  }, 6000);
  });
});

$('a[href="#top"]').click(function () {
  $('body,html').animate({
  scrollTop: 0
  }, 1000);
  return false;
});

$(window).scroll(function () {
  if ($(this).scrollTop() > 50) {
  $('.totop a').fadeIn();
  } else {
  $('.totop a').fadeOut();
  }
});


//LOAD MORE POSTS
$(function () {
  $(".post-row").slice(0, 1).show();
  $("#load-more-posts").on('click', function (e) {
  e.preventDefault();
  $(".post-row:hidden").slice(0, 1).slideDown("slow", function() {
    $( ".post-thumb" ).fadeIn( 12000 );
  });
  if ($("post-row:hidden").length == 0) {
  $("#load").fadeOut('slow');
  }
  $('html,body').animate({
  scrollTop: $(this).offset().top
  }, 6000);
  });
});


//SHOW THE ACTIVE LINK ON MENU
$(document).ready(function () {
    $(document).on("scroll", onScroll);
    
    //smoothscroll
    var nav = $('.menu');
    if (nav.length) {
      $('a[href^="#"]').on('click', function (e) {
          e.preventDefault();
          $(document).off("scroll");
          
          $('a').each(function () {
              $(this).removeClass('active');
          })
          $(this).addClass('active');
        
          var target = this.hash,
              menu = target;
          $target = $(target);
          $('html, body').stop().animate({
              'scrollTop': $target.offset().top+2
          }, 500, 'swing', function () {
              window.location.hash = target;
              $(document).on("scroll", onScroll);
          });
      });
    }
});

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
}

// ACCORDION

$(document).ready(function () {
    $('.accordion-head.first-accordion').on('click', function () { $('.process-description.first-accordion-step').slideToggle( "fast"); });
    $('.accordion-head.second-accordion').on('click', function () { $('.process-description.second-accordion-step').slideToggle( "fast"); });
    $('.accordion-head.third-accordion').on('click', function () { $('.process-description.third-accordion-step').slideToggle( "fast"); });
    $('.accordion-head.forth-accordion').on('click', function () { $('.process-description.forth-accordion-step').slideToggle( "fast"); });
    $('.accordion-head.fifth-accordion').on('click', function () { $('.process-description.fifth-accordion-step').slideToggle( "fast"); });
});
    

