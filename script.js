const buttons = document.querySelectorAll("button")
for (let button of buttons) {
    button.addEventListener("click", () => {
        const number = +button.textContent
        if (Number.isInteger(number)) {
            console.log(number)
        }
        else console.log(button.textContent)
    })
}