$(function () {
	// 
    $('.name-header').textillate({ in: { effect: 'tada' } });
    $('.subheader').textillate({ 
    	initialDelay: 500,
    	in: { effect: 'tada' } 
    });

      $('.c-hamburger').click(function () {
      	if ($('.c-hamburger').hasClass('is-active')) {
      		$('.c-hamburger').removeClass('is-active');
      	} else{
      		$('.c-hamburger').addClass('is-active');
      	}
	 	// $(this).toggleClass("is-active");
	  });
});