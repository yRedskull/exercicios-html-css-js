function Calculadora() {
    return {
        display: document.querySelector('#calc'),
        symbolsArray: ['C', '(', ')', '/', '.', '↩', '*', '+', '-', '=', 'Backspace'],
        numArray: [1, 2, 3, 4, 5, 6, 7, 8, 9, 0],

        Init() {
            this.ListenerKey()
            this.computeClick()
        },

        ListenerKey() {
            document.addEventListener('keyup', (e) => {
                if (e.key in this.symbolsArray === false || e.key in this.numArray === false) {
                    console.log(e.key)
                    this.display.blur()
                }
            })

            this.display.addEventListener('keypress', (e) => {
                if (e.key in this.symbolsArray === false || (e.key in this.numArray === false)) {
                this.display.blur()
                }
            })
        },

        computeClick() {
            document.addEventListener('click', (e) => {
                const el = e.target
                if (el.classList.contains('btn')){
                    if (el.innerText == 'C') {
                        this.Limpar()
                    } else if (el.innerText == '=') {
                        this.Result() 
                    } else if (el.innerText == '↩' ){
                        this.del_case()
                    } else{ 
                        this.display.value += el.innerText
                    }
                }

                
            })
        },
        
        Limpar() {
            this.display.value = ''
        },

        del_case() {
            this.display.value = String(this.display.value).slice(0, -1)
        }, 

        Result() {
            try{
                const geval = eval(this.display.value)
                if (typeof geval == "number") this.display.value = eval(this.display.value)
                else alert('Conta inválida!')
            } catch (e) {
                alert('Conta inválida!')
                this.display.value = ''
                
            }
            
        }
    }
}

calc = Calculadora()
calc.Init()

