import { update as updateSnake, draw as drawSnake, SNAKE_SPEED } from './snake.js'


// Game Loop

let lastRenderTime = 0

function main(currentTime) {
    // tells us what the time is when we are able render the frame
    window.requestAnimationFrame(main)
    const secondsSinceLastRender = (currentTime - lastRenderTime) / 1000
    
    if (secondsSinceLastRender < 1 / SNAKE_SPEED) return
    
    lastRenderTime = currentTime

    // updates the data of location of snake, whether he ate the food, lost game, etc.
    update()
    // actually draws the snake, food, etc. to the screen incorporating info from update()
    draw()
    
}

// window.requestAnimationFrame(main)

function update(){
    updateSnake()
}




function draw(){
    drawSnake()
}