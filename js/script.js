$(document).on("click", "#trian", function() {
	$("#header").css("top", "0");
	$("#trian").css("top", "-100px");
	$("#trian2").css("top", "-100px");
	$("#trian3").css("top", "-100px");
	$("#trian").css("display", "none");

});

$(document).on("click", "#trian3", function() {
	$("#header").css("top", "-60px");
	$("#trian").css("top", "-130px");
	$("#trian2").css("top", "-130px");
	$("#trian3").css("top", "-130px");
	$("#trian2").css("display", "none");
	$("#trian").css("display", "block");
});

$(document).on("click", "#sky", function(event) {
	alert("My Skype: kobris22");
	// event.preventDefault();
	return false;
});

$(window).scroll(function() {
	var wScroll = $(this).scrollTop();
	var max_height = screen.height;

	if(screen.width > 890) {
		if(max_height > wScroll)
		{
			$("#roof").css({
				"margin-top":wScroll/20 + "%"
			});
		}
		$(".up").css({
			"transform":"rotate(" + (45 + (wScroll/20)) + "deg)",
			"left":-60-(wScroll/5) + "%"
		});
	}

	$(".up").css({
		"opacity": 0 + ((wScroll)/1500),
	});
});
