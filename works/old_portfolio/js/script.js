$(document).ready(function(){

	$('.js-tilt').tilt({
		maxTilt: 10,
    reset: false
	});

  // popup plugin init
  if (window.matchMedia("(min-width: 768px)").matches) {
    var works = [
      {
        t: 'Chemiplast',
        d: 'Branding Painting Website',
        c: `
        <small>
          #Wordpress #Unyson #slider #contact-form
        </small>
        <ul>
          <li>Comfortable admin panel</li>
          <li>Multi languages</li>
          <li>Products catalog</li>
          <li>Shops in map</li>
          <li>Email marketing service Mailchimp</li>
          <li>Product color palette</li>
          <li>With custom custom fields</li>
          <li>Contacts form</li>
        </ul>`
      },
      {
        t: 'Elinsa',
        d: 'Home improvement',
        c: `
        <small>
          #Wordpress #Unyson
        </small>
        <ul>
          <li>Comfortable admin panel</li>
          <li>Multi languages</li>
          <li>Cool design</li>
          <li>With custom custom fields</li>
          <li>Contacts form</li>
          <li>Shops in map</li>
        </ul>`
      },
      {
        t: 'At Maryany & Nazara',
        d: 'Hotel',
        c: `
        <small>
          #Wordpress #Unyson #slider #contact-form
        </small>
        <ul>
          <li>Comfortable admin panel</li>
          <li>Multi languages</li>
          <li>Rooms catalog</li>
          <li>Contacts form</li>
          <li>With custom custom fields</li>
          <li>Map</li>
        </ul>`
      },
      {
        t: 'Medal Top',
        d: 'Sports medal shop',
        c: `
        <small>
          #Vue #JS #cool_design
        </small>
        <ul>
          <li>Calculator</li>
          <li>Medal constructor</li>
          <li>Contacts form</li>
          <li>Map</li>
        </ul>`
      },
      {
        t: 'Lonsdale',
        d: 'Country meat market',
        c: `
        <small>
          #Wordpress #Unyson #slider #contact-form
        </small>
        <ul>
          <li>Calculator</li>
          <li>Medal constructor</li>
          <li>Contacts form</li>
          <li>Map</li>
        </ul>`
      },
      {
        t: 'Fameuz',
        d: 'Screenwriting course',
        c: `
        <small>
          #form #js #accardion #tabs #php
        </small>
        <ul>
          <li>Cool design</li>
          <li>Table prices</li>
          <li>Contact form</li>
        </ul>`
      },
      {
        t: 'Cidade Doporto',
        d: 'Shoping',
        c: `
        <small>
          #js #tabs
        </small>
        <ul>
          <li>Awesome design</li>
          <li>Interactive plan of shop</li>
          <li>Sliders, tabs</li>
        </ul>`
      },
      {
        t: 'Callcleanhome',
        d: 'Clean home services',
        c: `
        <small>
          #Wordpress #Unyson #slider #contact-form
        </small>
        <ul>
          <li>Comfortable admin panel</li>
          <li>Contacts form</li>
          <li>Sliders</li>
          <li>Map</li>
        </ul>`
      },
      {
        t: 'Batumi',
        d: 'Clean home services',
        c: `
        <small>
          #Wordpress #Unyson #slider #contact-form
        </small>
        <ul>
          <li>Comfortable admin panel</li>
          <li>Menu</li>
          <li>Contacts form</li>
          <li>Sliders, map</li>
        </ul>`
      },
      {
        t: 'Invasport',
        d: 'Sports',
        c: `
        <small>
          #Wordpress #contact-form
        </small>
        <ul>
          <li>Comfortable admin panel</li>
          <li>Contacts form</li>
          <li>Sliders, map</li>
        </ul>`
      },
      {
        t: 'Shale',
        d: 'hotel',
        c: `
        <small>
          #Wordpress ##contact-form #polylang
        </small>
        <ul>
          <li>Comfortable admin panel</li>
          <li>Multi languages</li>
          <li>Rooms catalog</li>
          <li>Contacts form</li>
          <li>With custom custom fields</li>
          <li>Map</li>
          <li>Gallery</li>
        </ul>`
      },
      {
        t: 'SoftMarket',
        d: 'Service of market',
        c: `
        <small>
          #Wordpress #contact-form #polylang
        </small>
        <ul>
          <li>Comfortable admin panel</li>
          <li>Multi languages</li>
          <li>Page builder</li>
          <li>Contacts form</li>
          <li>With custom custom fields</li>
        </ul>`
      },
      {
        t: 'WellPak',
        d: 'Service of packaging',
        c: `
        <small>
          #Wordpress #contact-form #polylang
        </small>
        <ul>
          <li>Comfortable admin panel</li>
          <li>Shorcodes</li>
          <li>Page builder</li>
          <li>Contacts form</li>
          <li>With custom custom fields</li>
        </ul>`
      },
      {
        t: 'Tour-expert',
        d: 'Tourist company',
        c: `
        <small>
          #Wordpress #contact-form
        </small>
        <ul>
          <li>Comfortable admin panel</li>
          <li>Catalog of tours</li>
          <li>Page builder</li>
          <li>Contacts form</li>
          <li>With custom custom fields</li>
        </ul>`
      },
      {
        t: 'Ecoproduct',
        d: 'Tea company',
        c: `
        <small>
          #Wordpress #contact-form #polylang
        </small>
        <ul>
          <li>Comfortable admin panel</li>
          <li>Catalog of tea products</li>
          <li>Page builder</li>
          <li>Contacts form</li>
          <li>With custom custom fields</li>
          <li>Maps</li>
        </ul>`
      },
      {
        t: 'Solarkarpaty',
        d: 'Sun company',
        c: `
        <small>
          #Wordpress
        </small>
        <ul>
          <li>Comfortable admin panel</li>
          <li>Contacts form</li>
          <li>With custom custom fields</li>
          <li>Maps</li>
        </ul>`
      },
      {
        t: 'Just site',
        d: 'About me',
        c: `
        <small>
          #form #js #tabs
        </small>
        <ul>
          <li>Contacts form</li>
          <li>Gallery</li>
          <li>Effects</li>
        </ul>`
      },
      {
        t: 'GameShop',
        d: 'My some test project',
        c: `
        <small>
          #php #sql #js
        </small>
        <ul>
          <li>Catalog games, devs, users</li>
          <li>Categories</li>
          <li>Auth</li>
          <li>Effects</li>
        </ul>`
      },
      {
        t: 'Minesweeper',
        d: 'Mob app',
        c: `
        <small>
          #js #vue #nativescript #android
        </small>
        <ul>
          <li>Online play</li>
          <li>App for android</li>
          <li>Can set options</li>
        </ul>`
      },
      {
        t: 'Eventtime',
        d: 'Social network of events',
        c: `
        <small>
          #js #vue #firebase #node #mongodb
        </small>
        <ul>
          <li>Material design</li>
          <li>Cards of events</li>
          <li>Users info</li>
          <li>Scroll pagination</li>
          <li>And more intresting</li>
        </ul>`
      },
    ];

    var btns = $('.work a[data-fancybox="cl-group"]');

    function getCaptionByIndex (index) {
      console.log(index);
      if (index >= 0 && index < works.length) {
        var d = works[index];
        var link = btns.eq(index).attr('href');
        return `
        <h3>${d.t}</h3>
        <h5>${d.d}</h5>
        <div>${d.c}</div>
        <p><a href="${link}" target=\"_blank\">Link</a></p>`;
      }
      return '';
    } 

    btns.fancybox({
        baseClass: "fancybox-custom-layout",
        infobar: false,
        touch: {
          vertical: false
        },
        buttons: [
          "close"
        ],
        animationEffect: "fade",
        transitionEffect: "fade",
        preventCaptionOverlap: false,
        idleTime: false,
        gutter: 0,
        defaultType: "iframe",
        // Customize caption area
        // caption: function(instance) {
        //   return getCaptionByIndex(instance.currIndex);
        // },

        beforeLoad: function (instance, current) {
          $.fancybox.getInstance().current.opts.caption = getCaptionByIndex(instance.currIndex);
          $.fancybox.getInstance().updateControls();
        }
    });
  } else {
    $('.btn').click('click', function (e) {
      e.preventDefault();
      e.stopPropagation();

      // location.href = $(this).attr('href');
      // maybe more crossbrowser
      $(location).attr('href', $(this).attr('href'))
    })
  }

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

