class Livro {
    constructor(pNome, pPreco) {
        this.Nome = pNome;
        this.Preco = pPreco;
    }

    get Nome() {
        return this.Nome;
    }
    set Nome(pNome) {
        this.nome = pNome;
    }
    get Preco() {
        return this.Preco;
    }
    set Preco(pPreco) {
        this.preco = pPreco;
    }
}

var obj_livro1 = new Livro("Use a cabeça Java", 120);
var obj_livro2 = new Livro("Use a cabeça C#", 190);
var obj_livro3 = new Livro("Use a cabeça Python", 70);

var lista = [];
lista.push(obj_livro1, obj_livro2, obj_livro3);

console.log(lista[0]);
console.log(lista[1]);
console.log(lista);