const numerOfCategories = document.querySelectorAll(".item");
const categoriesCount = numerOfCategories.length;
function getCatNames() {
  let allCategories = document.querySelectorAll(`h2`);
  let catNames = [];
  for (let i = 0; i < allCategories.length; i++) {
    catNames.push(categories[i].textContent);
  }
  return catNames;
}
const categoryNames = getCatNames();

console.log(`Number of categories: ${categoriesCount}`);
console.log(``);
console.log(`Category: ${categoryNames}`);
console.log(`Elements: `);
