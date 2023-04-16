// Função construtora -> objetos
// Funçaõ fábrica -> objetos
// Contrutora -> Pessoa (new)


function Pessoa(nome, sobrenome) {
    // Atributos ou métodos Privados
    const ID = 123456

    // Atributos ou métodos Públicos
    this.nome = nome
    this.sobrenome = sobrenome
    
    this.metodo = () => {
        console.log(`${this.nome}: Boa tarde!`)
    }
}

p1 = new Pessoa('Tainan', 'Felipe')
p2 = new Pessoa('Rodrigo', 'Gusman')
p1.metodo()