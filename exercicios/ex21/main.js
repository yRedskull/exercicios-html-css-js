// Funções geradoras 

/* function* geradora1() {
    // Código qualquer ...
    yield 'Valor 1'
    // Código qualquer ...
    yield 'Valor 2'
    // Código qualquer ...
    yield 'Valor 3'
}

const g1 = geradora1()

while (true) {
    const dictg1 = g1.next()
    if (dictg1.done === true) break
    console.log(dictg1.value)
} */

function* gerador() {
    let i = 0
    while (true) {
        yield i
        i++
    }
}

const g = gerador()

while (true){ 
    const dictg = g.next()
    console.log(dictg.value)
    if (dictg.value === 200) break
}