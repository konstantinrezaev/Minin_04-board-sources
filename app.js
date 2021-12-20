const board = document.querySelector('#board')
const colors = ['#7b227d', '#a15500', '#3b5b4f', '#2e19f2', '#1ad300', '#6874ac', '#9bf551', '#d42ff4', '#649026', '#3386e8', '#73df05', '#e0b062', '#2afe85', '#8bc525', '#45c4ba']
const SQUARES_NUMBER = 650

for (let i = 0; i < SQUARES_NUMBER; i++) {
    const square = document.createElement('div')
    square.classList.add('square')

    square.addEventListener('mouseover', setColor)

    square.addEventListener('mouseleave', removeColor)

    board.append(square)
}

function setColor(event) {
    const element = event.target
    const color = getRandomColor()
    element.style.backgroundColor = color
    element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
}

function removeColor(event) {
    const element = event.target
    element.style.backgroundColor = '#1d1d1d'
    element.style.boxShadow = `0 0 2px #000`
}

function getRandomColor() {
    return colors[Math.floor(Math.random() * colors.length)]
}