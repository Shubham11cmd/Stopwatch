const timerScreen = document.querySelector('.timer-screen');
const btnPause = document.querySelector('#btnPause');
const btnStart = document.querySelector('#btnStart');
const btnReset = document.querySelector('#btnReset');

let [ milliseconds, seconds, minutes, hours ] = [ 0, 0, 0, 0];
let timer = null;

btnStart.addEventListener('click', (e) => {
    if(timer!==null) {
        clearInterval(timer);
    }
    timer = setInterval(displayTimer, 10);
});

btnPause.addEventListener('click', (e) => {
    clearInterval(timer);
});

btnReset.addEventListener('click', (e) => {
    clearInterval(timer);
    // reset the values to zero
    [ milliseconds, seconds, minutes, hours ] = [ 0, 0, 0, 0];
    timerScreen.innerHTML = "00 : 00 : 00 : 000";
});

function displayTimer() {
    milliseconds += 10;
    if(milliseconds == 1000) {
        milliseconds = 0;
        seconds++;
        if(seconds == 60) {
            seconds = 0;
            minutes++;
            if(minutes == 60) {
                minutes = 0;
                hours++;
            }
        }
    }
    let h = hours < 10 ? "0" + hours : hours;
    let m = minutes < 10 ? "0" + minutes : minutes;
    let s = seconds < 10 ? "0" + seconds : seconds;
    let ms = milliseconds < 100 ? "0" + milliseconds : milliseconds < 10 ? "00" + milliseconds : milliseconds;

    timerScreen.innerHTML = `${h} : ${m} : ${s} : ${ms}`;
}