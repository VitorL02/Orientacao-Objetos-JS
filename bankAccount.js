class BankAccout{

    constructor(agencia,numero,tipo){
        this.agencia = agencia;
        this.numero = numero;
        this.tipo = tipo;
        this.saldo = 0;
    }

    get saldo(){
        return this._saldo;
    }

    set saldo(saldo){
        this._saldo = saldo;
    }

    sacar(valor){
        if(valor > this._saldo){
            return "Erro na operação, saldo menor do que o valor solicitado";
        }
        this._saldo = this.saldo - valor;
        return this._saldo;
    }
    depositar(valor){
        this._saldo = this.saldo + valor;
        return this._saldo;
    }

}


class ContaCorrente extends BankAccout {
    //Herança em JS
    constructor(agencia,numero,cartaoCredito){
        super(agencia,numero)
        this.tipo = 'corrente';
        this.cartaoCredito = cartaoCredito;
    }

    get cartaoCredito(){
        return this._cartaoCredito;
    }
    set cartaoCredito(valor){
        this._cartaoCredito = valor;
    }

}


class ContaPoupanca extends BankAccout{
    
    constructor(agencia,numero,cartaoCredito){
        super(agencia,numero,)
        this.tipo = 'poupança';
    }


}


class ContaUniversitaria extends BankAccout{
    
    constructor(agencia,numero,){
        super(agencia,numero,)
        this.tipo = 'universitaria';
    }
    sacar(valor){
        if(valor > 500){
            return 'Operação Negada';
        }
       return  this._saldo = this._saldo - valor;
    }

}