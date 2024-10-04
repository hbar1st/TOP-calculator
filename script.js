const clearBtn = document.querySelector('#clear');
const resultDiv = document.querySelector('#result');
const expressionDiv = document.querySelector('#expression');

let firstNum;
let secondNum;
let operator;

// #region math functions 
function add (a, b) {
    return a + b;
}
function subtract (a, b) {
    return a - b;
}
function multiply (a, b) {
    return a * b;
}
function divide (a, b) {
    return a / b;
}
// #endregion

function operate(op, a, b) {
    switch (op) {
        case "+": 
            add(a, b);
            break;
        case "-":
            subtract(a, b);
            break;
        case "*":
            multiply(a, b);
            break;
        case "/":
            divide(a, b);
            break;
    }
}

clearBtn.addEventListener("click", () => {
    expressionDiv.innerText = "";
    resultDiv.innerText = "";
})