$(document).ready(function(){

	// preloader
	// $(".preloader-background").delay(200).fadeOut(500, function() {
	// 	$(this).remove()
	// });

	$('.slick-vertical').slick({
		slidesToShow: 5,
		asNavFor: '.slick-vertical_for',
		dots: false,
		arrows: true,
		centerMode: false,
		focusOnSelect: true,
		infinite: true,
		vertical: true,
		swipe: false
	});

	$('.slick-vertical_for').slick({
		slidesToShow: 1,
		arrows: false,
		fade: true,
		asNavFor: '.slick-vertical',
		// adaptiveHeight: true,
		swipe: false
	});
});