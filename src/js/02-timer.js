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
