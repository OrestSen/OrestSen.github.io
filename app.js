let productsCountEl = document.getElementById("products-count");
let addToCartButtons = document.querySelectorAll(".button2");

// console.log(addToCartButtons);

for(let i = 0; i < addToCartButtons.length; i++) {
  addToCartButtons[i].addEventListener("click",function() {
    productsCountEl.textContent = +productsCountEl.textContent + 1;
  })
}