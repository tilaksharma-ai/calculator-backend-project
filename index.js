let shouldContinue = false;

// Commented this piece of code, will add this feature later
/* 
function sum(a, b) {
  let sumAll = 0;
  for (a; a <= b; a++) {
    // Didn't create "i" variable because no need for that
    sumAll += a;
  }
  return sumAll;
}
*/


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
  } else {
    console.log(a / b);
  }
}

function welcome() {
  message = "=== JavaScript Calculator ===";
  console.log(message);
}

function takeInput() {
  let firstNumber = Number(prompt("Enter first number: "));
  let operator = prompt("Enter operator (+, -, *, /): ");
  let secondNumber = Number(prompt("Enter second number: "));
  return [firstNumber, operator, secondNumber];
}

function operate() {
  welcome();
  let [firstNumber, operator, secondNumber] = takeInput();
  switch (operator) {
    case "+":
      add(firstNumber, secondNumber);
      break;
    case "-":
      subtract(firstNumber, secondNumber);
      break;
    case "*":
      multiply(firstNumber, secondNumber);
      break;
    case "/":
      divide(firstNumber, secondNumber);
      break;
    case "" || " ":
      console.log("Wrong operator!");
  }
}

do {
  operate();
  try{
    let askUser = prompt("Do you want to continue? (yes/no): ").toLowerCase();
    if (askUser === "yes") {
      shouldContinue = true;
      console.log('\n'.repeat(100)); // This is because it does not leave "Console was cleared" message :D
    } else if (askUser === "no") {
      shouldContinue = false;
    } else {
      console.log("Wrong input!");
      shouldContinue = false;
      console.log(shouldContinue);
    }
  }
  catch (exceptionVar){
    console.log("Choose something!");
    shouldContinue = false;
    console.log(shouldContinue);
  }
  
}while (shouldContinue === true);


