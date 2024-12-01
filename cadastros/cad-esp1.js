const form = document.getElementById('form')
const nome = document.getElementById('nome')
const email = document.getElementById('email')
const especialidade = document.getElementById('esp')
const senha = document.getElementById('senha')

form.addEventListener('submit', (e) => {
    e.preventDefault();

    checkInputs();
})

function checkInputs() {
    const nomeValue = nome.value
    const emailValue = email.value
    const especialidadeValue = especialidade.value
    const senhaValue = senha.value

    //verificando o nome
    if (nomeValue === "") {
        setErrorFor(nome, 'O nome completo é obrigatório.')
    } else {
        setSuccessFor(nome)
    }

    //verificando email
    if (emailValue === "") {
        setErrorFor(email, 'O email é obrigatório.')
    } else if (!checkEmail(emailValue)){
        setErrorFor(email, "Por favor, insira um email válido.")
    } else {
        setSuccessFor(email)
    }

    //verificando a senha
    if (senhaValue === "") {
        setErrorFor(senha, 'A senha é obrigatória.')
    } else if (senhaValue.length < 8) {
        setErrorFor(senha, 'A senha precisa ter no mínimo 8 caracteres.')
    } else {
        setSuccessFor(senha)
    }

    if (especialidadeValue === ""){
        setErrorFor(especialidade, 'A especialidade deve ser preenchida.')
    } else {
        setSuccessFor(especialidade)
    }

    //validando o formulário
    const formControls = form.querySelectorAll(".form-control")

    const formIsValid = [...formControls].every((formControl) => {
        return formControl.className === "form-control success"
    })

    if (formIsValid) {
        sessionStorage.setItem('formularioConcluido', 'true');
        window.location.href = 'cad-esp2.html'
    }

}

function setErrorFor(input, message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector('small')

    small.innerText = message;

    formControl.className = 'form-control error'
}

function setSuccessFor(input) {
    const formControl = input.parentElement;

    formControl.className = 'form-control success'
}

function checkEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
        email
    );
}
