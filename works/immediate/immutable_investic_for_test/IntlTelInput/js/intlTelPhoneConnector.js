onlyCountriesList = ["en", "kz"];

class SendForm {
    constructor(formElement) {
        this.offerLanguage = "en";
        this.form = formElement;
        this.input = this.form.querySelector("#phone");
        this.lableForInput = this.form.querySelector('#lable-for-phone');
        this.country_code_iso2 = this.form.querySelector("#country_code_iso2");
        this.country_code_num = this.form.querySelector("#country_code_num");
        this.full_phone_number = this.form.querySelector("#full_phone_number");
        this.selectedCountryData;
        let self = this;
        this.initPhoneInput();
        this.setFormSubmitListener();
        this.inputPhoneListener();
    }

    initPhoneInput() {
        let iti = window.intlTelInput(this.input, {
            customPlaceholder: function (selectedCountryPlaceholder, selectedCountryData) {
                return "e.g. " + selectedCountryPlaceholder;
            },
            initialCountry: "auto",
            geoIpLookup: function (callback) {
                fetch("https://ipinfo.io/json")
                    .then(response => response.json())
                    .then(data => {
                        let countryCode = data && data.country ? data.country : default_country_code;
                        //let countryCode = (data && data.country && (onlyCountriesList.includes(data.country))) ? data.country : onlyCountriesList[0];
                        console.log(countryCode);
                        callback(countryCode);
                    })
                    .catch(error => {
                        console.error("Error fetching IP info:", error);
                         callback(default_country_code);
                        //callback(onlyCountriesList[0]);
                    })
            },
            //onlyCountries: onlyCountriesList,
            separateDialCode: false,
            utilsScript: 'js/utils.js',
            hiddenInput: "full_number",
            placeholderNumberType: "MOBILE",
        });

        let self = this;
        this.input.addEventListener('countrychange', (e) => {
            let selectedCountryData = iti.getSelectedCountryData();
            this.country_code_num.value = "+" + selectedCountryData.dialCode;
            this.country_code_iso2.value = selectedCountryData.iso2;
            let newPlaceholder = intlTelInputUtils.getExampleNumber(selectedCountryData.iso2, true, intlTelInputUtils.numberFormat.INTERNATIONAL);
            iti.setNumber("");
            let mask = newPlaceholder.replace(/[1-9]/g, "0");
            $(self.input).mask(mask);
        });
    }

    setFormSubmitListener() {
        this.form.addEventListener('submit', (event) => {
            if (this.full_phone_number.value == "") {
                event.preventDefault();
                alert(this.getText("phone-not-valid"));
            } else {
                event.preventDefault();
                let submitButtons = this.form.querySelectorAll('[type="submit"]');
                submitButtons.forEach(function (button) {
                    button.disabled = true;
                    button.style.filter = "grayscale(100%) opacity(0.5)";
                    const buttonText = button.querySelector('.btn-text');
                    if (buttonText) {
                        buttonText.style.display = 'none';
                    }
                    const loadingIcon = button.querySelector('.loading-icon');
                    if (loadingIcon) {
                        loadingIcon.style.display = 'inline-block';
                    }
                });

                setTimeout(() => {
                    this.form.submit();
                }, 1000);
            }
        });
    }


    checkPhoneValid() {
        let iti = window.intlTelInputGlobals.getInstance(this.input);

        if (
            this.input.value) {
            if (iti.isValidNumber()) {
                this.lableForInput.style.color = "green";
                this.lableForInput.innerHTML = this.getText("phone-valid") + iti.getNumber();
                this.full_phone_number.value = iti.getNumber();
            } else {
                this.lableForInput.style.color = "red";
                this.lableForInput.innerHTML = this.getText("phone-not-valid");
                this.full_phone_number.value = "";
            }
        } else {
            this.lableForInput.style.color = "white";
            this.lableForInput.innerHTML = this.getText("phone-enter-phone");
            this.full_phone_number.value = "";
        }
    }
    inputPhoneListener() {
        this.input.addEventListener('change', () => {
            this.checkPhoneValid();
        });
        this.input.addEventListener('keyup', () => {
            this.checkPhoneValid();
        });
    }

    getText(key = "") {
        switch (key) {
            case "phone-enter-phone":
                switch (this.offerLanguage) {
                    case "ru":
                        return "Пожалуйста, введите действительный номер";
                    case "en":
                        return "Please enter a valid number";
                    default:
                        break;
                }
                break;
            case "phone-not-valid":
                switch (this.offerLanguage) {
                    case "ru":
                        return "Неверный номер. Повторите попытку.";
                    case "en":
                        return "Invalid number - please try again";
                    default:
                        break;
                }
                break;
            case "phone-valid":
                switch (this.offerLanguage) {
                    case "ru":
                        return "Действительный номер! Полный международный формат:";
                    case "en":
                        return "Valid number! Full international format: ";
                    default:
                        break;
                }
                break;

            default:
                break;
        }
    }
}

let send_forms = []

document.addEventListener('DOMContentLoaded', function () {
    let forms = document.querySelectorAll('.send-form');
    forms.forEach(formElement => {
        send_forms.push(new SendForm(formElement));
    });
});
