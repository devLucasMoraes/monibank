export default function maiorDeIdade(campo) {
    const dataNascimento = new Date(campo.value);
    if (!verificaIdade(dataNascimento)) {
        campo.setCustomValidity('O usuário não é maior de idade');
    }
}

function verificaIdade(dataNascimento) {
    const dataAtual = new Date();
    const dataDoAniversaroDe18Anos = new Date(dataNascimento.getUTCFullYear() + 18, dataNascimento.getUTCMonth(), dataNascimento.getUTCDate())

    return dataAtual >= dataDoAniversaroDe18Anos;
}