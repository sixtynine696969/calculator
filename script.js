const buttons = document.querySelectorAll('button');
const display = document.querySelector('.display');

let lastNum = null;
let operator = null;
let lastBtnVal = null;

function add(num1, num2) {
  return num1 + num2;
}

function subtract(num1, num2) {
  return num1 - num2;
}

function multiply(num1, num2) {
  return num1 * num2;
}

function divide(num1, num2) {
  return num1 / num2;
}

function operate(op, numberOne, NumberTwo) {
  const num1 = +numberOne;
  const num2 = +NumberTwo;

  switch (op) {
    case '+':
      return add(num1, num2);
    case '-':
      return subtract(num1, num2);
    case '*':
      return multiply(num1, num2);
    case '/':
      return divide(num1, num2);
    default:
      return NaN;
  }
}

function clear() {
  display.textContent = '0';
  lastNum = null;
  operator = null;
  lastBtnVal = null;
}

function populateDisplay(op, num1, num2) {
  if (op === '/' && (num1 === 0 || num2 === 0)) {
    clear();
    display.textContent = 'Oy Vey!';
  } else {
    const outputString = operate(op, num1, num2).toString().slice(0, 10);
    display.textContent = outputString;
  }
}

function addKeyboardSupport(e) {
  const { key } = e;
  const displayValue = display.textContent;
  const validKeys = [
    '0',
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    '-',
    '*',
    '-',
    '/',
    '=',
    '.',
    'c',
    'Escape',
    'Enter',
    'Backspace',
  ];

  if (!validKeys.includes(key)) return;
  if (key === '/') e.preventDefault();

  if (!Number.isNaN(Number(key))) {
    if (['-', '+', '*', '/', '='].includes(lastBtnVal) || displayValue === '0') {
      display.textContent = key;
    } else {
      if (display.textContent.length > 9) return;
      display.textContent += key;
    }
  }

  switch (key) {
    case '/':
    case '*':
    case '+':
    case '-':
      if (displayValue.endsWith('.')) {
        display.textContent = displayValue.slice(0, -1);
      }
      if (lastNum && operator && key !== lastBtnVal) {
        populateDisplay(operator, lastNum, displayValue);
      }
      lastNum = display.textContent;
      operator = key;
      break;
    case '=':
    case 'Enter':
      if (lastBtnVal === '=') break;
      populateDisplay(operator, lastNum, displayValue);
      lastNum = null;
      operator = null;
      break;
    case 'AC':
    case 'Escape':
      clear();
      break;
    case 'c':
      display.textContent = '0';
      lastNum = displayValue;
      break;
    case '.':
      if (display.textContent.length > 9) return;
      if (!displayValue.includes('.')) display.textContent += key;
      break;
    case 'Backspace':
      if (displayValue > 1) {
        display.textContent = displayValue.slice(0, -1);
      } else {
        display.textContent = '0';
      }
      break;
    default:
      break;
  }
  lastBtnVal = key;
}

function addKeypadSupport(e) {
  const buttonValue = e.target.textContent;
  const displayValue = display.textContent;

  if (!Number.isNaN(Number(buttonValue))) {
    if (['-', '+', '*', '/', '='].includes(lastBtnVal) || displayValue === '0') {
      display.textContent = buttonValue;
    } else {
      if (display.textContent.length > 9) return;
      display.textContent += buttonValue;
    }
  }

  switch (buttonValue) {
    case '/':
    case '*':
    case '+':
    case '-':
      if (displayValue.endsWith('.')) {
        display.textContent = displayValue.slice(0, -1);
      }
      if (lastNum && operator && buttonValue !== lastBtnVal) {
        populateDisplay(operator, lastNum, displayValue);
      }
      lastNum = display.textContent;
      operator = buttonValue;
      break;
    case '=':
      if (lastBtnVal === '=') break;
      populateDisplay(operator, lastNum, displayValue);
      lastNum = null;
      operator = null;
      break;
    case 'AC':
      clear();
      break;
    case 'C':
      display.textContent = '0';
      lastNum = displayValue;
      break;
    case '.':
      if (display.textContent.length > 9) return;
      if (!displayValue.includes('.')) display.textContent += buttonValue;
      break;
    default:
      break;
  }
  lastBtnVal = buttonValue;
}

buttons.forEach((button) => button.addEventListener('click', (e) => addKeypadSupport(e)));
document.addEventListener('keydown', (e) => addKeyboardSupport(e));
