const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
ingredients.forEach((ingr) => {
  const ingList = document.querySelector("ul#ingredients");
  const newItem = document.createElement("li");
  newItem.textContent = ingr;
  ingList.append(newItem);
});
