// Main.js
const domTime = document.getElementById('time');
let source = document.getElementById('source');
let name = document.getElementById('name'),
    focus = document.getElementById('main-focus');

function getTime() {
    let today = new Date();
    let hour = today.getHours();
    let min = today.getMinutes();
    let sec = today.getSeconds();
    domTime.innerHTML = `${addZero(hour)}<span>:</span>${addZero(min)}<span>:</span>${addZero(sec)}`;
    setTimeout(getTime, 1000);
}

// Add Zeros
function addZero(n) {
    return (parseInt(n, 10) < 10 ? '0' : '') + n;
}

// Set Background and Greeting
function setBgGreet() {

    let today = new Date(),
        hour = today.getHours();

    if (hour <= 12 && hour > 7) {
        // Morning
        source.src = 'video/morning2.mp4';
        greeting.textContent = 'Good Morning, ';
        document.body.style.color = '#212F3C';
    } else if (hour > 12 && hour < 20) {
        // Afternoon
        source.src = 'video/day.mp4';
        greeting.textContent = 'Good Afternoon, ';
        document.body.style.color = 'white';
    } else {
        // Evening
        source.src = 'video/night2.mp4';
        greeting.textContent = 'Good Evening, ';
        document.body.style.color = 'white';
    }
}

// Check if we have something in localStorage

// Get Name
function getName() {
    if (localStorage.getItem('name') === null || localStorage.getItem('name') === '') {
        name.textContent = '[Enter Name]';
    } else {
        name.textContent = localStorage.getItem('name');
    }
}

// Set Name
function setName(e) {
    if (e.type === 'keypress') {
        // Make sure enter is pressed
        if (e.which == 13 || e.keyCode == 13) {
            localStorage.setItem('name', e.target.innerText);
            name.blur();
        }
    } else {
        localStorage.setItem('name', e.target.innerText);
    }
}

// Get Focus
function getFocus() {
    if (localStorage.getItem('focus') === null || localStorage.getItem('focus') === '') {
        focus.textContent = '[Enter Focus]';
    } else {
        focus.textContent = localStorage.getItem('focus');
    }
}

// Set Focus
function setFocus(e) {
    if (e.type === 'keypress') {
        // Make sure enter is pressed
        if (e.which == 13 || e.keyCode == 13) {
            localStorage.setItem('focus', e.target.innerText);
            focus.blur();
        }
    } else {
        localStorage.setItem('focus', e.target.innerText);
    }
}

name.addEventListener('keypress', setName);
name.addEventListener('blur', setName);
focus.addEventListener('keypress', setFocus);
focus.addEventListener('blur', setFocus);
// Run

getTime();
setBgGreet();
getName();
getFocus();

