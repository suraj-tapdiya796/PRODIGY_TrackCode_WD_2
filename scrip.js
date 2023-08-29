let timer;
let startTime;
let elapsedTime = 0;

const minutesDisplay = document.getElementById("minutes");
const secondsDisplay = document.getElementById("seconds");
const millisecondsDisplay = document.getElementById("milliseconds");
const startStopButton = document.getElementById("startStop");
const resetButton = document.getElementById("reset");

function formatTime(time) {
  const minutes = Math.floor(time / 60000);
  const seconds = Math.floor((time % 60000) / 1000);
  const milliseconds = time % 1000;

  return {
    minutes: String(minutes).padStart(2, "0"),
    seconds: String(seconds).padStart(2, "0"),
    milliseconds: String(milliseconds).padStart(3, "0")
  };
}

function updateDisplay() {
  const { minutes, seconds, milliseconds } = formatTime(elapsedTime);
  minutesDisplay.textContent = minutes;
  secondsDisplay.textContent = seconds;
  millisecondsDisplay.textContent = milliseconds;
}

function toggleStartStop() {
  if (timer) {
    clearInterval(timer);
    timer = null;
    startStopButton.textContent = "Start";
  } else {
    startTime = Date.now() - elapsedTime;
    timer = setInterval(() => {
      elapsedTime = Date.now() - startTime;
      updateDisplay();
    }, 10);
    startStopButton.textContent = "Stop";
  }
}

function resetTimer() {
  clearInterval(timer);
  timer = null;
  elapsedTime = 0;
  updateDisplay();
  startStopButton.textContent = "Start";
}

startStopButton.addEventListener("click", toggleStartStop);
resetButton.addEventListener("click", resetTimer);
