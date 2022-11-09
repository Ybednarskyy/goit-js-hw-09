import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

const myInput = document.querySelector('#datetime-picker');

const fp = flatpickr(myInput, options);

const calendars = flatpickr('.calendar', {});
calendars[0]; // flatpickr

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    console.log(selectedDates[0]);
  },
};

import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import Notiflix from 'notiflix';

// 1. Надо в функции вывода модалки описать текущую дату (selectedDates < текущей), и что ранняя дата это не правильно. (DONE)
// 2. Надо определить как в text.Content рефов присваивать разницу между выбраной датой и текущей (DONE)
// 2.1 Нужна проверка: Если разница между текущей датой и выбранной меньше 0, то в textContent рефов присваивается 00 (DONE)
// 3. Надо определить как отсчет таймера запустить в обратную сторону. (DONE)
// 4. Когда text.Content рефов = 00 то надо таймер остановить clearInterval(this.intervalId)

const inputDayTime = document.querySelector('#datetime-picker');
