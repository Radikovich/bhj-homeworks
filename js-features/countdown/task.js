const timerSpan = document.getElementById('timer').textContent;
let timer = parseInt(timerSpan, 10);
let timeHours = prompt('Set hours', 0);
let timeMinutes = prompt('Set minutes', 0);
let timeSeconds = prompt('Set seconds', timer);

addZero = (digit) => (digit < 10) ? '0' + digit : digit;

clockFormat = (hh, mm, ss) => addZero(hh) + ':' + addZero(mm) + ':' + addZero(ss);

const counter = () => {
  let textArr = timerSet.split(':');
  let digitArr = [parseInt(textArr[0], 10), parseInt(textArr[1], 10), parseInt(textArr[2], 10)];
  if (digitArr[2] <= 0) {
    digitArr[1] -= 1;
    digitArr[2] = 59;

    if (digitArr[1] < 0) {
      digitArr[0] -= 1;
      digitArr[1] = 59;
    }

    if (digitArr[0] < 0) {
      clearInterval;
      location = 'https://drive.google.com/file/d/1oV3cGF4trqtjL8r6c6F7IyWdWRx0j-2v/view?usp=sharing';
      return alert('Вы победили в конкурсе!');
    }
  }
  digitArr[2] -= 1;
  timerSet = clockFormat(digitArr[0], digitArr[1], digitArr[2]);
  document.getElementById('timer').textContent = timerSet;
  return timerSet;
}

let timerSet = clockFormat(timeHours, timeMinutes, timeSeconds);
document.getElementById('timer').textContent = timerSet;
setInterval(counter, 1000, timerSet);


