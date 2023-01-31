// Suponha que temos duas variáveis a e b, cada uma com um valor inicial:
// let a = 10
// let b = 25
// Agora queremos trocar os valores delas, de forma que a passe a ter o valor de b e b passe a ter o valor de a.
// Ou seja, no caso desse exemplo acima, a passaria a ser 25 e b passaria a ser 10.
// let a = 10
// let b = 25

// Aqui faremos uma lógica para trocar os valores
// Depois de trocados, teremos o seguinte resultado:
// console.log("O novo valor de a é", a) 
// O novo valor de a é 25
// console.log("O novo valor de b é", b) 
// O novo valor de b é 10
// Crie a lógica que deve ser inserida no código para que os valores de a e b sejam trocados, independente de qual valor essas variáveis assumam inicialmente (ou seja: não basta dizer que a = 25 e b = 10 porque se os valores iniciais mudarem, a lógica do seu programa teria que mudar também).

// => INICIANDO A MINHA LÓGICA:

// Valores iniciais:
// 👇🏻
let a = 15;
let b = 30;

// Declarando mais uma variável para fazer a manipulação de valores:
// 👇🏻
let c;

// Guardando o valor de A para não ser perdido:
// 👇🏻
c = a;

// Verificando no console como as coisas estão:
// 👇🏻
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
// 👇🏻
a = b; // 'a' recebe o valor de 'b'

// Verificando no console como as coisas estão:
// 👇🏻
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
// 👇🏻
b = c; // 'b recebe o valor de c'

// Verificando no console como as coisas estão:
// 👇🏻
console.log('O valor de A é:', a);
console.log('O valor de B é:', b);
console.log('O valor de C é:', c);
/*
Até aqui:
O valor de A é: 30
O valor de B é: 15
O valor de C é: 15
*/



