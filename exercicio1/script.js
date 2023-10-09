// => Parte 1

let nome;
let idade;

nome = prompt('Qual é o seu nome?');
idade = Number(prompt('Qual é a sua idade?'));

console.log(`
O tipo da variável nome é: ${typeof nome};
O tipo da variável idade é: ${typeof idade}.
`);

console.log(`
Olá, ${nome}, você tem ${idade} anos.
`);

// => Parte 2

let perguntaA = 'Você está com fome?';
let respostaA = prompt(perguntaA);

let perguntaB = 'Você gosta de pudim?';
let respostaB = prompt(perguntaB);

let perguntaC = 'Você gosta de pastel?';
let respostaC = prompt(perguntaC);

console.log(perguntaA, '-', respostaA);
console.log(perguntaB, '-', respostaB);
console.log(perguntaC, '-', respostaC);
