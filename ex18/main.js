// Factory Functions
// Constructor Functions
function criaPessoa(nome, sobrenome, altura, peso) {
    return {
        nome,
        sobrenome,

        // Getter
        get nomeCompleto(){
            return this.nome + ' ' + this.sobrenome
        },

        // Setter
        set nomeCompleto(valor){
            valor = valor.split(' ')
            this.nome = valor.shift()
            this.sobrenome = valor.join(' ')
            console.log(valor)
        },

        imc() {
            const imc_p = this.p/this.a**2
            return imc_p.toFixed(2)
        },

        a: altura,
        p: peso  
    }
}

const p1 = criaPessoa('Tainan', 'Santos', 1.73, 66)
const p2 = criaPessoa('Gustavo', 'Silva', 1.67, 55)
const p3 = criaPessoa('Luiz', 'Otávio', 1.73, 88)

console.log('IMC\n'+ '------------')
console.log(`${p1.nomeCompleto}: ${p1.imc()}`)
console.log(`${p2.nomeCompleto}: ${p2.imc()}`)
console.log(`${p3.nomeCompleto}: ${p3.imc()}`)
