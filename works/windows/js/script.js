let startButton = document.querySelector('#start');
let startMenu = document.querySelector('#start-menu');
let icons = document.querySelectorAll('.icon');
let win = document.querySelector('#windows');
let menu = document.querySelector('#menu');
let find = document.querySelector('#find');
let search = document.querySelector('.search');
startButton.addEventListener('click',showStartMenu);
input = document.querySelector('.search input');
find.onclick = function(e){
	search.classList.toggle('search_active');
	e.stopPropagation()
}


$( function() {
	$( ".icon" ).draggable();
} );

//ICONS ====>
for(let i = 0;i<icons.length;i++){
	icons[i].onclick = function(e){
		clearClasses();
		this.classList.add('icon_active');
		e.stopPropagation();
	}
}

//Removing All Selected Icons

function clearClasses(){
	for(let i = 0;i<icons.length;i++){
		icons[i].classList.remove('icon_active');
	}
}

//ICONS <====

//START MENU ====>
function showStartMenu(e){
	startMenu.classList.toggle('start-menu_active');
	/*if(startMenu.classList.contains('start-menu_active')){
		startMenu.classList.remove('start-menu_active');
	}*/
	e.stopPropagation();
}
input.onclick = function(e){
	e.stopPropagation();
}
//START MENU <====

//CTX MENU ====>
win.addEventListener('contextmenu',noRightClick);
function noRightClick (e){
	e.preventDefault();
	showMenu(e);
}

function showMenu(e){
	menu.classList.add('menu_active');
	menu.style.left = e.offsetX + 10 + 'px';
	menu.style.top = e.offsetY + 10 + 'px';
}

//CTX MENU <====

console.log(input);
win.addEventListener('click',function(e){
	menu.classList.remove('menu_active');
	checkIcons(e);
	if(startMenu.classList.contains('start-menu_active')){
		startMenu.classList.remove('start-menu_active');
	}
	if(search.classList.contains('search_active')){
		search.classList.remove('search_active');
	}
	e.stopPropagation();
});

function checkIcons(e){
	for(let i = 0;i<icons.length;i++){
		if(icons[i].classList.contains('icon_active')){
			console.log(e);
			clearClasses();
		}
	}
}





// Svyat
// -----------------------------------------------------

// $(document).ready(function($) {
// 	var over = $('#overlay');
// 	$("#windows").on({
//     mousedown: function(event){
//       console.log('enter'),
//     	over.show();
//       over.offset({top: event.clientY, left: event.clientX});
//       // over.

// 			console.log('x: ' + event.clientX);
//     },
//     mouseup: function(event){
//       console.log('leave'),
//       over.hide();
//     },
//   });
// 	// $('#windows').on('click',  function(event) {
// 	// 	event.preventDefault();
// 	// 	console.log('x: ' + event.clientX);
// 	// 	console.log('y: ' + event.clientX);
// 	// });
// });



// some костиль для обєднаня event: mousedown, mousemove, than mouseup
// -----------------------------------------------------
var clicking = false,
		over     = $('#overlay'),
		firstClientX,
		firstClientY;


$('#windows').click(function(event){
	over.hide();
});

$('#windows').mousedown(function(event){
		clicking = true;
		console.log('mousedown');

		over.show();
		firstClientX  = event.clientX;
		firstClientY = event.clientY;
		console.log("firstX: " + firstClientX + " firstY" + firstClientY);
});

$(document).mouseup(function(){
		clicking = false;
		console.log('mouseup');
		// console.log('click released, no more move event');
})

$('#windows').mousemove(function(event){
	if(clicking == false) return;

	over.offset({top: firstClientY, left: firstClientX});

	if( firstClientX > event.clientX ) {
		over.width( firstClientX - event.clientX );
	} else {
		over.width( event.clientX - firstClientX );
	}

	if( firstClientY > event.clientY ) {
		over.height( firstClientY - event.clientY );
	} else {
		over.height( event.clientY - firstClientY );
	}
	console.log('x: ' + event.clientX);

	// console.log('mouse moving');
});