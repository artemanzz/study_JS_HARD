'use strict';

let week = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];
let date = new Date(2021, 1, 5);

for (let i = 0; i < week.length; i++) {
  if (i === (date.getDay() - 1)) {
    document.write('<div><b>' + week[i] + '</b></div>');
  } else if (i >= 5) {
    document.write('<div><i>' + week[i] + '</i></div>');
  } else {
    document.write('<div>' + week[i] + '</div>');
  }
}