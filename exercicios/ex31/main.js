class Pessoa {
    constructor (nome, sobrenome) {
        this.nome = nome
        this.sobrenome = sobrenome
    }
    falar() {
        console.log(this.nome, this.sobrenome)
    }
}

const p1 = new Pessoa('Tainan', 'Felipe')

p1.falar()