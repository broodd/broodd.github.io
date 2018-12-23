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


	(function() {
		var form = $('#form'),
				formMessages = $('#form-messages');

    form.on('submit', function(event) {
      event.preventDefault();

      // Serialize the form data.
      var formData = $(form).serialize();

      $.ajax({
        type: 'POST',
        url: form.attr('action'),
        data: formData,
        dataType: 'json',
        // beforeSend: function() {
        //  formMessages.text('Loading')
        // }
      }).fail(function(data) {
        if ( !data.success) {
          formMessages.removeClass('success');
          formMessages.addClass('error');
          formMessages.text('Oops! An error occured and your message could not be sent.');
        }
      }).done(function(data) {

        if ( !d.success) {
          formMessages.addClass('error');

          if (d.errors.text)
            formMessages.text(d.errors.text);
          if (d.errors.name)
            formMessages.text(d.errors.name);
        } else {
          formMessages.removeClass('error');
          formMessages.addClass('success');

          formMessages.text(d.message);
        }
      });
    });
	}());
});


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

