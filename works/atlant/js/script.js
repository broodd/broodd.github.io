$('.carousel').carousel({
	  interval: 3500,
	  pause: 'none',
	  wrap: true
});

var $page = $('html, body');
$('a.link-nav').click(function() {
    $page.animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 450);
    return false;
});

function show(state){

	$('#window').css("display", state);			
	$('#wrap').css("display", state); 			
}


// setTimeout(function(){ 
// 	$("._2").css({"display":"block", "animation-name":"down_line_1"});
// }, 1700);

// setTimeout(function(){ 
// 	$("._4").css({"display":"block", "animation-name":"down_line_3"});
// }, 2220);

// setTimeout(function(){ 
// 	$("._6").css({"display":"block", "animation-name":"down_line_5"});
// }, 1855);