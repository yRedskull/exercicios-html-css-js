const conta = function(operador, acumulador, ...num) {
    for(let numero of num) {
        if (operador === "+") acumulador += numero
        if (operador === "-") acumulador -= numero
        if (operador === "/") acumulador /= numero
        if (operador === "*") acumulador *= numero
    }
    console.log(acumulador)
}

conta('+', 0, 23,452, 56, 75) 