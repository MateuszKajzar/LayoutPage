const slider1 = document.querySelector('#customRange')
const slider2 = document.querySelector('#customRange2')

const kwota = document.querySelector('#kwota')
const dni = document.querySelector('#dni')

const showNumber = () => {
    kwota.textContent = slider1.value + "  zł"
    dni.textContent = slider2.value + "  dni"
}

slider1.addEventListener('mousemove', showNumber)
slider2.addEventListener('mousemove', showNumber)