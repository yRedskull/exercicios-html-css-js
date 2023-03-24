const container = document.querySelector('.container')
const ps = container.querySelectorAll('p')
const style_body = getComputedStyle(document.body)
const bg_body = style_body.backgroundColor

for (let p of ps) {
    p.style.backgroundColor = bg_body
    p.style.color = 'white'
}
