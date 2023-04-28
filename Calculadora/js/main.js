class Calculadora {
    constructor() {
        this.display = document.querySelector('#calc')
        this.symbolsTextArray = ['C', '(', ')', "/", '.', '↩', '*', '+', '-', '=', 'Backspace']
        this.symbolsIdObj = {dvs: 111, x: 106, plus: 107, minus: 109, dot: 110, equal: 13}
        this.numArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
        this.resultTrue = false}

    init = () => {
        this.ListenerKey()
        this.computeClick()
    }

    ListenerKey = () => {
        document.addEventListener('keydown', (e) => {
            this.display.focus()
            if (this.resultTrue) {
                if (this.numArray.includes(e.key)) this.display.value = ''
            }
            if (Object.values(this.symbolsIdObj).includes(e.keyCode)) {
                for (let chave of Object.keys(this.symbolsIdObj)) {
                    if (this.symbolsIdObj[chave] === e.keyCode) {
                        const sym = document.getElementById(chave)
                        sym.classList.add("hover-btn")
                        setTimeout(() => {
                            sym.classList.remove("hover-btn")
                        }, 200)
                        if (e.keyCode === 13) return this.result()
                        return
                        
                    }
                }
            } else if (e.key in this.numArray ){
                const sym = document.getElementById(`n${e.key}`)
                sym.classList.add("hover-btn")
                setTimeout(() => {
                    sym.classList.remove("hover-btn")
                }, 200)
                return 
                    
            } else if ( e.keyCode == 8) return

            this.display.blur() 
            
        })

        this.display.addEventListener('keypress', (e) => {
            if (e.key === this.display.value.slice(-1)) this.display.blur()
        })
    }

    computeClick = () => {
        document.addEventListener('click', (e) => {
            const el = e.target
            if (el.classList.contains('btn')){
                if (el.innerText == 'C') this.clear() 
                else if (el.innerText == '=') this.result() 
                else if (el.innerText == '↩' ) this.del_case() 
                else {
                    if (this.resultTrue) {
                        if (el.innerText in this.numArray) {
                            this.resultTrue = false
                            return this.display.value = el.innerText
                        } else{
                        this.display.value += el.innerText
                        this.resultTrue = false
                    }
                    } else {
                        this.display.value += el.innerText
                    }
                    }
            }

            
        })
    }
    
    clear = () => {
        this.display.value = ''
        this.resultTrue = false
    }

    del_case = () => {
        this.display.value = String(this.display.value).slice(0, -1)
        this.resultTrue = false
    }

    result = () => {
        try{
            const geval = eval(this.display.value)
            if (typeof geval == "number") {
                this.display.value = eval(this.display.value)
                this.resultTrue = true
            } else alert('Conta inválida!')
        } catch (e) {
            alert('Conta inválida!')
            this.display.value = ''
            
        }
        
    }
}

calc =  new Calculadora()
calc.init()

