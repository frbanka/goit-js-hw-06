const inputMeter = document.querySelector("input#font-size-control");
const newSizeText = document.querySelector("span#text");

inputMeter.addEventListener("input", changeFontSize);

function changeFontSize() {
  newSizeText.style.fontSize = `${inputMeter.value}px`;
}
