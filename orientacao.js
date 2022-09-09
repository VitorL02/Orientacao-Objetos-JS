//Todos os objetos em js Herdam propriedades e metodos de um prototype


const objeto = {};

objeto.toString();
//toString e uma propriedade que foi herdada e object.prototype
console.log(objeto.toString());

//Classe no js não existe nativamente

class Meal{
    constructor(food = 'lasanha'){
        this.food = food;
    }

    get food(){
        return this._food;
    }
    set food(comida){
        this._type= comida.toUpperCase();
    }

    eat(){
        return console.log('comendo');
    }
}

let comida = new Meal();
comida.eat();





