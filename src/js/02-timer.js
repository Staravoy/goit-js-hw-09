//--------------------imports------------------//
import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

//--------------------variables---------------//

const variables = {
  date: document.querySelector('#datetime-picker'),
  startBtn: document.querySelector('[data-start]'),
  displayDays: document.querySelector('[data-days]'),
  displayHours: document.querySelector('[data-hours]'),
  displayMinutes: document.querySelector('[data-minutes]'),
  displaySeconds: document.querySelector('[data-seconds]'),
};

//--------------------functions----------------//

variables.startBtn.addEventListener('click', onStartBtnClick);

let intervalId = null;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  locale: {
    firstDayOfWeek: 1, 
  },

  onClose(selectedDates) {
    const selectedDate = selectedDates[0].getTime();
    const currentDate = Date.now();
    let deltaTime = selectedDate - currentDate;

    if (deltaTime <= 0) variables.startBtn.removeAttribute('disabled');
  },
};

const targetDate = flatpickr(variables.date, options);
variables.startBtn.setAttribute('disabled', '');

function onStartBtnClick() {
  outputTimer(targetDate.selectedDates[0].getTime());
  intervalId = setInterval(
    outputTimer,
    1000,
    targetDate.selectedDates[0].getTime()
  );
  variables.startBtn.setAttribute('disabled', '');
  variables.date.setAttribute('disabled', '');
  console.log(refs.startBtn);
}

function currentTimerValue(targetTime) {
  return convertMs(targetTime - Date.now());
}

function displayTimer({ days, hours, minutes, seconds }) {
  variables.displayDays.textContent = days;
  variables.displayHours.textContent = pad(hours);
  variables.displayMinutes.textContent = pad(minutes);
  variables.displaySeconds.textContent = pad(seconds);
  if (days === 0 && hours === 0 && minutes === 0 && seconds === 0) {
    clearInterval(intervalId);
    variables.date.removeAttribute('disabled');
  }
}

function outputTimer(selectedDate) {
  displayTimer(currentTimerValue(selectedDate));
}

function pad(value) {
  return String(value).padStart(2, '0');
}

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
