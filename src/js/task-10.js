const boxes = document.querySelector("div#boxes");
const inputValue = document.querySelector("input");
const createButton = document.querySelector("button[data-create]");
const destroyButton = document.querySelector("button[data-destroy]");

const makeItem = (e) => `<div class="item"
 style="width: ${30 + 10 * e}px; height: ${
  30 + 10 * e
}px; background-color: ${getRandomHexColor()}"></div>`;

const makeItemList = (amount) =>
  Array(amount)
    .fill("")
    .map((_, i) => makeItem(i))
    .join("");

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
function createBoxes(amount) {
  boxes.insertAdjacentHTML("afterbegin", makeItemList(amount));
}
function clickCreate() {
  destroyBoxes();
  createBoxes(Number(inputValue.value));
}
function clickDestroy() {
  destroyBoxes();
}
function destroyBoxes() {
  while (boxes.childNodes.length > 0) {
    boxes.firstChild.remove();
  }
}
createButton.addEventListener("click", clickCreate);
destroyButton.addEventListener("click", clickDestroy);
