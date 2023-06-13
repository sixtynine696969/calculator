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

function operate(operator, num1, num2) {
    num1 = +num1;
    num2 = +num2;

    switch(operator) {
        case '+':
            return add(num1, num2);
        case '-':
            return subtract(num1, num2);
        case '*':
            return multiply(num1, num2);
        case '/':
            return divide(num1, num2);
    }
}

const buttons = document.querySelectorAll('button');
const display = document.querySelector('.display');

let lastNum = null;
let operator = null;
let lastBtnVal = null;

buttons.forEach(button => {
    button.addEventListener('click', i => {
        const buttonValue = i.target.textContent;
        const displayValue = display.textContent;

        if (!isNaN(+buttonValue)) {
            if (['-', '+', '*', '/', '='].includes(lastBtnVal) || (displayValue == '0')) {
                display.textContent = buttonValue
            }
            else {
                display.textContent += buttonValue;
            }
        }
        
        switch (buttonValue) {
            case '/':
            case '*':
            case '+':
            case '-':
                if (lastNum && operator && (buttonValue != lastBtnVal)) {
                    display.textContent = operate(operator, lastNum, displayValue)
                }
                lastNum = display.textContent;
                operator = buttonValue;
                break;
            case '=':
                if (lastBtnVal == '=') break;
                display.textContent = operate(operator, lastNum, displayValue);
                lastNum = null;
                operator = null;
                break;
            case 'AC':
                display.textContent = '0';
                lastNum = null;
                operator = null;
                lastBtnVal = null;
                break;
            case 'C':
                display.textContent = '0';
                lastNum = displayValue;
                break;
                
        }
        lastBtnVal = buttonValue;
    })
})