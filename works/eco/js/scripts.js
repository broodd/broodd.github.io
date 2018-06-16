jQuery(document).ready(function() {

	// preloader
	jQuery(".preloader-js").delay(1000).fadeOut(550, function() {
		jQuery(this).remove();
	});

	//slow scroll
	jQuery('a[href*="#"]').click(function(e){
		e.preventDefault();
		jQuery(document).off("scroll");
		var target = jQuery(this).attr('href');
		jQuery('html, body').animate({ scrollTop : jQuery(target).offset().top }, 700);
	});


	var body = jQuery('body');
	function changeView() {
		jQuery('#sandwich').click(function(event) {
			// alert('lox');
			if( window.matchMedia("(max-width: 992px)").matches) {
				// jQuery('.header__nav').slideToggle();
				body.toggleClass('nav-mobile');
			} else { 
				body.toggleClass('nav-active');
			}
			body.toggleClass('window');
		}); 
	}
	// jQuery(window).resize(changeView());
	changeView();


	jQuery('.over-window').click(function(event) {
		jQuery('body').removeClass('nav-active');
		jQuery('body').removeClass('window');

		jQuery('body').removeClass('window');
		jQuery('.header__search .search-form').fadeOut();
	});

	jQuery('.header .fa-search, .header__search .fa-close').click(function(event) {
		jQuery('body').toggleClass('window');
		jQuery('.header__search .search-form').fadeToggle();
	});

	jQuery('.telephone-wrap strong').prepend('<i class="fa fa-phone"></i>');
	jQuery('.vertical .fw-container').prepend('<div class="vertical-line"></div>');


	// jQuery('#cat option').click(function(event) {
		// alert('awd');
	// });

	// function tabView() {
	// }

	// tabView();

	// jQuery(window).resize(function() {
	// 	tabView();
	// });

});
