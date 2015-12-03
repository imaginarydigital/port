$(function() {
    var pull        = $('.collapsed-btn');
        menu        = $('.nav');
        items		= $('.nav-item');
        menuHeight  = menu.height();
 
    $(pull).on('click', function(e) {
        // if ($('.c-hamburger').hasClass('is-active')) {
        //     $('.c-hamburger').removeClass('is-active');
        // }else{
        //     $('.c-hamburger').addClass('is-active');
        // }
        e.preventDefault();
        menu.slideToggle();
    });


    $(items).on('click', function(e) {
    	var width = $(window).width();
    	if (width < 768) {
    		menu.slideToggle();
    	}
        if ($('.c-hamburger').hasClass('is-active')) {
            $('.c-hamburger').removeClass('is-active');
        }
    });
});

$(window).resize(function(){
    var w = $(window).width();
    if(w > 320 && menu.is(':hidden')) {
        menu.removeAttr('style');
    }
}); 
