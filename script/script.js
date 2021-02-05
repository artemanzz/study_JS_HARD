'use strict';

let week = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];
let date = new Date();

for (let i = 1; i < week.length; i++) {
  if (i === (date.getDay())) {
    document.write('<div><b>' + week[i] + '</b></div>');
  } else if (i >= 5) {
    document.write('<div><i>' + week[i] + '</i></div>');
  } else {
    document.write('<div>' + week[i] + '</div>');
  }
}

if (date.getDay() === 0) {
  document.write('<div><b>' + week[0] + '</b></div>');
} else {
  document.write('<div><i>' + week[0] + '</i></div>');
}