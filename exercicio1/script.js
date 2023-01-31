// Parte 1
// Construa um programa, seguindo as instruções abaixo:

// a) Declare uma variável para armazenar um nome, sem atribuir um valor a essa variável.
// 👇🏻
let nome;

// b) Declare uma variável para armazenar uma idade, sem atribuir um valor a essa variável.
// 👇🏻
let idade;

// c) Imprima na tela o tipo dessas variáveis que acabou de criar, usando o comando typeof.
// 👇🏻
console.log('O tipo da variável nome quando foi apenas declarada é:', typeof nome);
console.log('O tipo da variável idade quando foi apenas declarada é:', typeof idade);

// d) Reflita: por que esse tipo foi impresso? Escreva a resposta em um comentário de código.
// 👇🏻
// Resposta: O tipo undefined foi impresso porque ainda não há valores atribuidos as variáveis verificadas.

// e) Depois, disso, atualize o código para perguntar ao usuário seu nome e sua idade, atribuindo esses dois valores às variáveis que acabou de criar.
// 👇🏻
nome = prompt('Qual é o seu nome?');
idade = prompt('Qual é a sua idade?');

// f) Novamente, imprima na tela o tipo dessas variáveis. O que você notou? Escreva em um comentário de código.
// 👇🏻
console.log('O tipo da variável nome após receber seu valor pelo prompt é:', typeof nome);
console.log('O tipo da variável idade após receber seu valor pelo prompt é:', typeof idade);

// Resposta: Apesar do prompt idade ter recebido um number, por padrão o tipo do prompt é String.

// g) Para finalizar, imprima na tela a mensagem: "Olá, nome, você tem idade anos". Lembre-se: nome e idade são os valores inseridos pelo usuário.
// 👇🏻
console.log('Olá', nome, 'você tem', idade, 'anos.');

// Parte 2

// Agora vamos criar 3 perguntas com valores de Sim ou Não.

// Siga as instruções abaixo:

// a) Crie um programa que faça 3 perguntas para o usuário através do prompt. Armazene a resposta de cada pergunta em uma variável.
//👇🏻
// let resposta1 = prompt('Você está com fome?');
// let resposta2 = prompt('Você gosta de pudim?');
// let resposta3 = prompt('Você gosta de pastel?');

// b) Imprima no console todas as respostas.
// 👇🏻
// console.log('Resposta da pergunta 1:\n', resposta1);
// console.log('Resposta da pergunta 2:\n', resposta2);
// console.log('Resposta da pergunta 3:\n', resposta3);

// c) Altere seu programa para que os textos das perguntas sejam armazenados em 3 variáveis diferentes.
// d) Troque o texto do seu prompt pelas variáveis que contêm as perguntas.
// 👇🏻
let perguntaA = 'Você está com fome?';
let respostaA = prompt(perguntaA);

let perguntaB = 'Você gosta de pudim?';
let respostaB = prompt(perguntaB);

let perguntaC = 'Você gosta de pastel?';
let respostaC = prompt(perguntaC);

// e) Altere o console para imprimir a pergunta e a resposta.
// 👇🏻
console.log(perguntaA, '-', respostaA);
console.log(perguntaB, '-', respostaB);
console.log(perguntaC, '-', respostaC);