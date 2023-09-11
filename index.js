const gridContainer = document.getElementById('grid-container')
const gridSizeButton = document.getElementById('grid-size-button')

gridSizeButton.addEventListener('click', () => {
	deleteGrid()
	let size = prompt('How many squares per side do you want?')
	size = size > 50 ? 50 : size
	drawGrid(size)
})
function drawGrid(size) {
	for (let index = 0; index < size ** 2; index++) {
		let element = document.createElement('div')
		element.classList.add('box')
		element.style.height = calculateBoxSizeFor(size, 500)
			.toString()
			.concat('px')
		element.style.width = calculateBoxSizeFor(size, 500).toString().concat('px')
		// element.innerHTML = index + 1
		element.addEventListener(
			'mouseover',
			e => (e.target.style.backgroundColor = 'black')
		)
		gridContainer.appendChild(element)
	}
}

function calculateBoxSizeFor(boxQuanty, space) {
	let boxSize = space / boxQuanty
	return Math.round(boxSize)
}

function deleteGrid() {
	const nodeList = document.querySelectorAll('.box')
	nodeList.forEach(element => {
		element.remove()
	})
}

drawGrid(10)
