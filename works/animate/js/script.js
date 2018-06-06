$(document).ready(function(){

	// $(".preloader-js").delay(400).each(function() {
	//     // $(this).remove();
	// });
	
	setTimeout( function(){
		$('body').addClass('prelo'),
		$('.preloader-js').delay(1200).fadeOut(400);
	}, 1000);

});