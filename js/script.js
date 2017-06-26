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

$(document).on("click", "#sky", function() {
	alert("My Skype: kobris22");
});

$(window).scroll(function() {
	var wScroll = $(this).scrollTop();

	$("#roof").css({
		"margin-top":wScroll/20 + "%"
	});

	$(".up").css({
		// "width":150 + wScroll/10 + "%",
		// "left":-60-(wScroll/5) + "%",
		"opacity":0 + ((wScroll-15)/1500),
		// "transform":"rotate(" + (45 + (wScroll/10)) + "deg)"
	});
	console.log(wScroll);
});