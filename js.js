var btn = document.getElementsByClassName("btn");
var hour = 0;
var minute = 0;
var second = 0;
var interval;

btn[0].addEventListener("click", () => {
  hour--;
  if (hour < 0) {
    hour = 23;
  }
  document.getElementsByClassName("hour")[0].innerText = formart(hour);
});

btn[1].addEventListener("click", () => {
  hour++;
  if (hour > 23) {
    hour = 0;
  }
  document.getElementsByClassName("hour")[0].innerText = formart(hour);
});

btn[2].addEventListener("click", () => {
  minute--;
  if (minute < 0) {
    minute = 59;
  }
  document.getElementsByClassName("minute")[0].innerText = formart(minute);
});

btn[3].addEventListener("click", () => {
  minute++;
  if (minute > 59) {
    minute = 0;
  }
  document.getElementsByClassName("minute")[0].innerText = formart(minute);
});

btn[4].addEventListener("click", () => {
  second--;
  if (second < 0) {
    second = 59;
  }
  document.getElementsByClassName("second")[0].innerText = formart(second);
});

btn[5].addEventListener("click", () => {
  second++;
  if (second > 59) {
    second = 0;
  }
  document.getElementsByClassName("second")[0].innerText = formart(second);
});

btn[6].addEventListener("click", () => {
  if (btn[6].innerText == "SET") {
    count();
  } else {
    reset();
  }
});
function count() {
  interval = setInterval(() => {
    const cTime = new Date();
    const d = new Date();
    cTime.setHours(hour);
    cTime.setMinutes(minute);
    cTime.setSeconds(second);

    if (cTime.getTime() - d.getTime() < 0) {
      alert("Giờ phải sau giờ hiện tại");
      clearInterval(interval);
      reset();
    } else {
      var rS = Math.floor((cTime.getTime() - d.getTime()) / 1000);
      var rM = Math.floor(rS / 60);
      var rH = Math.floor(rM / 60);
      document.getElementsByClassName("hour")[0].innerText = formart(rH % 24);
      document.getElementsByClassName("minute")[0].innerText = formart(rM % 60);
      document.getElementsByClassName("second")[0].innerText = formart(rS % 60);
      document.title = formart(rH % 24) + ":" + formart(rM % 60) + ":" + formart(rS % 60);
      for (i = 0; i < btn.length - 1; i++) {
        btn[i].style.display = "none";
      }
      btn[6].innerText = "STOP";
      if (rH == 0 && rM == 0 && rS == 0) {
        reset();
      }
    }
  }, 200);
}

function reset() {
  document.getElementsByClassName("hour")[0].innerText = formart(hour);
  document.getElementsByClassName("minute")[0].innerText = formart(minute);
  document.getElementsByClassName("second")[0].innerText = formart(second);
  btn[6].innerText = "SET";
  for (i = 0; i < btn.length - 1; i++) {
    btn[i].style.display = "block";
  }
  clearInterval(interval);
}

function formart(i) {
  i = i;
  if (i < 10) {
    return "0" + i;
  }
  return i;
}
