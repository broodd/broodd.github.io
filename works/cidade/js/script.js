$(document).ready(function(){

	// preloader
  $(".preloader-background").delay(200).fadeOut(500, function() {
      $(this).remove()
  });

  // sandwich
	var sandwich = $('#sandwich');

	sandwich.click(function() {
		sandwich.toggleClass('active-sandwich');
		jQuery('.menu').slideToggle();
		// jQuery('.header__nav, body').toggleClass('active');
	});

	$('.slick-slider').slick({
		dots: true,
		arrows: false,
		infinite: true,
		// speed: 300,
		slidesToShow: 3,
		slidesToScroll: 3,
		// responsive: [
		// 	{
		// 		breakpoint: 1024,
		// 		settings: {
		// 			slidesToShow: 2,
		// 			slidesToScroll: 2,
		// 			infinite: true,
		// 			dots: false
		// 		}
		// 	},
		// 	{
		// 		breakpoint: 768,
		// 		settings: {
		// 			slidesToShow: 1,
		// 			slidesToScroll: 1
		// 		}
		// 	},
		// 	{
		// 		breakpoint: 576,
		// 		settings: {
		// 			slidesToShow: 1,
		// 			slidesToScroll: 1
		// 		}
		// 	}
		// // You can unslick at a given breakpoint now by adding:
		// // settings: 'unslick"
		// // instead of a settings object
		// ]
	});

	$('.slick-slider__1col').slick({
		dots: true,
		arrows: false,
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		centerMode: false
	});

});