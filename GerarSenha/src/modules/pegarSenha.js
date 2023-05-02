import gerarSenha from "./gerarSenha";


export const senhaGerada = () => {
    const qtd = document.querySelector('.qtd')
    const checkMa = document.querySelector('.checkMa')
    const checkMi = document.querySelector('.checkMi')
    const checkN = document.querySelector('.checkN')
    const checkS = document.querySelector('.checkS')

    return gerarSenha(qtd.value, checkMa.checked, checkMi.checked, checkN.checked, checkS.checked)
}
