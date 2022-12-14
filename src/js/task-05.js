const EMPTY_NAME = "Anonymous";
const nameField = document.querySelector("input#name-input");
const nameOutput = document.querySelector("span#name-output");
nameField.addEventListener("input", welcomeName);

function welcomeName() {
  nameOutput.textContent =
    nameField.value.trim() === "" ? EMPTY_NAME : nameField.value.trim();
}
