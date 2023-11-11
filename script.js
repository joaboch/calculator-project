//Create the calulator basic function operations
const add = ((num1, num2) => num1 + num2);

const subtract = ((num1, num2) => num1 - num2);

const multiply = ((num1, num2) => num1 * num2);

const divide = ((num1, num2) => num1 / num2);

//Create the variables for the operation
const number1 = ""
    , number2 = ""
    , operator = "";

//Create the function operate that combines the variables and the operation functions
const operate = ((num1, num2, operator) => {

  
})
operate(number1, number2, operator);

//Create functions that connect the buttons pressed with the display
let displayValue = '';
const buttons = document.querySelector('.buttons');


buttons.addEventListener('click', function (e) {
  if(e.target.matches('#zero')) {
    document.querySelector('.display').textContent += '0';
    displayValue += '0'; 
  } else if(e.target.matches('#one')) {
    document.querySelector('.display').textContent += '1';
    displayValue += '1';
  } else if(e.target.matches('#two')) {
    document.querySelector('.display').textContent += '2';
    displayValue += '2';
  } else if(e.target.matches('#three')) {
    document.querySelector('.display').textContent += '3';
    displayValue += '3';
  } else if(e.target.matches('#four')) {
    document.querySelector('.display').textContent += '4';
    displayValue += '4';
  } else if(e.target.matches('#five')) {
    document.querySelector('.display').textContent += '5';
    displayValue += '5';
  } else if(e.target.matches('#six')) {
    document.querySelector('.display').textContent += '6';
    displayValue += '6';
  } else if(e.target.matches('#seven')) {
    document.querySelector('.display').textContent += '7';
    displayValue += '7';
  } else if(e.target.matches('#eight')) {
    document.querySelector('.display').textContent += '8';
    displayValue += '8';
  } else if(e.target.matches('#nine')) {
    document.querySelector('.display').textContent += '9';
    displayValue += '9';
  }
})