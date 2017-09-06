$(document).ready(function(){
	$('.navbar-toggle').click(function() {
		// var menu = $('.menu');
		// var width1 = menu.width();
		// menu.toggleClass('act_menu');
		// $('.navbar-header').toggleClass('act_btn');
		$('.sidebar').slideToggle();
		$('.navbar-toggle').toggleClass("act-btn");
	});
	$('.sidebar .caret').click(function() {
		// var width1 = $('.client-info img').width();
		// var width2 = $('.lient-info .inline-block').width();
		// alert(width2);
		$('.client-info img, .client-info .inline-block').slideToggle();
		// $(this).css('margin-left', width1 + width2);
	});
});