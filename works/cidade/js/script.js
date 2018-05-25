$(document).ready(function(){

	// preloader
  $(".preloader-js").delay(200).fadeOut(500, function() {
      $(this).remove()
  });


  // sandwich
	var sandwich = $('#sandwich');

	sandwich.click(function() {
		sandwich.toggleClass('active-sandwich');
		jQuery('.menu').slideToggle();
	});


	$('.slick-slider').slick({
		dots: true,
		arrows: false,
		infinite: true,
		// speed: 300,
		slidesToShow: 3,
		slidesToScroll: 3,
		responsive: [
		// 	{
		// 		breakpoint: 1024,
		// 		settings: {
		// 			slidesToShow: 2,
		// 			slidesToScroll: 2,
		// 			infinite: true,
		// 			dots: false
		// 		}
		// 	},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
			}
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
		]
	});

	if (window.matchMedia("(min-width: 768px)").matches) {
		$('.slick-slider__1col').slick({
			dots: true,
			arrows: false,
			infinite: true,
			slidesToShow: 1,
			slidesToScroll: 1,
			centerMode: false
		});
	}


	$(".mix-wrap").mixItUp();


	$('.category__head').click(function(event) {
		$('.category__list').slideToggle();
	});



	var tabcontent = $('.tabcontent'),
			tablinks   = $('.tablinks');

	function openTab(tabName) {
		var currClass  = $('.' + tabName);

		tabcontent.hide().removeClass('tab-active'),
		tablinks.removeClass('tab-active'),
		currClass.show().addClass('tab-active');
	}

	tablinks.click(function(event) {
		openTab( $(this).attr('data-open') );
		$(this).addClass('tab-active');
	});

	var l = $('.tablinks').first();
	l.click();




	var maplinks = $('.maplinks');

	maplinks.click(function(event) {
		var th = $(this);

		th.toggleClass('tab-active');
		$('.' + th.attr('data-open')).toggle().toggleClass('map-active');
	});

	$('.mapcontent').hide();

});
