$(document).ready(function(){

	// preloader
	// $(".preloader-background").delay(200).fadeOut(500, function() {
	//     $(this).remove()
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
		]
	});


	$('#sandwich').click(function(event) {
		$('.nav-main').slideToggle();
	});


	$('.input__placeholder').on('click keypress focus', function(event) {
		$(this).addClass('active');
	});


	$('.sidebar .block__title').click(function(event) {
		var parent = $(this).parent();
		
		parent.toggleClass('active');
		parent.children('.block__under').slideToggle();
	});

	$('.has-submenu > a').click(function(event) {
		$(this).parent('.has-submenu').children('.submenu').slideToggle();
		return false;
	});


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


	function changeView() {
		if( window.matchMedia("(min-width: 768px)").matches) {
			$('.nav-bottom .menu-wrap [data-hover]').hover(function() {
				$('.nav-bottom .menu-wrap .sub-menu').removeClass('active');
				$( $(this).attr('data-hover') ).addClass('active');
			}, function() {
				$('.nav-bottom .menu-wrap .submenu').removeClass('active');
			});

			$('.nav-bottom .menu-wrap .submenu').hover(function() {
				$(this).addClass('active');
			}, function() {
				$(this).removeClass('active');
			});



			$('.nav-main .menu > li.has-submenu').hover(function() {
				$('.nav-bottom').addClass('active');
			});

			$('.nav-bottom').hover(function() {
				$(this).addClass('active');
			}, function() {
				$(this).removeClass('active');
			});


			$('.nav .has-submenu > a').click(function(event) {
				window.location = $(this).attr('href');
			});
		} else return false;
	}
	changeView();
	$(window).resize(function() {
		console.log('re'),
		changeView();
	});


	$('.count__minus').click(function(event) {
		var input = $(this).next();
		if( parseInt(input.val()) > 1 )
			input.val( parseInt(input.val()) - 1);
		else input.val(1);
	});

	$('.count__plus').click(function(event) {
		var input = $(this).prev();
		if( parseInt(input.val()) > 0)
			input.val( parseInt(input.val()) + 1);
		else input.val(1);
	});

	$('.count__close').click(function(event) {
		$(this).parents('.count__row').remove();
	});

	// $('.count__input').change(function(event) {
	// 	$(this).parents('.count__row').children('[data-option="count-sum"]').
	// });

	// function changeView() {
	// 	$('.nav-bottom').offset({left:0});
	// }
	// changeView();
	// jQuery(window).resize( changeView());
	// if( window.matchMedia("(max-width: 992px)").matches) {



});