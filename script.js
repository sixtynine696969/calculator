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
const output = document.querySelector('.output');

let num = null;
let operator = null;
let lastBtnVal = null;

buttons.forEach(button => {
    button.addEventListener('click', i => {
        const buttonValue = i.target.textContent;
        const outputValue = output.textContent;

        if (!isNaN(+buttonValue)) {
            if (['-', '+', '*', '/'].includes(lastBtnVal)) {
                output.textContent = buttonValue
            }
            else {
                output.textContent += buttonValue;
            }
        }
        
        switch (buttonValue) {
            case '/':
            case '*':
            case '+':
            case '-':
                if (num && operator) {
                    output.textContent = operate(operator, num, outputValue)
                }
                num = output.textContent;
                operator = buttonValue;
                break;
            case '=':
                if (lastBtnVal == buttonValue) break;
                output.textContent = operate(operator, num, outputValue);
                num = null;
                operator = null;
                break;
            case 'C':
                output.textContent = '';
                num = null;
                operator = null;
                lastBtnVal = null;
                break;
                
        }
        lastBtnVal = buttonValue;
    })
})