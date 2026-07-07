let firstNumber = ""
let secondNumber = ""
let myOperator = ""
let waitingFor = "firstNumber"

function returnButtons() {
const buttons = document.querySelectorAll("button")
for (let button of buttons) {
    button.addEventListener("click", () => {
        handleInput(button.textContent)
    })
}}
returnButtons()

function handleInput(buttonValue) {
    if (Number.isInteger(+buttonValue) && waitingFor == "firstNumber") {
        firstNumber += buttonValue
    }
    else if (isOperator(buttonValue)) {
        myOperator = buttonValue
        waitingFor = "secondNumber"
    }
    else if (waitingFor == "secondNumber" && Number.isInteger(+buttonValue)) {
        secondNumber += buttonValue
    }
    else if (buttonValue == "=") {
        waitingFor = "reset"
        if (myOperator == "+") console.log (sum(+firstNumber, +secondNumber))
        else if (myOperator == "-") console.log (subtract(+firstNumber, +secondNumber))
        else if (myOperator == "x") console.log (multiply(+firstNumber, +secondNumber))
        else if (myOperator == "/") console.log (divide(+firstNumber, +secondNumber))
    }
    else if (waitingFor == "reset") {
        myOperator = ""
        firstNumber = ""
        secondNumber = ""
        waitingFor = "firstNumber"
    }

}

function isOperator(str) {
    const operators = ["+", "-", "x", "/"]
    if (operators.includes(str)) {
        return true
    }
}


function subtract(a, b) {
    return a - b
}
function multiply(a, b) {
    return a * b
}
function divide(a, b) {
    return a / b
}
function sum(a, b) {
    return a + b
}