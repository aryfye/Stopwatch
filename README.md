# Stopwatch

## Description
A simple web application that functions as a stopwatch, allowing users to start, stop, and reset the timer. The stopwatch displays the elapsed time in hours, minutes, seconds, and milliseconds.

## Features
- Start the stopwatch
- Stop the stopwatch
- Reset the stopwatch
- Styled with a clean and modern design

## Technologies Used
- HTML
- CSS
- JavaScript

## Usage
1. Open `index.html` in your web browser.
2. Use the buttons to start, stop, and reset the stopwatch.

## How to Run
1. Clone the repository or download the project files.
2. Open `index.html` in any web browser.
3. The stopwatch will be displayed on the screen, ready to use.

## JavaScript Explanation
The `watch.js` file contains four main functions:

### start
- **Purpose**: Starts the stopwatch if it is not already running.
- **Functionality**:
  - Sets the start time based on the current elapsed time.
  - Starts an interval to update the display every 10 milliseconds.
  - Changes the running status to true.

### stop
- **Purpose**: Stops the stopwatch if it is currently running.
- **Functionality**:
  - Clears the interval.
  - Updates the elapsed time.
  - Changes the running status to false.

### reset
- **Purpose**: Resets the stopwatch to its initial state.
- **Functionality**:
  - Clears the interval.
  - Resets the start time and elapsed time.
  - Changes the running status to false.
  - Updates the display to show `00:00:00:00`.

### update
- **Purpose**: Updates the stopwatch display with the current elapsed time.
- **Functionality**:
  - Calculates the elapsed time.
  - Converts the elapsed time to hours, minutes, seconds, and milliseconds.
  - Pads the time values with leading zeros if needed.
  - Updates the display with the formatted time.

```javascript
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
```
<br>

![mywatch](https://github.com/user-attachments/assets/4259ad96-c0dc-47c9-b5ad-475bce064076)
