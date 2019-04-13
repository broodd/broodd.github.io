"use strict";

$(document).ready(function () {
  $('.js-tilt').tilt({
    maxTilt: 10,
    reset: false
  }); // popup plugin init

  if (window.matchMedia("(min-width: 768px)").matches) {
    var getCaptionByIndex = function getCaptionByIndex(index) {
      console.log(index);

      if (index >= 0 && index < works.length) {
        var d = works[index];
        var link = btns.eq(index).attr('href');
        return "\n        <h3>".concat(d.t, "</h3>\n        <h5>").concat(d.d, "</h5>\n        <div>").concat(d.c, "</div>\n        <p><a href=\"").concat(link, "\" target=\"_blank\">Link</a></p>");
      }

      return '';
    };

    var works = [{
      t: 'Chemiplast',
      d: 'Branding Painting Website',
      c: "\n        <small>\n          #Wordpress #Unyson #slider #contact-form\n        </small>\n        <ul>\n          <li>Comfortable admin panel</li>\n          <li>Multi languages</li>\n          <li>Products catalog</li>\n          <li>Shops in map</li>\n          <li>Email marketing service Mailchimp</li>\n          <li>Product color palette</li>\n          <li>With custom custom fields</li>\n          <li>Contacts form</li>\n        </ul>"
    }, {
      t: 'Elinsa',
      d: 'Home improvement',
      c: "\n        <small>\n          #Wordpress #Unyson\n        </small>\n        <ul>\n          <li>Comfortable admin panel</li>\n          <li>Multi languages</li>\n          <li>Cool design</li>\n          <li>With custom custom fields</li>\n          <li>Contacts form</li>\n          <li>Shops in map</li>\n        </ul>"
    }, {
      t: 'At Maryany & Nazara',
      d: 'Hotel',
      c: "\n        <small>\n          #Wordpress #Unyson #slider #contact-form\n        </small>\n        <ul>\n          <li>Comfortable admin panel</li>\n          <li>Multi languages</li>\n          <li>Rooms catalog</li>\n          <li>Contacts form</li>\n          <li>With custom custom fields</li>\n          <li>Map</li>\n        </ul>"
    }, {
      t: 'Medal Top',
      d: 'Sports medal shop',
      c: "\n        <small>\n          #Vue #JS #cool_design\n        </small>\n        <ul>\n          <li>Calculator</li>\n          <li>Medal constructor</li>\n          <li>Contacts form</li>\n          <li>Map</li>\n        </ul>"
    }, {
      t: 'Lonsdale',
      d: 'Country meat market',
      c: "\n        <small>\n          #Wordpress #Unyson #slider #contact-form\n        </small>\n        <ul>\n          <li>Calculator</li>\n          <li>Medal constructor</li>\n          <li>Contacts form</li>\n          <li>Map</li>\n        </ul>"
    }, {
      t: 'Fameuz',
      d: 'Screenwriting course',
      c: "\n        <small>\n          #form #js #accardion #tabs #php\n        </small>\n        <ul>\n          <li>Cool design</li>\n          <li>Table prices</li>\n          <li>Contact form</li>\n        </ul>"
    }, {
      t: 'Cidade Doporto',
      d: 'Shoping',
      c: "\n        <small>\n          #js #tabs\n        </small>\n        <ul>\n          <li>Awesome design</li>\n          <li>Interactive plan of shop</li>\n          <li>Sliders, tabs</li>\n        </ul>"
    }, {
      t: 'Callcleanhome',
      d: 'Clean home services',
      c: "\n        <small>\n          #Wordpress #Unyson #slider #contact-form\n        </small>\n        <ul>\n          <li>Comfortable admin panel</li>\n          <li>Contacts form</li>\n          <li>Sliders</li>\n          <li>Map</li>\n        </ul>"
    }, {
      t: 'Batumi',
      d: 'Clean home services',
      c: "\n        <small>\n          #Wordpress #Unyson #slider #contact-form\n        </small>\n        <ul>\n          <li>Comfortable admin panel</li>\n          <li>Menu</li>\n          <li>Contacts form</li>\n          <li>Sliders, map</li>\n        </ul>"
    }, {
      t: 'Invasport',
      d: 'Sports',
      c: "\n        <small>\n          #Wordpress #contact-form\n        </small>\n        <ul>\n          <li>Comfortable admin panel</li>\n          <li>Contacts form</li>\n          <li>Sliders, map</li>\n        </ul>"
    }, {
      t: 'Shale',
      d: 'hotel',
      c: "\n        <small>\n          #Wordpress ##contact-form #polylang\n        </small>\n        <ul>\n          <li>Comfortable admin panel</li>\n          <li>Multi languages</li>\n          <li>Rooms catalog</li>\n          <li>Contacts form</li>\n          <li>With custom custom fields</li>\n          <li>Map</li>\n          <li>Gallery</li>\n        </ul>"
    }, {
      t: 'SoftMarket',
      d: 'Service of market',
      c: "\n        <small>\n          #Wordpress #contact-form #polylang\n        </small>\n        <ul>\n          <li>Comfortable admin panel</li>\n          <li>Multi languages</li>\n          <li>Page builder</li>\n          <li>Contacts form</li>\n          <li>With custom custom fields</li>\n        </ul>"
    }, {
      t: 'WellPak',
      d: 'Service of packaging',
      c: "\n        <small>\n          #Wordpress #contact-form #polylang\n        </small>\n        <ul>\n          <li>Comfortable admin panel</li>\n          <li>Shorcodes</li>\n          <li>Page builder</li>\n          <li>Contacts form</li>\n          <li>With custom custom fields</li>\n        </ul>"
    }, {
      t: 'Tour-expert',
      d: 'Tourist company',
      c: "\n        <small>\n          #Wordpress #contact-form\n        </small>\n        <ul>\n          <li>Comfortable admin panel</li>\n          <li>Catalog of tours</li>\n          <li>Page builder</li>\n          <li>Contacts form</li>\n          <li>With custom custom fields</li>\n        </ul>"
    }, {
      t: 'Ecoproduct',
      d: 'Tea company',
      c: "\n        <small>\n          #Wordpress #contact-form #polylang\n        </small>\n        <ul>\n          <li>Comfortable admin panel</li>\n          <li>Catalog of tea products</li>\n          <li>Page builder</li>\n          <li>Contacts form</li>\n          <li>With custom custom fields</li>\n          <li>Maps</li>\n        </ul>"
    }, {
      t: 'Solarkarpaty',
      d: 'Sun company',
      c: "\n        <small>\n          #Wordpress\n        </small>\n        <ul>\n          <li>Comfortable admin panel</li>\n          <li>Contacts form</li>\n          <li>With custom custom fields</li>\n          <li>Maps</li>\n        </ul>"
    }, {
      t: 'Just site',
      d: 'About me',
      c: "\n        <small>\n          #form #js #tabs\n        </small>\n        <ul>\n          <li>Contacts form</li>\n          <li>Gallery</li>\n          <li>Effects</li>\n        </ul>"
    }, {
      t: 'GameShop',
      d: 'My some test project',
      c: "\n        <small>\n          #php #sql #js\n        </small>\n        <ul>\n          <li>Catalog games, devs, users</li>\n          <li>Categories</li>\n          <li>Auth</li>\n          <li>Effects</li>\n        </ul>"
    }, {
      t: 'Minesweeper',
      d: 'Mob app',
      c: "\n        <small>\n          #js #vue #nativescript #android\n        </small>\n        <ul>\n          <li>Online play</li>\n          <li>App for android</li>\n          <li>Can set options</li>\n        </ul>"
    }, {
      t: 'Eventtime',
      d: 'Social network of events',
      c: "\n        <small>\n          #js #vue #firebase #node #mongodb\n        </small>\n        <ul>\n          <li>Material design</li>\n          <li>Cards of events</li>\n          <li>Users info</li>\n          <li>Scroll pagination</li>\n          <li>And more intresting</li>\n        </ul>"
    }];
    var btns = $('.work a[data-fancybox="cl-group"]');
    btns.fancybox({
      baseClass: "fancybox-custom-layout",
      infobar: false,
      touch: {
        vertical: false
      },
      buttons: ["close"],
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
      beforeLoad: function beforeLoad(instance, current) {
        $.fancybox.getInstance().current.opts.caption = getCaptionByIndex(instance.currIndex);
        $.fancybox.getInstance().updateControls();
      }
    });
  } else {
    $('.btn').click('click', function (e) {
      e.preventDefault();
      e.stopPropagation(); // location.href = $(this).attr('href');
      // maybe more crossbrowser

      $(location).attr('href', $(this).attr('href'));
    });
  } // skills active when scroll to him


  jQuery(window).scroll(function (event) {
    if (jQuery(window).scrollTop() + $(window).height() + 100 >= $('#skills').offset().top) {
      $('#skills').addClass('active');
    } else {
      $('#skills').removeClass('active');
    }
  });
  $('.tags .tag').click(function (event) {
    $('#name').val(randomFromArray(names));
    $('#text').val($(this).text().substring(1));
  });

  (function () {
    var form = $('#form'),
        formMessages = $('#form-messages');
    form.on('submit', function (event) {
      event.preventDefault(); // Serialize the form data.

      var formData = $(form).serialize();
      $.ajax({
        type: 'POST',
        url: form.attr('action'),
        data: formData,
        dataType: 'json' // beforeSend: function() {
        //  formMessages.text('Loading')
        // }

      }).fail(function (data) {
        if (!data.success) {
          formMessages.removeClass('success');
          formMessages.addClass('error');
          formMessages.text('Oops! An error occured and your message could not be sent.');
        }
      }).done(function (data) {
        if (!d.success) {
          formMessages.addClass('error');
          if (d.errors.text) formMessages.text(d.errors.text);
          if (d.errors.name) formMessages.text(d.errors.name);
        } else {
          formMessages.removeClass('error');
          formMessages.addClass('success');
          formMessages.text(d.message);
        }
      });
    });
  })();
});

function randomFromArray(arg) {
  return arg[Math.floor(Math.random() * arg.length)];
}

var names = ['Noah', 'William', 'James', 'Benjamin', 'Daniel', 'David', 'John', 'Jack', 'Jaxon', 'Thomas', 'Olivia', 'Isabella', 'Ava', 'Andrea', 'Alexis', 'Sara', 'Victoria'];