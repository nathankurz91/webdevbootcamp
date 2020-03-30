let but = document.querySelector('button');
let isWhite = true;
let body = document.querySelector('body');

let changeBackground = function() {
    if (isWhite) {
        body.style.backgroundColor = 'purple';
    } else {
        body.style.backgroundColor = 'white';
    }
    isWhite = !isWhite;
};

but.addEventListener('click', changeBackground);

// could also just make a classlist and toggle it
// document.body.classList.toggle('<className>');
