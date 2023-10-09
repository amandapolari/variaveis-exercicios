# Variáveis e tipos primitivos - Exercício

## Índice

-   [Exercício 1](#exercício-1)
    -   [Enunciado](#enunciado)
    -   [Resolução](#resolução)
-   [Exercício 2](#exercício-2)
    -   [Enunciado](#enunciado-1)
    -   [Resolução](#resoluc3a7c3a3o-1)
-   [Exercício 3](#exercício-3)
    -   [Enunciado](#enunciado-2)
    -   [Resolução](#resoluc3a7c3a3o-2)

## Exercício 1

[Voltar ao Topo](#índice)

### Enunciado:

## Parte 1

Construa um programa, seguindo as instruções abaixo:

**a)** Declare uma variável para armazenar um **nome**, sem atribuir um valor a essa variável.

**b)** Declare uma variável para armazenar uma **idade**, sem atribuir um valor a essa variável.

**c)** Imprima na tela o **tipo** dessas variáveis que acabou de criar, usando o comando `typeof`.

**d)** Reflita: por que esse tipo foi impresso? Escreva a resposta em um comentário de código.

**e)** Depois, disso, atualize o código para **perguntar** ao usuário seu nome e sua idade, atribuindo esses dois valores às variáveis que acabou de criar.

> 💡Se você receber um erro de código nessa etapa, reflita sobre o tipo de declaração que utilizou.

**f)** Novamente, imprima na tela o tipo dessas variáveis. O que você notou? Escreva em um comentário de código.

**g)** Para finalizar, imprima na tela a mensagem: "Olá, `nome`, você tem `idade` anos". Lembre-se: `nome` e `idade` são os valores inseridos pelo usuário.

> 💡 Dica: para imprimir mais de um valor na mesma linha, você pode usar essa sintaxe:

```jsx
console.log(valor1, valor2);
```

## Parte 2

Agora vamos criar 3 perguntas com valores de Sim ou Não.

Siga as instruções abaixo:

**a)** Crie um programa que faça 3 perguntas para o usuário **através do prompt**. Armazene a resposta de cada pergunta em uma variável.

**b)** Imprima no console todas as respostas.

**c)** Altere seu programa para que os textos das perguntas sejam armazenados em 3 variáveis diferentes.

**d)** Troque o texto do seu prompt pelas variáveis que contêm as perguntas.

```
//mandando a pergunta como texto direto
const respostaA = prompt("Você está usando uma roupa azul hoje?");

//mandando a pergunta como variável
const perguntaA = "Você está usando uma roupa azul hoje?";
const respostaA = prompt(perguntaA);

```

e) Altere o console para imprimir a pergunta e a resposta.

```
Você está usando uma roupa azul hoje? - SIM
```

### Resolução:

```js
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
```

## Exercício 2

[Voltar ao Topo](#índice)

### Enunciado:

Suponha que temos duas variáveis **`a`** e **`b`**, cada uma com um valor inicial:

```jsx
let a = 10;
let b = 25;
```

Agora queremos **trocar os valores delas**, de forma que **`a`** passe a ter o valor de **`b`** e **`b`** passe a ter o valor de **`a`**.

Ou seja, no caso desse exemplo acima, **`a`** passaria a ser 25 e **`b`** passaria a ser 10.

```jsx
let a = 10;
let b = 25;

// Aqui faremos uma lógica para trocar os valores

// Depois de trocados, teremos o seguinte resultado:
console.log('O novo valor de a é', a); // O novo valor de a é 25
console.log('O novo valor de b é', b); // O novo valor de b é 10
```

Crie a lógica que deve ser inserida no código para que os valores de **`a`** e **`b`** sejam trocados, independente de qual valor essas variáveis assumam inicialmente (ou seja: não basta dizer que `a = 25` e `b = 10` porque se os valores iniciais mudarem, a lógica do seu programa teria que mudar também).

## Dicas

<details>
<summary>💡 Dica 1</summary>

> ⭐ Podemos começar fazendo com que o valor de a seja igual ao que está no b, então ficaria assim: `a = b`.
> Nesse ponto, se déssemos um `console.log` no `a` e no `b`, teríamos que `a = 25` e `b = 25`
> Mas desse jeito, a gente perdeu o valor anterior que estava no `a`! E agora, como você poderia guardar esse valor para atribuir à variável `b`? 🤔

</details>

<details>
<summary>💡 Dica 2</summary>

> ⭐ Vamos supor que você tem dois copos: um copo A que tem suco de laranja e um copo B que tem coca-cola. Como você faria para trocar o conteúdo dos dois?

![](https://firebasestorage.googleapis.com/v0/b/assets-conteudo.appspot.com/o/variaveis%2Fcopo3.png?alt=media&token=e4c08185-cba6-495a-bf78-a05d92b34948)

</details>

<details>
<summary>💡 Dica 3</summary>

> ⭐ Para trocar os líquidos de copo sem misturá-los, você pode pegar um copo vazio para te auxiliar!

![](https://firebasestorage.googleapis.com/v0/b/assets-conteudo.appspot.com/o/variaveis%2Fcopo4.png?alt=media&token=4b8dead0-8aa8-4990-9834-6e54bc1fa806)

</details>

<details>
<summary>💡 Dica 4</summary>

Trocando os copos

![](https://firebasestorage.googleapis.com/v0/b/assets-conteudo.appspot.com/o/variaveis%2Fcopo5.png?alt=media&token=67d0f98a-0069-441e-93b3-9342bde033e2)
![](https://firebasestorage.googleapis.com/v0/b/assets-conteudo.appspot.com/o/variaveis%2Fcopo6.png?alt=media&token=5185547e-fd13-4f85-a6cc-6894ca71b4db)
![](https://firebasestorage.googleapis.com/v0/b/assets-conteudo.appspot.com/o/variaveis%2Fcopo7.png?alt=media&token=f631629a-d599-4a44-b3fd-fadf21ed7b93)

</details>

### Resolução:

```js
// => INICIANDO A MINHA LÓGICA:

// Valores iniciais:
let a = 15;
let b = 30;

// Declarando mais uma variável para fazer a manipulação de valores:
let c;

// Guardando o valor de A para não ser perdido:
c = a;

// Verificando no console como as coisas estão:
console.log('O valor de A é:', a);
console.log('O valor de B é:', b);
console.log('O valor de C é:', c);
console.log('------------------');
/*
Até aqui:
O valor de A é: 15
O valor de B é: 30
O valor de C é: 15
*/

// Passando o valor de B para A:
a = b; // 'a' recebe o valor de 'b'

// Verificando no console como as coisas estão:
console.log('O valor de A é:', a);
console.log('O valor de B é:', b);
console.log('O valor de C é:', c);
console.log('------------------');
/*
Até aqui:
O valor de A é: 30
O valor de B é: 30
O valor de C é: 15
*/

// Passando o valor que era de A guardado em C para B;
b = c; // 'b recebe o valor de c'

// Verificando no console como as coisas estão:
console.log('O valor de A é:', a);
console.log('O valor de B é:', b);
console.log('O valor de C é:', c);
/*
Resultado final:
O valor de A é: 30
O valor de B é: 15
O valor de C é: 15
*/
```

## Exercício 3

[Voltar ao Topo](#índice)

### Enunciado:

Você foi contratade para criar um programa de RH que **realiza o cadastro de pessoas colaboradoras** e **armazena suas respostas**.

1. Este programa deve perguntar à pessoa colaboradora:

    a) Nome completo

    b) Data de nascimento (utilize as / )

    c) Endereço

    d) CPF

    e) Escolaridade

    f) Possui CHN?

    g) Quantos filhes possui?

    h) Cargo atual

    i) Salário

    j) Recebe comissão? Se sim, informe a porcentagem, caso não, responda com zero

    k) Informe o ano de admissão

