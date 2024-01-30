var number3 = 29.71;
var increasing1 = true;

function updateNumber3() {
  if (increasing1) {
    number3 += 0.01;
    if (number3 > 35) {
      increasing1 = false;
      setTimeout(function() {
        increasing1 = true;
      }, 2000);
    }
  } else {
    number3 -= 0.1;
    if (number3 < 29.71) {
      increasing1 = true;
    }
  }
  document.getElementById('eth11').innerText = number3.toFixed(2) + " ETH";
}

var number4 = 17.31;
var increasing2 = true;

function updateNumber4() {
  if (increasing2) {
    number4 += 0.01;
    if (number4 > 22.31) {
      increasing2 = false;
      setTimeout(function() {
        increasing2 = true;
      }, 2000);
    }
  } else {
    number4 -= 0.1;
    if (number4 < 17.31) {
      increasing2 = true;
    }
  }
  document.getElementById('eth22').innerText = number4.toFixed(2) + " ETH";
}

function startTimers() {
  setInterval(updateNumber3, 100);
  setInterval(updateNumber4, 100);
}

startTimers();
