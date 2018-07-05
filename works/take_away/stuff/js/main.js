$(document).ready(function() {
	$("#toggle").click(function() {
		var elem = $("#toggle").text();
		if (elem == "Больше") {
			//Stuff to do when btn is in the read more state
			$("#toggle").text("меньше");
			$("#text").slideDown();
		} else {
			//Stuff to do when btn is in the read less state
			$("#toggle").text("Больше");
			$("#text").slideUp();
		}
	});


	$('.slick-4').slick({
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,  
		swipeToSlide: true,
		arrows: true
	});
	$('.slick-1').slick({
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,  
		swipeToSlide: true,
		arrows: true
	});
});