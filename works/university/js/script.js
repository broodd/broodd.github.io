$(document).ready(function(){
	$('.navbar-toggle').click(function() {
		var menu = $('.menu');
		var width1 = menu.width();
		menu.toggleClass('act_menu');
		$('.navbar-header').toggleClass('act_btn');
	});
});