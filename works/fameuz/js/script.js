document.addEventListener('DOMContentLoaded', function() {
  var sand = document.getElementById('sandwich'),
      // menu = document.querySelector('.header .menu'),
      body = document.body;

  sand.addEventListener('click', function () {
    body.classList.toggle('menu-active');
  })

  var acc = document.getElementsByClassName("acc");
  for (var i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
      var a = this.classList.toggle("active");

      var panel = this.nextElementSibling;
      if (!a){
        panel.style.maxHeight = null;
      } else {
        panel.style.maxHeight = panel.scrollHeight + "px";
      } 
    });
  }

  var tog = document.querySelectorAll("[data-toggle]");
  for (var i = 0; i < tog.length; i++) {
    tog[i].addEventListener("click", function() {
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
});