$(document).ready(function(){
	// // preloader
	// $(".preloader-background").delay(200).fadeOut(500, function() {
	// 	$(this).remove()
	// });

	// $('a').not('a[href="#"]').click(function(event) {
	// 	alert('clikc');
	// });


	$('.js-tilt').tilt({
		maxTilt: 8,
	});

	// skills active when scroll to him
	jQuery(window).scroll(function(event) {
		if( jQuery(window).scrollTop() + $(window).height() + 100 >= $('#skills').offset().top ) {
			$('#skills').addClass('active');
		} else {
			$('#skills').removeClass('active');
		}
	});

	$('.tags .tag').click(function(event) {
		$('#name').val( randomFromArray(names) );
		$('#text').val( $(this).text().substring(1) );
	});


	// $('.js-hover-parallax').mousemove(function(event) {
	// 	th   = $(this),
	// 	item = $('.js-hover-parallax .item');
	// });

	$(function() {
		var form = $('#form'),
				formMessages = $('#form-messages');

		form.submit(function(event) {
			event.preventDefault();

			// Serialize the form data.
			// var formData = $(form).serialize();

			var formData = {
				'name' : $('#name').val(),
				'text' : $('#text').val()
			}

			$.ajax({
				type: 'POST',
				url: form.attr('action'),
				data: formData,
				dataType: 'json'
			}).fail(function(data) {
				// Make sure that the formMessages div has the 'error' class.
				formMessages.removeClass('success');
				formMessages.addClass('error');

				// Set the message text.
				if (data.responseText !== '') {
					formMessages.text(data.responseText + ' error');
				} else {
					formMessages.text('Oops! An error occured and your message could not be sent.');
				}
			}).done(function(data) {
				// Make sure that the formMessages div has the 'success' class.
				formMessages.removeClass('error');
				formMessages.addClass('success');

				// Set the message text.
				// $(formMessages).text(response);
				formMessages.text('done');

				// Clear the form.
				$('#name').val('');
				$('#email').val('');
				$('#message').val('');
				console.log(data);
			});
		});
});

});


// random items from array
function randomFromArray(arg) {
	return arg[ Math.floor(Math.random() * arg.length) ];
}


var names = [
		'Noah',
		'William',
		'James',
		'Benjamin',
		'Daniel',
		'David',
		'John',
		'Jack',
		'Jaxon',
		'Thomas',
		'Olivia',
		'Isabella',
		'Ava',
		'Andrea',
		'Alexis',
		'Sara',
		'Victoria',
	];

