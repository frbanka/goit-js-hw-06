const inputField = document.querySelector("input#validation-input");
inputField.addEventListener("blur", checkSymbols);

function checkSymbols({ target: { value } }) {
  if (value.length === Number(inputField.dataset.length)) {
    inputField.classList.add("valid");
    if (inputField.classList.contains("invalid")) {
      inputField.classList.remove("invalid");
    }
    return;
  }
  inputField.classList.add("invalid");
  if (value.length === 0) {
    inputField.classList.remove("invalid");
    inputField.classList.remove("valid");
  }
}
