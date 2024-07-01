//validation block
const regex_first_last_name = new RegExp('^([A-Za-z\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u05D0-\u05EA\u05F0-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u08A0-\u08B4\u08B6-\u08BD\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C60\u0C61\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D5F-\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16F1-\u16F8\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1877\u1880-\u1884\u1887-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1C80-\u1C88\u1CE9-\u1CEC\u1CEE-\u1CF1\u1CF5\u1CF6\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2183\u2184\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005\u3006\u3031-\u3035\u303B\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FD5\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6E5\uA717-\uA71F\uA722-\uA788\uA78B-\uA7AE\uA7B0-\uA7B7\uA7F7-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA8FD\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB65\uAB70-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC\u0E00-\u0E7F.-]\\s{0,}?)+$');


function makeSendAdress(){
  var protocol = location.protocol;
  var tmp = location.hostname.replace(/[a-z]{2}\./,'');
  tmp = protocol + '//cabinet.' + tmp + '/api/register';
  return '/send.php';
}



// Form flags
const useThanksPage =       false
const useCheckbox =         true
const usePreloader =        true
const usePhoneccField =     true
const useSessionIdField =   false
const useAffiliateIdField = false
const checkboxAfterSubmit = true

// Validation messages
// Available languages
// [en, ar, br, cz, de, dk, es, fi, fr, gr, hu, it, latam, me, nl, no, pl, pt, ro, ru, se, sk, sl, tr, lv, lt, ee, jp, kr]

let validMessages
const initValidMessages = () => {
  const pageLang = document.documentElement.lang
  validMessages = globalValidMessages[pageLang] ? globalValidMessages[pageLang] : globalValidMessages["en"]
}

document.addEventListener("DOMContentLoaded", function () {
  initValidMessages()
  let i = 0
  for (const form of document.querySelectorAll("form")) {
    if (isFormCorrect(form)) {
      initForm(form)
      initFormFields(form)
      initCheckbox(form, i)
      initPreloader(form)
      i++
    }
  }
})

// Regex variables
const regex_require = /\S+/
const regex_email = /^\b[A-Z0-9._%-]+@[A-Z0-9.-]+\.[A-Z]{1,}\b$/i
const regex_min_number = (min_number) => new RegExp(".{" + min_number + ",}")
const regex_max_number = (max_number) => new RegExp("^.{1," + max_number + "}$")
const regex_phone = /^\d{7,11}$/
const regex_password = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]+$/

// Validation rules
const rules = {
  first_name: {
    required: regex_require,
    usernameRegex: regex_first_last_name,
    minlength: regex_min_number(2),
    maxlength: regex_max_number(60),
  },
  last_name: {
    required: regex_require,
    usernameRegex: regex_first_last_name,
    minlength: regex_min_number(2),
    maxlength: regex_max_number(60),
  },
  password: {
    required: regex_require,
    passwordRegex: regex_password,
    minlength: regex_min_number(8),
    maxlength: regex_max_number(12),
  },
  email: {
    required: regex_require,
    email: regex_email,
  },
  phone: {
    required: regex_require,
    phoneRegex: regex_phone,
  },
}

//Form fields init
const initFormFields = (form) => {
  const phoneccField = stringToHTML(
    `<input type="hidden" class="phonecc" name="phonecc" value="" />`
  )
  const sessionIdField = stringToHTML(
    `<input type="hidden" name="session_id" class="session_id" />`
  )
  const affiliateIdField = stringToHTML(
    `<input type="hidden" name="affiliate_id" class="affiliate_id" />`
  )
  if (usePhoneccField && !form.querySelector(".phonecc")) form.appendChild(phoneccField)
  if (useSessionIdField && !form.querySelector(".session_id")) form.appendChild(sessionIdField)
  if (useAffiliateIdField && !form.querySelector(".affiliate_id")) form.appendChild(affiliateIdField)
}


// Preloader initialization

const initPreloader = (form) => {

  if (form.querySelector(".preloader") || !usePreloader) {
    return
  }

  const preloader = stringToHTML(
    `<div class="preloader"></div>`
  )

  form.insertBefore(preloader, form.firstChild)
}

// Checkbox initialization
const initCheckbox = (form, id) => {

  if (form.querySelector("[type=checkbox]") || !useCheckbox) {
    return
  }

  const element = stringToHTML(
    `<div class="checkbox-svg">
      <input type="checkbox" checked id="cbx-${id}" style="display: none" />
      <label for="cbx-${id}" class="checked-svg">
        <svg width="20px" height="20px" viewBox="0 0 18 18">
          <path
            d="M1,9 L1,3.5 C1,2 2,1 3.5,1 L14.5,1 C16,1 17,2 17,3.5 L17,14.5 C17,16 16,17 14.5,17 L3.5,17 C2,17 1,16 1,14.5 L1,9 Z"
          ></path>
          <polyline points="1 9 7 14 15 4"></polyline>
        </svg>
      </label>
      <div class="privacy-checkbox privacy-checkbox_main">
        <p>
          ${validMessages.checkbox.text1} <a href="/terms" target="_blank">${validMessages.checkbox.link1}</a> 
          ${validMessages.checkbox.text2} <a href="/privacy" target="_blank">${validMessages.checkbox.link2}</a>
        </p>
      </div>
    </div>`)

  const submitElement = form.querySelector("[type=submit]")

  if (checkboxAfterSubmit) submitElement.after(element)
  else submitElement.before(element)
}

// Form initialization
const initForm = (form) => {
  form.addEventListener("submit", onSubmit)
  form.addEventListener("focusout", onFocusOut)
  form.addEventListener("keyup", onKeyUp)
}

// Main validate
const validateForm = (form) => {
  if (!isFormCorrect(form)) return null
  let is_valid = true

  for (const rule_field of Object.keys(rules)) {
    const form_field = form.elements[rule_field][0] ? form.elements[rule_field][0] : form.elements[rule_field]
    if (!validateField(form_field)) is_valid = false
  }

  return is_valid
}

// Validate field
const validateField = (form_field) => {
  const field_name = form_field.name

  if (!Object.keys(rules).includes(field_name)) return null

  for (const rule of Object.keys(rules[field_name])) {
    if (!rules[field_name][rule].test(form_field.value)) {
      setErrorField(form_field, validMessages[field_name][rule])
      return false
    } else {
      setValidField(form_field)
    }
  }

  return true
}

// Set field state to error
const setErrorField = (field, error_text) => {
  field.classList.remove("valid")
  field.classList.add("error")

  let errorElement = field.parentNode.querySelector("label.error")
  if (errorElement === null) {
    errorElement = stringToHTML(
      `<label class="error" for="${field.name}" id="${field.name}-error">${error_text}</label>`
    )
    field.parentNode.append(errorElement)
  } else {
    errorElement.innerHTML = error_text
    errorElement.style = "display: flex"
  }
}

// Set field state to valid
const setValidField = (field) => {
  field.classList.remove("error")
  field.classList.add("valid")

  const errorElement = field.parentNode.querySelector("label.error")
  if (errorElement) field.parentNode.removeChild(errorElement)
}

// Check if form have enough needed fields. Return null if not.
const isFormCorrect = (form) => {
  const form__fields = Array.from(form.elements)
  const form__fields_names = form__fields.map((field) => field.name)

  return Object.keys(rules).every((element) => form__fields_names.includes(element))
}

function urlParam(name) {
  var results = new RegExp("[?&]" + name + "=([^&#]*)").exec(window.location.href)
  if (results == null) {
    return null
  } else {
    return results[1] || 0
  }
}

const onKeyUp = (event) => {
  let element = event.target
  validateField(element)
  document.querySelectorAll('[name="' + element.name + '"]').forEach((field) => (field.value = element.value))
}
const onFocusOut = (event) => {
  let element = event.target

  if (element.name === "email") {
    rebuidEmail(element)
  }
  validateField(element)
}

