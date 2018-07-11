$(document).ready(function(){

	// preloader
	// $(".preloader-background").delay(200).fadeOut(500, function() {
	// 	$(this).remove()
	// });

	var autoplay = 2000;
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
		swipe: false,
	});


	$('.slick__4').slick({
		slidesToShow: 4,
		dots: false,
		arrows: true,
		infinite: true,
		swipeToSlide: true,
		autoplay: true,
		autoplaySpeed: autoplay,
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
		autoplay: true,
		autoplaySpeed: autoplay,
	});
	$('.slick__1_dots').slick({
		slidesToShow: 1,
		dots: true,
		arrows: true,
		infinite: true,
		swipeToSlide: true,
		autoplay: true,
		autoplaySpeed: autoplay,
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



  $('.wrapper-section .title-arrow').click(function(){
    $(this).toggleClass('open');
    // $(this).next('div.wrap-selector__list').slideToggle();
    $(this).next('.wrap-selector__list').toggleClass('open');;
  });


	$( function() {
    $( "#wrapper-section__slider" ).slider({
      range: true,
      min: 0,
      max: 100000,
      values: [ 1755, 84556 ],
      slide: function( event, ui ) {
        $( "#number-1" ).val( ui.values[ 0 ] );
        $( "#number-2" ).val( ui.values[ 1 ] );
      }
    });
    $( "#number-1" ).val( $( "#wrapper-section__slider" ).slider( "values", 0 ) );
    $( "#number-2" ).val( $( "#wrapper-section__slider" ).slider( "values", 1 ) );
  } );
  $("input#number-1").change(function(){
    var value1=$("input#number-1").val();
    var value2=$("input#number-2").val();
    if(parseInt(value1) > parseInt(value2)){
      value1 = value2;
      $("input#number-1").val(value1);
    }
    $("#wrapper-section__slider").slider("values",0,value1);
  });
  $("input#number-2").change(function(){
    var value1=$("input#number-1").val();
    var value2=$("input#number-2").val();
    if(parseInt(value1) > parseInt(value2)){
      value2 = value1;
      $("input#number-2").val(value2);
    }
    $("#wrapper-section__slider").slider("values",1,value2);
  });
});