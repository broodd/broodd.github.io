$(document).ready(function(){

	// preloader
	$(".preloader-background").delay(200).fadeOut(500, function() {
		$(this).remove()
	});

	// $('a').not('a[href="#"]').click(function(event) {
	// 	alert('clikc');
	// });

});

// var iframe = document.getElementById("iframe");
// var elmnt = iframe.contentWindow.document.getElementById("sandwich");
// elmnt.style.display = "none"; 
