import GerarCPF from './modules/geradorCPF'

import './assets/css/style.css'
import './assets/img/faviconCPF.png'


const gerar = new GerarCPF()

document.addEventListener('click', e => {
    const el = e.target

    if (el.classList.contains("gerar")){
    const resultp = document.querySelector(".display")
    resultp.classList.add("cpf-gerado")
    resultp.innerHTML = gerar.gerarNovoCPF()
}
})

