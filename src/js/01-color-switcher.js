const refs = {
  body: document.querySelector('body'),
  start: document.querySelector('[data-start]'),
  stop: document.querySelector('[data-stop]'),
};
let timerId = null;

refs.start.addEventListener('click', onStartClick);
refs.stop.addEventListener('click', onStopClick);

refs.stop.disabled = true;

function onStartClick() {
  timerId = setInterval(changeBodyBgColor, 1000);
  refs.start.disabled = true;
  refs.stop.disabled = false;
}

function changeBodyBgColor() {
  refs.body.style.backgroundColor = getRandomHexColor();
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function onStopClick() {
  clearInterval(timerId);
  refs.start.disabled = false;
  refs.stop.disabled = true;
}
