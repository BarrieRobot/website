
$(document).ready(function () {
//jQuery to collapse the navbar on scroll
    /*var header_height = $('.navbar').height(),
        intro_height = $('.intro-section').height(),
        offset_val = intro_height + header_height;*/
    
    var background_display = $('.background_display'),
        background_blur = $('.background_blur');
    
    $(window).scroll(function () {
        var scroll_top = $(window).scrollTop();
        background_display.css('transform', 'translate3d(0, ' + (scroll_top * 0.2) + 'px, 0)')
    
        var opacity = 2 * (scroll_top / background_blur[0].offsetHeight);
        
        if (opacity < 1) {
            background_blur.css('opacity', opacity);
        } else {
            background_blur.css('opacity', 1);
        }
        /*if (scroll_top >= offset_val) {
            $(".navbar-fixed-top").addClass("top-nav-collapse");
            $(".navbar-fixed-top").removeClass("navbar-transparent");
        } else {
            $(".navbar-fixed-top").removeClass("top-nav-collapse");
            $(".navbar-fixed-top").addClass("navbar-transparent");
        }*/
    });
});

//jQuery for page scrolling feature - requires jQuery Easing plugin
/*
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});*/
