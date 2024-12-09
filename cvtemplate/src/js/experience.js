global.resumeLoaded = false;
var offsetTop = $('#resume').offset().top;
$(window).on("scroll", function () {
    var height = $(window).height();
    var multiply = 3;
    if ($(window).scrollTop() + height > offsetTop) {
        
        if(!global.resumeLoaded){
        $('.timeline-ico').each(function () {
            let $this = this;
            setTimeout(function(){
                $($this).animate({
                    opacity: 1,
                }, 2000);
            },150 * multiply)
            multiply++;
        });
        }
        global.resumeLoaded = true;
    }
});