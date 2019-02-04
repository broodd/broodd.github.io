document.addEventListener('DOMContentLoaded', function() {
  var btb_open = document.getElementById('btn_open'),
      form     = document.getElementById('form'),
      close    = document.getElementById('close'),
      over     = document.getElementById('over');

  btn_open.addEventListener('click', function (e) {
    e.preventDefault();
    document.body.classList.add('form-active');
  });

  close.addEventListener('click', function () {
    document.body.classList.remove('form-active');
  });

  // over.addEventListener('click', function () {
  //   document.body.classList.remove('form-active');
  // });


  // validate and send data form
  // -----------------------------------------------------
  var err  = form.getElementsByClassName('error');

  function sendData() {
    var XHR = new XMLHttpRequest();

    var FD = new FormData(form);

    XHR.addEventListener("load", function(event) {
      var data = JSON.parse( XHR.responseText );
      if (data.success) {
        err[2].innerText = '';
        err[1].innerText = '';
        err[0].innerText = '';
    
        form.classList.add('thank');
        form.querySelector('.form__body').innerHTML = "";
        form.querySelector('.form__head').innerText = "Дякуємо, ми вам передзвонимо!";
      } else {
        if( data.errors[2] )
          err[2].innerText = 'Будь ласка дозвольте обробку даних',
          form['acept'].focus();
        else err[2].innerText = '';

        if( data.errors[1] )
          err[1].innerText = 'Будь ласка введіть телефон',
          form['phone'].focus();
        else err[1].innerText = '';

        if( data.errors[0] )
          err[0].innerText = 'Будь ласка введіть ім\'я',
          form['name'].focus();
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