const input = document.querySelector('#input'),
  paragraph = document.querySelector('#paragraph'),

  showText = () => {
    const inputText = input.value;
    paragraph.textContent = inputText;
  };

function debounce(func, time) {
  return function (args) {
    let previousCall = this.lastCall;
    this.lastCall = Date.now();
    if (previousCall && ((this.lastCall - previousCall) <= time)) {
      clearTimeout(this.lastCallTimer);
    }
    this.lastCallTimer = setTimeout(() => func(args), time);
  }
}

input.addEventListener('input', debounce(showText, 300));