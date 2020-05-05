//
// function myFunction() {
//   for(var i=1;i<=60;i++){
//   task(i);
// }
// };
//
// function task(i) {
//   setTimeout(function() {
//       document.querySelector("h1").innerHTML = "00 : 0" +i ;
//   }, 5000);
// };

document.getElementById("myBtn").onclick = function() {
  startStop()
};
document.getElementById("myBtn1").onclick = function() {
  reset()
};

let minutes = 0;
let seconds = 0;

let displaySeconds = 0;
let displayMinutes = 0;

let interval = null;

let status = "stopped";

function stopwatch() {

  seconds++;

  if (seconds / 60 == 1) {
    seconds = 0;
    minutes++;

  }

  // To add a trailing zero before minutes/seconds
  if (seconds < 10) {
    displaySeconds = "0" + seconds.toString();
  } else {
    displaySeconds = seconds;
  }
  if (minutes < 10) {
    displayMinutes = "0" + minutes.toString();
  } else {
    displayMinutes = minutes;
  }
  if (displaySeconds == 01) {
    var audio1 = new Audio("sounds/Unstoppable.mp3");
    audio1.play();
    setTimeout(function() {
      audio1.pause();
    }, 42000)

  }

  if (displaySeconds == 43) {
    var audio2 = new Audio("sounds/Stop.mpeg");
    audio2.play();
  }
  if (displaySeconds == 59) {
    var audio3 = new Audio("sounds/Start.mpeg");
    audio3.play();
  }

  document.querySelector("h1").innerHTML = displayMinutes + " : " + displaySeconds;
}

function startStop() {
  if (status === "stopped") {
    interval = window.setInterval(stopwatch, 1000);
    document.getElementById("myBtn").innerHTML = "Stop";
    status = "started";
  } else {
    window.clearInterval(interval);
    document.getElementById("myBtn").innerHTML = "Start";
    status = "stopped";
  }
}

function reset() {
  window.clearInterval(interval);
  seconds = 0;
  minutes = 0;
  document.querySelector("h1").innerHTML = "00 : 00";
  document.getElementById("myBtn").innerHTML = "Start";

}
