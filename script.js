const clearBtn = document.querySelector('#clear');
const backspaceBtn = document.querySelector("#backspace");
const resultDiv = document.querySelector('#result');
const expressionDiv = document.querySelector('#expression');
const numPadBtns = document.querySelectorAll('#num-pad>button');
const opPadBtns = document.querySelectorAll("#op-pad>button");

let firstNum = "";
let secondNum = "";
let operator = null;
let total = null;
let characters = []; //what people type and we display

// #region math functions 
function add(a) {
    return total + a;
}
function subtract(a) {
    return total - a;
}
function multiply(a) {
    return total * a;
}
function divide(a) {
    return total / a;
}
// #endregion

function operate(op, a, b) {
    total = a ? a : total;
    switch (op) {
        case "+":
            return add(b);
            break;
        case "-":
            return subtract(b);
            break;
        case "*":
            return multiply(b);
            break;
        case "/":
            return divide(b);
            break;
    }
}

clearBtn.addEventListener("click", () => {
    expressionDiv.innerText = "";
    resultDiv.innerText = "";
    characters = [];
    firstNum = "";
    secondNum = "";
    operator = null;
    total = null;
})

numPadBtns.forEach(btn =>
    btn.addEventListener("click", e => {
        let val = e.target.textContent;
        if (val === "=") {
            if (operator) {
                evaluate();
                return;
            }
        } else
            if (val === ".") {
                if (secondNum.includes(val) ||
                    (!secondNum && !operator && firstNum.includes(val))) {
                    return;
                }
            }
        characters.push(val);

        if (operator) {
            secondNum += val;
        } else {
            firstNum += val;
        }

        displayExpression(characters);

    })
);

function displayExpression(characters) {
    expressionDiv.innerText = characters.join('');
}

function displayResult(value) {
    resultDiv.innerText = value;
}

function evaluate() {
    if (operator === "/" && secondNum === "0") {
        displayResult("Nope! No thank you!");
    } else {
        const result = operate(operator, +firstNum, +secondNum);
        total = !isNaN(result) ? result : total;
        firstNum = "";
        secondNum = "";
        operator = null;
        displayResult(total);
    }
}

opPadBtns.forEach(btn =>
    btn.addEventListener("click", e => {
        if (characters.length === 0) {
            return; // do nothing if first thing pressed is operator
        }
        const prevChar = characters[characters.length - 1];
        if (isOperator(prevChar)) {
            operator = e.target.textContent;
            characters.pop();
        } else {
            if (operator) {
                evaluate();
            }
            operator = e.target.textContent;
        }
        characters.push(e.target.textContent);
        displayExpression(characters);
    }));

function isOperator(str) {
    return (str === "+") || (str === "-") || (str === '*') || (str === '/');
}

backspaceBtn.addEventListener("click", () => {
    if (secondNum) {
        secondNum = secondNum.slice(0, -1);
        characters.pop();
    } else
        if (operator) {
            operator = null;
            characters.pop();
        } else
            if (firstNum) {
                firstNum = firstNum.slice(0, -1);
                characters.pop();
            }
    displayExpression(characters);
});