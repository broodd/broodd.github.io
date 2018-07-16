$(document).ready(function() {
  $(".toggle").click(function() {
    $('.toggle').toggleClass('d-none');
    $("#text").slideToggle();
  });

  $('.dropright-menu').hover(function(){
    $(this).toggleClass('open');
    $(this).find('div.menu-list, div.dropright-menu__item').toggleClass('open');
  });

  $('.wrapper-section__title').click(function(){
    $(this).toggleClass('open');
    $(this).next('div.wrap-selector__list').toggleClass('open');
  });

  $('.filter-btn').click(function(){
    $(this).toggleClass('show');
    $(this).next('div.filter').toggleClass('show');
  });

  //search button
  $('.search-icon').click(function(){
    $(this).toggleClass('open-show');
    $(this).prev('div.search').toggleClass('open-show');
    $('.search-icon').parent().toggleClass('open-show');
  });

  //button list column or row
  $('#button-list-row').click(function(){
    $('.list-column').removeClass('show');
    $('.list-row').addClass('show');
    $('.menu-row').removeClass('focus');
    $('.menu-column').addClass('focus');
  });

  $('#button-list-column').click(function(){
    $('.list-row').removeClass('show');
    $('.list-column').addClass('show');
    $('.menu-column').removeClass('focus');
    $('.menu-row').addClass('focus');
  });
  

  var registration = $( ".registration" );
  var login = $(".login");
    $( ".show-registration" ).on( "click", function( event ) {
      registration.toggle();
      login.toggle();
    });

    $( ".login-btn" ).on( "click", function( event ) {
      registration.hide();
      login.show();
    });

  
  $( function() {
    $( "#wrapper-section__slider" ).slider({
      range: true,
      min: 0,
      max: 100000,
      values: [ 1755, 84556 ],
      slide: function( event, ui ) {
        $( "#number-1" ).val( ui.values[ 0 ] );
        $( "#number-2" ).val( ui.values[ 1 ] );
      }
    });
    $( "#number-1" ).val( $( "#wrapper-section__slider" ).slider( "values", 0 ) );
    $( "#number-2" ).val( $( "#wrapper-section__slider" ).slider( "values", 1 ) );
  } );
      $("input#number-1").change(function(){
        var value1=$("input#number-1").val();
        var value2=$("input#number-2").val();
          if(parseInt(value1) > parseInt(value2)){
            value1 = value2;
            $("input#number-1").val(value1);
          }
          $("#wrapper-section__slider").slider("values",0,value1);
      });
      $("input#number-2").change(function(){
        var value1=$("input#number-1").val();
        var value2=$("input#number-2").val();
          if(parseInt(value1) > parseInt(value2)){
            value2 = value1;
            $("input#number-2").val(value2);
          }
          $("#wrapper-section__slider").slider("values",1,value2);
      });
 

 
  // var autoplay = 2000;
  $('.slick__1').slick({
    slidesToShow: 1,
    dots: false,
    arrows: true,
    infinite: true,
    swipeToSlide: true,
    // autoplay: true,
    // autoplaySpeed: autoplay,
  });
  
  $('.slick__1_dots').slick({
    slidesToShow: 1,
    dots: true,
    arrows: true,
    infinite: true,
    swipeToSlide: true,
    // autoplay: true,
    // autoplaySpeed: autoplay,
  });

  $('.slick__vertical').slick({
    slidesToShow: 5,
    asNavFor: '.slick-vertical_for',
    dots: false,
    arrows: true,
    centerMode: false,
    focusOnSelect: true,
    infinite: true,
    vertical: true,
    swipe: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          vertical: false,
        }
      }
    ]
  });

  $('.slick-vertical_for').slick({
    slidesToShow: 1,
    arrows: false,
    fade: true,
    asNavFor: '.slick-vertical',
    // adaptiveHeight: true,
    swipe: false,
  });

  // $('#pills-tab').slick({
  //   // responsive: [
  //   //   {
  //   //     breakpoint: 425,
  //   //     setting: {
  //         slidesToShow: 1,
  //         asNavFor: '#pills-tabContent',
  //         dots: false,
  //         arrows: true,
  //         centerMode: false,
  //         infinite: true,
  //   //     }
  //   //   }
  //   // ]
  // });

  // $('#pills-tabContent').slick({
  //   slidesToShow: 1,
  //   asNavFor: '#pills-tab',
  //   dots: true,
  //   arrows: true,
  //   centerMode: false,
  //   focusOnSelect: false,
  //   infinite: true,
  //   // swipe: false,
  //   adaptiveHeight: true
  // });

  $('.slick-brand-main .slick-arrow').wrapAll('<div class="container slick-arrow-cont"></div>')


  $('.colors__btn .cahnge').click(function(event) {
    $(this).toggleClass('d-none'),
    $('.colors').toggleClass('active');
  });


  var col_btn = $('.colors__btn .change');
  col_btn.click(function(event) {
    col_btn.toggleClass('d-none'),
    $('.colors').toggleClass('active');
  });

  $('.toggle-review-btn').click(function(event) {
    $('.toggle-review').toggleClass('d-none');
    $('.toggle-review-close').toggleClass('d-none');
  });
  $('.toggle-review-close').click(function(event) {
    $(this).toggleClass('d-none');
    $('.toggle-review').toggleClass('d-none');
  });

  $('.remove').click(function(event) {
    $(this).parents( $(this).attr('data-remove') ).remove();
  });


  $('.count__minus').click(function(event) {
    var input = $(this).next();
    if( parseInt(input.val()) > 1 )
      input.val( parseInt(input.val()) - 1);
    else input.val(1);
  });

  $('.count__plus').click(function(event) {
    var input = $(this).prev();
    if( parseInt(input.val()) > 0)
      input.val( parseInt(input.val()) + 1);
    else input.val(1);
  });


  // var i = 0;
  // // $('.tab-content .tab-content .slick__1').slick('slickSetOption');
  // // $('.tab-content .tab-content .slick__1, .slick-tab .tab-content').slick('unslick');
  $('.tab-content .tab-content .slick__1').parent().parent().parent().parent().parent().parent().parent().children('.nav-pills').click(function() {
    console.log('event');
    // if(i == 0) {
      // $('.slick-tab .tab-content .nav-pills').slick('slickNext');
      $('.tab-content .tab-content .slick__1').slick('slickNext');
    // }
    // i++;
  });
});