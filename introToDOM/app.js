// getElementById()
var hiLight = document.getElementById('highlight');
console.log(highlight);

// getElementsByClassName
var bolden = document.getElementsByClassName('bolded');
console.log(bolden);

// getElementsByTagName
var tag = document.getElementsByTagName('li');
console.log(tag);

// query selector
// query selector returns the first element
var tag2 = document.querySelector('h1');
console.log(tag2);

// query selector all
var tag3 = document.querySelectorAll('h1');
console.log(tag3);

// can define a class in css, then apply it to elements in js to save coding
// add the new class to the class list of any element you access in the DOM
let element = document.querySelector('h1');
element.classList.add('general');
element.classList.toggle('general');
element.classList.toggle('general');

// The classList is a read only list that contains all of the classes of an elment
//innerHTML will actually render the tags when changing it
// textContent will not render html tags

// img.getAttribute()
// img.setAttribute()
