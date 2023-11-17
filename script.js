const display = document.querySelector('.display');
const equal = document.querySelector('#equal');
const clear = document.querySelector('#clear');
const decimal = document.querySelector('#decimal');
const del = document.querySelector('#del');

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
    , anotherOperator = false
    , autoReset = true
    , decimalRep = true;

//Create the function operate that combines the variables and the operation functions
const operate = ((num1, num2, operator) => {
  switch (operator) {
    case '+':
      number1 = add(Number(num1), Number(num2));
      number2 = '';
      return Math.round((number1 + Number.EPSILON) * 100) / 100;
    break;
    case '-':
      number1 = subtract(Number(num1), Number(num2));
      number2 = '';
      return Math.round((number1 + Number.EPSILON) * 100) / 100;
    break;
    case '*':
      number1 = multiply(Number(num1), Number(num2));
      number2 = '';
      return Math.round((number1 + Number.EPSILON) * 100) / 100;
    break;
    case '/':
      if (number1 == '0' || number2 == '0') {
        return display.textContent = 'Very funny :';
      } else {
        number1 = divide(Number(num1), Number(num2));
        number2 = '';
        return Math.round((number1 + Number.EPSILON) * 100) / 100;
      }
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
    anotherOperator = true;
  })
})

addNumber = (number) => display.textContent += number;
const btnOperators = document.querySelectorAll('[data-operators]');

btnOperators.forEach((button) => {
  button.addEventListener('click', () =>  { 
    if(operator == '' && anotherOperator) {
      addOperator(button.textContent);
    } else if(anotherOperator) {
      operatorResult();
      addOperator(button.textContent);
    } 
  })
})


addOperator = (operatorBtns) => {
  display.textContent += operatorBtns;
  operator = operatorBtns;
  autoReset = false;
  anotherOperator = false;
  decimalRep = true;
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
  operator = '';
})
//Create a function that calculates when the operator is pressed again
function operatorResult() {
    saveNumbers();
    display.textContent = operate(number1, number2, operator);
    operator = '';
}

//Clear the entire operation
clear.addEventListener('click', () => {
  number1 = ""
  , number2 = ""
  , operator = ""
  , displayValue = ""
  , anotherOperator = false
  , autoReset = false
  , decimalRep = true
  , display.textContent = "0";
})


//Add the decimal when clicked and don't repeat it
decimal.addEventListener('click', () => {
  autoReset = false;
  if((display.textContent == '' || number2 == '') && decimalRep) {
    display.textContent += '0.';
  } else if(decimalRep){
    display.textContent += '.';
    decimalRep = false;
  }
})

