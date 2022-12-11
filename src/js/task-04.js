let counterValue = 0;
const counterItem = document.querySelector("#value");
const buttonAdd = document.querySelector('button[data-action="increment"]');
const buttonRemove = document.querySelector('button[data-action="decrement"]');
const addEvent = (e) => {
  counterValue++;
  counterItem.textContent = String(counterValue);
};
const oddEvent = (e) => {
  counterValue--;
  counterItem.textContent = String(counterValue);
};
buttonAdd.addEventListener("click", addEvent);
buttonRemove.addEventListener("click", oddEvent);
