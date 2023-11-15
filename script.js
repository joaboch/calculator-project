const display = document.querySelector('.display');
const equal = document.querySelector('#equal');

//Create the calulator basic function operations
const add = ((num1, num2) => num1 + num2);

const subtract = ((num1, num2) => num1 - num2);

const multiply = ((num1, num2) => num1 * num2);

const divide = ((num1, num2) => num1 / num2);

//Create the variables for the operation
let number1 = ""
    , number2 = ""
    , operator = ""
    , displayValue = ""
    , operatorPressedAgain = false
    , autoReset = false;

//Create the function operate that combines the variables and the operation functions
const operate = ((num1, num2, operator) => {
  switch (operator) {
    case '+':
      number1 = add(Number(num1), Number(num2));
      number2 = '';
      return number1;
    break;
    case '-':
      number1 = subtract(Number(num1), Number(num2));
      number2 = '';
      return number1;
    break;
    case '*':
      number1 = multiply(Number(num1), Number(num2));
      number2 = '';
      return number1;
    break;
    case '/':
      number1 = divide(Number(num1), Number(num2));
      number2 = '';
      return number1;
    break;
  }
})


//Create an array that holds all the number values 
const btnNumbers = document.querySelectorAll('[data-numbers]');

//Add an event to all the buttons and call a function to add them to the display
btnNumbers.forEach((button) => {
  button.addEventListener('click', () => {
    if(autoReset) {
      display.textContent = '';
      autoReset = false;
      addNumber(button.textContent); 
    } else {
      addNumber(button.textContent);
    }
  })
})

addNumber = (number) => display.textContent += number;

const btnOperators = document.querySelectorAll('[data-operators]')

btnOperators.forEach((button) => {
  button.addEventListener('click', () =>  { 
    if(operator == "") {
      addOperator(button.textContent);
    }
  })
})

addOperator = (operatorBtns) => {
  display.textContent += operatorBtns;
  operator = operatorBtns;
  autoReset = false;
}

//Save the display values in an array an store the values in variables
saveNumbers = () => {
  displayValue = display.textContent.split(operator);
  number1 = displayValue[0], number2 = displayValue[1];
}

//Once the equal button is pressed call the operate function with the values
equal.addEventListener('click', () => {
  saveNumbers();
  if(operator != ''){
    display.textContent = operate(number1, number2, operator);
  }
  autoReset = true;
  operator = "";
})






