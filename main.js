const calculatorDisplay = document.querySelector('.calculator-display-input');

const sendValue = (value) => {

    calculatorDisplay.value = calculatorDisplay.value + value;

    if(value === "clear") {
        calculatorDisplay.value = '';
    }
}