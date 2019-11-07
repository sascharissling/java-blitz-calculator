"use strict";

import { sum, sub, mult, divide, countDigits } from "./lib/operators";

const firstInput = document.querySelector("[name=first]");
const secondInput = document.querySelector("[name=second]");
const sumButton = document.querySelector(".sum");
const subButton = document.querySelector(".sub");
const multButton = document.querySelector(".mult");
const divideButton = document.querySelector(".divide");
const countButton = document.querySelector("#count");
const result = document.querySelector("#result");
const clearButton = document.querySelector("#clear");

// CLEAR BUTTON
clearButton.addEventListener("click", function() {
  document.querySelector(".log").innerHTML = "";
  let newElement = document.createElement("div");
  newElement.innerHTML = "";
  document.body
    .querySelector(".log")
    .insertBefore(newElement, document.body.querySelector(".log").firstChild);
});

// + BUTTON
sumButton.addEventListener("click", function() {
  const firstNumber = parseInt(firstInput.value);
  const secondNumber = parseInt(secondInput.value);
  result.innerHTML = sum(firstNumber, secondNumber);
  insertLog(`${firstNumber} + ${secondNumber}`);
});

// - BUTTON
subButton.addEventListener("click", function() {
  const firstNumber = parseInt(firstInput.value);
  const secondNumber = parseInt(secondInput.value);
  result.innerHTML = sub(firstNumber, secondNumber);
  insertLog(`${firstNumber} - ${secondNumber}`);
});

// - * BUTTON
multButton.addEventListener("click", function() {
  const firstNumber = parseInt(firstInput.value);
  const secondNumber = parseInt(secondInput.value);
  result.innerHTML = mult(firstNumber, secondNumber);
  insertLog(`${firstNumber} * ${secondNumber}`);
});

// - / BUTTON
divideButton.addEventListener("click", function() {
  const firstNumber = parseInt(firstInput.value);
  const secondNumber = parseInt(secondInput.value);
  result.innerHTML = divide(firstNumber, secondNumber);
  insertLog(`${firstNumber} / ${secondNumber}`);
});

//add new div test
function insertLog(content) {
  let newElement = document.createElement("div");
  newElement.className = "equals";
  newElement.id = "result";
  newElement.innerHTML = content;
  document.body
    .querySelector(".log")
    .insertBefore(newElement, document.body.querySelector(".log").firstChild);
}

//add new result with string count of last result
countButton.addEventListener("click", function() {
  result.innerHTML = countDigits();
});
