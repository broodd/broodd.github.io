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

});



function openTab(tabName, th) {
	// // Declare all variables
	// var i, tabcontent, tablinks, cityClass;

	// // Get all elements with class="tabcontent" and hide them
	// tabcontent = document.getElementsByClassName("tabcontent");
	// for (i = 0; i < tabcontent.length; i++) {
	// 	tabcontent[i].style.display = "none";
	// 	tabcontent[i].classList.remove('tab-active');
	// }

	// // Get all elements with class="tablinks" and remove the class "active"
	// tablinks = document.getElementsByClassName("tablinks");
	// for (i = 0; i < tablinks.length; i++) {
	// 	tablinks[i].className = tablinks[i].className.replace(" tab-active", "");
	// }

	// // Show the current tab, and add an "active" class to the button that opened the tab
	// cityClass = document.getElementsByClassName(tabName);
	// for (i = 0; i < cityClass.length; i++) {
	// 	cityClass[i].style.display = "block";
	// 	cityClass[i].classList.add("tab-active");
	// }
	// // evt.currentTarget.className += " active";
	// // jQuery(th).addClass('active');
	// th.classList.add("tab-active");

	var tabcontent = $('.tabcontent'),
			tablinks   = $('.tablinks'),
			currClass  = $('.' + tabName);

	tabcontent.hide().removeClass('tab-active'),
	tablinks.removeClass('tab-active'),
	currClass.show().addClass('tab-active'),
	$(this).addClass('tab-active');

}

function mapaLinks(tabName, th) {
	$(this).toggleClass('tab-active');
	$('.' + tabName).toggle().toggleClass('tab-active');
}

var l = $('.tablinks').first();
l.click();
