

(function($) {          
    $(document).ready(function(){ 
        $('nav').hide();

        $(window).scroll(function(){                          
            if ($(this).scrollTop() > 200) {
                $('nav').fadeIn(300);
            } else {
                $('nav').fadeOut(300);
            }
        });

        $('goTop').click(function(){
            $("html, body").animate({
                scrollTop: 0
            }, 600);
            return false;
        });
    });
})(jQuery);


