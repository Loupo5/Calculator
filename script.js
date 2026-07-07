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
    if (isInteger(buttonValue) && waitingFor == "firstNumber") {
        firstNumber += buttonValue
    }
    if (isOperator(buttonValue)) {
        myOperator = buttonValue
        waitingFor = "secondNumber"
    }
    if (waitingFor == "secondNumber" && isInteger(buttonValue)) {
        secondNumber += buttonValue
    }
    if (buttonValue == "=") {
        waitingFor = "reset"
        if (myOperator == "+") console.log (`${firstNumber} + ${secondNumber} = ${sum(+firstNumber, +secondNumber)}`)
        else if (myOperator == "-") console.log (`${firstNumber} - ${secondNumber} = ${subtract(+firstNumber, +secondNumber)}`)
        else if (myOperator == "x") console.log (`${firstNumber} x ${secondNumber} = ${multiply(+firstNumber, +secondNumber)}`)
        else if (myOperator == "/") console.log (`${firstNumber} / ${secondNumber} = ${divide(+firstNumber, +secondNumber)}`)
    }
    if (waitingFor == "reset") {
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
function isInteger(str) {
    const integers = ["1", "2", "3", "4", "5", "6", "7", "8", "9"]
    if (integers.includes(str)){
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
    return Math.floor(a / b * 100) / 100
}
function sum(a, b) {
    return a + b
}