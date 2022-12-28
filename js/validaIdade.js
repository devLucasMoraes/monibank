export default function maiorDeIdade(campo) {
    const dataNascimento = new Date(campo.value);
    console.log(verificaIdade(dataNascimento));
}

function verificaIdade(dataNascimento) {
    const dataAtual = new Date();
    const dataDoAniversaroDe18Anos = new Date(dataNascimento.getUTCFullYear() + 18, dataNascimento.getUTCMonth(), dataNascimento.getUTCDate())

    return dataAtual >= dataDoAniversaroDe18Anos;
}