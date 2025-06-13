let [hours, minutes, seconds] = [0, 0, 0];
let timer = null;
const display = document.getElementById("display");
const flags = document.getElementById("flags");

function updateDisplay() {
  let h = String(hours).padStart(2, '0');
  let m = String(minutes).padStart(2, '0');
  let s = String(seconds).padStart(2, '0');
  display.innerText = `${h}:${m}:${s}`;
}
function startTimer() {
  if (timer) return;
  timer = setInterval(() => {
    seconds++;
    if (seconds === 60) {
      seconds = 0;
      minutes++;
    }
    if (minutes === 60) {
      minutes = 0;
      hours++;
    }
    updateDisplay();
  }, 1000);
}
function pauseTimer() {
  clearInterval(timer);
  timer = null;
}
function resetTimer() {
  pauseTimer();
  [hours, minutes, seconds] = [0, 0, 0];
  updateDisplay();
  flags.innerHTML = '';
}
function flagTime() {
  const li = document.createElement("li");
  li.textContent = ` ${display.innerText}`;
  li.className = "py-1 border-b text-gray-700";
  flags.appendChild(li);
}
document.getElementById("startBtn").onclick = startTimer;
document.getElementById("pauseBtn").onclick = pauseTimer;
document.getElementById("resetBtn").onclick = resetTimer;
document.getElementById("flagBtn").onclick = flagTime;
