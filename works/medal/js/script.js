$(document).ready(function(){

	// preloader
  // $(".preloader-background").delay(200).fadeOut(500, function() {
  //     $(this).remove()
  // });



  // $('.slick-wrap').slick({
	 //  // slidesToShow: 1,
	 //  // slidesToScroll: 1
  // });

  $('.slick__1').slick({
	  infinite: true,
	  slidesToShow: 1,
	  slidesToScroll: 1, 	
	  swipeToSlide: true
  });

  $('.slick__4').slick({
	  infinite: true,
	  slidesToShow: 4,
	  // slidesToScroll: 1,
	  swipeToSlide: true
  });

});