// Retorne a soma do dobro de todos os pares
// -> Filtrar pares
// -> Dobrar os valores
// -> Reduzir (somar tudo)

const numeros = [5, 80, 20, 60, 4, 2, 1, 3, 7, 68, 422]
const numerosPares = numeros
    .filter(valor => valor % 2 === 0)
    .map(valor => valor * 2)
    .reduce((soma, valor) => soma += valor, 0)
console.log(numerosPares)