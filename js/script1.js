function startTimer(hours, minutes, seconds, displayId) {
  function updateTimer() {
    var display = document.getElementById(displayId);
    display.innerText = formatTime(hours) + "h : " + formatTime(minutes) + "m : " + formatTime(seconds) + "s";

    seconds--;
    if (seconds < 0) {
      seconds = 59;
      minutes--;
      if (minutes < 0) {
        minutes = 59;
        hours--;
        if (hours < 0) {
          hours = 23;
        }
      }
    }

    localStorage.setItem(displayId, JSON.stringify({ hours, minutes, seconds }));
  }

  function formatTime(time) {
    return (time < 10) ? "0" + time : time;
  }

  var savedTime = JSON.parse(localStorage.getItem(displayId));
  if (savedTime) {
    hours = savedTime.hours;
    minutes = savedTime.minutes;
    seconds = savedTime.seconds;
  }

  setInterval(updateTimer, 1000);
}

startTimer(23, 16, 11, 'timerr1');
startTimer(18, 21, 8, 'timer1');
startTimer(23, 16, 11, 'timerr2');
startTimer(18, 21, 8, 'timer2');