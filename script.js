let sliderElement = document.querySelector('#slider');
let btnGerarSenha = document.querySelector('#button');
let quantCaracteres = document.querySelector('#valor');
let senhaGerada = document.querySelector('#password');
let containerPassword = document.querySelector('#container-password');

let charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%&*+_";
let novaSenha = "";

btnGerarSenha.addEventListener('click', gerarSenha)

quantCaracteres.innerHTML = sliderElement.value;

slider.oninput = function () {
    quantCaracteres.innerHTML = this.value;
}

function gerarSenha() {
    let pass = "";

    for (let i = 0, n = charset.length; i < sliderElement.value; ++i) { // porque após o 0(zero) , e não ;?
        pass += charset.charAt(Math.floor(Math.random() * n));
    }
    containerPassword.classList.remove('hide')
    senhaGerada.innerHTML = pass;
    novaSenha = pass;
}

function copiarSenhaGerada() {
    navigator.clipboard.writeText(novaSenha);
    alert('Para confirmar a copia da senha click em OK!')
}

