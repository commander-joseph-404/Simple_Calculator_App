const display = document.getElementById("display");
const buttons = document.querySelectorAll(".btn");
const clearBtn = document.getElementById("clear");
const equalBtn = document.getAnimations("equal");



function displayInput(input_value) {
    display.value += input_value;
}

function clearDisplay() {
    display.value = ""
}

function calculate() {
    try {
         display.value = eval(display.value);
    } catch (error) {
        display.value = "Error"
    }
}
