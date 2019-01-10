// Dont want use jQuery, love hardcore. But need use popup
// But now look like some bad

$(document).ready( function () {
  $('#over').remove();

  $(".header a").on("click", function(event) {
    event.preventDefault();

    var el = $( $(this).attr('href') );

    // if( !el.offset() ) return;

    var top = $(el).offset().top - 70;

    var documentWidth = Math.max(document.body.scrollWidth, document.body.offsetWidth, document.documentElement.clientWidth, document.documentElement.scrollWidth, document.documentElement.offsetWidth);

    if(documentWidth < 992) top += 10;

    $('body').removeClass('menu-active');

    $('body,html').animate({
      scrollTop: top
    }, 1000);

  });

  // mobile menu
  // -----------------------------------------------------
  var sand = document.getElementById('sandwich');

  sand.addEventListener('click', function () {
    document.body.classList.toggle('menu-active');
  });



  // smooth scroll
  // -----------------------------------------------------
  // var menu = document.querySelector('.menu a');
  // function scrollIt(destination, duration) {
  //   var start = window.pageYOffset;
  //   var startTime = 'now' in window.performance ? performance.now() : new Date().getTime();

  //   var documentHeight = Math.max(document.body.scrollHeight, document.body.offsetHeight, document.documentElement.clientHeight, document.documentElement.scrollHeight, document.documentElement.offsetHeight);
  //   var documentWidth = Math.max(document.body.scrollWidth, document.body.offsetWidth, document.documentElement.clientWidth, document.documentElement.scrollWidth, document.documentElement.offsetWidth);
  //   var windowHeight = window.innerHeight || document.documentElement.clientHeight || document.getElementsByTagName('body')[0].clientHeight;
  //   var destinationOffset = typeof destination === 'number' ? destination : destination.offsetTop - 70;
  //   if(documentWidth < 992) destinationOffset += 10; 
  //   var destinationOffsetToScroll = Math.round(documentHeight - destinationOffset < windowHeight ? documentHeight - windowHeight : destinationOffset);

  //   if ('requestAnimationFrame' in window === false) {
  //     window.scroll(0, destinationOffsetToScroll);
  //     return;
  //   }

  //   function scroll() {
  //     var now = 'now' in window.performance ? performance.now() : new Date().getTime();
  //     var time = Math.min(1, ((now - startTime) / duration));
  //     var timeFunction = time;
  //     window.scroll(0, Math.ceil((timeFunction * (destinationOffsetToScroll - start)) + start));

  //     if (window.pageYOffset === destinationOffsetToScroll) {
  //       return;
  //     }

  //     requestAnimationFrame(scroll);
  //   }

  //   scroll();
  // }

  // menu.addEventListener('click', function (e) {
  //   e.preventDefault();

  //   document.body.classList.remove('menu-active');

  //   scrollIt(
  //     document.getElementById( this.getAttribute('href').slice(1) ),
  //     1000
  //   );
  // });


  // accordion
  // -----------------------------------------------------
  var acc = document.getElementsByClassName("acc");

  for (var i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {
      var a = this.classList.toggle("active");

      var panel = this.nextElementSibling;
      if (!a){
        panel.style.maxHeight = null;
      } else {
        panel.style.maxHeight = panel.scrollHeight + "px";
      } 
    });
  }


  // show hide some text
  // -----------------------------------------------------
  var tog = document.querySelectorAll("[data-toggle]");

  for (var i = 0; i < tog.length; i++) {
    tog[i].addEventListener("click", function () {
      var el = document.querySelector( this.getAttribute('data-toggle') );
      var a = el.classList.toggle("active");

      if (!a){
        el.style.maxHeight = null;
        this.innerText = "Open details";
      } else {
        el.style.maxHeight = el.scrollHeight + "px";
        this.innerText = "Hide Details";
      } 
    });
  }


  // change effect
  // -----------------------------------------------------
  var change_list = document.getElementById("change_list"),
      wrap        = document.getElementById('change-wrap'),
      def         = change_list.getElementsByClassName('active')[0] || change_list.firstElementChild,
      change_text = wrap.querySelectorAll('.change__text'),
      btn         = document.getElementById('change__btn'),
      nodes       = Array.prototype.slice.call( change_list.children );

  window.n = change_text

  function change (el) {
    if( el.tagName != 'LI') return;


    try {

      for (var i = 0; i < change_text.length; i++) {
        change_text[i].classList.remove('active');
        nodes[i].classList.remove('active');
      }

      change_text[ nodes.indexOf(el) ].classList.add('active');

      el.classList.add('active');
      document.body.classList.toggle('change-active');
      btn.classList.toggle('active');
    } catch (e) {
      // console.log('Bad index or el is undefined');
    }
  }
  change(def);

  btn.addEventListener('click', function () {
    document.body.classList.toggle('change-active');
    btn.classList.toggle('active');
  });

  change_list.addEventListener('click', function (e) {
    e.preventDefault();

    if(e.target.tagName = 'a')
      change(e.target.parentElement);
    if(e.target.tagName = 'span')
      change(e.target.parentElement.parentElement);
  });


  // validate and send data form
  // -----------------------------------------------------
  var form = document.getElementById('form'),
      err  = form.getElementsByClassName('error');

  function sendData() {
    var XHR = new XMLHttpRequest();

    var FD = new FormData(form);

    XHR.addEventListener("load", function(event) {
      var data = JSON.parse( XHR.responseText );
      if (data.success) {
        err[1].innerText = '';
        err[0].innerText = '';

        document.getElementById('thank__btn').click();
      } else {
        if( data.errors[1] )
          err[1].innerText = 'Please enter a valid e-mail address.',
          form['email'].focus();
        else err[1].innerText = '';

        if( data.errors[0] )
          err[0].innerText = 'Write your question, please.',
          form['msg'].focus();
        else err[0].innerText = '';
      }
    });

    XHR.addEventListener("error", function(event) {
      console.log('Oops! Something went wrong.');
    });

    XHR.open("POST", form.action);

    XHR.send(FD);

    return false;
  }

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    sendData();
  });
});


// document.addEventListener('DOMContentLoaded', function() {
  
// });