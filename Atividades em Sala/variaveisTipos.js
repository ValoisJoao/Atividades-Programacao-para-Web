//Conteúdo sobre Variáveis.
let nome = 'João';
const sobrenome = 'Valois';
let templateString = `O meu nome é ${nome} ${sobrenome}`;
console.log(templateString);

let x1 = 10;
let x2 = -5;
let A = 2;
let B = 5.56;
let C = -3.14;
const PI = 3.14;
let potencia = A ** C;
console.log(typeof A);
console.log(typeof C);
console.log(`${A}^${C}= ${potencia}`);

let verdadeiro = true;
let falso = false;
console.log(typeof verdadeiro);
let E = verdadeiro && falso;
let OU = verdadeiro || falso;
console.log(E);
console.log(OU);
let maior_que = B > A;

console.log(`${B}> ${A}=${maior_que}`);

let numeros = [1, 2, 3.14, -7, 99, 505.67];
console.log(numeros);
console.log(`numeros[0]= ${numeros[0]}`);
console.log(`numeros[3]= ${numeros[3]}`);
console.log(typeof numeros);

let pessoa = {
    nome: 'João',
    cpf:  123,
    telefone:  [61912345678]
};
console.log(pessoa);
console.log(`Pessoa.nome=${pessoa.nome}`);