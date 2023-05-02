import {senhaGerada} from './modules/pegarSenha'

import './assets/css/style.css'


document.addEventListener('click', e => {
    const el = e.target

    if (el.classList.contains('gerar')) {
        const display = document.querySelector(".display")
        const senha = senhaGerada()
        if (senha) {
            display.classList.add('display-style')
            display.innerHTML = senha
        } else {
            display.innerHTML = ''
            if (display.classList.contains('display-style')) display.classList.remove('display-style')
        }
    }
})

