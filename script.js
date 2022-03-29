let tampil = document.querySelector('.tampil');
let finalCalc = document.querySelector('.final');
let $buttons = document.querySelectorAll('button');

let opPressed = false;
let valOne = [];
let valTwo = [];
let operator = [];
let final = 0;

[...$buttons].map((x) => {
  x.addEventListener('click', function (e) {
    switch (this.innerHTML) {
      case 'AC':
        clearDisplay();
        break;
      case 'DEL':
        removeNumber();
        break;
      case '+/-':
        makeNegative();
        break;
      case '=':
        makeCalculation();
        break;
      case '+':
        operator.splice(0, 1, this.innerHTML);
        console.log(operator);

        storeValue();
        break;
      case '*':
        operator.splice(0, 1, this.innerHTML);
        console.log(operator);

        storeValue();
        break;
      case '/':
        operator.splice(0, 1, this.innerHTML);
        console.log(operator);

        storeValue();
        break;
      case '-':
        operator.splice(0, 1, this.innerHTML);
        console.log(operator);
        storeValue();
        break;
      default:
        if (valOne.length > 11) {
          alert('No more values beyond 8');
        } else {
          valOne.push(this.innerText);
          tampil.textContent = valOne.join('');
          console.log(valOne);
        }
        break;
      case '.':
        if (valOne.includes('.')) {
          alert('You cannot use anymore decimals');
        } else {
          valOne.push(this.innerText);
          tampil.textContent = valOne.join('');
        }
        break;
    }
  });
});

function clearDisplay() {
  tampil.textContent = '';
  finalCalc.textContent = '';
  valOne = [];
  valTwo = [];
  operator = [];
}

function removeNumber(e) {
  valOne.pop();
  tampil.textContent = valOne.join('');
}

function makeNegative() {
  if (valOne.length < 1) {
    return false;
  } else if (valOne[0] == '-') {
    valOne.shift();
  } else {
    valOne.unshift('-');
  }
  tampil.textContent = valOne.join('');
}

function makeCalculation() {
  if (valTwo.length > 0 && operator.length !== 0) {
    final = eval(valTwo + operator + valOne.join(''));
    finalCalc.textContent = '';
    finalCalc.textContent = eval(final).toFixed(2);
    tampil.textContent = '';
    valTwo = eval(final);
    valOne = [];
  } else if (operator.length == 0) {
    alert('Data Cannot Be Empty!!!');
  } else {
    final = final = eval(valTwo + operator + valOne.join(''));
    console.log('final');
    console.log(final);
    finalCalc.textContent = '';
    tampil.textContent = '';
    finalCalc.textContent = eval(final).toFixed(2);
    valTwo = eval(final);
    valOne = [];
  }
}

function storeValue() {
  if (valOne.length == 0 && valTwo.length == 0) {
    return false;
  } else if (valTwo.length > 0) {
    finalCalc.textContent = valTwo + ' ' + operator;
  } else if (valTwo.length == 0) {
    valTwo.push(valOne.join(''));
    valOne = [];
    tampil.textContent = '';
    finalCalc.textContent = '';
    finalCalc.textContent = valTwo + ' ' + operator;
  }
  finalCalc.textContent = valTwo + ' ' + operator;
}
