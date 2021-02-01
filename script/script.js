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
  ['ru', 'eng'],
  ['Понедельник, вторник, среда, четверг, пятница, суббота, воскресенье', 'Monday, tuesday, wednesday, thursday, friday, saturday, sunday']
];

lang === week[0][0] ? console.log(week[1][0]) : lang === week[0][1] ? console.log(week[1][1]) : console.log('Incorrect language');

//Альтернативный вариант
console.log(week[1][week[0].indexOf(lang)]);

// 2й пункт задания
let namePerson = prompt('Введите имя (Артём или Максим): ', 'Артём');
console.log(namePerson === 'Артём' ? 'директор' : namePerson === 'Максим' ? 'преподаватель' : 'студент');