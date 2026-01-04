// features needed:
// 1. numbers reset
// 2. timer mid stop
// 3. seperate start & stop
// 4. proper stop after pomodoro
// 5. loop amount (3x, 4x, etc...)

let work = document.getElementById("work-input");
let pomodoro = document.getElementById("pomodoro-input")
let wdisplay = document.getElementById("work-display")
let pdisplay = document.getElementById("pomodoro-display")
let action = document.getElementById("action")
let reset = document.getElementById("reset")
let schedule = false;
let done = false;
let timeRemaining;
let timerInterval;

function timer() {
    if (schedule === false) {
        timeRemaining = work.value * 60;
    }

    if (schedule === true) {
        timeRemaining = pomodoro.value * 60;
    }

    timerInterval = setInterval(() => {
        timeRemaining--;
        if (schedule === false) {
            wupdateDisplay();
        }

        if (schedule === true) {
            pupdateDisplay();
        }

        if (timeRemaining === 0) {
            clearInterval(timerInterval);
            if (done === false) {
                schedule = true;
                timer();
            }
        }
    }, 1000); // set interval of action = every 1000 miliseconds = 1 second
}

function handleReset() {
    work.value = "";
    pomodoro.value = "";
}

function wupdateDisplay() {
    let minutes = Math.floor(timeRemaining / 60);
    let seconds = timeRemaining % 60;

    if (timeRemaining !== 0) {
        wdisplay.textContent = (minutes) + ":" + (seconds);
        pdisplay.textContent = pomodoro.value;
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
        schedule = false;
        done = true;
    }
}

action.addEventListener("click", timer)
reset.addEventListener("click", handleReset)