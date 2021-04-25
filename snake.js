import { getInputDirection} from './input.js'

// how many times the snake moves per second
export const SNAKE_SPEED = 5
// snake begins game in very center of board
const snakeBody = [ {x: 11, y: 11}]
let newSegments = 0

export function update() {
    addSegments()

    const inputDirection = getInputDirection()
    for (let i = snakeBody.length - 2; i >= 0; i--){
        // moves snake body pieces
        // starts from last piece of snake and copies the snake at i position
        // each snake piece, except last piece, will move to where piece ahead of it was
        snakeBody[i + 1] = { ...snakeBody[i] }
    }
    // this moves the head
    snakeBody[0].x += inputDirection.x
    snakeBody[0].y += inputDirection.y
}

export function draw(gameBoard){
    snakeBody.forEach(segment => {
        const snakeElement = document.createElement('div')
        snakeElement.style.gridRowStart = segment.y
        snakeElement.style.gridColumnStart = segment.x
        snakeElement.classList.add('snake')
        gameBoard.appendChild(snakeElement)
    })
}

export function expandSnake(amount) {
    newSegments += amount
}

export function onSnake(position, { ignoreHead = false} = {}) {
    // if any part of our snake body is on the position onSnake will return true
    return snakeBody.some((segment, index) => {
        if (ignoreHead && index === 0) return false
        return equalPositions(segment, position)
    })
}

export function getSnakeHead() {
    return snakeBody[0]
}

export function snakeIntersection() {
    return onSnake(snakeBody[0], { ignoreHead: true})
}

function equalPositions(pos1, pos2) {
    return pos1.x === pos2.x && pos1.y === pos2.y
}

function addSegments() {
    // takes last element of snake and duplicates it to end of snake
    for (let i = 0; i < newSegments; i++){
        snakeBody.push({ ...snakeBody[snakeBody.length - 1]})
    }

    newSegments = 0
}