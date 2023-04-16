// Dobre os números

/* const numeros = [5, 80, 20, 60, 4, 2, 1, 3, 7, 68, 42]
const dobronumeros = numeros.map(numero => numero * 2)
console.log(dobronumeros) */

// Para cada elemento:
// Retorne apenas uma string com o nome da pessoa
// Remova apenas a chave "nome" do objeto
// Adicione uma chave id em cada objeto

const pessoas =  [
    {nome : 'Luiz', idade:62},
    {nome : 'Tainan', idade:18},
    {nome : 'Felipe', idade:20},
    {nome : 'Bruno', idade:22},
    {nome : 'Adenilson', idade:54},
    {nome : 'Luiza', idade:25},
    {nome : 'Roberta', idade:29}
]
/* const nomesPessoas = pessoas.map(dictp => dictp.nome)
console.log(nomesPessoas) */

/* const removerNomes = pessoas.map(dictp => ({idade: dictp.idade}))
console.log(removerNomes) */

const comIds = pessoas.map((dictp, indice) => {
    const novoObj = {...dictp}
    novoObj.id = indice
    return novoObj
})
console.log(comIds)