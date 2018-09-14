function loaderSpinner() {
  $(window).load(function() {
    var loader = $('.loader');
    // var wHeight = $(window).height();
    // var wWidth = $(window).width();
    var i = 0;
    /*Center loader on half screen */
    // loader.css({
    //   top: wHeight / 2 - 2.5,
    //   left: wWidth / 2 - 200
    // });
    
    do{
      loader.animate({
        width: i
      },10)
      i+=3;
    } while(i <= 400)
    if(i === 402){
      loader.animate({
        left: 0,
        width: '100%'
      })
      loader.animate({
        top: '0',
        height: '100vh'
      })
    }
    
    /* This line hide loader and show content */
    setTimeout(function(){
      $('.loader-wrap').fadeIn("slow");
      (loader).fadeOut("fast");
      /*Set time in milisec */
    },3500);
  });

}

loaderSpinner();



$(document).ready(function(){
	// // preloader

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
			var formData = $(form).serialize();

			$.ajax({
				type: 'POST',
				url: form.attr('action'),
				data: formData,
				dataType: 'json',
				// beforeSend: function() {
				// 	formMessages.text('Loading')
				// }
			}).fail(function(data) {
				if ( !data.success) {
					formMessages.removeClass('success');
					formMessages.addClass('error');
					formMessages.text('Oops! An error occured and your message could not be sent.');
				}
			}).done(function(data) {
				console.log(typeOf(data));
				console.log(data);
				data = JSON.parse(data);
				console.log(data);
				if ( !data.success) {
					formMessages.addClass('error');

					if (data.errors.text)
						formMessages.text(data.errors.text);
					if (data.errors.name)
						formMessages.text(data.errors.name);
				} else {
					formMessages.removeClass('error');
					formMessages.addClass('success');

					formMessages.text(data.message);
				}
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

