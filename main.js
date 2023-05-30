const form = document.getElementById('form-numericos');
const numero_a = document.getElementById('numero-a');
const numero_b = document.getElementById('numero-b');
const message_success = document.querySelector('.message-success');
const message_error = document.querySelector('.message-error');
let form_valido = false;

form.addEventListener('submit', function(e) {
    e.preventDefault();

    form_valido = parseInt(numero_b.value) > parseInt(numero_a.value);

    if (form_valido) {
        message_success.style.display = 'block';
        message_error.style.display = 'none';
    } else {
        message_success.style.display = 'none';
        message_error.style.display = 'block';
    }
});

numero_a.addEventListener('keyup', function(e) {
    message_success.style.display = 'none';
    message_error.style.display = 'none';
});

numero_b.addEventListener('keyup', function(e) {
    message_success.style.display = 'none';
    message_error.style.display = 'none';
});
