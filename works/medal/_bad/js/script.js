$(document).ready(function(){

	$('a[onclick]').click(function(e){
		e.preventDefault();
	});

	$('.creation input').change(function(e){
		var newImg = $(this).next().attr('src');
		$(this).parents('.const-right').prev().find('img').attr('src', newImg);
		$(this).parents('.row').prev().find('.elname').text($(this).data('name'));
		$(this).parents('.row').prev().find('.elheight').text($(this).data('height'));
		var totalPrice = 0;
		var totalHeight = 0;
		$('.creation input:checked').each(function(){
			totalPrice += parseInt($(this).data('price'));
			totalHeight += parseInt($(this).data('height'));
		});
		$('.total-price').text(totalPrice);
		$('.total-height').text(totalHeight);
		$('.tprice').val(totalPrice);
		$('.theight').val(totalHeight);
	});

	$('.const-left .slick-next').click(function(){
		var curInput = $(this).parents('.const-left').next().find('input:checked').data('num');
		var nextInp = parseInt(curInput) + 1;
        $(this).parents('.const-left').next().find('input[data-num="'+nextInp+'"]').trigger('click');
	});

    $('.const-left .slick-prev').click(function(){
        var curInput = $(this).parents('.const-left').next().find('input:checked').data('num');
        var prevInp = parseInt(curInput) - 1;
        $(this).parents('.const-left').next().find('input[data-num="'+prevInp+'"]').trigger('click');
    });

    $('.creation input[data-num="1"]').trigger('click');

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

	$('.slick__5').slick({
		slidesToShow: 5,
		infinite: true,
		swipeToSlide: true,
		focusOnSelect: true,
		responsive: [
			{
				breakpoint: 992,
				settings: {
					slidesToShow: 4,
				}
			},
			{
				breakpoint: 400,
				settings: {
					slidesToShow: 3,
				}
			},
		]
	});


	$('.slick__1-const-1').slick({
		slidesToShow: 1,
		infinite: true,
		swipeToSlide: true,
		// focusOnSelect: true
		//asNavFor: '.slick__10-const-1',
	});
	$('.slick__10-const-1').slick({
		slidesToShow: 10,
		infinite: true,
		// slidesToScroll: 1,
		touchThreshold: 15,
		swipeToSlide: true,
		focusOnSelect: true,
		//asNavFor: '.slick__1-const-1',
		responsive: [
			{
				breakpoint: 576,
				settings: {
					slidesToShow: 5,
				}
			},
		]
	});
	
	$('.slick__1-const-2').slick({
		slidesToShow: 1,
		infinite: true,
		swipeToSlide: true,
		// focusOnSelect: true
		asNavFor: '.slick__10-const-2',
	});
	$('.slick__10-const-2').slick({
		slidesToShow: 10,
		infinite: true,
		// slidesToScroll: 1,
		touchThreshold: 15,
		swipeToSlide: true,
		focusOnSelect: true,
		asNavFor: '.slick__1-const-2',
		responsive: [
			{
				breakpoint: 576,
				settings: {
					slidesToShow: 5,
				}
			},
		]
	});

	$('.slick__1-const-3').slick({
		slidesToShow: 1,
		infinite: true,
		swipeToSlide: true,
		// focusOnSelect: true
		asNavFor: '.slick__10-const-3',
	});
	$('.slick__10-const-3').slick({
		slidesToShow: 10,
		infinite: true,
		// slidesToScroll: 1,
		touchThreshold: 15,
		swipeToSlide: true,
		focusOnSelect: true,
		asNavFor: '.slick__1-const-3',
		responsive: [
			{
				breakpoint: 576,
				settings: {
					slidesToShow: 5,
				}
			},
		]
	});


	$('.slick__for').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		fade: true,
		asNavFor: '.slick__vertical',
		// adaptiveHeight: true,
		swipe: false
	});
	$('.slick__vertical').slick({
		slidesToShow: 4,
		slidesToScroll: 1,
		asNavFor: '.slick__for',
		dots: false,
		arrows: false,
		centerMode: false,
		focusOnSelect: true,
		infinite: false,
		vertical: true,
		swipe: false,
		responsive: [
			{
				breakpoint: 576,
				settings: {
					vertical: false,
				}
			}
		]
	});

	//slow scroll
	$('a.scroll').click(function(event){
		event.preventDefault();
		$(document).off("scroll");
		
		// var target = $(this).attr('href');
		$('html, body').animate({ scrollTop : 0 }, 700);
	});

	// sandwich menu
	$('#sandwich').click(function(event) {
		$('.nav-main').slideToggle();
	});

	// effect input placeholder
	$('.input__placeholder input').each(function(index, el) {
		if( $(this).val() !== '' )
			$(this).parent().addClass('active');
	});
	$('.input__placeholder').on('click keypress focus', function(event) {
		$(this).addClass('active');
	});

	// some accardion
	$('.sidebar .block__title').click(function(event) {
		var parent = $(this).parent();
		
		parent.toggleClass('active');
		parent.children('.block__under').slideToggle();
	});

	$('.has-submenu > a').click(function(event) {
		$(this).parent('.has-submenu').children('.submenu').slideToggle();
		return false;
	});


	// some functions for show, hide form: sign_in and sign_up 
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


	// change view in catalog
	var view_wrap = $('.view-wrap');
	view_wrap.click(function(event) {
		view_wrap.removeClass('active'),
		$(this).addClass('active');
	});


	// function for resize window
	function changeView() {
		if( window.matchMedia("(min-width: 992px)").matches) {
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
			console.log("if true");
		} else {
			console.log("if false");
			return false;
		}
	}
	changeView();
	$(window).resize(function() {
		console.log("resize");
		changeView();
	});


	// for change count in input
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

    function validateEmail($email) {
        var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
        return emailReg.test( $email );
    }

    $('#subcribe').click(function(e){
        e.preventDefault();
        var email = $('#input-newsletter').val();

        if(email == ''){
            var error = 'Введите email адрес!';
        }

        if( !validateEmail(email)) {
            var error = 'Введите правильный email адрес!';
        }

        if(error != null){
            $('#error-msg').html('');
            $('#error-msg').append('<b style=\"color:red\">' + error + '</b>');
        } else {

            var dataString = 'email='+ email;
            $.ajax({
                url: 'index.php?route=common/footer/addToNewsletter',
                type: 'post',
                data: dataString,
                success: function(html) {
                    $('#error-msg').append('<b style=\"color:green\">' + html + '</b>');
                }

            });
        }

    })

});