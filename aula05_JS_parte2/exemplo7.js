/*IMC = peso / altura**2
abaixo de 18.5 = Desnutrição
de 18.5 a 25 = Peso normal
de 25 a 30 = Sobrepeso
de 30 a 35 = Obesidade I
de 35 a 40 = Obesidade II
acima de 40 = Obesidade III
*/

calcularIMC(55, 1.75);

function calcularIMC(p, a) {
    let imc;
    imc = p / a**2;
    console.log(imc)
}