$(document).on("click", "#trian", function() {
	$("#header").css("top", "0");
	$("#trian").css("top", "-50px");
	$("#trian2").css("top", "-50px");
	$("#trian3").css("top", "-50px");
	$("#trian").css("display", "none");

});

$(document).on("click", "#trian3", function() {
	$("#header").css("top", "-40px");
	$("#trian").css("top", "-90px");
	$("#trian2").css("top", "-90px");
	$("#trian3").css("top", "-90px");
	$("#trian2").css("display", "none");
	$("#trian").css("display", "block");
});

// $(document).on("click", "#roof", function() {
// 	$(".up").toggleClass("down");
// });

$(document).on("click", "#sky", function() {
	alert("My Skype: kobris22");
});

$(window).scroll(function() {
	var wScroll = $(this).scrollTop();
	var wRotate = 45 + wScroll/10;

	$("#roof").css({
		"margin-top":wScroll/2.0 + "px"
	});

	$(".up").css({
		"width":150 + wScroll/10 + "%",
		// "height":600 + wScroll/2.0 + "%",
		"left":-60-(wScroll/5) + "%",
		"opacity":0 + ((wScroll-15)/1500),
		"transform":"rotate(" + (45 + (wScroll/10)) + "deg)"
	});

	// width: 550vw;
	// height: 650vh;
	// transform: rotate(0deg);
	// opacity: 0.87;
	// right: -10%;
	// bottom: -25%;
	console.log(wScroll);
});