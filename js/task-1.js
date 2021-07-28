const categories = document.querySelectorAll(".item");
console.log(`В списке ${categories.length} категории.`);

// const h2 = document.querySelectorAll("h2");
// const ul = document.querySelectorAll("ul");
// console.log("Категория:", h2[0]);
// console.log(`Количество элементов: ${ul[1].children.length}`);
// console.log("Категория:", h2[1]);
// console.log(`Количество элементов: ${ul[2].children.length}`);
// console.log("Категория:", h2[2]);
// console.log(`Количество элементов: ${ul[3].children.length}`);
const category = document.querySelectorAll(".item");
category.forEach((item) =>
  console.log(`Категория: ${item.querySelector("h2").textContent}
  Количество элементов: ${item.querySelectorAll("li").length}`)
);