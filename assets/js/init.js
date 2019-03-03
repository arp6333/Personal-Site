// initialize necessary materialize components
(function($){
    $(function(){
        // side bar navigation
        $('.sidenav').sidenav();
        
        // modal
        $('.modal').modal();
        
        // carousel
        $('.carousel').carousel();
        $('.carousel.carousel-slider').carousel({
            fullWidth: true,
            indicators: true
        });
        
        // card tab
        $('.tabs').tabs();
        
        // dropdown
        // $('.dropdown-trigger').dropdown();
    });
})(jQuery);