//Create the calulator basic function operations
add = ((num1, num2) => num1 + num2);

subtract = ((num1, num2) => num1 - num2);

multiply = ((num1, num2) => num1 * num2);

divide = ((num1, num2) => num1 / num2);

//Create the variables for the operation
const number1 = ""
    , number2 = ""
    , operator = "";

//Create the function operate that combines the variables and the operation functions
function operate(num1, num2, operator) {
  num1 = 2, num2 = 5;
  console.log(add(num1, num2));
}
operate(number1, number2, operator);