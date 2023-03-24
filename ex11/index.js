function retornaHora() {
    const data = new Date()
    return data.toLocaleTimeString('pt-BR', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
    })
}


const timer = setInterval(function () {
    return console.log(retornaHora())
}, 1000)

setTimeout(function () {
    clearInterval(timer)
    console.log('Acabou')
}, 4000)

    