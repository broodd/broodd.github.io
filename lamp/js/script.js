$(document).ready(function () {
	$('.slider').slick({
		arrows: true,
		dots: true,
		swipeToSlide: true,
		autoplay: true,
		autoplaySpeed: 3000,
	})


	var form = $('#form-data');

	form.on('submit', function (event) {
		event.preventDefault();
		var formMessages = $('#form-messages');

		// Serialize the form data.
		var formData = $(this).serialize();

		$.ajax({
			type: 'POST',
			url: form.attr('action'),
			data: formData,
			dataType: 'json',
			// beforeSend: function() {
			//  formMessages.text('Loading')
			// }
		}).fail(function (data) {
			formMessages.text('Спасибо за заявку, в ближайшее время мы свяжемся с вами')
			formMessages.addClass('success');

			// if ( !data.success) {
			//   formMessages.removeClass('success');
			// formMessages.addClass('error');
			//   formMessages.text('Попробуйте ще раз');
			// }
		}).done(function (data) {

			formMessages.text('Спасибо за заявку, в ближайшее время мы свяжемся с вами');
			formMessages.addClass('success');

			// if ( !d.success) {
			//   formMessages.addClass('error');

			//   if (d.errors.phone)
			//     formMessages.text(d.errors.phone);
			//   if (d.errors.name)
			//     formMessages.text(d.errors.name);
			//   if (d.errors.city)
			//     formMessages.text(d.errors.city);
			// } else {
			//   formMessages.removeClass('error');
			//   formMessages.addClass('success');

			//   formMessages.text(d.message);
			// }
		});
	})

	try {
		$('.js-tilt').tilt({
			glare: false,
			maxTilt: 15,
			reset: false,
			// perspective: 10000,
			slale: 1.1
		})
	} catch (e) { }

	try {
		const second = 1000,
			minute = second * 60,
			hour = minute * 60,
			day = hour * 24;
		// var tomorrow = new Date();
		// tomorrow.setDate(tomorrow.getDate() + 1);
		// tomorrow.setDate(tomorrow.getHours() + 1);

		// let countDown = new Date(new Date().getTime() + 24 * 60 * 60 * 1000).getTime(),
		let countDown = new Date('Jan 30, 2020 00:00:00').getTime();
		function timer() {

			let now = new Date().getTime(),
				distance = countDown - now;

			document.getElementById('days').innerText = Math.floor(distance / (day)),
				document.getElementById('hours').innerText = Math.floor((distance % (day)) / (hour)),
				document.getElementById('minutes').innerText = Math.floor((distance % (hour)) / (minute)),
				document.getElementById('seconds').innerText = Math.floor((distance % (minute)) / second);

			//do something later when date is reached
			//if (distance < 0) {
			//  clearInterval(x);
			//  'IT'S MY BIRTHDAY!;
			//}

		}
		timer()
		x = setInterval(timer, second)
	} catch (e) { }


	jQuery('a.js-scroll').click(function () {
		var scrollEl = jQuery(this).attr('href').split('#')[1]
		var scrollTo = 0
		if (scrollEl) {
			scrollTo = jQuery('#' + scrollEl).offset().top
		}

		jQuery('html, body').animate({
			scrollTop: scrollTo
		}, 700);

		return false;
	});



	$('.js-tilt-img').tilt({
		maxTilt: 10,
	})

	try {
		$('.phone').mask('+380 (00) 000-00-00', {
			placeholder: "+380 (00) 000-00-00"
		});
	} catch (e) { }

	try {
		particlesJS('particles-js', {
			"particles": {
				"number": {
					"value": 300,
					"density": {
						"enable": true,
						"value_area": 800
					}
				},
				"color": {
					"value": "#ffffff"
				},
				"shape": {
					"type": "circle",
					"stroke": {
						"width": 0,
						"color": "#000000"
					},
					"polygon": {
						"nb_sides": 5
					},
					"image": {
						"src": "img/github.svg",
						"width": 100,
						"height": 100
					}
				},
				"opacity": {
					"value": 1,
					"random": true,
					"anim": {
						"enable": true,
						"speed": 1,
						"opacity_min": 0,
						"sync": false
					}
				},
				"size": {
					"value": 3,
					"random": true,
					"anim": {
						"enable": false,
						"speed": 4,
						"size_min": 0.3,
						"sync": false
					}
				},
				"line_linked": {
					"enable": false,
					"distance": 150,
					"color": "#ffffff",
					"opacity": 0.4,
					"width": 1
				},
				"move": {
					"enable": true,
					"speed": 1,
					"direction": "none",
					"random": true,
					"straight": false,
					"out_mode": "out",
					"bounce": false,
					"attract": {
						"enable": false,
						"rotateX": 600,
						"rotateY": 600
					}
				}
			},
			"interactivity": {
				"detect_on": "canvas",
				"events": {
					"onhover": {
						"enable": false,
						"mode": "bubble"
					},
					"onclick": {
						"enable": false,
						"mode": "repulse"
					},
					"resize": true
				},
				"modes": {
					"grab": {
						"distance": 400,
						"line_linked": {
							"opacity": 1
						}
					},
					"bubble": {
						"distance": 250,
						"size": 0,
						"duration": 2,
						"opacity": 0,
						"speed": 3
					},
					"repulse": {
						"distance": 270,
						"duration": 0.4
					},
					"push": {
						"particles_nb": 4
					},
					"remove": {
						"particles_nb": 2
					}
				}
			},
			"retina_detect": true
		});

	} catch (e) { }

})