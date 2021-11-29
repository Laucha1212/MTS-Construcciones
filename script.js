$(window).scroll(function() {
    if( $(this).scrollTop() > 50 ) {
        $('.navbar-fixed-top').addClass("navbar-fixed-top-sticky");
    } else {
        $('.navbar-fixed-top').removeClass("navbar-fixed-top-sticky");
    }
});