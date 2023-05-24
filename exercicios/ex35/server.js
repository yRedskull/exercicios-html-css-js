const express = require('express')
const app = express()

app.get('/', (req, res) => {
    res.send('Hello world!')
})

app.get('/contato', (req, res) => {
    res.send(`
    <form action='/' method 
    `)
})

app.post('/',  )

app.listen(3000, e => {
    console.log('acesse: http://localhost:3000')
    console.log('Servidor executando!')
})