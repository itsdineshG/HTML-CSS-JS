const btn = document.querySelectorAll('.ripple')

btn.forEach(button => {
    button.addEventListener('click', function (i) {
        const x = i.clientX
        const y = i.clientY

        const buttonTop = i.target.offsetTop
        const buttonLeft = i.target.offsetLeft

        const xInside = x - buttonLeft
        const yInside = y - buttonTop

        const circle = document.createElement('span')
        circle.classList.add('circle')
        circle.style.top = yInside + 'px'
        circle.style.left = xInside + 'px'

        this.appendChild(circle)

        setTimeout(() => circle.remove(), 400)
    })
})