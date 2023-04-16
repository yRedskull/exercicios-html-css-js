/* const data = new Date()
const section = document.querySelector('.container')
const h1 = document.createElement('h1')
h1.id ='data'
h1.innerHTML = String(data.toLocaleDateString('pt-BR', {dateStyle: 'full'}))
section.appendChild(h1) */

function todaydate () {
    const data = new Date()
    const weekdays = ['Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado']
    const mouths = ['janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho', 'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro']

    return mostrar_date(data, weekdays, mouths)
}

function mostrar_date (data, weekdays, mouths) {
    const section = document.querySelector('.container')
    const h1 = document.createElement('h1')
    h1.id = 'data'
    h1.innerText = weekdays[data.getDay()] + ', ' + String(data.getDate()) + ' de ' + mouths[data.getMonth()] + ' de ' + String(data.getFullYear()) + ` ${zero_esquerda(data.getHours())}:${zero_esquerda(data.getMinutes())}`
    return section.appendChild(h1)
}

function zero_esquerda (num) {
    return num >=10 ? num : `0${num}`
}
todaydate() 