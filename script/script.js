const articleMusic = document.querySelector("#electric-guitar");
const articles = document.querySelectorAll("[data-category]");

articles.forEach((element) => {
  console.log(element.dataset.category);
});

articleMusic.dataset.category;
articleMusic.dataset.brand;
articleMusic.dataset.model;
articleMusic.dataset.price;

console.log(articleMusic.dataset.category);
console.log(articleMusic.dataset.brand);
console.log(articleMusic.dataset.model);
console.log(articleMusic.dataset.price);
