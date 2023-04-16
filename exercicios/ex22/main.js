// Filter -> Sempre retorna um array, com a mesma quantidade de elementos ou menos.

// Retorne os números maiores que 10

const numeros = [5, 80, 20, 60, 4, 2, 1, 3, 7, 68, 42]
const numerosFiltrados = numeros.filter(valor => valor < 10)
console.log(numerosFiltrados) 

// Retorne as pessoas que tem o nome com 5 letras ou mais
// Retorne as pessoas com mais de 50 anos
// Retorne as pessoas cujo nome termina com a
const pessoas =  [
    {nome : 'Luiz', idade:62},
    {nome : 'Tainan', idade:18},
    {nome : 'Felipe', idade:20},
    {nome : 'Bruno', idade:22},
    {nome : 'Adenilson', idade:54},
    {nome : 'Luiza', idade:25},
    {nome : 'Roberta', idade:29}
]

const pessoasComNomeGrande = pessoas.filter(dict => dict.nome.length >= 6)
console.log(pessoasComNomeGrande) 

const pessoasComMaisDe50 =  pessoas.filter(dictp => dictp.idade > 50)
console.log(pessoasComMaisDe50) 

const NomesTerminadosComA = pessoas.filter(dictp => dictp.nome.toLocaleLowerCase().endsWith('a'))
console.log(NomesTerminadosComA)