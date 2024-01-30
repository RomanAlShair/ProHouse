var number1 = 29.71;
var increasing1 = true;

function updateNumber1() {
  if (increasing1) {
    number1 += 0.01;
    if (number1 > 35) {
      increasing1 = false;
      setTimeout(function() {
        increasing1 = false;
        setTimeout(function() {
          increasing1 = true;
        }, 2000);
      }, 2000);
    }
  } else {
    number1 -= 0.1;
    if (number1 < 29.71) {
      increasing1 = true;
    }
  }
  document.getElementById('eth1').innerText = number1.toFixed(2) + " ETH";
}

var number2 = 17.31;
var increasing2 = true;

function updateNumber2() {
  if (increasing2) {
    number2 += 0.01;
    if (number2 > 22.31) {
      increasing2 = false;
      setTimeout(function() {
        increasing2 = true;
      }, 2000);
    }
  } else {
    number2 -= 0.1;
    if (number2 < 17.31) {
      increasing2 = true;
    }
  }
  document.getElementById('eth2').innerText = number2.toFixed(2) + " ETH";
}

function startTimers() {
  setInterval(updateNumber1, 100);
  setInterval(updateNumber2, 100);
}

startTimers();