function timer() {
  let d = new Date();
  let time = d.toLocaleTimeString();
  console.log(time);
}

var intervalID;

function changeTime() {
  intervalID = setInterval(timer, 1000);
}

changeTime();
