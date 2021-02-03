'use strict';

/* ---1st task--- */
const isStartNumber = function (str, firstNumber) {
  return +str[0] === firstNumber;
};

const foo = function (arr) {
  for (let i = 0; i < arr.length; i++) {
    if (isStartNumber(arr[i], 2)) {
      console.log(arr[i]);
    } else if (isStartNumber(arr[i], 4)) {
      console.log(arr[i]);
    }
  }
};

let arr = ['5125', '4722', '15125', '626173', '737221', '2346', '8452'];

foo(arr);

/* ---2nd task--- */
const getSimpleNumbers = function (arr) {
  let flag = true;
  for (let i = 2; i <= 100; i++) {

    for (let j = 2; j < i; j++) {
      if (i % j === 0) {
        flag = false;
        break;
      }
    }

    if (flag === true) {
      arr.push(i);
    }

    flag = true;
  }
};

const logResult = function (arr) {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i], 'Делители этого числа: 1 и ' + arr[i]);
  }
}

let simpleNumbers = [];
getSimpleNumbers(simpleNumbers);
logResult(simpleNumbers);