2. Utilize o **casting** para a conversão de tipos das variáveis que recebem números.
3. Imprima no console o tipo de todas as variáveis.
4. Imprima no console um relatório da pessoa colaboradora.

### Resolução:

```js
const perguntaNome = 'Digite seu nome completo:';
let nomeCompleto = prompt(perguntaNome);

const perguntaNascimento = 'Digite sua data de nascimento. Ex: dia/mês/ano';
let dataNascimento = prompt(perguntaNascimento);

const perguntaEndereco = 'Digite o seu endereço:';
let endereco = prompt(perguntaEndereco);

const perguntaCpf = 'Digite seu CPF, sem pontos:';
let cpf = Number(prompt(perguntaCpf));

const perguntaEscolaridade = 'Qual é a sua escolaridade?';
let escolaridade = prompt(perguntaEscolaridade);

const perguntaCnh =
    'Você possui CNH?, se sim clique em "Ok", senão, clique em "Cancelar"';
let cnh = confirm(perguntaCnh);

const perguntaFilhes = 'Quantos filhos você possui?';
let filhes = Number(prompt(perguntaFilhes));

const perguntaCargo = 'Qual é o seu cargo atual?';
let cargo = prompt(perguntaCargo);

const perguntaSalario = 'Digite o seu salário, sem pontos:';
let salario = Number(prompt(perguntaSalario));

const perguntaComissao =
    'Você recebe comissão? Se sim, informe a porcentagem, caso não, responda com zero';
let comissao = Number(prompt(perguntaComissao));

const perguntaAnoAdmissao = 'Digite o ano da sua admissão';
let anoAdmissao = Number(prompt(perguntaAnoAdmissao));

console.log(
    'Verificando os tipos \n',
    'O tipo da variável nomeCompleto é:',
    typeof nomeCompleto,
    '\n',
    'O tipo da variável dataNascimento é:',
    typeof dataNascimento,
    '\n',
    'O tipo da variável endereco é:',
    typeof endereco,
    '\n',
    'O tipo da variável cpf é:',
    typeof cpf,
    '\n',
    'O tipo da variável escolaridade é:',
    typeof escolaridade,
    '\n',
    'O tipo da variável cnh é:',
    typeof cnh,
    '\n',
    'O tipo da variável filhes é:',
    typeof filhes,
    '\n',
    'O tipo da variável cargo é:',
    typeof cargo,
    '\n',
    'O tipo da variável salario é:',
    typeof salario,
    '\n',
    'O tipo da variável comissao é:',
    typeof comissao,
    '\n',
    'O tipo da variável anoAdmissao é:',
    typeof anoAdmissao,
    '\n'
);

console.log(
    'Relatório:\n',
    'Nome Completo:',
    nomeCompleto,
    ';\n',
    'Data de Nascimento:',
    dataNascimento,
    ';\n',
    'Endereço:',
    endereco,
    ';\n',
    'O tipo da variável cpf é:',
    cpf,
    ';\n',
    'Escolaridade:',
    escolaridade,
    ';\n',
    'Possui CNH:',
    cnh,
    ';\n',
    'Número de Filhes:',
    filhes,
    ';\n',
    'Cargo Atual:',
    cargo,
    ';\n',
    'Salário:',
    salario,
    ';\n',
    'Valor da Comissão:',
    comissao,
    ';\n',
    'Ano da Admissão:',
    anoAdmissao,
    '.\n'
);
```
