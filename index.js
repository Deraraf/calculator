const display = document.getElementById('dispaly');

const appendToDispaly = (input) =>{
    display.value += input
}
const clearDispaly = () =>{
    display.value = ""
}

const calculate = () =>{
    try {
        display.value = eval(display.value)
    } catch (error) {
        display.value = "Error"
    }
}