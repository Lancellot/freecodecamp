const breakLengthEl = document.getElementById("break-length");
const sessionLengthEl = document.getElementById("session-length");
const timeLeftEl = document.getElementById("time-left");
const timerLabel = document.getElementById("timer-label");
const beep = document.getElementById("beep");

let breakLength = 5;
let sessionLength = 25;
let isRunning = false;
let timer;
let currentTime = sessionLength * 60;
let isSession = true;

function updateDisplay() {
  let min = Math.floor(currentTime / 60);
  let sec = currentTime % 60;
  timeLeftEl.textContent = `${min.toString().padStart(2, "0")}:${sec.toString().padStart(2, "0")}`;
  timerLabel.textContent = isSession ? "Session" : "Break";
}

function reset() {
  clearInterval(timer);
  breakLength = 5;
  sessionLength = 25;
  currentTime = 1500;
  isRunning = false;
  isSession = true;
  beep.pause();
  beep.currentTime = 0;
  breakLengthEl.textContent = breakLength;
  sessionLengthEl.textContent = sessionLength;
  updateDisplay();
}

function startStop() {
  if (isRunning) {
    clearInterval(timer);
  } else {
    timer = setInterval(() => {
      currentTime--;
      if (currentTime < 0) {
        beep.play();
        isSession = !isSession;
        currentTime = (isSession ? sessionLength : breakLength) * 60;
      }
      updateDisplay();
    }, 1000);
  }
  isRunning = !isRunning;
}

function changeLength(type, change) {
  if (isRunning) return;

  if (type === "break") {
    breakLength += change;
    if (breakLength < 1) breakLength = 1;
    if (breakLength > 60) breakLength = 60;
    breakLengthEl.textContent = breakLength;
  } else {
    sessionLength += change;
    if (sessionLength < 1) sessionLength = 1;
    if (sessionLength > 60) sessionLength = 60;
    sessionLengthEl.textContent = sessionLength;
    currentTime = sessionLength * 60;
    updateDisplay();
  }
}

// Event listeners
document.getElementById("break-decrement").onclick = () => changeLength("break", -1);
document.getElementById("break-increment").onclick = () => changeLength("break", 1);
document.getElementById("session-decrement").onclick = () => changeLength("session", -1);
document.getElementById("session-increment").onclick = () => changeLength("session", 1);
document.getElementById("start_stop").onclick = startStop;
document.getElementById("reset").onclick = reset;

// Initial
updateDisplay();
