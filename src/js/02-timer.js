import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import Notiflix from 'notiflix';

const refs = {
  myInput: document.querySelector('#datetime-picker'),
  start: document.querySelector('[data-start]'),
  days: document.querySelector('[data-days]'),
  hours: document.querySelector('[data-hours]'),
  minutes: document.querySelector('[data-minutes]'),
  seconds: document.querySelector('[data-seconds]'),
};

// const myInput = document.querySelector('#datetime-picker');
refs.start.disabled = true;
const calendars = flatpickr('.calendar', {});
calendars[0]; // flatpickr
let startTime = null;
let timeToEnd = null;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    // console.log(selectedDates[0]);
    if (selectedDates[0].getTime() - Date.now() < 0) {
      refs.start.disabled = true;
      // alert('Please choose a date in the future');
      Notiflix.Notify.failure('Please choose a date in the future', {
        timeout: 2000,
      });
    } else {
      refs.start.disabled = false;
      // console.log(convertMs(selectedDates[0] - Date.now()));
      startTime = selectedDates[0].getTime();
      // console.log(startTime);
    }
  },
};

const fp = flatpickr(refs.myInput, options);

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

refs.start.addEventListener('click', onStartHandler);

function onStartHandler() {
  const timer = setInterval(() => {
    timeToEnd = convertMs(startTime - Date.now());

    refs.days.textContent = addLeadingZero(timeToEnd.days);
    refs.hours.textContent = addLeadingZero(timeToEnd.hours);
    refs.minutes.textContent = addLeadingZero(timeToEnd.minutes);
    refs.seconds.textContent = addLeadingZero(timeToEnd.seconds);

    if (
      refs.days.textContent === '00' &&
      refs.hours.textContent === '00' &&
      refs.minutes.textContent === '00' &&
      refs.seconds.textContent === '00'
    ) {
      clearInterval(timer);
      Notiflix.Report.success('', 'Time out!', 'Ok', {
        width: '360px',
        svgSize: '120px',
      });
    }
  }, 1000);
}

const addLeadingZero = value => {
  return value.toString().padStart(2, '0');
};

// const str1 = '5';

// console.log(str1.padStart(2, '0'));
// console.log(addLeadingZero(55));
