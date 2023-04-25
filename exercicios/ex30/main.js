function Conta(agencia, conta, saldo) {
    this.agencia = agencia
    this.conta = conta
    this.saldo = saldo
}

Conta.prototype.sacar = function(valor) {
    if (valor >= this.saldo) {
        return console.log(
            `Saldo insuficiente: R$${this.saldo.toFixed(2)}`
            )      
    }
    this.saldo -= valor
    this.verSaldo()
}

Conta.prototype.depositar = function(valor) {
    this.saldo += valor
    this.verSaldo()
}

Conta.prototype.verSaldo = function() {
    console.log(
        `Ag/c: ${this.agencia}/${this.conta} | Saldo: R$${this.saldo.toFixed(2)}`
    )
}

function ContaC(agencia, conta, saldo, limite) {
    Conta.call(this)
    this.limite = limite
}

ContaC.prototype = Object.create(Conta.prototype)
ContaC.prototype.sacar = function(valor) {
    if (valor >= (this.saldo+this.limite)) {
        return console.log(
            `Saldo insuficiente: R$${this.saldo.toFixed(2)}`
            )      
    }
    this.saldo -= valor
    this.verSaldo()
}

function ContaP(agencia, conta, saldo, limite) {
    Conta.call(this)
    this.limite = limite
}

ContaP.prototype = Object.create(Conta.prototype)
ContaP.prototype.sacar = function(valor) {
    if (valor >= (this.saldo+this.limite)) {
        return console.log(
            `Saldo insuficiente: R$${this.saldo.toFixed(2)}`
            )      
    }
    this.saldo -= valor
    this.verSaldo()
}



const conta = new Conta(252, "red", 10)
