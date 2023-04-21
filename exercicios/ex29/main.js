// 149.352.579-46
/* 
1x  4x  9x  3x  5x  2x  5x  7x  9x 
10  9   8   7   6   5   4   3   2
10  36  72  21  30  10  20  21  18 = 238

11 - (238 % 11) = 7 (Primeiro dígito)
Se o Primeiro dígito for maior que 9, consideramos 0.


 */

function Cpf(cpf) {
    this.cpf = cpf
    this.cpfLimpo = cpf.replace(/\D+/g, '')
}
Cpf.prototype.ValidarCPF = function() {
    if (
        typeof this.cpfLimpo == 'undefined' 
        || this.isSequencia() 
        || this.cpfLimpo.length !== 11 
        ) return false
    this.cpfArray = this.cpfLimpo.split('')
    this.finaldig = this.cpfArray.splice(-2)

    let cont = 10
    const mult = []
    for (let valor of this.cpfArray) {
        mult.push(valor*cont)
        cont--
    } 
    const soma = mult.reduce((soma, valor) => soma+=valor)
    const valido = () => {
        let firstdig = 11 - (soma % 11)
        if (firstdig > 9) firstdig = 0
        return firstdig == this.finaldig[0]
    }
    return valido()

}
Cpf.prototype.isSequencia = function() {
    return this.cpfLimpo[0].repeat(this.cpfLimpo.length) == this.cpfLimpo
}

const pessoa = new Cpf("14935257946")
console.log(pessoa.ValidarCPF())