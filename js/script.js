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
        updateDisplay();

        if (timeRemaining === 0) {
            clearInterval(timerInterval);
        }
    }, 1000); // set interval of action = every 1000 miliseconds = 1 second
}

function handleReset() {
    
}

function updateDisplay() {
    let minutes = Math.floor(timeRemaining / 60);
    let seconds = timeRemaining % 60;

    if (schedule === false) {
        wdisplay.textContent = (minutes) + ":" + (seconds);
        pdisplay.textContent = pomodoro.value;
        schedule = true;
    }
    
    if ((schedule === true) && (timeRemaining === 0)) {
        wdisplay.textContent = "00:00"
        pdisplay.textContent = (minutes) + ":" + (seconds);
        schedule = false;
    }
}

action.addEventListener("click", timer)
reset.addEventListener("click", handleReset)