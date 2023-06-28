var controls = Array.from(document.querySelectorAll('.text-box input'));
var title = document.querySelector('#title');
var subscriptionForm = document.getElementById('subscriptionForm');
var modal = document.querySelector('.modal');
var storage = {
    set: function(key, value) {
        localStorage.setItem(key, value);
    },
    get: function(key, value) {
        localStorage.getItem(key);
    }
};

function updateTitle() {
    title.textContent = 'Hola ' + this.value;
}

function comparePassword(event) {
    var password = controls.find(function(control) {
        if(control.id === 'password') return control;
    });

    var repeatPassword = controls.find(function(control) {
        if(control.id === 'repeat-password') return control;
    });

    var isInvalid = password.value !== "" && repeatPassword.value !== "" && password.value !== repeatPassword.value; 

    if(isInvalid) {
       validate.call(password, {arePasswordNotEquals: true});
       validate.call(repeatPassword, {arePasswordNotEquals: true});
    } else {
        clear.call(password);
        clear.call(repeatPassword);
    }
}

function isCustom(customSetting) {
    return Object.keys(customSetting).length > 0;
}

function validate(custom) {
    var message = '';

    if(custom && custom.arePasswordNotEquals) {
        message = `Las contraseñas deben coincidir`
    } else if(this.validity.valueMissing) {
       message =  `El campo "${this.nextElementSibling.textContent}" es requerido.`
    } else if((this.validity.patternMismatch || this.validity.typeMismatch)) {
        message = `El formato del campo "${this.nextElementSibling.textContent}" es erroneo.${this.getAttribute('data-error-message')}`
    } else if(this.validity.tooShort) {
        message = `El campo "${this.nextElementSibling.textContent}" debe tener como mínimo ${this.getAttribute('minLength')} caracteres`
    } else if(this.validity.rangeUnderflow) {
        message = `El campo "${this.nextElementSibling.textContent}" debe ser mayor de edad`
    }

    if(!this.validity.valid || (custom && isCustom(custom) && message !== "")) {
        if(!this.classList.contains('invalid')) {
            this.classList.add('invalid');
        }
        this.parentElement.nextElementSibling.innerText = `❌ ${message}`;
    } else {
        clear.call(this);
    }

    return {
        field: this.nextElementSibling.textContent,
        errorMessage: message,
        hasError: message !== message
    };
}

function clear() {
    this.parentElement.nextElementSibling.innerText = '';
    if(this.classList.contains('invalid')) {
        this.classList.remove('invalid');
    } 
}

function errorHandler(err) {
    console.error(err);
}

function responseHandler(res) {
    modal.querySelector('.body-res').textContent = JSON.stringify(res);
    modal.showModal();
    console.log(res);
}

function send(event) {
    event.preventDefault();
    var result = {};

    if(subscriptionForm.checkValidity()) {
        controls.forEach(function(element) {
            if(element.tagName === 'INPUT') {
                result[element.id] = element.value;
            }
        });

        fetch('', result).then(responseHandler).catch(errorHandler);
    } else {
        var errors = '';
        controls.forEach(function(element) {
            var result = validate.call(element)
            if(result.hasError) {
                errors += result.field + " : " + result.errorMessage + "\n";
            }
        });

        alert(errors);
    }
}

function showAlert(result) {
    var message = '';
   for (const key in result) {
    if (Object.hasOwnProperty.call(result, key)) {
        message += key + " : "+ result[key] + "\n";  
    }
   }
    alert(message);
}

controls.forEach(function(control) {
    control.addEventListener('blur', function() {
        validate.call(this);
    });
    control.addEventListener('focus', function(){
        clear.call(this);
    });
    if(control.type === 'password') {
        control.addEventListener('blur', comparePassword);
    }
});

window.addEventListener("DOMContentLoaded", (event) => {
    console.log("DOM fully loaded and parsed");
});

document.getElementById('fullName').addEventListener('input', updateTitle);

subscriptionForm.addEventListener('submit', send)
