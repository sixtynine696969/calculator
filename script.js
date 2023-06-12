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

buttons.forEach(button => {
    button.addEventListener('click', i => {
        const buttonValue = i.target.textContent;
        const outputValue = output.textContent;
        
        if (!isNaN(+buttonValue)) {
            output.textContent += buttonValue;
        }

        switch (buttonValue) {
            case '/':
            case '*':
            case '+':
            case '-':
                num = outputValue;
                operator = buttonValue;
                break;
            case 'C':
                num = null;
                operator = null;
                output.textContent = '';
                break;
                
        
        }
    })
})

// function compute(string) {
//     arr = string.split(' ');
//     const num1 = arr[0];
//     const operator = arr[1];
//     const num2 =  arr[2];
//     return operate(operator, num1, num2);
// }

// const output = document.querySelector('.output')
// const buttons = document.querySelectorAll('button')

// let clicks = 0

// buttons.forEach(btn => {
//     btn.addEventListener('click', i => {
        

//         if (i.target.textContent == '=') {
//             switch(true) {
//                 case output.textContent.includes('x'):
//                 case output.textContent.includes('/'):
//                 case output.textContent.includes('-'):
//                 case output.textContent.includes('+'):
//                     output.textContent = compute(output.textContent);
//             }
//             return
//         }
        
//         if (output.textContent.trim().split(' ').length > 2) {
//             output.textContent = compute(output.textContent)
//         }
//         switch(i.target.textContent) {
//             case '/':
//                 output.textContent += ' / ';
//                 break;
//             case 'x':
//                 output.textContent += ' x ';
//                 break;
//             case '-':
//                 output.textContent += ' - ';
//                 break;
//             case '+':
//                 output.textContent += ' + ';
//                 break;
//             default:
//                 output.textContent += i.target.textContent;
//                 break;
//         }
//     }) 
// })

// let num = '3 / 5';
// let arr = num.split(' ');
// let num1 = arr[0];
// let operator = arr[1];
// let num2 = arr[2];

// console.log(operate(operator, num1, num2));