const display = document.querySelector('.display');

//Create the calulator basic function operations
const add = ((num1, num2) => num1 + num2);

const subtract = ((num1, num2) => num1 - num2);

const multiply = ((num1, num2) => num1 * num2);

const divide = ((num1, num2) => num1 / num2);

//Create the variables for the operation
let number1 = ""
    , number2 = ""
    , operator = "";

//Create the function operate that combines the variables and the operation functions
const operate = ((num1, num2, operator) => {
  
})


//Create an array that holds all the number values 
const btnNumbers = document.querySelectorAll('[data-numbers]');

//Add an event to all the buttons and call a function to add them to the display
btnNumbers.forEach((button) => {
  button.addEventListener('click', () => addNumber(button.textContent))
})

addNumber = (number) => display.textContent += number;

const btnOperators = document.querySelectorAll('[data-operators]')

btnOperators.forEach((button) => {
  button.addEventListener('click', () => addOperator(button.textContent))
})

addOperator = (operatorBtns) => {
  display.textContent += operatorBtns;
}




