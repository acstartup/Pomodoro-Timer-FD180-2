// features needed:
// 5. loop amount (3x, 4x, etc...)

let work = document.getElementById("work-input");
let pomodoro = document.getElementById("pomodoro-input")
let wdisplay = document.getElementById("work-display")
let pdisplay = document.getElementById("pomodoro-display")
let action = document.getElementById("action")
let reset = document.getElementById("reset")
let schedule = false;
let done = false;
let stop = false;
let timeRemaining;
let timerInterval = 0;
let tempTimeRemaining = 0;
let loopCount = 0;
let loops = document.getElementById("loop-input");
let loopDisplay = document.getElementById("loop-display");

function timer() {
    if (loopCount === 0) {
        loopCount = loops.value;
        loopDisplay.textContent = loopCount
    }

    if ((timerInterval !== 0) && (stop === false)) {
        clearInterval(timerInterval);
        tempTimeRemaining = timeRemaining;
        stop = true;
        return;
    }

    if (stop === true) {
        timeRemaining = tempTimeRemaining;
        stop = false;
    }

    if ((schedule === false) && (tempTimeRemaining === 0)) {
        timeRemaining = work.value * 60;
    }

    if ((schedule === true) && (tempTimeRemaining === 0)) {
        timeRemaining = pomodoro.value * 60;
    }

    timerInterval = setInterval(() => {
        timeRemaining--;
        
        if (schedule === false) {
            wupdateDisplay();
            loopDisplay.textContent = loopCount;
        }
        else {
            pupdateDisplay();
        }

        if (timeRemaining === 0) {
            clearInterval(timerInterval);
            timerInterval = 0;

            if ((done === false) && (loopCount !== 0)) {
                tempTimeRemaining = 0;
                timer();
            }
            else {
                alert("Pomodoro is up! Good work!");
            }
        }
    }, 1000); // set interval of action = every 1000 miliseconds = 1 second
}

function handleReset() {
    work.value = "";
    pomodoro.value = "";
    wdisplay.textContent = "";
    pdisplay.textContent = "";
    loops.value = "";
    loopDisplay.textContent = "";
    clearInterval(timerInterval);
    timerInterval = 0;
}

function wupdateDisplay() {
    let minutes = Math.floor(timeRemaining / 60);
    let seconds = timeRemaining % 60;

    if (timeRemaining !== 0) {
        wdisplay.textContent = (minutes) + ":" + (seconds);
        pdisplay.textContent = pomodoro.value;
    }

    if (timeRemaining === 0) {
        schedule = true;
    }
}

function pupdateDisplay() {
    let minutes = Math.floor(timeRemaining / 60);
    let seconds = timeRemaining % 60;

    if (timeRemaining !== 0) {
        pdisplay.textContent = (minutes) + ":" + (seconds);
        wdisplay.textContent = "0:0";
    }

    if (timeRemaining === 0) {
        pdisplay.textContent = "0:0";
        loopCount--;
        loopDisplay.textContent = loopCount;
        
        if (loopCount !== 0) {
            schedule = false;
        }
        
        if (loopCount === 0) {
            done = true;
        }
    }
}

function edgeCaser() {
    if (work.value === "") {
        alert("Must have time input for Work");
        return;
    }

    if (pomodoro.value === "") {
        alert("Must have time input for Break");
        return;
    }

    timer();
}

action.addEventListener("click", edgeCaser)
reset.addEventListener("click", handleReset)