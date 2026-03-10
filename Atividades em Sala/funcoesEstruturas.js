// Conteúdo sobre funções.
function imprimirOlaMundo(){
    console.log('Olá, Mundo!');
}

imprimirOlaMundo();

function Somar(A, B){
    let soma = A + B;
    console.log(`${A}+${B}=${soma}`);
}

Somar(2, 5);
Somar(4, 10);
Somar(8, 1);

let i;
for(let i=0; i<=10; i++){
    console.log(i);
}
console.log(i);
i = 0;
while(i<=5){
    console.log(i);
    i++;
}

let idade = 18;
if (idade >= 18){
    console.log(`${idade} É maior de idade.`);
}
else{
    console.log(`${idade} Não é maior de idade.`);
}

