// IIFE -> Immediately invoked function expression
(function() {
    const sobrenome = 'Silva'
    function FalaOi(nome) {
        return console.log(nome + ' ' + sobrenome)
    }
    return FalaOi
})()('Felipe')