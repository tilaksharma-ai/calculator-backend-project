function sum(a, b) {
  let sumAll = 0;
  for (a; a <= b; a++) {
    // Didn't create "i" variable because no need for that
    sumAll += a;
  }
  return sumAll;
}

function add(a, b) {
  console.log(a + b);
}

function subtract(a, b) {
  console.log(a - b);
}

function multiply(a, b) {
  console.log(a * b);
}

function divide(a, b) {
  if (b === 0) {
    console.log("Can't divide with 0!");
  }
  else{
    console.log(a / b);
  }
}

function welcome(){
    message = '=== JavaScript Calculator ===';
    console.log(message);
}

function takeInput(){
    let firstNumber = Number(prompt("Enter first number: "));
    let operator = prompt("Enter operator (+, -, *, /): ");
    let secondNumber = Number(prompt("Enter second number: "));
    return [firstNumber, operator, secondNumber];
}


function operate(){
  welcome();
  let [firstNumber, operator, secondNumber] = takeInput();
  switch (operator){
    case "+":
      add(firstNumber, secondNumber);
      break;
    case "-":
      subtract(firstNumber,secondNumber);
      break;
    case "*":
      multiply(firstNumber, secondNumber);
      break;
    case "/":
      divide(firstNumber, secondNumber);
      break;
    default:
      console.log("Wrong operator!");
  }
}

operate();