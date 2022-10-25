// display constants
const hourJs = document.querySelector('.hour');
const minuteJs = document.querySelector('.minute');
const secondJs = document.querySelector('.second');
const milisecondJs = document.querySelector('.milisecond');

// button controls
const startBtn = document.querySelector('.start');
const resetBtn = document.querySelector('.reset');
const pauseBtn = document.querySelector('.pause');

let hour = 0;
let minute = 0;
let second = 0;
let milisecond = 0;

// incrementing function

const increase = (e) => {
    e = e + 10;
}

startBtn.addEventListener('click', () => {
    increase(hour);
    hourJs.innerHTML = hour;
})