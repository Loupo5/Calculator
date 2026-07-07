let firstNumber = ""
let secondNumber = ""
let myOperator = ""
waitingFor = "firstNumber"

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
        console.log(firstNumber, myOperator, secondNumber)
        waitingFor = "firstNumber"
        firstNumber = ""
        secondNumber = ""
        myOperator = ""
    }
}

function isOperator(str) {
    const operators = ["+", "-", "x", "/"]
    if (operators.includes(str)) {
        return true
    }
}




function sum(a, b) {
    return a+b
}