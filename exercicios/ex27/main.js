// Constructor function // class // Factory function

function Pessoa(nome, sobrenome) {
    this.nome = nome
    this.sobrenome = sobrenome
    // Object.freeze(this) | Bloqueia o objeto permanentemente
}

// new -> cria {} <- this -> return this
p1 = new Pessoa('Tainan', 'Felipe')
p2 = new Pessoa('Priscila', 'Souza')
console.log(p1)
console.log(p2)