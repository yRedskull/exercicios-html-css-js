function Relógio () {
    const relogio = document.querySelector('#Relógio')
    const front_seconds = seconds <= 9 ? `0${seconds}` : String(seconds)
    const front_minutes = minutes <= 9 ? `0${minutes}` : String(minutes)
    const front_hours = hours <= 9 ? `0${hours}` : String(hours)
    relogio.innerHTML = `${front_hours}:${front_minutes}:${front_seconds}`
}

let seconds = 57
let minutes = 59
let hours = 23
let time
const iniciar = document.querySelector('#bt-iniciar')
const pausar = document.querySelector('#bt-pausar')
const zerar = document.querySelector('#bt-zerar')
const relogio = document.getElementById('.Relógio')

iniciar.addEventListener('click', function (event) { 
    clearInterval(time)
    time = setInterval(function (){
        seconds += 1
        if (seconds == 60) {
            if (minutes == 59) {
                if (hours == 23) {
                    relogio.classList.add('green-color')
                    seconds = 59
                    clearInterval(time)
                } else{
                    seconds = 0
                    minutes = 0
                    hours += 1
                }
            }else {
                seconds = 0
                minutes += 1 
            }
        }
        const front_seconds = seconds <= 9 ? `0${seconds}` : String(seconds)
        const front_minutes = minutes <= 9 ? `0${minutes}` : String(minutes)
        const front_hours = hours <= 9 ? `0${hours}` : String(hours)
        relogio.innerHTML = `${front_hours}:${front_minutes}:${front_seconds}`
    }, 1000)})

pausar.addEventListener('click', function (event) {
    relogio.classList.add('red-color')
    clearInterval(time)
})

zerar.addEventListener('click', function (event){
    seconds = 0
    minutes = 0
    hours = 0
    clearInterval(time)
    try {
    relogio.classList.remove('red-color')
    relogio.classList.remove('green-color')
}catch (e) {
    console.log(e)
}
    const front_seconds = seconds <= 9 ? `0${seconds}` : String(seconds)
    const front_minutes = minutes <= 9 ? `0${minutes}` : String(minutes)
    const front_hours = hours <= 9 ? `0${hours}` : String(hours)
    relogio.innerHTML = `${front_hours}:${front_minutes}:${front_seconds}`
})

Relógio()