class Operacoes{
    constructor(){

    }

    somar(a, b){
        console.log("Resultado = " + (a + b));
    }

    somar(a, b, c){
        console.log("Resultado = " + (a + b + c));
    }
}

var objeto = new Operacoes();
// objeto.somar(15, 25); --- Erro NaN | O JS não tem sobrecarga
objeto.somar(15, 25, 15);