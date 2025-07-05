function sum(a, b) {
  let sumAll = 0;
  for (a; a <= b; a++) {
    // Didn't create "i" variable because no need for that
    sumAll += a;
  }
  return sumAll;
}

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  if (b === 0) {
    return "Can't divide with 0!";
  }
  return a / b;
}

function welcome(){
    message = '=== JavaScript Calculator ===';
    console.log(message);
}

