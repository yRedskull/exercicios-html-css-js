const lista_num = Array()

function Adicionar() {
    const res = document.getElementById('div_res')
    res.innerHTML = ''
    const num = document.getElementById("inpt_number")
    const n = Number(num.value)
    const div_select = document.getElementById('div_select')
    const item = document.createElement('option')
    const select_create = document.createElement('select')
    if (num.value.length == 0) {
        alert('Por favor, digite um número!')
    } else if (n>100 || n<1){
        alert('[ERRO] Número inválido!!')
    } else if (lista_num.length == 0){
        const breakrow = document.createElement('br')
        const input_Finalizar = document.createElement('input')
        select_create.setAttribute('name', 'select_add')
        select_create.setAttribute('id', "select_add")
        select_create.setAttribute('size', '8')
        input_Finalizar.setAttribute('type', "button")
        input_Finalizar.setAttribute('name', "btn_final")
        input_Finalizar.setAttribute('id', "finalizar")
        input_Finalizar.setAttribute('value', "Finalizar")
        input_Finalizar.setAttribute('onclick', "Finalizar()")
        div_select.appendChild(select_create)
        div_select.appendChild(breakrow)
        div_select.appendChild(input_Finalizar)
        const select = document.getElementById('select_add')
        lista_num.push(n)
        item.text = `Valor ${n} adicionado.`
        item.setAttribute('class', `select_valor`)
        item.setAttribute('value', `v${n}`)
        item.setAttribute('id', `v${n}`)
        select.appendChild(item)
    } else {
        if (lista_num.includes(n)) {
            alert('Esse número ja foi adicionado!')
        } else {
            const select = document.getElementById('select_add')
            lista_num.push(n)
            item.text = `Valor ${n} adicionado.`
            item.setAttribute('class', `select_valor`)
            item.setAttribute('value', `v${n}`)
            item.setAttribute('id', `v${n}`)
            select.appendChild(item)
        }
    }
}

function Finalizar() {
        const res = document.getElementById('div_res')
        res.innerHTML = ''
        const p_length = document.createElement('p')
        const p_maior = document.createElement('p')
        const p_menor = document.createElement('p')
        const p_soma = document.createElement('p')
        const p_media = document.createElement('p')
        var soma = Number(0)
        var len = Number(lista_num.length)
        var media = null
        var max = 0
        var min = Infinity
        lista_num.forEach(num => {
            soma += num
            if (num == lista_num[lista_num.length - 1]) media = soma/len;
            if (num > max) max = num;
            if (num < min) min = num;

        })

        p_length.innerText = `Ao todo, temos ${len} números cadastrados.`
        p_maior.innerText = `O maior valor informado foi ${max}`
        p_menor.innerText = `O menor valor informado foi ${min}`
        p_soma.innerText = `Somando todos os valores, temos ${soma}`
        p_media.innerText = `A média dos valores digitados é ${media.toFixed(2)}`
        
        const list_p = [p_length, p_maior, p_menor, p_soma, p_media]

        list_p.forEach(p => {
            res.appendChild(p)
        })
}

