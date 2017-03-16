//SCROLL DOWN
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


//LOAD MORE
$(function () {
  $(".project-row").slice(0, 2).show();
  $("#loadMore").on('click', function (e) {
  e.preventDefault();
  $(".project-row:hidden").slice(0, 2).slideDown();
  if ($("project-row:hidden").length == 0) {
  $("#load").fadeOut('slow');
  }
  $('html,body').animate({
  scrollTop: $(this).offset().top
  }, 1500);
  });
});

$('a[href="#top"]').click(function () {
  $('body,html').animate({
  scrollTop: 0
  }, 600);
  return false;
});

$(window).scroll(function () {
  if ($(this).scrollTop() > 50) {
  $('.totop a').fadeIn();
  } else {
  $('.totop a').fadeOut();
  }
});


//SHOW THE ACTIVE LINK ON MENU
$(document).ready(function () {
    $(document).on("scroll", onScroll);
    
    //smoothscroll
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






