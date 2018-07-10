$(document).ready(function(){

	// preloader
	// $(".preloader-background").delay(200).fadeOut(500, function() {
	// 	$(this).remove()
	// });

	$('.slick__vertical').slick({
		slidesToShow: 5,
		asNavFor: '.slick-vertical_for',
		dots: false,
		arrows: true,
		centerMode: false,
		focusOnSelect: true,
		infinite: true,
		vertical: true,
		swipe: false,
		responsive: [
			{
				breakpoint: 768,
				settings: {
					vertical: false,
				}
			}
		]
	});

	$('.slick-vertical_for').slick({
		slidesToShow: 1,
		arrows: false,
		fade: true,
		asNavFor: '.slick-vertical',
		// adaptiveHeight: true,
		swipe: false
	});


	$('.slick__4').slick({
		slidesToShow: 4,
		dots: false,
		arrows: true,
		infinite: true,
		swipeToSlide: true,
		responsive: [
			{
				breakpoint: 1300,
				settings: {
					slidesToShow: 3
				}
			},
			{
				breakpoint: 900,
				settings: {
					slidesToShow: 2
				}
			},
			{
				breakpoint: 650,
				settings: {
					slidesToShow: 1
				}
			}
		]
	});
	$('.slick__1').slick({
		slidesToShow: 1,
		dots: false,
		arrows: true,
		infinite: true,
		swipeToSlide: true,
	});
	$('.slick__1_dots').slick({
		slidesToShow: 1,
		dots: true,
		arrows: true,
		infinite: true,
		swipeToSlide: true,
	});
	// $('.slick__1_1').slick({
	// 	slidesToShow: 1,
	// 	dots: false,
	// 	arrows: true,
	// 	infinite: true,
	// 	swipeToSlide: true,
	// });


	// $('.sub-menu').css({
	// 	width: $(this).parents('navbar').width() - $(this).parents('.nav-bottom').width(),
	// 	height: $(this).parents('.nav-bottom').height()
	// });

	function changeView() {
		if( window.matchMedia("(max-width: 992px)").matches) {
			$('.nav-bottom .menu-main li a .arrow-right').click(function(event) {
				$(this).parent().parent().children('.sub-menu').slideToggle();
				return false;
			});
			$('.nav-bottom .btn-nav').click(function(event) {
				$('.menu-main').slideToggle();
			});
		} else {
			$('.sub-menu').width( $('.navbar').width() - $('.nav-bottom').width() - 15);
			$('.sub-menu').height( $('.menu-main').height() );
		}
	}

	$(window).resize(function(event) {
		changeView();
	});
	changeView();



	$('.tablink').on('click', function(event) {
		event.preventDefault();
		var parent = $(this).parents('.tab-wrap'),
				target = $(this).attr('data-open');
		
		parent.find('.tablink').removeClass('active');
		parent.find('.tabcontent').hide().removeClass('active');

		parent.children('.'+ target);
		$('.tabcontent.'+ target).show().addClass('active');
		$(this).addClass('active');
	});
	$('.tab .tablink:first-child').click();
});