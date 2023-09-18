const button = document.querySelector(".timer-box");
let clickCounter = 0;
let duration = 1 * 60; // 1 minute in seconds
let timerInterval;

button.addEventListener("click", (event) => {
  clickCounter++;
  console.log("clicks: " + clickCounter);

  if (clickCounter % 2 === 0 && timerInterval) {
    clearInterval(timerInterval);
    duration = Math.max(duration - ((Date.now() - start) / 1000), 0);
    console.log("pause");
    console.log("remaining time: " + duration);
  } else { 
    startTimer();
    console.log("play");
  }
});

let start;

function startTimer() {
  clearInterval(timerInterval);
  start = Date.now();
  const end = start + (duration * 1000);

  timerInterval = setInterval(function() {
    const delta = end - Date.now();
    const seconds = Math.floor(delta / 1000);
    const minutes = Math.floor(seconds / 60);
    const milliseconds = Math.floor((delta % 1000) / 100); // Calculate milliseconds

    let formattedTime = minutes + ":" + seconds.toString().padStart(2, '0');

    if (seconds < 20) {
      formattedTime += "." + milliseconds.toString();
    }
    
     if (seconds <10) {
      button.style.backgroundColor = "red";
    }

    if (seconds <= 0) {
      formattedTime = "0:00"; 
      button.style.backgroundColor = "#111";
      clearInterval(timerInterval);
    }

    document.getElementById("demo").innerHTML = formattedTime;
  }, 10);
}
