'use strict';

let days = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];
let months = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'];

const writeFormatA = function (dateData) {
  document.body.innerHTML = "";
  let hoursWord = 'часов',
    minutesWord = 'минут',
    secondsWord = 'секунд';

  if (dateData.hours.slice(-1) === '1') {
    hoursWord = 'час';
  } else if (dateData.hours.slice(-1) === '2' || dateData.hours.slice(-1) === '3' || dateData.hours.slice(-1) === '4') {
    hoursWord = 'часа';
  }
  if (dateData.minutes.slice(-1) === '1') {
    minutesWord = 'минута';
  } else if (dateData.minutes.slice(-1) === '2' || dateData.minutes.slice(-1) === '3' || dateData.minutes.slice(-1) === '4') {
    minutesWord = 'минуты';
  }
  if (dateData.seconds.slice(-1) === '1') {
    secondsWord = 'секунда';
  } else if (dateData.seconds.slice(-1) === '2' || dateData.seconds.slice(-1) === '3' || dateData.seconds.slice(-1) === '4') {
    secondsWord = 'секунды';
  }

  document.write('<div class = "text"> а) Сегодня ' + dateData.day + ', ' + dateData.date + ' ' + dateData.month + ' ' + dateData.year + ' года, ' +
    dateData.hours + ' ' + hoursWord + ' ' + dateData.minutes + ' ' + minutesWord + ' ' + dateData.seconds + ' ' + secondsWord + '</div>');
};

const writeFormatB = function (dateData) {
  if (dateData.date.length === 1) {
    dateData.date = '0' + dateData.date;
  }

  if (dateData.monthNumber.length === 1) {
    dateData.monthNumber = '0' + dateData.monthNumber;
  }

  if (dateData.hours.length === 1) {
    dateData.hours = '0' + dateData.hours;
  }

  if (dateData.minutes.length === 1) {
    dateData.minutes = '0' + dateData.minutes;
  }

  if (dateData.seconds.length === 1) {
    dateData.seconds = '0' + dateData.seconds;
  }

  document.write('<div class = "text"> б) ' + dateData.date + '.' + dateData.monthNumber + '.' + dateData.year + ' - ' +
    dateData.hours + ':' + dateData.minutes + ':' + dateData.seconds + '</div>');
}

let date = new Date();
let dateData = {
  day: days[date.getDay()],
  date: String(date.getDate()),
  monthNumber: String(date.getMonth() + 1),
  month: months[date.getMonth()],
  year: date.getFullYear(),
  hours: String(date.getHours()),
  minutes: String(date.getMinutes()),
  seconds: String(date.getSeconds())
};

setInterval(function () {
  date = new Date();

  dateData.day = days[date.getDay()];
  dateData.date = String(date.getDate());
  dateData.monthNumber = String(date.getMonth() + 1);
  dateData.month = months[date.getMonth()];
  dateData.year = date.getFullYear();
  dateData.hours = String(date.getHours());
  dateData.minutes = String(date.getMinutes());
  dateData.seconds = String(date.getSeconds());
}, 1000);

setInterval(writeFormatA, 1000, dateData);
setInterval(writeFormatB, 1000, dateData);
