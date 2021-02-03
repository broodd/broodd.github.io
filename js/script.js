// document.addEventListener('DOMContentLoaded', function () {
// 	document.getElementById('over').style.display = 'none';

// });
var exp = new Date().getFullYear() - new Date('01 09 2017').getFullYear()
$('#experience-years').text(exp)

$(document).ready(function () {

  $('.slider').slick({
    arrows: false,
    dots: true,
    slidesToShow: 6,
    // slidesToScroll: 3,
    swipeToSlide: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 4000,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 4
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 3
        }
      }
    ]
  })

  // menu
  // -----------------------------------------------------
  var body = $('body'),
      html = $('html'),
      hamburger = $('.hamburger'),
      menu = $('.header__menu'),
      header = $('.header'),
      header__row = $('.header__row')

  hamburger.click(function () {
    html.toggleClass('over');
    // body.toggleClass('over');
    menu.slideToggle();
    hamburger.toggleClass('active');
  });

  $('.menu a').click(function () {
    var scrollEl = $(this).attr('href').split('#')[1]
    var scrollTo = 0
    if (scrollEl) {
      scrollTo = Math.max( $('#' + scrollEl).offset().top - header.outerHeight(), 0 )
    }

    $('html, body').animate({
      scrollTop: scrollTo
    }, 700);
    
    if (html.hasClass('over')) {
      html.removeClass('over');
      // body.removeClass('over');
      menu.slideUp();
      hamburger.removeClass('active');
    }

    return false;
  });

  function adaptiveBodyPadding () {
    body.css('padding-top', header.outerHeight())

    if ($(window).width() <= 768) {
      var h = $('.header__row').height();

      menu.css({
        height: 'calc(100vh - '+ h +'px)',
        top: h + 'px'
      })
    } else {
      menu.css({
        height: 'auto',
        top: 0
      })
    }
  }
  $(window).on('resize', adaptiveBodyPadding);
  adaptiveBodyPadding();

  // portfolio modals
  // -----------------------------------------------------
  function openModal (id) {
    var modal = $(id);

    if (!modal.length) return;

    modal.fadeIn().addClass('open')
    html.addClass('over');
  }
  $('.portfolio').on('click', function () {
    openModal($(this).attr('href'))
  });

  if (location.hash) {
    openModal(location.hash);
  }

  $('.modal .close').on('click', function () {
    html.removeClass('over');
    $('.modal.open').fadeOut().removeClass('open')

    history.pushState('', document.title, window.location.href.split('#')[0]);
  });


  // contact form
  // -----------------------------------------------------
  function required () {
    var th = $(this);
    var val = th.val();
    if (!val) {
      th.parents('.form').addClass('error')
      th.next('.error').fadeIn()
    } else {
      th.parents('.form').removeClass('error')
      th.next('.error').fadeOut()
    }

    return !val;
  }

  var requiredFields = $('.required');

  requiredFields.on('input', required)

  var formMessages = $('#form-message');

  $('.form').on('submit', function (e) {
    e.preventDefault();

    requiredFields.each(function () {
      required.call($(this))
    })

    var form = $(this);

    if (form.hasClass('error')) return;
    // Serialize the form data.
    var formData = $(form).serialize();

    $.ajax({
      type: 'POST',
      url: form.attr('action'),
      data: formData,
      dataType: 'json',
      beforeSend: function() {
       formMessages.text('Loading')
      }
    }).fail(function(data) {
      formMessages.text('Thank You! Your message has been sent.');
    }).done(function(data) {
      formMessages.text('Thank You! Your message has been sent.');
    });
  })

  // preloder
  // -----------------------------------------------------
  $('#over').fadeOut();
})