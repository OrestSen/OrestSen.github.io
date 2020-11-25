"use strict"
// ********************************************add to cart*****************************************

let productsCountEl = document.getElementById("products-count");
let addToCartButtons = document.querySelectorAll(".button2");

// console.log(addToCartButtons);
// **********************************************multiple*****************************************
for (let i = 0; i < addToCartButtons.length; i++) {
  addToCartButtons[i].addEventListener("click", function () {
    productsCountEl.textContent = +productsCountEl.textContent + 1;
    // let prevProductsCount = +productsCountEl.textContent;
    // productsCountEl.textContent = prevProductsCount + 1;
  })
}
// **************************************************single************************************
// addToCartButtons.addEventListener("click", function(e) {
//   let current = e.target;
//   console.log(current)
//   current.style.backgroundColor = "red"
// })

// ********************************************change like button state**************************

let likeButtons = document.querySelectorAll(".like");


for (let i = 0; i < likeButtons.length; i++) {
  likeButtons[i].addEventListener("click", function () {
    this.classList.toggle("liked")
  })
}

// ************************************************slider slick********************8

$(".slider-block").slick({
  dots: true,
})
// *********************************************************

let moreDetailsButtons = document.querySelectorAll(".button1");
let modal = document.querySelector(".modal")
let closeBtn = document.querySelector(".btn-close")
// *********************************************************************
moreDetailsButtons.forEach(function (btn) {
  btn.addEventListener("click", openModal)
})

function openModal() {
  modal.classList.add("show");
  modal.classList.remove("hide")

}

// ********************************************************************* 
function closeModal() {
  modal.classList.add("hide");
  modal.classList.remove("show");
}

closeBtn.addEventListener("click", closeModal)

modal.addEventListener("click", function (e) {
  if (e.target == modal) {
    closeModal()
  }
})
// *************************************************************************    
function showModalByScroll() {
  if (window.pageYOffset > document.documentElement.scrollHeight / 2) {
    openModal()
    removeEventListener("scroll", showModalByScroll)
  }
}

window.addEventListener("scroll", showModalByScroll)
// **************************************************************************>

let decrementButtons = document.querySelectorAll(".decrement-button");
let incrementButtons = document.querySelectorAll(".increment-button");
let productsQuantity = document.querySelectorAll(".quantity-input");
// let currentCount = productsQuantity.value; 
let minCount = 1;
let maxCount = 5;


for (let i = 0; i < productsQuantity.length; i++) {
  let currentCount = +productsQuantity[i].value;
  toggleButtonState(currentCount, decrementButtons[i], incrementButtons[i])
}

function toggleButtonState(count, decrementButton, incrementButton) {
  decrementButton.disabled = count <= minCount;
  incrementButton.disabled = count >= maxCount
}

// for (let i = 0; i < incrementButtons.length; i++) {
//   incrementButtons[i].addEventListener("click", function () {
//     let currentCount = +productsQuantity[i].value;
//     let nextCount = currentCount + 1;
//     productsQuantity[i].value = nextCount;
//     toggleButtonState(nextCount, decrementButtons[i], incrementButtons[i])
//   })
// }

// for (let i = 0; i < decrementButtons.length; i++) {
//   decrementButtons[i].addEventListener("click", function () {
//     let currentCount = +productsQuantity[i].value;
//     let nextCount = currentCount - 1;
//     productsQuantity[i].value = nextCount;
//     toggleButtonState(nextCount, decrementButtons[i], incrementButtons[i])
//   })
// }

// function toggleDecrementState(count) {
//   if (count <= 1 ) {
//     decrementButtons.disabled = true

//   } else {
//     decrementButtons.disabled = false

//   }
// }
// toggleDecrementState(currentCount)


// function toggleDecrementState(count) {
//   if (count > 5) {
//     incrementButtons.disabled = true
//   } else {
//     incrementButtons.disabled = false
//   }
// }
// toggleIncrementState(currentCount)

// if ( currentCount <= 1) {
//   decrementButtons.disabled = true
// } else {
//   decrementButtons.disabled = false
// } 
// if ( currentCount > 5) {
//   incrementButtons.disabled = false
// } else {
//   incrementButtons.disabled = false
// } 

// if ( currentCount > 5) {
//     incrementButtons.disabled = true
//   } else {
//     incrementButtons.disabled = false
//   } 
// for(let i = 0; i < incrementButtons.length;i++) {
//   incrementButtons[i].addEventListener("click", function() {
//     let currentCount = +productsQuantity[i].value;
//     let nextCount = currentCount + 1;
//     productsQuantity[i].value = nextCount; 
//     toggleButtonState(nextCount, decrementButtons[i],incrementButtons[i])
// })
// }
// if ( nextCount <= 1) {
//   decrementButtons.disabled = true
// } else {
//   decrementButtons.disabled = false
// }

// for(let i = 0; i < decrementButtons.length;i++) {
//   decrementButtons[i].addEventListener("click", function() {
//     let currentCount = +productsQuantity[i].value;
//     let nextCount = currentCount - 1;
//     productsQuantity[i].value = nextCount; 
//     toggleButtonState(nextCount,decrementButtons[i],incrementButtons[i])
//   })
// }
// if ( nextCount <= 1) {
//   decrementButtons.disabled = true
// } else {
//   decrementButtons.disabled = false
// }


// ************************************************AOS library*********************************
AOS.init();


// function Counter(name) {
//   console.log(name)
// }

// let counter = new Counter("orest");


function Counter(incrementButton, decrementButton, productQuantity, minCount = 1, maxCount = 5) {
  this.domRefs = {
    incrementButton,
    decrementButton,
    productQuantity
  }
  console.log(this)


  this.toggleButtonState = function () {
    let count = +this.domRefs.productQuantity.value;
    this.domRefs.incrementButton.disabled = count >= maxCount;
    this.domRefs.decrementButton.disabled = count <= minCount;
  }
  // this.toggleButtonState()

  this.increment = function () {
    let currentCount = +this.domRefs.productQuantity.value;
    let nextCount = currentCount + 1;
    this.domRefs.productQuantity.value = nextCount;
    this.toggleButtonState()
  }

  // console.log(this)

  this.decrement = function () {
    let currentCount = +this.domRefs.productQuantity.value;
    let nextCount = currentCount - 1;
    this.domRefs.productQuantity.value = nextCount;
    this.toggleButtonState()
  }

  this.domRefs.incrementButton.addEventListener("click", this.increment.bind(this))
  this.domRefs.decrementButton.addEventListener("click", this.decrement.bind(this))

}

let counters = [];
productsQuantity.forEach(function(counterItem, i) {
  counters[i] = new Counter(incrementButtons[i], decrementButtons[i], counterItem)
})

