$(document).ready(function(){

	// preloader
	// $(".preloader-background").delay(200).fadeOut(500, function() {
	//     $(this).remove()
	// });

	$('.icon-close').click(function(event) {
		$(this).parents('.toggle').fadeOut();
		$('.window').fadeOut();
		// $('body').removeClass('overlay');
	});

	$('.hide-toggle').click(function(event) {
		$(this).parents('.toggle').fadeOut();
	});

	$('[data-open]').click(function(event) {
		$( $(this).attr('data-open') ).addClass('active-window').fadeIn();
		// $('body').addClass('overlay');
		$('.window').fadeIn();
		return false;
	});

	$('.window').click(function(event) {
		$('.active-window').fadeOut();
		$(this).fadeOut();
	});



	$('.sidebar .block__title').click(function(event) {
		var parent = $(this).parent();
		
		parent.toggleClass('active');
		parent.children('.block__under').slideToggle();
	});

	$('.sidebar .block .has-submenu a').click(function(event) {
		$(this).parent('.has-submenu').children('.submenu').slideToggle();
		return false;
	});


	// $('.slick-wrap').slick({
	 //  // slidesToShow: 1,
	 //  // slidesToScroll: 1
	// });

	$('.slick__1').slick({
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1, 	
		swipeToSlide: true
	});

	$('.slick__4').slick({
		infinite: true,
		slidesToShow: 4,
		// slidesToScroll: 1,
		swipeToSlide: true,
		responsive: [
			{
				breakpoint: 1200,
				settings: {
					slidesToShow: 3,
				}
			},
			{
				breakpoint: 992,
				settings: {
					slidesToShow: 2,
				}
			},
			{
				breakpoint: 700,
				settings: {
					slidesToShow: 1,
				}
			}
		// You can unslick at a given breakpoint now by adding:
		// settings: "unslick"
		// instead of a settings object
		]
	});

});