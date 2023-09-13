// Input variables
let first = null;
let second = null;
let operator = "";


// Operating functions
function add(first, second) {
    return first + second;
}

function subtract(first, second) {
    return first - second;
}

function multiply(first, second) {
    return first * second;
}

function divide(first, second) {
    return first / second;
}

function operate(first, second, operator) {
    if (operator === "+") {
        return add(first, second);
    } else if(operator === "-") {
        return subtract(first, second);
    } else if(operator === "x") {
        return multiply(first, second);
    } else if(operator === "÷") {
        return divide(first, second);
    } else {
        return null;
    }
}


// Display variables and functions
let displayValue = "";
const display = document.querySelector(".display");

function numberToDisplay(number) {
    if (operator === "") {
        displayValue += number;
        display.textContent = displayValue;
        first = displayValue;
    } else {
        clearDisplay();
        if (second === null) {
            displayValue = "";
        }
        displayValue += number;
        display.textContent = displayValue;
        second = displayValue;
    }
}

function resultToDisplay(result) {
    clearDisplay();
    display.textContent = result;
}

function clearVariables() {
    first = null;
    second = null;
    operator = "";
    displayValue = "";
}

function clearDisplay() {
    display.textContent = "";
}


// HTML - DOM manipulators
const numbers = document.querySelectorAll("button.digit, button.zero");
numbers.forEach(number => {number.addEventListener("click", function (){ numberToDisplay(Number(number.textContent))});
});

const operators = document.querySelectorAll(".operator");
operators.forEach(button => {button.addEventListener("click", function (){ 
        operator = button.textContent; 
        console.log(operator)
    });
});

const equals = document.querySelector(".equals");
equals.addEventListener("click", function (){ 
    resultToDisplay(operate(Number(first), Number(second), operator)); 
    clearVariables()
});

const clear = document.querySelector(".clear");
clear.addEventListener("click", function() { clearDisplay(); clearVariables()});