const onSubmit = (event) => {
  event.preventDefault()

  const form = event.currentTarget

  if (!validateForm(form)) return

  document.querySelectorAll(".preloader").forEach((elem) => (elem.style.display = "flex"))

  document.querySelectorAll("input[name='first_name'], input[name='last_name']").forEach((elem) => {
    elem.value = elem.value.substr(0, 60).replace(/[.-]/g, " ").replace(/\s\s+/g, " ")
  })

  const msg = new URLSearchParams(Array.from(new FormData(form))).toString()

  const linkAdress = form.action
  console.log("linkAdress= " + linkAdress)

  createXHRRequest(linkAdress, msg)
}

const createXHRRequest = (linkAdress, msg) => {
  const xhr = new XMLHttpRequest()

  xhr.open("POST", linkAdress, true)
  xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded")

  xhr.addEventListener("loadend", () => {
    if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
      const data = xhr.response

      const domainForPixel = urlParam("domain")
      const obj_data = JSON.parse(data)

      let adress_redir = obj_data.redirect

      if (domainForPixel != null) {
        addPixelElement(domainForPixel)
      }

      if (useThanksPage) {
        if (urlParam("noautologin") == 1) {
          adress_redir = "thanks"
          localStorage.setItem("redirect", obj_data.redirect)
          window.location = adress_redir
          return true
        }
        adress_redir = "thanks"
        localStorage.setItem("redirect", obj_data.redirect)
        window.location = adress_redir
        return
      }

      if (urlParam("noautologin") == 1) {
        setTimeout(function () {
          window.location = adress_redir
        }, 3000)
        return true
      }
      setTimeout(function () {
        window.location = adress_redir
      }, 3000)
    } else if (xhr.status === 400) {
      const obj_data = JSON.parse(xhr.responseText)
      for (const key in obj_data.errors) {
        if (key === "CROB") {
          window.location = obj_data.errors[key]
        } else {
          alert(obj_data.errors[key])
        }
      }
    } else {
      alert("Register form field error")
      console.log(xhr)
    }
    document.querySelectorAll(".preloader").forEach((elem) => (elem.style.display = "none"))
  })

  xhr.send(msg)
}

const addPixelElement = (domainForPixel) => {
  const pixelElement = stringToHTML(
    `<iframe width="1" height="1" style="display: none" src="https://${decodeURIComponent(domainForPixel)}"></iframe>`
  )

  document.querySelector("body").prepend(pixelElement)
}

function rebuidEmail(this_element) {
  var tmp_el = this_element.value
  tmp_el = tmp_el
    .replace(/[\.+]{2,}/g, ".")
    .replace(/^\.+/g, "")
    .replace(/\.+$/g, "")
    .replace(/[,\/]/g, ".") // заменяем повторяющиеся точки на одну, убираем точки вначале и в конце, заменяем запятую и слеш на точку

  //=========
  tmp_el = tmp_el.replace(/[.]+\s+com$/g, ".com").replace(/\s+com$/g, ".com") // убираем лишние точки и пробелы перед com
  tmp_el = tmp_el.replace(/[.]+\s+ru$/g, ".ru").replace(/\s+ru$/g, ".ru") // убираем лишние точки и пробелы перед ru
  tmp_el = tmp_el.replace(/[.]+\s+net$/g, ".net").replace(/\s+net$/g, ".net") // убираем лишние точки и пробелы перед net
  tmp_el = tmp_el.replace(/[.]+\s+ua$/g, ".ua").replace(/\s+ua$/g, ".ua") // убираем лишние точки и пробелы перед ua
  //=========

  var brokenDomainsGmail = [
    "gmil",
    "gmaail",
    "gmaij",
    "gmaila",
    "googlemail",
    "jimail",
    "gmailcom",
    "gimailcom",
    "gaiml",
    "gemail",
    "gilmei",
    "gmael",
    "gmaol",
    "gamail",
    "gamil",
    "glail",
    "gmaik",
  ]
  brokenDomainsGmail.forEach((element) => {
    // правка домена gmail
    tmp_el = tmp_el.replace(element, "gmail")
  })

  var brokenDomainsYandex = ["yande[", "jandex"]
  brokenDomainsYandex.forEach((element) => {
    // правка домена yandex
    tmp_el = tmp_el.replace(element, "yandex")
  })

  var brokenDomainsMail = ["email", "meil"]
  brokenDomainsMail.forEach((element) => {
    // правка домена mail.ru
    tmp_el = tmp_el.replace(element, "mail")
  })

  //=========
  tmp_el = tmp_el.replace(/gmail$/g, "gmail.com") // правка на домен первого уровня
  tmp_el = tmp_el.replace(/mail$/g, "mail.ru") // правка на домен первого уровня
  tmp_el = tmp_el.replace(/mail\.ry$/g, "mail.ru") // правка на домен первого уровня
  //=========
  tmp_el = tmp_el.replace(/\s+/g, "").replace(/[/.]{2,}/g, ".") // убираем лишние пробелы и повторяющиеся точки
  tmp_el = tmp_el.replace(/@\s+/g, "@").replace(/\s+@/g, "@") // убираем лишние пробелы до и после собачки
  tmp_el = tmp_el.replace(/[.]+@/g, "@").replace(/@[.]+/g, "@") // убираем лишние точки до и после собачки

  document.querySelectorAll("[name=email]").forEach((elem) => (elem.value = tmp_el)) //вставляем во все инпуты с именем емейл
}


const stringToHTML =  (str) => {
  const parser = new DOMParser();
  const doc = parser.parseFromString(str, 'text/html');
  return doc.body.children[0];
}


