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
		// var menu = $('.menu');
		// var width1 = menu.width();
		// menu.toggleClass('act_menu');
		// $('.navbar-header').toggleClass('act_btn');
		$('.client-info img, .client-info .inline-block').slideToggle();
	});
});