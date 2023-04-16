function Calculadora() {

        this.display = document.querySelector('#calc')
        this.symbolsArray = ['C', '(', ')', '/', '.', '↩', '*', '+', '-', '=', 'Backspace']
        this.numArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
        this.resultTrue = false

        this.Init = () => {
            this.ListenerKey()
            this.computeClick()
        }

        this.ListenerKey = () => {
            document.addEventListener('keydown', (e) => {
                if (e.key in this.symbolsArray === false || e.key in this.numArray === false) this.display.blur()
            })

            this.display.addEventListener('keypress', (e) => {
                if (e.key in this.symbolsArray === false || e.key in this.numArray === false) this.display.blur()
            })
        }

        this.computeClick = () => {
            document.addEventListener('click', (e) => {
                const el = e.target
                if (el.classList.contains('btn')){
                    if (el.innerText == 'C')this.Limpar() 
                    else if (el.innerText == '=') this.Result() 
                    else if (el.innerText == '↩' ) this.del_case() 
                    else {
                        if (this.resultTrue) {
                            if (el.innerText in this.symbolsArray) this.display.value += el.innerText
                            else this.display.value = ''
                            this.resultTrue = false
                        }
                        }
                }

                
            })
        }
        
        this.Limpar = () => {
            this.display.value = ''
        }

        this.del_case = () => {
            this.display.value = String(this.display.value).slice(0, -1)
        }

        this.Result = () => {
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
calc.Init()

