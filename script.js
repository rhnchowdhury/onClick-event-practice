// color change by button click

function btnClick() {
    var text = document.querySelector('#text');
    text.style.color = "green";
};

// items add by btn click

// var addFruits = () => {
//     var element = document.createElement('li');
//     var name = document.createTextNode('Mango');
//     element.appendChild(name);
//     document.querySelector('.add').appendChild(element);
// };

// items add by btn click dynamically

// for get many names
var fruits = ['Mango', 'Grapes', "Papaya", 'Coconut', 'Guava', 'Orange', 'Pineapple', 'Gooseberry', 'Strawberry', 'Watermelon'];

var count = -1;

var addFruits = () => {
    var element = document.createElement('li');

    // for gets many name
    count++;
    if (count >= fruits.length) {
        count = 0;
        var name = document.createTextNode(`${fruits[count]}`);
    }
    else {
        var name = document.createTextNode(`${fruits[count]}`);
    };

    // var name = document.createTextNode('Mango');
    element.appendChild(name);
    document.querySelector('.add').appendChild(element);
};

var test = document.getElementById('te');
var take = document.getElementById('myDiv')
take.removeChild(test);

// Image change using querySelector

var picture = document.querySelector('#pic');

function myPicture1() {
    picture.src = '/images/raihan.jpg';
};

function myPicture2() {
    picture.src = '/images/monika.jpg';
};