const globalValidMessages = {
  en: {
    first_name: {
      usernameRegex: "Name must be more than 2 characters long, without special characters or spaces",
      required: "The first name field is required",
      minlength: "The first name must be at least 2",
      maxlength: "First name can be a maximum of 25",
    },
    last_name: {
      usernameRegex: "Last name must be more than 2 characters long, without special characters or spaces",
      required: "The last name field is required",
      minlength: "The last name must be at least 2",
      maxlength: "Surname can be a maximum of 25",
    },
    password: {
      passwordRegex:
        'Password must be between 8-12 characters in length, including letters (A-Z, a-z) and numbers (0-9). Without any special symbols (^@()#*+/"?!=.{}~`&) and spaces',
      required: "The password field is required",
      minlength: "The password must be at least 8 characters",
      maxlength: "The password may not be greater than 12 characters",
    },
    email: {
      required: "The e-mail field is required",
      email: "The e-mail must be a valid address",
    },
    phone: {
      phoneRegex: "The phone must be from 7 to 11 characters, without special characters",
      required: "The phone is required",
    },
    checkbox: {
      text1: "By registration I agree and accept Website",
      link1: "terms",
      text2: "of use and",
      link2: "Privacy Policy",
      text3: "",
    },
  },
  ar: {
    first_name: {
      usernameRegex: "يجب أن يتألف الاسم من أكثر من حرفين، وبدون أي رموز خاصة أو مسافات.",
      required: "حقل الاسم الأول إلزامي",
      minlength: "يجب أن يتكون الاسم الأول من حرفين على الأقل.",
      maxlength: "يمكن أن يحتوي الاسم الأول إلى ما يصل 25 حرفًا كحد أقصى.",
    },
    last_name: {
      usernameRegex: "يجب أن يتألف الاسم الأخير من أكثر من حرفين، وبدون أي رموز خاصة أو مسافات.",
      required: "حقل الاسم الأخير إلزامي",
      minlength: "يجب أن يتألف الاسم الأخير من حرفين على الأقل.",
      maxlength: "يمكن أن يحتوي اللقب على ما يصل إلى 25 حرفًا.",
    },
    password: {
      passwordRegex:
        'يجب أن يتراوح طول كلمة المرور من 8 إلى 12 حرف، وتتضمن حروفًا مثل (A-Z، a-z) وأرقامًا (0-9)، وبدون أي رموز خاصة مثل (^@()#*+/"?!=.{}~`&) أو مسافات. ',
      required: "حقل كلمة المرور إلزامي",
      minlength: "يجب أن تتكون كلمة المرور من 8 أحرف على الأقل",
      maxlength: "لا يجوز أن تزيد كلمة المرور عن 12 حرفًا.",
    },
    email: {
      required: "حقل البريد الإلكتروني إلزامي.",
      email: "يجب أن يكون عنوان البريد الإلكتروني صالحًا للاستخدام",
    },
    phone: {
      phoneRegex: "يجب أن يتكون الهاتف من 7 إلى 11 حرفًا، وبدون أي رموز خاصة.",
      required: "رقم الهاتف إلزامي.",
    },
    checkbox: {
      text1: "من خلال التسجيل، فأنا أوافق وأقبل",
      link1: "بشروط استخدام الموقع",
      text2: " و",
      link2: "سياسة الخصوصية.",
      text3: "",
    },
  },
  br: {
    first_name: {
      usernameRegex: "O nome deve ter mais de 2 caracteres, sem caracteres ou espaços especiais",
      required: "O campo de primeiro nome é necessário",
      minlength: "O primeiro nome deve ter pelo menos 2 caracteres",
      maxlength: "O primeiro nome pode ter no máximo 25 caracteres",
    },
    last_name: {
      usernameRegex: "O sobrenome deve ter mais de 2 caracteres, sem caracteres ou espaços especiais",
      required: "O campo de sobrenome é necessário",
      minlength: "O sobrenome deve ter pelo menos 2 caracteres",
      maxlength: "O sobrenome pode ter no máximo 25 caracteres",
    },
    password: {
      passwordRegex:
        'A senha deve ter entre 8 e 12 caracteres, incluindo letras (A-Z, A-Z) e números (0-9). Sem símbolos especiais (^@()#*+/"?! =. {} ~` &) e espaços',
      required: "O campo de senha é necessária",
      minlength: "A senha deve ter pelo menos 8 caracteres",
      maxlength: "A senha pode não ser maior que 12 caracteres",
    },
    email: {
      required: "O campo de e-mail é necessário",
      email: "O e-mail deve ser um endereço válido",
    },
    phone: {
      phoneRegex: "O telefone deve ter de 7 a 11 caracteres, sem caracteres especiais",
      required: "O telefone é necessário",
    },
    checkbox: {
      text1: "Ao me cadastrar, eu concordo e aceito os",
      link1: "termos",
      text2: "de uso e",
      link2: "Política de Privacidade",
      text3: "do site",
    },
  },
  cz: {
    first_name: {
      usernameRegex: "Jméno musí mít více než dva znaky, bez speciálních znaků a mezer.",
      required: "Pole pro křestní jméno je povinné",
      minlength: "Křestní jméno musí mít minimálně 2 znaky",
      maxlength: "Křestní jméno může mít maximálně 25 znaků",
    },
    last_name: {
      usernameRegex: "Příjmení musí mít více než dva znaky, bez speciálních znaků nebo mezer.",
      required: "Pole příjmení je povinné",
      minlength: "Příjmení musí mít alespoň 2 znaky",
      maxlength: "Příjmení může mít maximálně 25 znaků",
    },
    password: {
      passwordRegex:
        'Heslo musí mít délku 8-12 znaků, včetně písmen (A-Z, a-z) a číslic (0-9). Bez speciálních symbolů (^@()#*+/"?!=.{}~`&) a mezer.',
      required: "Pole pro zadání hesla je povinné",
      minlength: "Heslo musí mít alespoň 8 znaků",
      maxlength: "Heslo nesmí mít více než 12 znaků",
    },
    email: {
      required: "Pole e-mail je povinné",
      email: "E-mail musí být platná adresa",
    },
    phone: {
      phoneRegex: "Telefon musí obsahovat 7 až 11 znaků bez speciálních znaků.",
      required: "Telefon je povinný údaj",
    },
    checkbox: {
      text1: "Registrací souhlasím s",
      link1: "Podmínkami a ujednáními",
      text2: "a se",
      link2: "Zásadami ochrany osobních údajů",
      text3: " webových stránek",
    },
  },
  de: {
    first_name: {
      usernameRegex: "Der Name muss mehr als 2 Zeichen lang sein, ohne Sonderzeichen oder Leerzeichen",
      required: "Das Feld für den Vornamen ist erforderlich",
      minlength: "Der Vorname muss aus mindestens 2 Zeichen bestehen",
      maxlength: "Der Vorname kann maximal 25 Zeichen lang sein",
    },
    last_name: {
      usernameRegex: "Der Nachname muss mehr als 2 Zeichen lang sein, ohne Sonderzeichen oder Leerzeichen",
      required: "Das Feld für den Nachnamen ist verpflichtend",
      minlength: "Der Nachname muss aus mindestens 2 Zeichen bestehen",
      maxlength: "Der Nachname darf maximal 25 Zeichen lang sein.",
    },
    password: {
      passwordRegex:
        'Das Passwort muss zwischen 8–12 Zeichen lang sein, einschließlich Buchstaben (A–Z, a–z) und Zahlen (0–9). Ohne Sonderzeichen (^@()#*+/"?!=.{}~`&) und Leerzeichen',
      required: "Das Passwortfeld ist obligatorisch",
      minlength: "Das Passwort muss mindestens 8 Zeichen lang sein",
      maxlength: "Das Passwort darf nicht länger als 12 Zeichen sein",
    },
    email: {
      required: "Das E-Mail-Feld ist erforderlich",
      email: "Die E-Mail muss eine gültige Adresse sein",
    },
    phone: {
      phoneRegex: "Die Telefonnummer muss zwischen 7 und 11 Zeichen lang sein, ohne Sonderzeichen",
      required: "Telefonnummer ist erforderlich",
    },
    checkbox: {
      text1: "Mit der Registrierung akzeptiere ich die",
      link1: "Nutzungsbedingungen",
      text2: "und",
      link2: "Datenschutzerklärung",
      text3: "der Website",
    },
  },
  dk: {
    first_name: {
      usernameRegex: "Navnet skal være længere end 2 tegn, uden specialtegn eller mellemrum.",
      required: "Feltet til fornavn er påkrævet",
      minlength: "Fornavnet skal være mindst 2 tegn",
      maxlength: "Fornavnet kan maksimalt være 25 tegn",
    },
    last_name: {
      usernameRegex: "Efternavnet skal være længere end 2 tegn, uden specialtegn eller mellemrum.",
      required: "Feltet til efternavn er påkrævet",
      minlength: "Efternavnet skal være på mindst 2 tegn",
      maxlength: "Efternavnet kan maksimalt være 25 tegn",
    },
    password: {
      passwordRegex:
        'Adgangskoden skal være mellem 8-12 tegn lang, inklusiv bogstaver (A-Z, a-z) og tal (0-9). Uden specialsymboler (^@()#*+/"?!=.{}~`&) og mellemrum.',
      required: "Feltet med adgangskoden er påkrævet",
      minlength: "Adgangskoden skal være på mindst 8 tegn",
      maxlength: "Adgangskoden må ikke være på mere end 12 tegn",
    },
    email: {
      required: "E-mail feltet er påkrævet",
      email: "E-mailen skal være en gyldig adresse",
    },
    phone: {
      phoneRegex: "Telefonnummeret skal være mellem 7 og 11 tegn, uden specialtegn.",
      required: "Telefonnummeret er påkrævet",
    },
    checkbox: {
      text1: "Ved registrering accepterer jeg og er enig i Websteds",
      link1: "Brugsbetingelser",
      text2: "og",
      link2: "Privatlivspolitik",
      text3: "",
    },
  },
  es: {
    first_name: {
      usernameRegex: "El nombre debe tener más de 2 caracteres, sin caracteres especiales ni espacios",
      required: "El campo de nombre es obligatorio",
      minlength: "El primer nombre debe ser de al menos 2 caracteres",
      maxlength: "El nombre puede ser un máximo de 25 caracteres",
    },
    last_name: {
      usernameRegex: "El apellido debe tener más de 2 caracteres, sin caracteres especiales ni espacios",
      required: "El campo del apellido es obligatorio",
      minlength: "El apellido debe ser de al menos 2 caracteres",
      maxlength: "El apellido puede ser un máximo de 25 caracteres",
    },
    password: {
      passwordRegex:
        'La contraseña debe tener entre 8 y 12 caracteres de longitud, incluidas letras (AZ, az) y números (0-9). Sin símbolos especiales (^@()#*+/"?!=.{}~`&) ni espacios',
      required: "El campo de contraseña es obligatorio",
      minlength: "La contraseña debe tener al menos 8 caracteres",
      maxlength: "La contraseña no puede tener más de 12 caracteres",
    },
    email: {
      required: "El campo de correo electrónico es obligatorio",
      email: "El correo electrónico debe ser una dirección válida",
    },
    phone: {
      phoneRegex: "El teléfono debe tener de 7 a 11 caracteres, sin caracteres especiales",
      required: "El teléfono es requerido",
    },
    checkbox: {
      text1: "Al registrarme, acepto y estoy de acuerdo con",
      link1: "los términos",
      text2: " de uso y",
      link2: "la Política de privacidad",
      text3: "del sitio web",
    },
  },
  fi: {
    first_name: {
      usernameRegex: "Etunimen tulee olla vähintään 2 merkkiä pitkä, erityismerkkejä tai välilyöntejä ei sallita",
      required: "Etunimi vaaditaan",
      minlength: "Etunimen tulee sisältää vähintään 2 merkkiä",
      maxlength: "Etunimi voi sisältää enintään 25 merkkiä",
    },
    last_name: {
      usernameRegex: "Sukunimen tulee olla vähintään 2 merkkiä pitkä, erityismerkkejä tai välilyöntejä ei sallita",
      required: "Sukunimi vaaditaan",
      minlength: "Sukunimen tulee sisältää vähintään 2 merkkiä",
      maxlength: "Sukunimi voi sisältää enintään 25 merkkiä",
    },
    password: {
      passwordRegex:
        'Salasanan tulee olla 8-12 merkkiä pitkä, sisältää kirjaimia (A-Z, a-z) ja numeroita (0-9). Erikoismerkkejä (^@()#*+/"?!=.{}~`&) ja välilyöntejä ei sallita.',
      required: "Salasana vaaditaan",
      minlength: "Salasanan tulee sisältää vähintään 8 merkkiä",
      maxlength: "Salasana voi sisältää enintään 12 merkkiä",
    },
    email: {
      required: "Sähköposti vaaditaan",
      email: "Sähköpostin tulee olla voimassa",
    },
    phone: {
      phoneRegex: "Puhelinnumeron tulee sisältää 7-11 merkkiä, erikoismerkkejä ei sallita",
      required: "Puhelinnumero vaaditaan",
    },
    checkbox: {
      text1: "Rekisteröitymällä hyväksyn verkkosivuston",
      link1: "käyttöehdot",
      text2: "ja",
      link2: "tietosuojakäytännön",
      text3: "",
    },
  },
  fr: {
    first_name: {
      usernameRegex: "Le prénom doit avoir plus de 2 caractères, sans caractères spéciaux ni espaces",
      required: "Le champ du prénom est obligatoire",
      minlength: "Le prénom doit en avoir au moins 2 caractères",
      maxlength: "Le prénom peut avoir un maximum de 25 caractères",
    },
    last_name: {
      usernameRegex: "Le nom doit avoir plus de 2 caractères, sans caractères spéciaux ni espaces",
      required: "Le champ du nom est obligatoire",
      minlength: "Le nom doit en avoir au moins 2 caractères",
      maxlength: "Le nom peut avoir un maximum de 25 caractères",
    },
    password: {
      passwordRegex:
        'Le mot de passe doit avoir entre 8 et 12 caractères, comprenant des lettres (A-Z, a-z) et des chiffres (0-9). Il ne doit pas contenir de symboles spéciaux (^@()#*+/"?!=.{}~`&) ni d`espaces.',
      required: "Le champ du mot de passe est obligatoire",
      minlength: "Le mot de passe doit avoir au moins 8 caractères",
      maxlength: "Le mot de passe ne doit pas avoir plus de 12 caractères",
    },
    email: {
      required: "Le champ de l'email est obligatoire",
      email: "L'email doit être une adresse valide",
    },
    phone: {
      phoneRegex: "Le numéro de téléphone doit avoir entre 7 et 11 caractères, sans caractères spéciaux",
      required: "Le téléphone est obligatoire",
    },
    checkbox: {
      text1: "En vous inscrivant, vous acceptez",
      link1: "les conditions",
      text2: " d'utilisation et la",
      link2: "politique de confidentialité",
      text3: "du sit",
    },
  },
  gr: {
    first_name: {
      usernameRegex: "Το όνομα πρέπει να έχει μήκος πάνω από 2 χαρακτήρες, χωρίς ειδικούς χαρακτήρες ή κενά",
      required: "Το πεδίο του ονόματος είναι υποχρεωτικό",
      minlength: "Το όνομα πρέπει να είναι τουλάχιστον 2 χαρακτήρες",
      maxlength: "Το όνομα μπορεί να είναι το πολύ 25 χαρακτήρες",
    },
    last_name: {
      usernameRegex:
        "Το επώνυμο πρέπει να έχει μήκος μεγαλύτερο από 2 χαρακτήρες, χωρίς ειδικούς χαρακτήρες ή κενά",
      required: "Το πεδίο του επωνύμου είναι υποχρεωτικό",
      minlength: "Το επώνυμο πρέπει να είναι τουλάχιστον 2 χαρακτήρες",
      maxlength: "Το επώνυμο μπορεί να είναι το πολύ 25 χαρακτήρες",
    },
    password: {
      passwordRegex:
        'Ο κωδικός πρόσβασης πρέπει να έχει μήκος μεταξύ 8-12 χαρακτήρων, συμπεριλαμβανομένων γραμμάτων (A-Z, a-z) και αριθμών (0-9). Χωρίς ειδικά σύμβολα (^@()#*+/"?!=.{}~`&) και κενά.',
      required: "Το πεδίο του κωδικού πρόσβασης είναι υποχρεωτικό",
      minlength: "Ο κωδικός πρόσβασης πρέπει να αποτελείται από τουλάχιστον 8 χαρακτήρες",
      maxlength: "Ο κωδικός πρόσβασης δεν μπορεί να είναι μεγαλύτερος από 12 χαρακτήρες",
    },
    email: {
      required: "Το πεδίο του e-mail είναι υποχρεωτικό",
      email: "Το e-mail πρέπει να είναι έγκυρη διεύθυνση",
    },
    phone: {
      phoneRegex: "Το τηλέφωνο πρέπει να αποτελείται από 7 έως 11 χαρακτήρες, χωρίς ειδικούς χαρακτήρες",
      required: "Το τηλέφωνο είναι υποχρεωτικό",
    },
    checkbox: {
      text1: "Με την εγγραφή μου, συμφωνώ με και αποδέχομαι",
      link1: "τους όρους",
      text2: "χρήσης της Ιστοσελίδας και την",
      link2: "Πολιτική Απορρήτου",
      text3: "",
    },
  },
  hu: {
    first_name: {
      usernameRegex: "A névnek több mint 2 karakter hosszúnak kell lennie, különleges karakterek és szóközök nélkül.",
      required: "A keresztnév mező kitöltése kötelező",
      minlength: "A keresztnévnek legalább 2 karakterből kell állnia",
      maxlength: "A keresztnév legfeljebb 25 karakter lehet",
    },
    last_name: {
      usernameRegex:
        "A vezetéknévnek több mint 2 karakter hosszúnak kell lennie, különleges karakterek és szóközök nélkül.",
      required: "A vezetéknév mező kitöltése kötelező",
      minlength: "A vezetéknévnek legalább 2 karakterből kell állnia",
      maxlength: "A vezetéknév legfeljebb 25 karakter lehet",
    },
    password: {
      passwordRegex:
        'A jelszónak 8-12 karakter hosszúságúnak kell lennie, beleértve a betűket (A-Z, a-z) és a számokat (0-9). Különleges szimbólumok (^@()#*+/"?!=.{}~`&) és szóközök nélkül.',
      required: "A jelszó mező kitöltése kötelező",
      minlength: "A jelszónak legalább 8 karakterből kell állnia",
      maxlength: "A jelszó nem lehet 12 karakternél hosszabb",
    },
    email: {
      required: "Az e-mail mező kitöltése kötelező",
      email: "Az e-mail címnek érvényesnek kell lennie",
    },
    phone: {
      phoneRegex: "A telefonszámnak 7 és 11 karakter között kell lennie, különleges karakterek nélkül.",
      required: "A telefonszám megadása kötelező",
    },
    checkbox: {
      text1: "Regisztrációval elfogadom és elfogadom a weboldal",
      link1: "használati feltételeit",
      text2: "és az",
      link2: " adatvédelmi irányelveket",
      text3: "",
    },
  },
  it: {
    first_name: {
      usernameRegex: "Il nome deve essere lungo più di 2 caratteri, senza caratteri speciali o spazi.",
      required: "Il campo del nome è obbligatorio",
      minlength: "Il nome deve essere almeno 2 caratteri",
      maxlength: "Il nome può essere al massimo 25 caratteri",
    },
    last_name: {
      usernameRegex: "Il cognome deve essere composto da più di 2 caratteri, senza caratteri speciali o spazi.",
      required: "Il campo del cognome è obbligatorio",
      minlength: "Il cognome deve essere almeno 2 caratteri",
      maxlength: "Il cognome può essere al massimo 25 caratteri",
    },
    password: {
      passwordRegex:
        'La password deve avere una lunghezza compresa tra 8 e 12 caratteri, tra cui lettere (A-Z, a-z) e numeri (0-9). Senza simboli speciali (^@()#*+/"?!=.{}~`&) e spazi.',
      required: "Il campo della password è obbligatorio",
      minlength: "La password deve essere composta da almeno 8 caratteri",
      maxlength: "La password non può essere superiore a 12 caratteri",
    },
    email: {
      required: "Il campo e-mail è obbligatorio",
      email: "L'e-mail deve essere un indirizzo valido",
    },
    phone: {
      phoneRegex: "Il telefono deve essere composto da 7 a 11 caratteri, senza caratteri speciali.",
      required: "Il telefono è richiesto",
    },
    checkbox: {
      text1: "Registrandomi, accetto i",
      link1: "Termini e Condizioni",
      text2: " di utilizzo del sito e",
      link2: "l'informativa sulla privacy",
      text3: " del sito web.",
    },
  },
  latam: {
    first_name: {
      usernameRegex: "El nombre debe tener más de 2 caracteres, sin caracteres especiales ni espacios.",
      required: "El campo del primer nombre es obligatorio",
      minlength: "El primer nombre debe tener al menos 2 caracteres",
      maxlength: "El primer nombre puede tener un máximo de 25 caracteres",
    },
    last_name: {
      usernameRegex: "El apellido debe tener más de 2 caracteres, sin caracteres especiales ni espacios.",
      required: "El campo del apellido es obligatorio",
      minlength: "El apellido debe tener al menos 2 caracteres",
      maxlength: "El apellido puede tener un máximo de 25 caracteres",
    },
    password: {
      passwordRegex:
        'La contraseña debe tener entre 8 y 12 caracteres, incluyendo letras (A-Z, a-z) y números (0-9). Sin símbolos especiales (^@()#*+/"?!=.{}~`&) ni espacios.',
      required: "El campo de contraseña es obligatorio",
      minlength: "La contraseña debe tener al menos 8 caracteres",
      maxlength: "La contraseña no puede tener más de 12 caracteres",
    },
    email: {
      required: "El campo de correo electrónico es obligatorio",
      email: "El correo electrónico debe ser una dirección válida",
    },
    phone: {
      phoneRegex: "El teléfono debe tener de 7 a 11 caracteres, sin caracteres especiales",
      required: "El teléfono es obligatorio",
    },
    checkbox: {
      text1: "Al registrarme, acepto y estoy de acuerdo con",
      link1: "los términos",
      text2: "de uso y",
      link2: "la Política de privacidad",
      text3: "del sitio web",
    },
  },
  me: {
    first_name: {
      usernameRegex: "Ime mora biti duže od dva znaka, i ne smije sadržati specijalne znakove ili razmake",
      required: "Polje sa imenom mora biti popunjeno",
      minlength: "Ime mora biti duže od dva znaka",
      maxlength: "Ime ne može biti duže od 25 znakova",
    },
    last_name: {
      usernameRegex: "Prezime mora biti duže od dva znaka, i ne smije sadržati specijalne znakove ili razmake",
      required: "Polje sa prezimenom mora biti popunjeno",
      minlength: "Prezime mora biti duže od dva znaka",
      maxlength: "Prezime ne može biti duže od 25 znakova",
    },
    password: {
      passwordRegex:
        'Lozinka mora sadržati između 8 i 12 znakova, i mora uključivati slova (A -Z, a -z) i brojeve (0-9), i ne smije sadržati specijalne znakove (^@()#*+/"?!=.{}~`&) i razmake',
      required: "Polje sa lozinkom mora biti popunjeno",
      minlength: "Lozinka mora sadržati najmanje 8 znakova",
      maxlength: "Lozinka ne smije biti duža od 12 znakova",
    },
    email: {
      required: "Polje za imejl adresu mora biti popunjeno",
      email: "Imejl adresa mora biti validna",
    },
    phone: {
      phoneRegex: "Telefonski broj mora sadržati između 7 i 11 znakova, i ne smije sadržati specijalne znakove",
      required: "Polje sa telefonskim brojem mora biti popunjeno",
    },
    checkbox: {
      text1: "Registracijom se slažem i prihvaćam",
      link1: "uvjete",
      text2: "korištenja web stranice i",
      link2: "Pravila o privatnosti",
      text3: "",
    },
  },
  nl: {
    first_name: {
      usernameRegex: "Naam moet langer zijn dan 2 tekens, zonder speciale tekens of spaties.",
      required: "Het veld voornaam is verplicht.",
      minlength: "De voornaam moet minimaal 2 tekens lang zijn.",
      maxlength: "De voornaam mag maximaal 25 tekens bevatten.",
    },
    last_name: {
      usernameRegex: "Achternaam moet langer zijn dan 2 tekens, zonder speciale tekens of spaties.",
      required: "Het veld achternaam is verplicht.",
      minlength: "De achternaam moet minimaal 2 tekens lang zijn.",
      maxlength: "De achternaam mag maximaal 25 tekens bevatten.",
    },
    password: {
      passwordRegex:
        'Het wachtwoord moet tussen de 8 en 12 tekens lang zijn, inclusief letters (A-Z, a-z) en cijfers (0-9). Zonder speciale tekens (^@()#*+/"?!=.{}~`&) en spaties.',
      required: "Het veld wachtwoord is verplicht.",
      minlength: "Het wachtwoord moet minimaal 8 tekens lang zijn.",
      maxlength: "Het wachtwoord mag niet langer zijn dan 12 tekens.",
    },
    email: {
      required: "Het veld e-mail is verplicht.",
      email: "Het e-mailadres moet een geldig adres zijn.",
    },
    phone: {
      phoneRegex: "Het telefoonnummer moet tussen de 7 en 11 tekens lang zijn, zonder speciale tekens.",
      required: "Het telefoon veld is verplicht.",
    },
    checkbox: {
      text1: "Door te registreren ga ik akkoord en accepteer ik de algemene",
      link1: "voorwaarden",
      text2: " en het",
      link2: "privacybeleid",
      text3: "van de website",
    },
  },
  no: {
    first_name: {
      usernameRegex: "Navnet må bestå av mer enn 2 tegn, uten spesialtegn eller mellomrom",
      required: "Fornavn-feltet er obligatorisk",
      minlength: "Fornavnet må være minst 2 tegn",
      maxlength: "Fornavn kan være maksimalt 25 tegn",
    },
    last_name: {
      usernameRegex: "Etternavnet må bestå av mer enn 2 tegn, uten spesialtegn eller mellomrom",
      required: "Etternavn-feltet er obligatorisk",
      minlength: "Etternavnet må være minst 2 tegn",
      maxlength: "Etternavn kan være maksimalt 25 tegn",
    },
    password: {
      passwordRegex:
        'Passordet må bestå av mellom 8 og 12 tegn, inkludert bokstaver (A-Z, a-z) og tall (0-9). Uten noen spesielle symboler (^@()#*+/"?!=.{}~`&) eller mellomrom',
      required: "Passord-feltet er obligatorisk",
      minlength: "Passordet må være minst 8 tegn",
      maxlength: "Passordet kan ikke være mer enn 12 tegn",
    },
    email: {
      required: "E-post-feltet er obligatorisk",
      email: "E-postenadressen må være gyldig",
    },
    phone: {
      phoneRegex: "Telefonnummer må være mellom 7 og 11 tegn, uten spesialtegn",
      required: "Telefonnummeret er obligatorisk",
    },
    checkbox: {
      text1: "Ved registrering godtar jeg og aksepterer jeg Nettsidens",
      link1: "vilkår for bruk",
      text2: "og",
      link2: "personvernregler",
      text3: "",
    },
  },
  pl: {
    first_name: {
      usernameRegex: "Imię musi składać się z więcej niż 2 znaków, bez znaków specjalnych i spacji.",
      required: "Pole imienia jest wymagane",
      minlength: "Imię musi składać się z przynajmniej 2 znaków",
      maxlength: "Imię może zawierać maksymalnie 25 liter",
    },
    last_name: {
      usernameRegex: "Nazwisko musi składać się z więcej niż 2 znaków, bez znaków specjalnych i spacji.",
      required: "Pole nazwiska jest wymagane",
      minlength: "Nazwisko musi zawierać co najmniej 2 znaki",
      maxlength: "Nazwisko może zawierać maksymalnie 25 liter",
    },
    password: {
      passwordRegex:
        'Hasło musi zawierać od 8 do 12 znaków, w tym litery (A-Z, a-z) i cyfry (0-9). Bez symboli specjalnych (^@()#*+/"?!=.{}~`&) i spacji.',
      required: "Pole hasła jest wymagane",
      minlength: "Hasło musi składać się z przynajmniej 8 znaków",
      maxlength: "Hasło nie może być dłuższe niż 12 znaków",
    },
    email: {
      required: "Pole adresu e-mail jest wymagane",
      email: "Adres e-mail musi być właściwy",
    },
    phone: {
      phoneRegex: "Numer musi składać się od 7 do 11 znaków bez znaków specjalnych",
      required: "Numer telefonu jest wymagany",
    },
    checkbox: {
      text1: "Rejestrując się, akceptuję i zgadzam się na",
      link1: "warunki",
      text2: "korzystania z niniejszej strony internetowej oraz jej",
      link2: "politykę prywatności",
      text3: "",
    },
  },
  pt: {
    first_name: {
      usernameRegex: "O nome tem de ter mais de 2 caracteres, sem caracteres especiais ou espaços",
      required: "O campo do nome é obrigatório",
      minlength: "O nome deve ter pelo menos 2 caracteres",
      maxlength: "O nome pode ter no máximo 25 caracteres",
    },
    last_name: {
      usernameRegex: "O apelido tem de ter mais de 2 caracteres, sem caracteres especiais ou espaços",
      required: "O campo do apelido é obrigatório",
      minlength: "O apelido deve ter pelo menos 2 caracteres",
      maxlength: "O apelido pode ter no máximo 25 caracteres",
    },
    password: {
      passwordRegex:
        'A palavra-passe deve ter entre 8 e 12 caracteres, incluindo letras (A-Z, a-z) e números (0-9). Não deve incluir quaisquer símbolos especiais (^@()#*+/"?!=.{}~`&) e espaços',
      required: "O campo da palavra-passe é obrigatório",
      minlength: "A palavra-passe deve ter pelo menos 8 caracteres",
      maxlength: "A palavra-passe não pode ter mais de 12 caracteres",
    },
    email: {
      required: "O campo de e-mail é obrigatório",
      email: "O e-mail deve ser um endereço válido",
    },
    phone: {
      phoneRegex: "O telefone deve ter entre 7 e 11 caracteres, sem caracteres especiais",
      required: "O telefone é obrigatório",
    },
    checkbox: {
      text1: "Ao me cadastrar, eu concordo e aceito os",
      link1: "termos",
      text2: "de uso e",
      link2: "Política de Privacidade",
      text3: "do site",
    },
  },
  ro: {
    first_name: {
      usernameRegex: "Numele trebuie să aibă mai mult de 2 caractere, și să nu aibă caractere speciale sau spații.",
      required: "Câmpul prenumele este obligatoriu",
      minlength: "Prenumele trebuie să aibă cel puțin 2 caractere",
      maxlength: "Prenumele poate avea maximum 25 caractere",
    },
    last_name: {
      usernameRegex:
        "Numele de familie trebuie să aibă mai mult de 2 caractere, și să nu aibă caractere speciale sau spații.",
      required: "Câmpul nume de familie este obligatoriu",
      minlength: "Numele de familie trebuie să aibă cel puțin 2 caractere",
      maxlength: "Numele de familie poate avea maximum 25 caractere",
    },
    password: {
      passwordRegex:
        'Parola trebuie să aibă o lungime cuprinsă între 8-12 caractere, inclusiv litere (A-Z, a-z) și numere (0-9). Fără simboluri speciale (^@()#*+/"?!=.{}~`&) și spații.',
      required: "Câmpul parola este obligatoriu",
      minlength: "Parola trebuie să fie de cel puțin 8 caractere",
      maxlength: "Parola nu poate fi mai mare de 12 caractere",
    },
    email: {
      required: "Câmpul e-mail este obligatoriu",
      email: "E-mailul trebuie să fie o adresă validă",
    },
    phone: {
      phoneRegex: "Telefonul trebuie să aibă între 7 și 11 caractere, fără caractere speciale.",
      required: "Telefonul este obligatoriu",
    },
    checkbox: {
      text1: "Prin înregistrare sunt de acord și accept",
      link1: "condițiile",
      text2: " de utilizare ale site-ului web și",
      link2: "politica acestuia de confidențialitate",
      text3: "",
    },
  },
  ru: {
    first_name: {
      usernameRegex: "Имя должно состоять более чем из 2 знаков, без специальных символов и пробелов",
      required: "Поле обязательно для заполнения",
      minlength: "Имя должно состоять не менее чем из 2 знаков",
      maxlength: "Имя может содержать максимум 25 знаков",
    },
    last_name: {
      usernameRegex: "Фамилия должна состоять более чем из 2 знаков, без специальных символов и пробелов",
      required: "Поле обязательно для заполнения",
      minlength: "Фамилия должна состоять не менее чем из 2 знаков",
      maxlength: "Фамилия может содержать максимум 25 знаков",
    },
    password: {
      passwordRegex:
        'Пароль должен состоять из 8-12 знаков, включая буквы (A-Z, a-z) и цифры (0-9). Без специальных символов (^@()#*+/"?!=.{}~`&) и пробелов.',
      required: "Поле обязательно для заполнения",
      minlength: "Пароль должен состоять не менее чем из 8 знаков",
      maxlength: "Пароль не может быть больше 12 знаков",
    },
    email: {
      required: "Поле обязательно для заполнения",
      email: "Адрес электронной почты должен быть действительным",
    },
    phone: {
      phoneRegex: "Телефон должен состоять из 7-11 знаков, без специальных символов",
      required: "Поле обязательно для заполнения",
    },
    checkbox: {
      text1: "Регистрируясь, я соглашаюсь и принимаю",
      link1: "условия",
      text2: " использования веб-сайта и",
      link2: "политику конфиденциальности",
      text3: "",
    },
  },
  se: {
    first_name: {
      usernameRegex: "Namnet måste vara mer än 2 tecken långt, utan specialtecken eller mellanslag",
      required: "Fältet för förnamn är obligatoriskt",
      minlength: "Förnamnet måste vara minst 2 tecken",
      maxlength: "Förnamnet kan vara högst 25 tecken",
    },
    last_name: {
      usernameRegex: "Efternamnet måste vara mer än 2 tecken långt, utan specialtecken eller mellanslag",
      required: "Fältet för efternamn är obligatoriskt",
      minlength: "Efternamnet måste vara minst 2 tecken",
      maxlength: "Efternamnet kan vara högst 25 tecken",
    },
    password: {
      passwordRegex:
        'Lösenordet måste bestå av 8-12 tecken, inklusive bokstäver (A-Z, a-z) och siffror (0-9). Utan specialsymboler (^@()#*+/"?!=.{}~`&) och mellanslag',
      required: "Fältet för lösenord är obligatoriskt",
      minlength: "Lösenordet måste bestå av minst 8 tecken",
      maxlength: "Lösenordet får inte vara längre än 12 tecken",
    },
    email: {
      required: "E-postfältet är obligatoriskt",
      email: "E-postadressen måste vara en giltig adress",
    },
    phone: {
      phoneRegex: "Telefonnumret måste vara mellan 7 och 11 tecken, utan specialtecken",
      required: "Telefonnummer krävs",
    },
    checkbox: {
      text1: "Genom att registrera mig godkänner och accepterar jag webbplatsens",
      link1: "användarvillkor",
      text2: "och",
      link2: "integritetspolicy",
      text3: "",
    },
  },
  sk: {
    first_name: {
      usernameRegex: "Meno musí byť dlhšie ako 2 znaky, bez špeciálnych znakov alebo medzier",
      required: "Pole s menom je povinné",
      minlength: "Meno musí obsahovať aspoň 2 znaky",
      maxlength: "Meno môže byť maximálne 25 znakov dlhé",
    },
    last_name: {
      usernameRegex: "Priezvisko musí byť dlhšie ako 2 znaky, bez špeciálnych znakov alebo medzier",
      required: "Pole pre priezvisko je povinné",
      minlength: "Priezvisko musí obsahovať aspoň 2 znaky",
      maxlength: "Priezvisko môže byť maximálne 25 znakov dlhé",
    },
    password: {
      passwordRegex:
        'Heslo musí mať dĺžku 8 až 12 znakov vrátane písmen (A-Z, a-z) a číslic (0-9). Bez špeciálnych symbolov (^@()#*+/"?!=.{}~`&) a medzier',
      required: "Pole pre heslo je povinné",
      minlength: "Heslo musí obsahovať aspoň 8 znakov",
      maxlength: "Heslo nesmie mať viac ako 12 znakov",
    },
    email: {
      required: "Pole pre e-mail je povinné",
      email: "E-mail musí byť platná adresa",
    },
    phone: {
      phoneRegex: "Telefónne číslo musí mať 7 až 11 znakov bez špeciálnych znakov",
      required: "Telefónne číslo je povinné",
    },
    checkbox: {
      text1: "Registráciou súhlasím a prijímam",
      link1: "podmienky",
      text2: "používania webových stránok",
      link2: "a zásady ochrany osobných údajov",
      text3: "",
    },
  },
  sl: {
    first_name: {
      usernameRegex: "Ime mora biti dolgo več kot 2 znaka, pri tem pa ne sme vsebovati posebnih znakov ali presledkov",
      required: "Polje z imenom je obvezno",
      minlength: "Ime mora imeti vsaj 2 znaka",
      maxlength: "Ime ima lahko največ 25 znakov",
    },
    last_name: {
      usernameRegex:
        "Priimek mora biti dolg več kot 2 znaka, pri tem pa ne sme vsebovati posebnih znakov ali presledkov",
      required: "Polje s priimkom je obvezno",
      minlength: "Priimek mora imeti vsaj 2 znaka",
      maxlength: "Priimek ima lahko največ 25 znakov",
    },
    password: {
      passwordRegex:
        'Geslo mora biti dolgo med 8 in 12 znaki, vključno s črkami (A-Z, a-z) in številkami (0-9). Ne sme pa vsebovati posebnih simbolov (^@()#*+/"?!=.{}~`&) in presledkov',
      required: "Polje z geslom je obvezno",
      minlength: "Geslo mora imeti vsaj 8 znakov",
      maxlength: "Geslo ima lahko največ 12 znakov",
    },
    email: {
      required: "Polje z elektronsko pošto je obvezno",
      email: "Elektronski naslov mora biti veljaven",
    },
    phone: {
      phoneRegex: "Številka telefona mora biti dolga med 7 in 11 znakov, pri tem pa ne sme vsebovati posebnih znakov",
      required: "Telefon je obvezen",
    },
    checkbox: {
      text1: "Z registracijo se strinjam in sprejemam",
      link1: "pogoje",
      text2: "uporabe spletnega mesta in",
      link2: "pravilnik o zasebnosti",
      text3: "",
    },
  },
  tr: {
    first_name: {
      usernameRegex: "İsim 2 karakterden uzun olmalı, özel karakter veya boşluk içermemelidir",
      required: "İsim alanı boş bırakılamaz",
      minlength: "İsim en az 2 karakter olmalıdır",
      maxlength: "İsim maksimum 25 karakter olabilir",
    },
    last_name: {
      usernameRegex: "Soyisim 2 karakterden uzun olmalı, özel karakter veya boşluk içermemelidir",
      required: "Soyisim alanı boş bırakılamaz",
      minlength: "Soyisim en az 2 karakter olmalıdır",
      maxlength: "Soyisim maksimum 25 karakter olabilir",
    },
    password: {
      passwordRegex:
        'Şifre 8-12 karakter uzunluğunda olmalı, harf (A-Z, a-z) ve sayı (0-9) içermelidir. Herhangi bir özel sembol (^@()#*+/"?!=.{}~`&) ve boşluk içermemelidir',
      required: "Şifre alanı boş bırakılamaz",
      minlength: "Şifre en az 8 karakter olmalıdır",
      maxlength: "Şifre 12 karakterden fazla olamaz",
    },
    email: {
      required: "E-posta alanı boş bırakılamaz",
      email: "E-posta geçerli bir adres olmalıdır",
    },
    phone: {
      phoneRegex: "Telefon numarası 7 ila 11 karakter arasında olmalı, özel karakter içermelidir",
      required: "Telefon numarası boş bırakılamaz",
    },
    checkbox: {
      text1: "Kaydolarak Web",
      link1: "Sitesi kullanım şartlarını",
      text2: "ve",
      link2: "Gizlilik Politikasını",
      text3: "kabul ediyor ve onaylıyorum",
    },
  },
  lv: {
    first_name: {
      usernameRegex: "Vārdam jābūt garākam par 2 rakstzīmēm, bez īpašajām rakstzīmēm un atstarpēm",
      required: "Lauks Vārds ir obligāts",
      minlength: "Vārdam jābūt vismaz 2 rakstzīmēm garam",
      maxlength: "Vārds nedrīkst būt garāks par 25 rakstzīmēm",
    },
    last_name: {
      usernameRegex: "Uzvārdam jābūt garākam par 2 rakstzīmēm, bez īpašajām rakstzīmēm un atstarpēm",
      required: "Lauks Uzvārds ir obligāts",
      minlength: "Uzvārdam jābūt vismaz 2 rakstzīmēm garam",
      maxlength: "Uzvārds nedrīkst būt garāks par 25 rakstzīmēm",
    },
    password: {
      passwordRegex:
        'Parolei jāsastāv no 8 līdz 12 rakstzīmēm, ieskaitot burtus (A-Z, a-z) un ciparus (0-9). Bez īpašajiem simboliem (^@()#*+/"?!=.{}~`&) un atstarpēm',
      required: "Paroles lauks ir obligāts",
      minlength: "Parolei jābūt vismaz 8 rakstzīmēm garai",
      maxlength: "Parole nedrīkst būt garāka par 12 rakstzīmēm",
    },
    email: {
      required: "E-pasta lauks ir obligāts",
      email: "E-pastam jābūt derīgai adresei",
    },
    phone: {
      phoneRegex: "Tālrunim jābūt no 7 līdz 11 rakstzīmēm garam, bez īpašajām rakstzīmēm",
      required: "Tālrunis ir obligāts lauks",
    },
    checkbox: {
      text1: "Reģistrējoties es piekrītu un pieņemu mājaslapas lietošanas",
      link1: "noteikumus",
      text2: "un",
      link2: "Privātuma Politiku",
      text3: "",
    },
  },
  lt: {
    first_name: {
      usernameRegex: "Vardas turi būti ilgesnis nei 2 ženklai, be specialiųjų ženklų ir tarpų.",
      required: "Vardo laukas yra privalomas",
      minlength: "Vardas turi būti ne trumpesnis kaip 2 ženklai",
      maxlength: "Vardą gali sudaryti ne daugiau kaip 25 ženklai",
    },
    last_name: {
      usernameRegex: "Pavardė turi būti ilgesnė nei 2 ženklai, be specialiųjų ženklų ir tarpų.",
      required: "Pavardės laukas yra privalomas",
      minlength: "Pavardė turi būti ne trumpesnė kaip 2 ženklai",
      maxlength: "Pavardė gali būti ne daugiau kaip 25 ženklai",
    },
    password: {
      passwordRegex:
        'Slaptažodis turi būti 8-12 simbolių ilgio, įskaitant raides (A-Z, a-z) ir skaičius (0-9). Be jokių specialiųjų simbolių (^@()#*+/"?!=.{}~`&) ir tarpų.',
      required: "Slaptažodžio laukas yra privalomas",
      minlength: "Slaptažodį turi sudaryti ne mažiau kaip 8 simboliai",
      maxlength: "Slaptažodis negali būti ilgesnis nei 12 simbolių",
    },
    email: {
      required: "El. pašto laukas yra privalomas",
      email: "El. paštas turi būti galiojantis",
    },
    phone: {
      phoneRegex: "Telefonas turi būti nuo 7 iki 11 simbolių be specialiųjų ženklų.",
      required: "Telefonas yra privalomas",
    },
    checkbox: {
      text1: "Registruodamasis sutinku ir priimu svetainės",
      link1: "naudojimo",
      text2: "sąlygas ir",
      link2: "privatumo politiką",
      text3: "",
    },
  },
  ee: {
    first_name: {
      usernameRegex: "Nimi peab olema pikem kui 2 tähemärki, ilma erimärkide ja tühikuteta.",
      required: "Eesnime väli on kohustuslik",
      minlength: "Eesnimi peab olema vähemalt 2 tähemärki",
      maxlength: "Eesnimi võib olla maksimaalselt 25 tähemärki",
    },
    last_name: {
      usernameRegex: "Perekonnanimi peab olema pikem kui 2 tähemärki, ilma erimärkide ja tühikuteta",
      required: "Perekonnanime väli on kohustuslik",
      minlength: "Perekonnanimi peab olema vähemalt 2 tähemärki",
      maxlength: "Perekonnanimi võib olla maksimaalselt 25 tähemärki",
    },
    password: {
      passwordRegex:
        'Parool peab olema 8-12 tähemärki pikk, sealhulgas tähed (A-Z, a-z) ja numbrid (0-9). Ilma erisümboliteta (^@()#*+/"?!=.{}~`&) ja tühikuteta.',
      required: "Parooli väli on kohustuslik",
      minlength: "Parool peab olema vähemalt 8 tähemärki",
      maxlength: "Parool ei tohi olla pikem kui 12 tähemärki",
    },
    email: {
      required: "E-posti väli on kohustuslik",
      email: "E-post peab olema kehtiv aadress",
    },
    phone: {
      phoneRegex: "Telefon peab olema 7-11 tähemärki, ilma erimärkideta",
      required: "Telefoni number on kohustuslik",
    },
    checkbox: {
      text1: "Registreerimisega nõustun ja aktsepteerin veebisaidi",
      link1: "kasutustingimusi",
      text2: "ja",
      link2: "Privaatsuspoliitikat",
      text3: "",
    },
  },
  jp: {
    first_name: {
      usernameRegex: "名前は2文字以上で、特殊文字やスペースは使用しないでください。",
      required: "姓は必須項目です。",
      minlength: "姓は2文字以上でなければなりません",
      maxlength: "姓は最大25文字まで",
    },
    last_name: {
      usernameRegex: "姓は2文字以上で、特殊文字やスペースは使用できません。",
      required: "姓は必須項目です。",
      minlength: "姓は2文字以上でなければなりません",
      maxlength: "姓は最大25文字です。",
    },
    password: {
      passwordRegex:
        'パスワードは、英字（A-Z、a-z）および数字（0-9）を含む8～12文字で入力してください。特殊記号(^@()#*+/"?!=.{}~`&)およびスペースを含まないこと。',
      required: "パスワード・フィールドは必須です。",
      minlength: "パスワードは8文字以上でなければなりません。",
      maxlength: "パスワードは12文字以上であってはならない",
    },
    email: {
      required: "e-mailフィールドは必須です。",
      email: "E-mailは有効なアドレスでなければなりません",
    },
    phone: {
      phoneRegex: "電話番号は7文字以上11文字以内で、特殊文字は使用しないでください。",
      required: "電話番号は必須項目です。",
    },
    checkbox: {
      text1: "登録することにより、私はウェブサイトの",
      link1: "利用規約",
      text2: "と",
      link2: "プライバ",
      text3: "シーポリシーに同意し、承諾します。",
    },
  },
  kr: {
    first_name: {
      usernameRegex: "이름은 특수 문자나 공백 없이 2자 이상이어야 합니다.",
      required: "이름 필드는 필수입니다.",
      minlength: "이름은 2자 이상이어야 합니다.",
      maxlength: "이름은 최대 25자까지 입력 가능",
    },
    last_name: {
      usernameRegex: "성은 특수 문자나 공백 없이 2자 이상이어야 하며, 2자 이상이어야 합니다.",
      required: "성 필드는 필수 입력 사항입니다.",
      minlength: "성은 2자 이상이어야 합니다.",
      maxlength: "성은 최대 25자까지 입력할 수 있습니다.",
    },
    password: {
      passwordRegex:
        '비밀번호는 문자(A-Z, a-z)와 숫자(0-9)를 포함하여 8~12자 사이여야 합니다. 특수 기호(^@()#*+/"?!=.{}~`&)와 공백을 포함하지 않아야 합니다.',
      required: "비밀번호 필드는 필수입니다.",
      minlength: "비밀번호는 8자 이상이어야 합니다.",
      maxlength: "비밀번호는 12자를 초과할 수 없습니다.",
    },
    email: {
      required: "이메일 필드는 필수입니다.",
      email: "이메일은 유효한 주소여야 합니다.",
    },
    phone: {
      phoneRegex: "전화번호는 특수 문자 없이 7~11자 사이여야 합니다.",
      required: "전화는 필수 입력 사항입니다.",
    },
    checkbox: {
      text1: "등록함으로써 본인은 웹사이트",
      link1: "이용 약관",
      text2: "및",
      link2: "개인정보 보호정책",
      text3: "에 동의하고 수락합니다.",
    },
  },
};
