$('.carousel').carousel({
  interval: 3500,
  // pause: 'hover',
  // wrap: true
});

// $('.item:last-child').addClass('active');
// $('.ite:last-child').addClass('active');


$("#sandwich, .menu_item").click(function() {
    $("#sandwich").toggleClass("active_sandwich");
});

// $(document).ready(function(){
//   $('.slick').slick({
// 	  infinite: true,
// 	  slidesToShow: 3,
// 	  slidesToScroll: 3
// 	});
// });

if (window.matchMedia('(max-width: 767px)').matches) {
    $('.slick').slick({
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1
    });
} else {
    $('.slick').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1
    });
}

