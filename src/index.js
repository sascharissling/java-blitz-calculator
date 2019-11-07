"use strict";

import { sum, sub, mult, divide } from "./lib/operators";

const firstInput = document.querySelector("[name=first]");
const secondInput = document.querySelector("[name=second]");
const sumButton = document.querySelector(".sum");
const subButton = document.querySelector(".sub");
const multButton = document.querySelector(".mult");
const divideButton = document.querySelector(".divide");
const result = document.querySelector("#result");
const clearButton = document.querySelector("#clear");
const crossButton = document.querySelector("#cross");
const countButton = document.querySelector("#count");

// CLEAR BUTTON
clearButton.addEventListener("click", function() {
  document.querySelector(".log").innerHTML = "";
  let newElement = document.createElement("div");
  newElement.innerHTML = "";
  document.body
    .querySelector(".log")
    .insertBefore(newElement, document.body.querySelector(".log").firstChild);
});

// CROSS Button
crossButton.addEventListener("click", function() {
  let value = document.body.querySelector(".log").firstChild.innerHTML;
  let cross = value
    .replace(".", "")
    .replace("-", "")
    .toString()
    .split("")
    .map(Number)
    .reduce(function(acc, current) {
      return acc + current;
    }, 0);
  insertLog(cross);
});

// COUNT Button
countButton.addEventListener("click", function() {
  let number = document.body.querySelector(".log").firstChild.innerHTML;
  insertLog(number.toString().length);
});

// + BUTTON
sumButton.addEventListener("click", function() {
  const firstNumber = parseInt(firstInput.value);
  const secondNumber = parseInt(secondInput.value);
  result.innerHTML = insertLog(sum(firstNumber, secondNumber));
});

// - BUTTON
subButton.addEventListener("click", function() {
  const firstNumber = parseInt(firstInput.value);
  const secondNumber = parseInt(secondInput.value);
  result.innerHTML = insertLog(sub(firstNumber, secondNumber));
});

// - * BUTTON
multButton.addEventListener("click", function() {
  const firstNumber = parseInt(firstInput.value);
  const secondNumber = parseInt(secondInput.value);
  result.innerHTML = insertLog(mult(firstNumber, secondNumber));
});

// - / BUTTON
divideButton.addEventListener("click", function() {
  const firstNumber = parseInt(firstInput.value);
  const secondNumber = parseInt(secondInput.value);
  result.innerHTML = insertLog(divide(firstNumber, secondNumber));
});

// ADD NEW DIV
function insertLog(content) {
  let newElement = document.createElement("div");
  newElement.className = "equals";
  newElement.id = "result";
  newElement.innerHTML = content;
  document.body
    .querySelector(".log")
    .insertBefore(newElement, document.body.querySelector(".log").firstChild);
}
