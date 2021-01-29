let num = 266219;
let newNum;

function strMultiply(num) {
  let newStr = num.toString();
  let result = 1;

  for (let i = 0; i < newStr.length; i++) {
    result *= Number(newStr[i]);
  }

  return result;
}

newNum = strMultiply(num);
console.log(newNum);

newNum **= 3;

alert(newNum.toString().substr(0,2));