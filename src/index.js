"use strict";

import {
  sum,
  sub,
  mult,
  divide,
  countDigits,
  createDivWithContent
} from "./lib/operators";

const firstInput = document.querySelector("[name=first]");
const secondInput = document.querySelector("[name=second]");
const sumButton = document.querySelector(".sum");
const subButton = document.querySelector(".sub");
const multButton = document.querySelector(".mult");
const divideButton = document.querySelector(".divide");
const countButton = document.querySelector("#count");
const result = document.querySelector("#result");

sumButton.addEventListener("click", function() {
  const firstNumber = parseInt(firstInput.value);
  const secondNumber = parseInt(secondInput.value);
  insertLog(`${firstNumber} + ${secondNumber}`);
  result.innerHTML = sum(firstNumber, secondNumber);
});

subButton.addEventListener("click", function() {
  const firstNumber = parseInt(firstInput.value);
  const secondNumber = parseInt(secondInput.value);
  result.innerHTML = sub(firstNumber, secondNumber);
});

multButton.addEventListener("click", function() {
  const firstNumber = parseInt(firstInput.value);
  const secondNumber = parseInt(secondInput.value);
  result.innerHTML = mult(firstNumber, secondNumber);
});

divideButton.addEventListener("click", function() {
  const firstNumber = parseInt(firstInput.value);
  const secondNumber = parseInt(secondInput.value);
  result.innerHTML = divide(firstNumber, secondNumber);
});

//add new result with string count of last result
countButton.addEventListener("click", function() {
  result.innerHTML = countDigits();
});

//add new div test
function insertLog(content) {
  let newElement = document.createElement("div");
  newElement.className = "equals";
  newElement.id = "result";
  newElement.innerHTML = content;
  document.body
    .querySelector(".result")
    .insertBefore(
      newElement,
      document.body.querySelector(".result").firstChild
    );
}

insertLog("moin");
insertLog("moinsen");
