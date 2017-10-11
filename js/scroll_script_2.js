$(document).ready(function () {
    
    var $background_display = $('.background_display'),
        $background_blur = $('.background_blur'),
        $parallax_wrapper = $(".parallax-wrapper"),
        wHeight  = $(window).height();
    
    $(window).on('resize', function(){
        wHeight = $(window).height();
    });
    
    window.requestAnimFrame = (function()
    {
        return  window.requestAnimationFrame       ||
            window.webkitRequestAnimationFrame ||
            window.mozRequestAnimationFrame    ||
            function( callback ){
                window.setTimeout(callback, 1000 / 60);
            };
    })();
    
    function Scroller()
    {
        this.latestKnownScrollY = 0;
        this.ticking            = false;
    }
    
    Scroller.prototype = {
        
        init: function() {
            $parallax_wrapper.on('scroll', this.onScroll.bind(this));
            //$background_blur.css('background-image',$('header:first-of-type').css('background-image'));
        },
        
        
        onScroll: function() {
            this.latestKnownScrollY = $parallax_wrapper.scrollTop();
            this.requestTick();
        },
        
        
        requestTick: function() {
            if( !this.ticking ) {
                window.requestAnimFrame(this.update.bind(this));
            }
            this.ticking = true;
        },
        
        update: function() {
            var currentScrollY = this.latestKnownScrollY;
            this.ticking = false;
            
            //$background_display.css('transform', 'translate3d(0, ' + (currentScrollY * 0.3) + 'px, 0)')
            
            var opacity = 1.8 * (currentScrollY / wHeight);
            
            if (opacity < 1) {
                $background_blur.css('opacity', opacity);
            } else {
                $background_blur.css('opacity', 1);
            }
        }
    };
    
    var scroller = new Scroller();
    scroller.init();
});
