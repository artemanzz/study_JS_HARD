'use strict';

let lang = prompt('Введите язык (ru или eng): ', 'ru');

if (lang === 'ru') {
  console.log('Понедельник, вторник, среда, четверг, пятница, суббота, воскресенье');
} else if (lang === 'eng') {
  console.log('Monday, tuesday, wednesday, thursday, friday, saturday, sunday');
} else {
  console.log('Incorrect language');
}

switch (lang) {
  case 'ru':
    console.log('Понедельник, вторник, среда, четверг, пятница, суббота, воскресенье');
    break;
  case 'eng':
    console.log('Monday, tuesday, wednesday, thursday, friday, saturday, sunday');
    break;
  default:
    console.log('Incorrect language');
}

let week = [
  ['ru', 'Понедельник, вторник, среда, четверг, пятница, суббота, воскресенье'],
  ['eng', 'Monday, tuesday, wednesday, thursday, friday, saturday, sunday']
];

lang === week[0][0] ? console.log(week[0][1]) : lang === week[1][0] ? console.log(week[1][1]) : console.log('Incorrect language'); 
