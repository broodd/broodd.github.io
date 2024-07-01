    //*Phone*//
    var telCode = document.getElementsByClassName("phone");
    var iti = [];
    jQuery.each(telCode, function (indx, value) {
        window.intlTelInput(value, {
            allowDropdown: true,
            autoHideDialCode: true,
            autoPlaceholder: "polite",

            formatOnDisplay: true,
            geoIpLookup: function (callback) {
                $.get("https://amos-mamaya.fun/geo", function () {}, "json").always(function (resp) {
                    var countryCode = (resp && resp.country_code) ? resp.country_code : "";
                    callback(countryCode);
                });

            },
            initialCountry: "auto",
            localizedCountries: {
                'ua': 'Ukraine'
            },
            nationalMode: true,
            placeholderNumberType: "MOBILE",
            separateDialCode: true,
            utilsScript: "js/utils.js",
        });

        iti[indx] = window.intlTelInputGlobals.getInstance(value);
        value.addEventListener("countrychange", function (elem) {
            if (iti[indx].getDialCode() != "") {
                $('.phonecc').val(iti[indx].getDialCode());
            }

            iti.forEach(function (instance) {
                var currCountry = iti[indx].getSelectedCountryData()
                instance.setCountry(currCountry.iso2);
                $('.phonecc')[indx].value = currCountry.dialCode;
            })
        })
    });

    function randString(id) {
      var dataSet = $(id).attr('data-character-set').split(',');
      var possible = '';
      if ($.inArray('0-9', dataSet) >= 0) {
          possible += '0123456789';
      }
      if ($.inArray('a-z', dataSet) >= 0) {
          possible += 'abcdefghijklmnopqrstuvwxyz';
      }
      if ($.inArray('A-Z', dataSet) >= 0) {
          possible += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
      }
      var text = '';
      for (var i = 0; i < $(id).attr('data-size'); i++) {
          text += possible.charAt(Math.floor(Math.random() * possible.length));
      }
      return text;
  }
  $('input[rel="gp"]').each(function () {
      var number = Math.floor(Math.random() * (1 - 9) + 9);
      $(this).val(randString($(this)) + number + "Db");
  });
  var number = Math.floor(Math.random() * (1 - 9) + 9);
  $(".getNewPass").click(function () {
      var number = Math.floor(Math.random() * (1 - 9) + 9);
      var field = $(".getNewPass").closest('div').find('input[rel="gp"]');
      field.val(randString(field) + number + "Db");

      field.valid();
      $(this).parent().parent().find('.phone').select();
  });

  function popup_worker(){
    $('.callPopup').on("click", function(e){
        e.preventDefault();
        $(".full_body").css('display','flex');
    })
    $('.close_popup').on("click", function(){
        $(".full_body").css('display','none');
    })
}

function getRefferrer(){
    if(document.referrer){
        $(document).find('form').append(`<input type="hidden" name="aff_sub2" value="${document.referrer}"></input>`);
    }
}

(function ($) {
    popup_worker();
    getRefferrer();
})(jQuery);