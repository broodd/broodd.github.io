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

$(document).ready( function() {

	$("._1").css("animation-name", "down_line_1");
	$("._3").css({"animation-name":"down_line_3", "animation-delay":".45s"});
	$("._5").css("animation-name", "down_line_5");
	setTimeout(function(){ 
		$("._2").css({"display":"block", "animation-name":"down_line_1"});
	}, 1700);

	setTimeout(function(){ 
		$("._4").css({"display":"block", "animation-name":"down_line_3"});
	}, 2220);

	setTimeout(function(){ 
		$("._6").css({"display":"block", "animation-name":"down_line_5"});
	}, 1855);
});



window.onload = function () {

	var parallaxBox = document.getElementById ( 'box' );
	var c1left = document.getElementById ( 'l1' ).offsetLeft,
		c1top = document.getElementById ( 'l1' ).offsetTop,
		c2left = document.getElementById ( 'l2' ).offsetLeft,
		c2top = document.getElementById ( 'l2' ).offsetTop;

	parallaxBox.onmousemove = function ( event ) {
		event = event || window.event;
		var x = event.clientX - parallaxBox.offsetLeft,
		    y = event.clientY - parallaxBox.offsetTop;
		
		mouseParallax ( 'l1', c1left, c1top, x, y, 50 );
		mouseParallax ( 'l2', c2left, c2top, x, y, 15 );
	}
	
}

function mouseParallax ( id, left, top, mouseX, mouseY, speed ) {
	var obj = document.getElementById ( id );
	var parentObj = obj.parentNode,
	containerWidth = parseInt( parentObj.offsetWidth ),
	containerHeight = parseInt( parentObj.offsetHeight );
	obj.style.left = left - ( ( ( mouseX - ( parseInt( obj.offsetWidth ) /2 + left ) ) / containerWidth ) * speed ) + 'px';
	obj.style.top = top - ( ( ( mouseY - ( parseInt( obj.offsetHeight ) /2 + top ) ) / containerHeight ) * speed ) + 'px';
}
