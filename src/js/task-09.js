const pageBody = document.querySelector("body");
const buttonColor = document.querySelector("button.change-color");
const colorName = document.querySelector("span.color");

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
function changeBodyColor() {
  const color = getRandomHexColor();
  pageBody.style.backgroundColor = color;
  colorName.textContent = color;
}
buttonColor.addEventListener("click", changeBodyColor);
