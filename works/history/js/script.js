$(document).ready(function(){
	$('.headertext').click(function () {
		$(this).addClass('headertext_active');
		$(this).next().slideToggle();
		// $(this).find('.contenttext_main').slideToggle();
	});
});