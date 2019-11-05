const firstInput = document.querySelector("[name=first]");
const secondInput = document.querySelector("[name=second]");
const submitButton = document.querySelector(".submit");

submitButton.addEventListener("click", function() {
  const sum = parseInt(firstInput.value) * parseInt(secondInput.value);
  alert(sum);
});
