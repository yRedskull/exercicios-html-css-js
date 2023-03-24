// Atribuição via desestruturação
// array
const numeros = [1, 2, 3, 4, 5, 6, 7, 8 , 9, 10, 11, 12, 13]
const [a, b, c, ...resto] = numeros
console.log(a, b, c, '|',...resto)

// object
const pessoa = {
    nome: 'Roberto',
    sobrenome: 'Luiz',
    idade: 30,
    endereco: {
        rua: 'Av Brasil',
        numero: 646
    }
}

/* const {nome: nm, sobrenome='Santos', endereco: {rua: r=14, numero: n}} = pessoa
console.log(nm, sobrenome, r, n) */
const { nome, ...restante } = pessoa
console.log(restante)


