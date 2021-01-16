const hourEl = document.querySelector('.hour');
const minuteEl = document.querySelector('.minute');
const secondEl = document.querySelector('.second');
const timeEl = document.querySelector('.time');
const dateEl = document.querySelector('.date');
const toggle = document.querySelector('.toggle');

const days = [
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
  'Sunday',
];

const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

toggle.addEventListener('click', (e) => {
  const html = document.querySelector('html');
  if (html.classList.contains('dark')) {
    html.classList.remove('dark');
    e.target.innerHTML = 'Dark mode';
  } else {
    html.classList.add('dark');
    e.target.innerHTML = 'Light mode';
  }
});

const countRotation = (num, in_min, in_max, out_min, out_max) => {
  return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
};

const setTime = () => {
  const time = new Date();
  const month = time.getMonth();
  const day = time.getDay();
  const date = time.getDate();
  const hours = time.getHours();
  const amOrPm = hours >= 12 ? 'PM' : 'AM';

  const hoursForClock = hours % 12;
  const minutes = time.getMinutes();
  const seconds = time.getSeconds();

  hourEl.style.transition = `${hours === 0 ? 'none' : 'all 0.5s ease-in'}`;
  minuteEl.style.transition = `${minutes === 0 ? 'none' : 'all 0.5s ease-in'}`;
  secondEl.style.transition = `${seconds === 0 ? 'none' : 'all 0.5s ease-in'}`;

  hourEl.style.transform = `translate(-50%, -100%) rotate(${countRotation(
    hoursForClock,
    0,
    11,
    0,
    360
  )}deg)`;

  minuteEl.style.transform = `translate(-50%, -100%) rotate(${countRotation(
    minutes,
    0,
    59,
    0,
    360
  )}deg)`;

  secondEl.style.transform = `translate(-50%, -100%) rotate(${countRotation(
    seconds,
    0,
    59,
    0,
    360
  )}deg)`;

  timeEl.innerHTML = `${hoursForClock === 0 ? '12' : hoursForClock}:${
    minutes < 10 ? `0${minutes}` : minutes
  } ${amOrPm}`;

  dateEl.innerHTML = `${days[day]}, ${months[month]} <span>${date}</span>`;
};

setTime();

setInterval(setTime, 1000);
