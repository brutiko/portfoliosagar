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

$('a[href=#top]').click(function () {
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









