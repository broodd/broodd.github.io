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
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
			}
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



	// slide category list
	$('.category__head').click(function(event) {
		$('.category__list').slideToggle();
	});


	$('.search').click(function(event) {
		console.log('awdawd');
		$('.search__form').slideToggle();
	});


	// show hide tab
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


	// show tab with hash from window and if hash is change
	var hash = window.location.hash.substr(1);

	if(hash) {
		openTab(hash);
		$('.tablinks[data-open="' +hash+ '"]').addClass('tab-active');
	}
	$(window).bind('popstate', function(event){
		var hash = window.location.hash.substr(1);
    openTab(hash);
		$('.tablinks[data-open="' +hash+ '"]').addClass('tab-active');
	});


	// show and hide content in svg map and
	var maplinks = $('.maplinks');

	maplinks.click(function(event) {
		var th = $(this);

		th.toggleClass('tab-active');
		$('.' + th.attr('data-open')).toggle().toggleClass('map-active');
	});

	$('.mapcontent').hide();




	// for change piso(floor)
	var mapa       = $('.mapa-wrap .mapa'),
			mapaCount  = mapa.length,
			mapaFirst  = mapa.first(),
			mapaLast   = mapa.last(),
			pisoNext   = $('.map__piso .piso__next'),
			pisoPrev   = $('.map__piso .piso__prev'),
			pisoNumber = $('.piso__number');

	mapa.hide().first().show().addClass('map-active');

	function mapIndex() {
		var index = $('.map-active').index();
		pisoNumber.text(index + 1);
	}

	pisoNext.click(function(event) {
		var mapaCurr = $('.map-active'),
				mapaPrev = mapaCurr.prev();


		if( mapaPrev.length == 0 ) {
			mapaCurr.removeClass('map-active').hide(),
			mapaLast.addClass('map-active').show();
		}
		else {
			mapaCurr.removeClass('map-active').hide(),
			mapaPrev.addClass('map-active').show();
		}
		mapIndex();
	});

	pisoPrev.click(function(event) {
		var mapaCurr = $('.map-active'),
				mapaNext = mapaCurr.next();


		if( mapaNext.length == 0 ) {
			mapaCurr.removeClass('map-active').hide(),
			mapaFirst.addClass('map-active').show();
		}
		else {
			mapaCurr.removeClass('map-active').hide(),
			mapaNext.addClass('map-active').show();
		}
		mapIndex();
	});	


	$('.mapadesc').click(function(event) {
		var th = $(this);

		$('.' + th.attr('data-open')).fadeIn().addClass('mapa-active'),
		$('.mapa-wrap').addClass('active');
	});

	$('.mapa__desc .close').click(function(event) {
		$('.mapa-wrap').removeClass('active'),
		$('.mapa-active').removeClass('mapa-active').fadeOut();
	});



	var mix = $('.mix-wrap');
	if(mix.length !== 0)
		$(".mix-wrap").mixItUp();

});
