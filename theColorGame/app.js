let numSquares = 6;
let colors = [];
let pickedColor = '';
let squares = document.querySelectorAll('.square');
let colorDisplay = document.querySelector('#colorDisplay');
let messageDisplay = document.querySelector('#message');
let h1 = document.querySelector('h1');
let resetButton = document.querySelector('#reset');
let modeButtons = document.querySelectorAll('.mode');

init();

function init() {
    // modd buttons event listeners
    setupModeButtons();
    setupSquares();
    reset();
}

function setupModeButtons() {
    for (let i = 0; i < modeButtons.length; i++) {
        modeButtons[i].addEventListener('click', function() {
            modeButtons[0].classList.remove('selected');
            modeButtons[1].classList.remove('selected');
            this.classList.add('selected');
            this.textContent === 'Easy' ? (numSquares = 3) : (numSquares = 6);
            reset();
        });
    }
}

function setupSquares() {
    for (let i = 0; i < squares.length; i++) {
        // add click listeners to squares
        squares[i].addEventListener('click', function() {
            //grab color of clicked square
            let clickedColor = this.style.backgroundColor;
            // compare color to pickedColor
            if (clickedColor === pickedColor) {
                messageDisplay.textContent = 'Correct!';
                changeColors(clickedColor);
                h1.style.backgroundColor = clickedColor;
                resetButton.textContent = 'Play Again?';
            } else {
                this.style.background = '#232323';
                messageDisplay.textContent = 'Try Again...';
            }
        });
    }
}

function reset() {
    colors = generateRandomColors(numSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    messageDisplay.textContent = '';
    resetButton.textContent = 'New Colors';

    for (let i = 0; i < squares.length; i++) {
        if (colors[i]) {
            squares[i].style.display = 'block';
            squares[i].style.backgroundColor = colors[i];
        } else {
            squares[i].style.display = 'none';
        }
    }

    h1.style.backgroundColor = 'steelblue';
}

resetButton.addEventListener('click', function() {
    reset();
});

function changeColors(color) {
    // loop through all squares
    for (let i = 0; i < squares.length; i++) {
        // change each color to match given color
        squares[i].style.backgroundColor = color;
    }
}

function pickColor() {
    let random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

function generateRandomColors(num) {
    let arr = [];
    for (let i = 0; i < num; i++) {
        arr.push(randomColor());
    }
    return arr;
}

function randomColor() {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);

    return 'rgb(' + r + ', ' + g + ', ' + b + ')';
}
