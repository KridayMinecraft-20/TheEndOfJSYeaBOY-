let current = 1;
let interval = null;

function updateNumber() {
  current = current < 10 ? current + 1 : 1;
  document.getElementById("number").textContent = current;
}

document.getElementById("startBtn").addEventListener("click", () => {
  if (!interval) {
    interval = setInterval(updateNumber, 10); // 100ms = 0.1 seconds
  }
});

document.getElementById("stopBtn").addEventListener("click", () => {
  clearInterval(interval);
  interval = null;
});