const categoriesList = document.querySelector("ul#categories");
const categoryItems = categoriesList.querySelectorAll("li.item");
console.log(`Number of categories: ${categoryItems.length}`);
categoryItems.forEach((cat) => {
  const category = cat.querySelector("h2").textContent;
  const elementsCount = cat.querySelectorAll("ul > li").length;
  console.log(`Category: ${category} \n Elements: ${elementsCount}`);
});
