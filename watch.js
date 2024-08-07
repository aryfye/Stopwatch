// select the display element
const display = document.getElementById("display");

// variables to keep track of the timer
let timer = null;          // stores the interval ID
let startTime = 0;         // stores the start time in milliseconds
let elapsedTime = 0;       // stores the elapsed time in milliseconds
let isRunning = false;     // keeps track of whether the stopwatch is running or not

// function to start the stopwatch
function start() {
    if (!isRunning) {
        startTime = Date.now() - elapsedTime;   // set the start time
        timer = setInterval(update, 10);        // update the display every 10 milliseconds
        isRunning = true;                       // set running status to true
    }
}

// function to stop the stopwatch
function stop() {
    if (isRunning) {
        clearInterval(timer);                   // stop the interval
        elapsedTime = Date.now() - startTime;   // update the elapsed time
        isRunning = false;                      // set running status to false
    }
}

// function to reset the stopwatch
function reset() {
    clearInterval(timer);                       // stop the interval
    startTime = 0;                              // reset the start time
    elapsedTime = 0;                            // reset the elapsed time
    isRunning = false;                          // set running status to false
    display.textContent = "00:00:00:00";        // reset the display
}

// function to update the stopwatch display
function update() {
    const currentTime = Date.now();             // get the current time
    elapsedTime = currentTime - startTime;      // calculate the elapsed time

    // calculate hours, minutes, seconds, and milliseconds
    let hours = Math.floor(elapsedTime / (1000 * 60 * 60));
    let minutes = Math.floor((elapsedTime / (1000 * 60)) % 60);
    let seconds = Math.floor((elapsedTime / 1000) % 60);
    let milliseconds = Math.floor((elapsedTime % 1000) / 10);

    // format the time values to always show two digits
    hours = String(hours).padStart(2, "0"); 
    minutes = String(minutes).padStart(2, "0");
    seconds = String(seconds).padStart(2, "0");
    milliseconds = String(milliseconds).padStart(2, "0");

    // update the display with the formatted time
    display.textContent = `${hours}:${minutes}:${seconds}:${milliseconds}`;
}
