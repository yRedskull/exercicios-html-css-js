exports.middlewareGlobal = (req, res, next) => {
    res.local.variavelLocal = 'Este é o valor da variável local'
    next()
}