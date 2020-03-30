let lis = document.querySelectorAll('li');

// look up for in loop
for (let i = 0; i < lis.length; i++) {
    lis[i].addEventListener('mouseover', function() {
        // inside of event listener, this refers to element the event was triggered on... li here
        this.classList.add('selected');
    });

    lis[i].addEventListener('mouseout', function() {
        this.classList.remove('selected');
    });

    lis[i].addEventListener('click', function() {
        this.classList.toggle('complete');
    });
}
