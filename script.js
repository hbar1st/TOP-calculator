const clearBtn = document.querySelector('#clear');
const resultDiv = document.querySelector('#result');
const expressionDiv = document.querySelector('#expression');
const numPadBtns = document.querySelectorAll('#num-pad>button');

let firstNum;
let secondNum;
let operator;
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
})

numPadBtns.forEach(btn => {
    addEventListener("click", (e) => {
        let val = e.target.textContent;
        if ( val === "bk" ) {
            characters.pop();
        } else
        if ( val === "." ) {
            //TODO
        } else {
            characters.push(+val);
        }
        
    });
});