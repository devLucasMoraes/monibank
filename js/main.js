import validarCPF from "./validaCpf.js";
import maiorDeIdade from "./validaIdade.js";
import mensagens from "./mensagensDeErro.js";
import tiposDeErro from "./tiposDeErro.js";

const camposDoFormulario = document.querySelectorAll('[required]')
const formulario = document.querySelector('[data-formulario]')

formulario.addEventListener('submit', e => {
    e.preventDefault();

    const listaRespostas = {
        "nome": e.target.elements["nome"].value,
        "email": e.target.elements["email"].value,
        "rg": e.target.elements["rg"].value,
        "cpf": e.target.elements["cpf"].value,
        "aniversario": e.target.elements["aniversario"].value,
    }
    localStorage.setItem("cadastro", JSON.stringify(listaRespostas));

    window.location.href = "./abrir-conta-form-2.html";
})

camposDoFormulario.forEach( campo => {
    campo.addEventListener('blur', () => verificaCampo(campo));
    campo.addEventListener('invalid', evento => evento.preventDefault());
})

function verificaCampo(campo) {
    let mensagem = "";
    campo.setCustomValidity('');
    if (campo.name == "cpf" && campo.value.length >= 11) {
        validarCPF(campo);
    }
    if (campo.name == "aniversario" && campo.value != "") {
        maiorDeIdade(campo)
    }

    tiposDeErro.forEach(erro => {
        if (campo.validity[erro]) {
            mensagem = mensagens[campo.name][erro]
        }
    })
    const validadorDeInput = campo.checkValidity();
    const mensagemdeErroSpan = campo.parentNode.querySelector('.mensagem-erro')
    
    if (!validadorDeInput) {
        mensagemdeErroSpan.textContent = mensagem;
    } else {
        mensagemdeErroSpan.textContent = "";
    }
    
}