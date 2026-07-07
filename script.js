const buttons = document.querySelectorAll("button")
let firstNumber = ""
let secondNumber = ""
let myOperator = ""
waitingFor = "firstNumber"

function returnButtons() {
for (let button of buttons) {
    button.addEventListener("click", () => {
        handleInput(+button.textContent)
    })
}}

function handleInput(buttonValue) {

    if (Number.isInteger(buttonValue) && waitingFor == "firstNumber") {
        firstNumber += buttonValue
        console.log(firstNumber)
    }
    else if (!Number.isInteger(buttonValue)) {
        myOperator = button.value
        waitingFor = "secondNumber"
    }
    if (waitingFor == "secondNumber" && Number.isInteger(buttonValue)) {
        secondNumber += buttonValue
    }
    else if (!Number.isInteger(buttonValue)) {
        console.log(firstNumber, myOperator, secondNumber)
    }
}



function operator() {
    const button = returnButtons()
    if (button = "+") {
        console.log(sum(button, button))
    }
}

function sum(a, b) {
    return a+b
}