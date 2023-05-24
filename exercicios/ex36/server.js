const express = require('express')
const app = express()

app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res) => {
    res.send(`
    <form action="/" method="POST">
    Nome do cliente: <input type="text" name="nome">
    <button>Olá mundo</button>
    </form>
    `)
})

app.get('/testes/:idUsuarios?/:parametro?', (req, res) => {
    res.send(req.params)
})

app.post('/', (req, res) => {
    console.log(req.body)
    res.send(`O que você me enviou foi: ${req.body.nome}`)
} )

app.listen(3000, e => {
    console.log('acesse: http://localhost:3000')
    console.log('Servidor executando!')
})