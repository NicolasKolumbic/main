var controls = document.querySelectorAll('.text-box input');
/**
 * badInput

customError

patternMismatch

rangeOverflow

rangeUnderflow

stepMismatch

tooLong

tooShort

typeMismatch

valid

valueMissing

 */
function validate() {
    var message = '';
    if(this.validity.valueMissing) {
       message =  `El campo "${this.nextElementSibling.textContent}" es requerido.`
    } else if(this.validity.patternMismatch || this.validity.typeMismatch) {
        message = `El formato del campo "${this.nextElementSibling.textContent}" es erroneo.${this.getAttribute('data-error-message')}`
    } else if(this.validity.tooShort) {
        message = `El campo "${this.nextElementSibling.textContent}" debe tener como mínimo ${this.getAttribute('minLength')} caracteres`
    }

    if(!this.validity.valid) {
        if(!this.classList.contains("invalid")) {
            this.classList.add("invalid");
        }
        this.parentElement.nextElementSibling.innerText = `❌ ${message}`;
    } else {
        if(this.classList.contains("invalid")) {
            this.classList.remove("invalid");
        } 
    }
}

function clear() {
    this.parentElement.nextElementSibling.innerText = '';
    if(this.classList.contains("invalid")) {
        this.classList.remove("invalid");
    } 
}

controls.forEach(function(control) {
    control.addEventListener('blur', validate);
    control.addEventListener('focus', clear);
})