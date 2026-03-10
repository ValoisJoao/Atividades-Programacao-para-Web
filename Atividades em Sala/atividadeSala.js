//atividade 1
function verificarPariedade(n){
    if(n % 2 == 0){
        console.log(`${n} é par.`);
    }else{
        console.log(`${n} é impar.`);
    }
}
verificarPariedade(1);
verificarPariedade(11);
verificarPariedade(2);
verificarPariedade(355489);
verificarPariedade(111111110);


//atividade 2
function calcularIMC(peso, altura){
    imc = peso/(altura*altura);
    return imc;
}
function CategoriaIMC(imc){
    let catg;
    if(imc < 18.5){
        catg = "Baixo Peso";
    }else if(imc < 24.9){
        catg = "Peso normal";
    }else if(imc < 29.9){
        catg= "Excesso de Peso";
    }else if(imc < 35){
        catg="Obesidade";
    }else{
        catg="Obesidade Extrema";
    }
    return catg;
}

let nome = 'João';
let peso = 80;
let altura = 1.72;
console.log(`Você é o ${nome} tem a altura de ${altura} e o peso de ${peso}. Seu CalcularIMC.IMC =${calcularIMC(peso,altura)} e sua CategoriaIMC.IMC=${CategoriaIMC(calcularIMC(peso,altura))}`);