

(function($) {          
    $(document).ready(function(){ 
        
        wow = new WOW(
            {
            boxClass:     'wow',      // default
            animateClass: 'animated', // default
            offset:       0,          // default
            mobile:       true,       // default
            live:         true        // default
          }
          )
          wow.init();

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


