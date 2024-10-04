const clearBtn = document.querySelector('#clear');
const resultDiv = document.querySelector('#result');
const expressionDiv = document.querySelector('#expression');
const numPadBtns = document.querySelectorAll('#num-pad>button');

let firstNum = null;
let secondNum = null;
let operator = null;
let characters = [];

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
    characters = [];
    firstNum = null;
    secondNum = null;
    operator = null;
})

numPadBtns.forEach(btn => {
    btn.addEventListener("click", (e) => {
        let val = e.target.textContent;
        if ( val === "=" ) {
            //TODO
        } else
        if ( val === "." ) {
            //TODO
        } else {
            characters.push(Number(val));
            displayExpression(characters);
        }
        
    });
});

function displayExpression (characters) {
    expressionDiv.innerText = characters.join('');
}