let p1Button = document.getElementById('p1');
let p2Button = document.getElementById('p2');
let resetButton = document.getElementById('reset');
let p1Span = document.getElementById('p1Span');
let p2Span = document.getElementById('p2Span');
let numInput = document.querySelector('input');
let pointLimit = document.querySelector('#pointLimit');
let winningScore = 5;
let gameOver = false;
let p1Score = 0;
let p2Score = 0;

p1Button.addEventListener('click', function() {
    if (!gameOver) {
        p1Score++;
        p1Span.textContent = p1Score;
        if (p1Score === winningScore) {
            gameOver = true;
            p1Span.classList.add('winner');
        }
    }
});

p2Button.addEventListener('click', function() {
    if (!gameOver) {
        p2Score++;
        p2Span.textContent = p2Score;
        if (p2Score === winningScore) {
            gameOver = true;
            p2Span.classList.add('winner');
        }
    }
});

resetButton.addEventListener('click', function() {
    resetGame();
});

numInput.addEventListener('change', function() {
    pointLimit.textContent = this.value;
    winningScore = Number(this.value);
    resetGame();
});

function resetGame() {
    gameOver = false;
    p1Score = 0;
    p2Score = 0;
    p1Span.textContent = p1Score;
    p2Span.textContent = p2Score;
    p1Span.classList.remove('winner');
    p2Span.classList.remove('winner');
}
