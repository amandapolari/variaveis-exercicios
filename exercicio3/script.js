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

const perguntaCnh = 'Você possui CNH?, se sim clique em "Ok", senão, clique em "Cancelar"';
let cnh = confirm(perguntaCnh);

const perguntaFilhes = 'Quantos filhos você possui?';
let filhes = Number(prompt(perguntaFilhes));

const perguntaCargo = 'Qual é o seu cargo atual?';
let cargo = prompt(perguntaCargo);

const perguntaSalario = 'Digite o seu salário, sem pontos:';
let salario = Number(prompt(perguntaSalario));

const perguntaComissao = 'Você recebe comissão? Se sim, informe a porcentagem, caso não, responda com zero';
let comissao = Number(prompt(perguntaComissao));

const perguntaAnoAdmissao = 'Digite o ano da sua admissão';
let anoAdmissao = Number(prompt(perguntaAnoAdmissao));

console.log(
    'Verificando os tipos \n',
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

console.log(
    'Relatório:\n',
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