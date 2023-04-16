// Some todos os números (reduce)
// Retorne um array com os pares (Filter)
// Retorne um array com o dobro dos valores (Map)
const numeros = [5, 80, 20, 60, 4, 2, 1, 3, 7, 68, 422]
const total = numeros.reduce((acumulador , valor, indice, array) => {
    acumulador += valor
    return acumulador
})
console.log(total) 

const maiorn = numeros.reduce((maior, valor) => {
    if (maior < valor ) {
        maior = valor
        return maior
    } else return maior
}, 0)

console.log(maiorn)