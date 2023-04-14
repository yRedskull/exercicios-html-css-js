function ola(comeco) {

    function mundo(resto) {
        return comeco + ' ' + resto
    }
    return mundo
}

const ol = ola('Olá')
console.log(ol('Mundo!'))