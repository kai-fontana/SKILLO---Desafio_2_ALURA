//DESAFIO 1

//diaDoUsuario = prompt("Qual dia da semana é hoje?");

//if (diaDoUsuario === "sábado") {
//    alert("Bom fim de semana!");

//} else{
//    alert("Boa semana!");
//}

//if (diaDoUsuario === "domingo") {
//    alert("Bom fim de semana!");
//}

//DESAFIO 2

//let numeroUsuario = prompt("Digite um número aleatório");

//if(numeroUsuario >=0) {
//    alert(`O número ${numeroUsuario} é positivo`);
//} else{
//    alert(`O número ${numeroUsuario} é negativo`);
//}

//DESAFIO 3

alert("A cada ponto você recebe 20 pontos e após 100 pontos você vence!");
let numeroSecreto = 20;
let tentativaUsuario = prompt("Tente advinhar qual é o número secreto entre 0 e 100.");
let pontuacaoUsuario = 0;

if(numeroSecreto === tentativaUsuario) {
    pontuacaoUsuario += 20;
    alert('Você acertou! Sua pontuação atual é de:' + pontuacaoUsuario);
} else{
    alert('Você errou tente novamente!');
}




