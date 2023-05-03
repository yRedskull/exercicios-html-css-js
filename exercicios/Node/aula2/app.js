const path = require('path')
const caminhoArquivo = path.resolve(__dirname, '..', 'teste.json')
const ler = require('./modules/ler')

const pessoas = [
    {nome: 'João'},
    {nome: 'João'},
    {nome: 'João'},
    {nome: 'João'},
    {nome: 'João'},
]

const json = JSON.stringify(pessoas, '', 2)