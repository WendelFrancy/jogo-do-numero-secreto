

function calculaIMC(altura, peso){
    let imc = peso / (altura * altura);
    return imc;
}

console.log(parseInt(calculaIMC(1.73, 86)));