/*IMC = peso / altura**2
abaixo de 18.5 = Desnutrição
de 18.5 a 25 = Peso normal
de 25 a 30 = Sobrepeso
de 30 a 35 = Obesidade I
de 35 a 40 = Obesidade II
acima de 40 = Obesidade III
*/

let res_imc = calcularIMC(55, 1.75);
console.log(res_imc);
classificarIMC(res_imc);

function calcularIMC(p, a) {
    let imc;
    imc = p / a**2;
    //console.log(imc);
    return imc;
}

function classificarIMC(argIMC) {
    if (argIMC < 18.5) {
        console.log("Desnutrição");
    } else if (argIMC < 25) {
        console.log("Peso normal");
    } else if (argIMC < 30) {
        console.log("Sobrepeso");
    } else if (argIMC < 35) {
        console.log("Obesidade I");
    } else if (argIMC < 40) {
        console.log("Obesidade II");
    } else {
        console.log("Obesidade III");
    }
}