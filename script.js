const calculation = document.getElementById('calculation');
const result = document.getElementById('result');

let currentInput = '';
let hasOperator = false;

const MAX_DISPLAY_LENGTH = 15;

const numbers = document.querySelectorAll('.number');
const operators = document.querySelectorAll('.operator');
const equalButton = document.querySelector('.equal');
const backButton = document.querySelector('.material-symbols-outlined');
const AC = document.getElementById('clean');

AC.addEventListener('click', clearCalculator);
backButton.addEventListener('click', handleBackspace);

numbers.forEach(button => {
    button.addEventListener('click', () => {
        handleNumberClick(button.textContent);
    });
});

operators.forEach(button => {
    button.addEventListener('click', () => {
        handleOperatorClick(button.textContent);
    });
});

equalButton.addEventListener('click', calculateResult);

function updateDisplay() {
    calculation.textContent = currentInput.slice(-MAX_DISPLAY_LENGTH);
}

function clearCalculator() {
    currentInput = '';
    hasOperator = false;
    updateDisplay();
}

function handleNumberClick(number) {
    currentInput += number;
    updateDisplay();
}

function handleOperatorClick(operator) {
    if (!hasOperator) {
        currentInput += ' ' + operator + ' ';
        hasOperator = true;
        updateDisplay();
    }
}

function handleBackspace() {
    currentInput = currentInput.slice(0, -1);
    updateDisplay();
}

function calculateResult() {
    try {
        const sanitizedInput = currentInput.replace(/[^-()\d/*+.]/g, ''); // Remove potentially harmful characters
        const resultValue = new Function('return ' + sanitizedInput)();
        result.textContent = resultValue;
        currentInput = resultValue.toString();
        hasOperator = false;
        updateDisplay();
    } catch (error) {
        result.textContent = 'Error';
        currentInput = '';
        hasOperator = false;
        updateDisplay();
    }
}
