# Pomodoro Timer (FD100: #2/100)

A customizable, VERY SIMPLE Pomodoro timer web application built with HTML and JavaScript.

## Features
- Customizable work session duration
- Customizable break duration
- Configurable number of work/break cycles (loops)
- Start/Stop functionality to pause and resume timer
- Reset button to clear all inputs and stop timer
- Real-time countdown display
- Completion alert when all cycles are finished

## How to Run
1. Open `index.html` in your web browser
2. Enter work duration in minutes (e.g., "20" for 20 minutes)
3. Enter break duration in minutes (e.g., "5" for 5 minutes)
4. Enter number of cycles/loops (e.g., "3" for 3 work/break cycles)
5. Click "Start || Stop" to begin the timer
6. Click again to pause/resume
7. Click "Reset" to clear everything and start over

## Files
- `index.html` - Main page structure with input fields and buttons
- `js/script.js` - Timer functionality and countdown logic

## What I Learned
- Using 'setInterval()' and 'clearInterval()' for timer functionality
- Using if/else conditionals
- DOM manipulation with 'textContent' property
- Handling start/stop toggle logic
- Using 'alert()' for user notifications and input validation
- Working with time calculations (converting minutes to seconds, displaying minutes:seconds format)
- Debugging JavaScript logic errors and variable scope issues
- Working with multiple functions and loops

## Available Scripts

### npm start

Runs the app in the development mode.
Open http://localhost:8080 to view it in the browser.

The page will reload if you make edits.
You will also see any lint errors in the console.

### npm run build

Builds a static copy of your site to the `build/` folder.
Your app is ready to be deployed!
