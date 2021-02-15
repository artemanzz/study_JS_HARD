function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

let convertTo16 = function (num) {
  let num16 = [];
  while (Math.floor(num / 16) !== 0) {
    num16.push(num % 16);
    num = Math.floor(num / 16);
  }
  num16.push(num);

  for (let i = 0; i < num16.length; i++) {
    if (num16[i] === 10) {
      num16[i] = 'A';
    } else if (num16[i] === 11) {
      num16[i] = 'B';
    } else if (num16[i] === 12) {
      num16[i] = 'C';
    } else if (num16[i] === 13) {
      num16[i] = 'D';
    } else if (num16[i] === 14) {
      num16[i] = 'E';
    } else if (num16[i] === 15) {
      num16[i] = 'F';
    }
  }

  while (num16.length !== 6) {
    num16.push(0);
  }

  let colorStr = num16.reverse();
  colorStr = colorStr.join('');
  return colorStr;
};


let changeColor = function () {
  let random = getRandomIntInclusive(0, parseInt('ffffff', 16));
  let color = convertTo16(random);

  buttonChange.style.color = '#' + color;
  body.style.backgroundColor = '#' + color;
  document.querySelector('#color').innerText = '#' + color;
};

let body = document.querySelector('body'),
  buttonChange = document.querySelector('#change');

buttonChange.addEventListener('click', changeColor);

