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



