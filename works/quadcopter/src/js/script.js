$(document).ready(function () {

  new WOW().init();







  // sliders
  // -----------------------------------------------------
  // var viewportWidth = $(window).width();
  // if ( viewportWidth < 1100 ){
  //   var rows = 1;
  // } else {
  //   var rows = 2;
  // }

  rows = 2

  // rows = 1;

  $(document).ready(function () {
  	game_slider.slick({
      arrows: true,
      dots: false,
      swipeToSlide: true,
      rows: rows,
      slidesToShow: 7,
      infinite: false,
      // autoplay: true,
      // autoplaySpeed: 4000,
      responsive: [
      {
        breakpoint: 1500,
        settings: {
          slidesToShow: 6,
        }
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4,
        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 4,
          rows: rows
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          rows: rows
        }
      }
      ]
    })
  });

  // $(window).on('resize', function () {
  //   game_slider.slick('resize')
  // })

  $(document).ready(function () {
  	$('.slider--thumbnails').slick({
      arrows: false,
      dots: false,
      swipeToSlide: true,
      slidesToShow: 6,
      autoplay: true,
      autoplaySpeed: 4000,
      responsive: [
      {
        breakpoint: 1600,
        settings: {
          slidesToShow: 4,
        }
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 1100,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1
        }
      }
      ]
    })
  });


  // Add smooth scrolling to links
  $("a[href^='#']").on('click', function(event) {
    if (this.hash !== "") {
      event.preventDefault();

      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){

        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    }
  });



  var game_slider = $('.slider--two-row');
  // var games_hidden = $('.game-hidden .game');
  // var games  = $('.game-wrap .game');


  // search js filter blocks
  // $('.search .input').on('change', function () {
  //   var input   = $(this).val().toLowerCase();

  //   if (input) {
  //     console.log('searching');


  //     // add from hidden if filtering
  //     $('.game-hidden .game').each(function () {
  //       var keys = $(this).attr('data-keys');

  //       if ( keys.toLowerCase().indexOf(input) > -1 ) {
  //        var elem = $(this).parent().clone();

  //        game_slider.slick('slickAdd', elem );
  //        $(this).remove();
  //       }
  //     });

  //     // remove from carouse if not filtering
  //     $('.game-wrap .game').each(function () {
  //       var keys = $(this).attr('data-keys');

  //       if ( keys.toLowerCase().indexOf(input) == -1 ) {

  //         var targetPos = $(this).index();

  //         // console.log('remove', $( elem ).clone());
  //         $(this).clone().appendTo( $('.game-hidden') );
  //         // $('.game-hidden').append( elem );
  //         game_slider.slick('slickRemove', targetPos);
  //       }
  //     });

  //   } else {
  //     console.log('clear');

  //     $('.game-hidden .game').each(function (){
  //        var elem = $( this ).clone()

  //        game_slider.slick('slickAdd', elem );
  //        $(this).remove();
  //     });
  //   }
  // })


  // var gameWidth = $('.game-wrap .game').first().parent().width()
  // console.log(gameWidth);

  // search js filter blocks
  $('.search .input').on('input', function () {
    var input   = $(this).val().toLowerCase();

    if (input) {
      console.log('searching');


      // remove from carouse if not filtering
      $('.game-wrap .game').each(function () {
        var keys = $(this).attr('data-keys');

        var parent = $(this).parent();
        var slickSlide = parent.parent();
        var state = slickSlide.attr('active') || 0;


        if ( keys.toLowerCase().indexOf(input) > -1 ) {
          parent.css({
            'width': 'auto',
            'display': 'block'
          });

          slickSlide.removeAttr('active')
        } else {
          parent.css({
            'width': 0,
            'display': 'none'
          });
          slickSlide.attr('active', state + 1)
        }


      });


      // $('.game-wrap .game').each(function () {
      //   var keys = $(this).attr('data-keys');

      //   if ( keys.toLowerCase().indexOf(input) == -1 ) {

      //     var targetPos = $(this).index();

      //     // console.log('remove', $( elem ).clone());
      //     $(this).clone().appendTo( $('.game-hidden') );
      //     // $('.game-hidden').append( elem );
      //     game_slider.slick('slickRemove', targetPos);
      //   }
      // });

    } else {
      console.log('clear');


      $('.game-wrap .game').each(function () {
        var parent = $(this).parent();
        var slickSlide = parent.parent();
        // var state = slickSlide.attr('active') || 0;

        parent.css({
          'width': 'auto',
          'display': 'block'
        });

        slickSlide.removeAttr('active')
      });
    }
  })

})