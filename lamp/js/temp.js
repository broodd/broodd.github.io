1485037758



$('.search .input').on('change', function () {
  var input   = $(this).val().toUpperCase();
  blocks  = $('.game-wrap .game[data-keys]');

  if (input != '') {
    console.log('searching');

    // blocks.each(function (i) {
    //   var keys = $(this).attr('data-keys');

    //   if ( keys.toUpperCase().indexOf(input) > -1 ) {
    //     $(this).show()
    //   } else {
    //     $(this).hide()
    //   }
    // })

    // game_slider.slick('slickFilter',':even');

    game_slider.slick('slickFilter', function (index) {
      var th = $(this);
          // index = th.attr('data-slick-index')

          // console.log(th.find('.game'));

      var keys = th.find('.game').attr('data-keys');
      // var keys = th.attr('data-keys');

      // var slick = th.parent().parent();
      // var index = th.attr('data-slick-index')

      console.log(th, keys);

      return keys.toUpperCase().indexOf(input) > -1 ? true : false
    })
  } else {
    console.log('clear');
    game_slider.slick('slickUnfilter');
  }
})