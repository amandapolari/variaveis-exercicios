// Você foi contratade para criar um programa de RH que realiza o cadastro de pessoas colaboradoras e armazena suas respostas.

// 1. Este programa deve perguntar à pessoa colaboradora:

// a) Nome completo
const perguntaNome = 'Digite seu nome completo:';
let nomeCompleto = prompt(perguntaNome);

// b) Data de nascimento (utilize as / )
const perguntaNascimento = 'Digite sua data de nascimento. Ex: 00/00/00';
let dataNascimento = prompt(perguntaNascimento);

// c) Endereço
const perguntaEndereco = 'Digite o seu endereço:';
let endereco = prompt(perguntaEndereco);

// d) CPF
const perguntaCpf = 'Digite seu CPF:';
let cpf = Number(prompt(perguntaCpf));

// e) Escolaridade
const perguntaEscolaridade = 'Qual é a sua escolaridade?';
let escolaridade = prompt(perguntaEscolaridade);

// f) Possui CHN?
const perguntaCnh = 'Você possui CNH?';
let cnh = prompt(perguntaCnh);

// g) Quantos filhes possui?
const perguntaFilhes = 'Quantos filhos você possui?';
let filhes = Number(prompt(perguntaFilhes));

// h) Cargo atual
const perguntaCargo = 'Qual é o seu cargo atual?';
let cargo = prompt(perguntaCargo);

// i) Salário
const perguntaSalario = 'Digite o seu salário:';
let salario = Number(prompt(perguntaSalario));

// j) Recebe comissão? Se sim, informe a porcentagem, caso não, responda com zero
const perguntaComissao = 'Você recebe comissão? Se sim, informe a porcentagem, caso não, responda com zero';
let comissao = Number(prompt(perguntaComissao));

// k) Informe o ano de admissão
const perguntaAnoAdmissao = 'Digite o ano da sua admissão';
let anoAdmissao = Number(prompt(perguntaAnoAdmissao));

// 2. Utilize o casting para a conversão de tipos das variáveis que recebem números.
// ✅

// 3. Imprima no console o tipo de todas as variáveis.
console.log(
    'O tipo da variável nomeCompleto é:', typeof nomeCompleto ,'\n',
    'O tipo da variável dataNascimento é:', typeof dataNascimento ,'\n',
    'O tipo da variável endereco é:', typeof endereco ,'\n',
    'O tipo da variável cpf é:', typeof cpf ,'\n',
    'O tipo da variável escolaridade é:', typeof escolaridade ,'\n',
    'O tipo da variável cnh é:', typeof cnh ,'\n',
    'O tipo da variável filhes é:', typeof filhes ,'\n',
    'O tipo da variável cargo é:', typeof cargo ,'\n',
    'O tipo da variável salario é:', typeof salario ,'\n',
    'O tipo da variável comissao é:', typeof comissao ,'\n',
    'O tipo da variável anoAdmissao é:', typeof anoAdmissao ,'\n',
);

// Resposta do console:
/*
 O tipo da variável nomeCompleto é: string 
 O tipo da variável dataNascimento é: number 
 O tipo da variável endereco é: string 
 O tipo da variável cpf é: number 
 O tipo da variável escolaridade é: string 
 O tipo da variável cnh é: string 
 O tipo da variável filhes é: number 
 O tipo da variável cargo é: string 
 O tipo da variável salario é: number 
 O tipo da variável comissao é: number 
 O tipo da variável anoAdmissao é: number 
*/

// 4. Imprima no console um relatório da pessoa colaboradora.
console.log(
    'Nome Completo:',nomeCompleto,';\n',
    'Data de Nascimento:',dataNascimento,';\n',
    'Endereço:',endereco,';\n',
    'O tipo da variável cpf é:',cpf,';\n',
    'Escolaridade:',escolaridade ,';\n',
    'Possui CNH:',cnh,';\n',
    'Número de Filhes:',filhes,';\n',
    'Cargo Atual:',cargo ,';\n',
    'Salário:',salario ,';\n',
    'Valor da Comissão:',comissao ,';\n',
    'Ano da Admissão:',anoAdmissao,'.\n',
);