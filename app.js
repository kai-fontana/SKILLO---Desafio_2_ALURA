alert('Boas vindas ao nosso jogo!');

let numeroDeVendas = 50;
let saldoDisponivel = 1000;

mensagemDeErro = alert('Erro! Preencha todos os campos.');
nomeDoUsuario = prompt('Insira o seu nome de usário: ');
idadeDoUsuario = prompt('Insira a sua idade: ');

if (idadeDoUsuario >= 18){
    alert('Pode tirar a habilitação!');

} else{
    alert('Infelizmente você ainda não pode tirar a habilitação...');
}


