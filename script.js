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
        case 'x':
        case '*':
            return multiply(num1, num2);
        case '/':
            return divide(num1, num2);
    }
}

// function compute(string) {
//     arr = string.split(' ');
//     const num1 = arr[0];
//     const operator = arr[1];
//     const num2 =  arr[2];
//     return operate(operator, num1, num2);
// }