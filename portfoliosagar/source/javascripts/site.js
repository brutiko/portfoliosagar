// This is where it all goes :)
//LOAD MORE
// $(function(){
//     $("div").slice(0, 10).show(); // select the first ten
//     $("#load").click(function(e){ // click event for load more
//         e.preventDefault();
//         $("div:hidden").slice(0, 10).show(); // select next 10 hidden divs and show them
//         if($("div:hidden").length == 0){ // check if any hidden divs still exist
//             alert("No more divs"); // alert if there are none left
//         }
//     });
//});

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





