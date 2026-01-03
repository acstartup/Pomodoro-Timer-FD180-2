let work = document.getElementById("work-input");
let pomodoro = document.getElementById("pomodoro-input")
let wdisplay = document.getElementById("work-display")
let pdisplay = document.getElementById("pomodoro-display")
let action = document.getElementById("action")
let reset = document.getElementById("reset")
let schedule = false;
let timeRemaining;

function timer() {
    if (schedule === false) {
        timeRemaining = work.value * 60;
    }

    if (schedule === true) {
        timeRemaining = pomodoro.value * 60;
    }
    
    let timerInterval;

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
            schedule = true;
            timer();
        }
    }, 1000); // set interval of action = every 1000 miliseconds = 1 second
}

function handleReset() {
    
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
        schedule = false;
    }
}

action.addEventListener("click", timer)
reset.addEventListener("click", handleReset)