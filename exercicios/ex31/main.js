function CpfV() {
    this.display = document.getElementById("cpf-txt")
    this.button = document.getElementById("validate")
    this.symbolsnum = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'Backspace']

    this.init = () => {
            this.ListenerKey()
            this.Computeclick()
    }

    this.ListenerKey = () => {
        document.addEventListener('keydown', (e) => {
            const el = e.target
            if (e.keyCode == 8 ) return
            if (el.id == "cpf-txt") {
                if (this.display.value.length == 14) this.display.blur()
                else this.Typing()
            }
            if (e.key in this.symbolsnum === false) this.display.blur()
            
        })

        this.display.addEventListener('keypress', (e) => {
            if (e.key in this.symbolsnum === false) this.display.blur()
        })
    }

    this.Computeclick = () => {
        document.addEventListener('click', (e) => {
            const el = e.target
            if (el.id === "validate") return this.Validar()
        })
    }

    this.Typing = () => {
        if (this.display.value.length == 3 
            || this.display.value.length == 7) this.display.value += '.'
        else if (this.display.value.length == 11) this.display.value += "-"
        
    }


    this.Validar = () => {
        this.cpflimpo = this.cpf.replace(/\D+/g, '')
    }

    
}

const cpf = new CpfV()

cpf.init()
