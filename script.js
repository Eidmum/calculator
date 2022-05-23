var operand1 = '';
var operand2 = '';
var operator = '';
var numButtons = document.getElementsByClassName('data-button');
var operatorButton = document.getElementsByClassName('operator');
for (var i = 0; i < numButtons.length; i++) {
  var element = numButtons[i];
  element.addEventListener('click', function (event) {
    appendNumber(event.target.innerText);
  });
}
for (let i = 0; i < operatorButton.length; i++) {
  const element = operatorButton[i];
  element.addEventListener('click', function (event) {
    operator = event.target.innerText;
    console.log(operator);
    exchangeDisplay(event.target.innerText);
  });
}
document.getElementById('equal').addEventListener('click', function () {
  calculate();
});
function updateDisplay(id, value) {
  document.getElementsByClassName(id)[0].innerText = value;
}
function appendNumber(newNumber) {
  operand1 += newNumber;
  updateDisplay('current-operand', operand1);
}
function exchangeDisplay(operatorPressed) {
  operand2 = operand1;
  operand1 = '';
  updateDisplay('current-operand', operand1);
  updateDisplay('previous-operand', operand2);
}
function calculate() {
  var num2 = parseFloat(operand1);

  var num1 = parseFloat(operand2);

  var ans = 0;

  if (operator == '+') ans = num1 + num2;
  else if (operator == '-') ans = num1 - num2;
  else if (operator == '*') ans = num1 * num2;
  else if (operator == '÷') ans = num1 / num2;

  updateDisplay('current-operand', ans);
  updateDisplay('previous-operand', '');
  operand1 = '' + ans;
}
document.getElementById('clear').addEventListener('click', function () {
  operand1 = '';
  operand2 = '';

  updateDisplay('current-operand', operand1);
  updateDisplay('previous-operand', operand2);
});
document.getElementById('delete').addEventListener('click', function () {
  operand1 = operand1.slice(0, operand1.length - 1);
  updateDisplay('current-operand', operand1);
});
