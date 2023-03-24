 function soma(x, y) {
    if(
        typeof x !== 'number' ||
        typeof y !== 'number'
    ) {
        throw new ReferenceError('x e y precisam ser números.')
    }
    return x + y
 }

try {
    console.log(soma(3, 5))
    console.log(soma('e', 4))
} catch(e){
    console.log(e)
}