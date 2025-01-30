const form = document.querySelector('form');
const passwordInput = document.getElementById('password');
const confirmPasswordInput = document.getElementById('confirm-password');
    
document.addEventListener('DOMContentLoaded',  () => {
    const passwordError = document.createElement('span'); 
    passwordError.style.color = 'red';
    passwordError.style.display = 'none';
    passwordError.textContent = 'Passwords do not match!';
    confirmPasswordInput.insertAdjacentElement('afterend', passwordError); //mensagem de erro após o campo de confirmação

    form.addEventListener('submit', (event) =>{
        if (passwordInput.value !== confirmPasswordInput.value) {
            passwordError.style.display = 'inline'; // Mostra a mensagem de erro
            event.preventDefault(); // Impede o envio do formulário
        } else {
            passwordError.style.display = 'none';
        }
    });

    confirmPasswordInput.addEventListener('input', function () {
        if (passwordInput.value !== confirmPasswordInput.value) {
            passwordError.style.display = 'inline'; // Mostra a mensagem de erro
        } else {
            passwordError.style.display = 'none'; // Esconde a mensagem de erro
        }
    });
});