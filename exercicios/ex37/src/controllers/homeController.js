exports.paginaInicial = (req, res) => {
    //const client = document.querySelector('.client')
    //req.body.client = client.value
    res.render('index')
}

exports.trataPost = (req, res) => {
    console.log(req.body.cliente)
    res.render('saud')
}