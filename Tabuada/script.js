function gerar_tab() {
    let num = document.getElementById('inpt_number')
    let tab = document.getElementById('select_tabuada')
    if (num.value.length == 0) {
        alert('Por favor, digite um número!')
    } else {
        let n = Number(num.value)
        let c = 1
        tab.innerHTML = null
        while (c <= 10) {
            let item = document.createElement('option')
            item.setAttribute('class', 'tabs')
            item.value = `tab${c}`
            item.innerHTML = `${n} x ${c} = ${c*n}`
            tab.appendChild(item)
            c++
        }
    }
}
