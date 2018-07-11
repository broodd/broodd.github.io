$(document).ready(function() {
  $("#toggle").click(function() {
    var elem = $("#toggle").text();
    if (elem == "Больше") {
      //Stuff to do when btn is in the read more state
      $("#toggle").text("Меньше");
      $("#text").slideDown();
    } else {
      //Stuff to do when btn is in the read less state
      $("#toggle").text("Больше");
      $("#text").slideUp();
    }
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
      registration.show();
      login.hide();
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
 
  var autoplay = 2000;
  $('.slick__1').slick({
    slidesToShow: 1,
    dots: false,
    arrows: true,
    infinite: true,
    swipeToSlide: true,
    autoplay: true,
    autoplaySpeed: autoplay,
  });
  
  $('.slick__1_dots').slick({
    slidesToShow: 1,
    dots: true,
    arrows: true,
    infinite: true,
    swipeToSlide: true,
    autoplay: true,
    autoplaySpeed: autoplay,
  });
});