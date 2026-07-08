let firstNumber = ""
let secondNumber = ""
let myOperator = ""
let result = ""
let myError = false
let waitingFor = "firstNumber"

const display = document.querySelector("input")
display.value = "0"

function returnButtons() {
const buttons = document.querySelectorAll("button")
for (let button of buttons) {
    button.addEventListener("click", () => {
        console.log(button.textContent)
        if (button.textContent == "AC") {
            clear()
            display.value = "0"
        }
        handleInput(button.textContent)
    })
}}
returnButtons()

function handleInput(buttonValue) {
    if (isInteger(buttonValue) && waitingFor == "firstNumber") {
        firstNumber += buttonValue
        display.value = firstNumber
    }
    else if (isOperator(buttonValue) && waitingFor == "firstNumber") {
        if (myError) {
            firstNumber = "0"
            display.value = "0"
            myError = false
        }
        else if (firstNumber == "") firstNumber = result
        myOperator = buttonValue
        display.value += buttonValue
        waitingFor = "secondNumber"
    }
    if (waitingFor == "secondNumber" && isInteger(buttonValue)) {
        secondNumber += buttonValue
        display.value += secondNumber
    }
    else if (buttonValue == "=" && waitingFor == "secondNumber") {
        waitingFor = "reset"
        if (myOperator == "+") {
            result = sum(+firstNumber, +secondNumber)
            console.log (`${firstNumber} + ${secondNumber} =
                 ${sum(+firstNumber, +secondNumber)}`)
            display.value = sum(+firstNumber, +secondNumber)
        }
        else if (myOperator == "-") {
            result = subtract(+firstNumber, +secondNumber)
            console.log (`${firstNumber} - ${secondNumber} =
                 ${subtract(+firstNumber, +secondNumber)}`)
            display.value = subtract(+firstNumber, +secondNumber)
        }
        else if (myOperator == "x") {
            result = multiply(+firstNumber, +secondNumber)
            console.log (`${firstNumber} x ${secondNumber} =
                 ${multiply(+firstNumber, +secondNumber)}`)
            display.value = multiply(+firstNumber, +secondNumber)
        }
        else if (myOperator == "÷") {
            if (secondNumber == "0") {
                error()
            }
            else {result = divide(+firstNumber, +secondNumber)
            console.log (`${firstNumber} / ${secondNumber} =
                 ${divide(+firstNumber, +secondNumber)}`)
            display.value = divide(+firstNumber, +secondNumber)}
        }
    }
    if (waitingFor == "reset") {
        clear()
    }
}

function error() {
    display.style.fontSize="60px"
    display.value = "not happening"
    myError = true
}

function clear() {
    firstNumber = ""
    secondNumber = ""
    myOperator = ""
    waitingFor = "firstNumber"
}

function isOperator(str) {
    const operators = ["+", "-", "x", "÷"]
    if (operators.includes(str)) {
        return true
    }
}
function isInteger(str) {
    const integers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
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