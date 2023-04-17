// Initialize variables to store the numbers, operation, and result
let num1 = '';
let num2 = '';
let result = '';
let operation = '';

// Select necessary HTML elements and assign them to variables
const numButtons = document.querySelectorAll('.number');
const display = document.querySelector(".display");
const operButtons = document.querySelectorAll('.operator');
const backspace = document.querySelector('.backspace');
const clear = document.querySelector('.clear');

// Initialize the display value to '0'
let displayValue = '0';

// Add event listeners to the number buttons
for (let i = 0; i < numButtons.length; i++){
  numButtons[i].addEventListener('click', function(){
    // Check if an operation has been selected
    if (operation === '') {
      // If no operation has been selected, add the number to num1
      num1 += numButtons[i].innerHTML;
      displayValue = num1;
    } else {
      // If an operation has been selected, add the number to num2
      num2 += numButtons[i].innerHTML;
      displayValue = num2;
    }
    // Update the display with the new value
    display.innerHTML = displayValue;
  })
}

// Add event listeners to the operator buttons
for (let i = 0; i < operButtons.length; i++){
  operButtons[i].addEventListener('click', function(){
    // Store the selected operation
    operation = operButtons[i].innerHTML;
    displayValue = operation;
    // Update the display with the new value
    display.innerHTML = displayValue;
  })
}

// Define a function to perform the calculation
function calculate() {
  // Convert the numbers from strings to floats
  let n1 = parseFloat(num1);
  let n2 = parseFloat(num2);
  // Perform the appropriate operation based on the selected operator
  if (operation === '+') {
    result = n1 + n2;
  } else if (operation === '-') {
    result = n1 - n2;
  } else if (operation === '×') {
    result = n1 * n2;
  } else if (operation === '÷') {
    result = n1 / n2;
  }
  // Store the result as a string in num1 and clear num2
  num1 = result.toString();
  num2 = '';
  // Update the display with the new value
  displayValue = result.toString();
  display.innerHTML = displayValue;

  // Check for division by zero
  if (result === Infinity){
    display.innerHTML = "FBI OPEN UP!";
  }
  if (isNaN(result)) {
    display.innerHTML = "SyntaxError";
  }
}

// Add an event listener to the equals button to perform the calculation
const equalsButton = document.querySelector('.equals');
equalsButton.addEventListener('click', calculate);

// Add an event listener to the backspace button to delete the last character
backspace.addEventListener('click', function(){
  // Remove the last character from the display value
  displayValue = displayValue.slice(0, -1);
  // If the display value is now empty, set it to '0'
  if (displayValue === '') {
    displayValue = '0';
  }
  // Update num1 or num2 depending on whether an operation has been selected
  if (operation === '') {
    num1 = displayValue;
  } else {
    num2 = displayValue;
  }
  // Update the display with the new value
  display.innerHTML = displayValue;
});

// Add an event listener to the clear button to reset the calculator
clear.addEventListener('click', function(){
  num1 = '';
  num2 = '';
  result = '';
  operation = '';
  display.innerHTML = "";
})
  // Reset