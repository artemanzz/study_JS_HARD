'use strict';

let str = '                 Hello my friends, I am very glad to see you. Now I am learning JS with GLO ACADEMY. Bye:)                    ';
//let str = 2;
//let str = '';

const foo = function (str) {
  if (typeof (str) !== 'string') {
    alert('Переменная не является строкой');
    return 0;
  } else if (str.length === 0) {
    alert('Строка пустая');
    return 0;
  }

  while (str[0] === ' ') {
    str = str.substring(1);
  }

  while (str.slice(-1) === ' ') {
    str = str.substring(0, str.length-1);
  }

  if (str.length > 30) {
    str = str.substring(0, 30);
    str+= '...';
  }

  return str;
};

console.log(foo(str));