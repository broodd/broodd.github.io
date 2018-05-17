$(document).ready(function(){

	// preloader
    $(".preloader-background").delay(200).fadeOut(500, function() {
        $(this).remove()
    });

    // sandwich
		var sandwich = jQuery('#sandwich');

		sandwich.click(function() {
			sandwich.toggleClass('active-sandwich');
			jQuery('.header__nav .menu-menu-1-container').slideToggle();
			jQuery('.header__nav, body').toggleClass('active');
		});

});