// defineProperty - defineProperties
function Produto (nome, preco, estoque) {
    this.nome = nome
    this.preco = preco
    this.estoque = estoque
    Object.defineProperty(this, 'estoque', {
        enumerable: true, // mostra a chave
        value: estoque, // valor
        writable: true,
        configurable: true
    })
}

const p1 = new Produto('Camiseta', 20, 3)
console.log(p1.nome)