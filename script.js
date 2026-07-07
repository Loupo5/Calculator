const buttons = document.querySelectorAll("button")

function returnButtons() {
for (let button of buttons) {
    button.addEventListener("click", () => {
        const number = +button.textContent
        if (Number.isInteger(number)) {
            console.log(number)
            return number
        }
        else return button.textContent
    })
}}
function returnButtons() {
for (let button of buttons) {
    button.addEventListener("click", () => {
        const number = +button.textContent
        if (Number.isInteger(number)) {
            console.log(number)
            return number
        }
        else return button.textContent
    })
}}
let firstNumber = ""
let secondNumber = ""
let myOperator = ""
function handleInput(buttonValue) {
    
    waitingFor = "firstNumber"
    if (Number.isInteger(buttonValue) && waitingFor == "firstNumber") {
        firstNumber += buttonValue
    }
    else if (!Number.isInteger(buttonValue)) {
        myOperator = button.value
        waitingFor = "secondNumber"
    }
    if (waitingFor == "secondNumber" && Number.isInteger(buttonValue)) {
        secondNumber += buttonValue
    }
    console.log(firstNumber, myOperator, secondNumber)
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