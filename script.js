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
    else if (!Number.isInteger(+buttonValue)) {
        myOperator = buttonValue
        waitingFor = "secondNumber"
    }
    if (waitingFor == "secondNumber" && Number.isInteger(+buttonValue)) {
        secondNumber += buttonValue
    }
    else if (!Number.isInteger(+buttonValue)) {
        console.log(firstNumber, myOperator, secondNumber)
    }
}





function sum(a, b) {
    return a+b
}