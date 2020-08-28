// ******************add to cart

let productsCountEl = document.getElementById("products-count");
let addToCartButtons = document.querySelectorAll(".button2");

console.log(addToCartButtons);
  // **********************************************multiple*****************************
  for(let i = 0; i < addToCartButtons.length; i++) {
    addToCartButtons[i].addEventListener("click",function() {
      productsCountEl.textContent = +productsCountEl.textContent + 1;
      // let prevProductsCount = +productsCountEl.textContent;
      // productsCountEl.textContent = prevProductsCount + 1;
    })
  }
// **************************************************single
// addToCartButtons.addEventListener("click", function(e) {
//   let current = e.target;
//   console.log(current)
//   current.style.backgroundColor = "red"
// })

// ********************************************change like button state

let likeButtons = document.querySelectorAll(".like");


for(let i = 0; i < likeButtons.length; i++) {
  likeButtons[i].addEventListener("click",function() {
    this.classList.toggle("liked")
  })
}

// ************************************************slider slick********************8

$(".slider-block").slick({
  dots:true,
})


let moreDetailsButtons = document.querySelectorAll(".button1");
let modal = document.querySelector(".modal")
let closeBtn = document.querySelector(".btn-close")
// *********************************************************************
moreDetailsButtons.forEach(function(btn) {
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

closeBtn.addEventListener("click",closeModal)

modal.addEventListener("click",function(e) {
  if(e.target == modal ) {
    closeModal()
  }
})
// *************************************************************************    
function showModalByScroll() {
  if(window.pageYOffset > document.documentElement.scrollHeight/2) {
    openModal()
    removeEventListener("scroll",showModalByScroll)
  }
}

window.addEventListener("scroll",showModalByScroll)
// **************************************************************************>



let decrementButtons = document.querySelectorAll(".decrement-button")[0];
let incrementButtons = document.querySelectorAll(".increment-button")[0];
let productsQuantity = document.querySelectorAll(".quantity-input")[0];

function toggleDecrementState(count) {
  if (count <= 1) {
    decrementButtons.disabled = true
  } else {
    decrementButtons.disabled = false
  }
}
// toggleDecrementState(currentCount)

incrementButtons.addEventListener("click", function() {
  let currentCount = +productsQuantity.value;
  let nextCount = currentCount + 1;
  productsQuantity.value = nextCount; 
  toggleDecrementState(nextCount)
  // if ( nextCount <= 1) {
  //   decrementButtons.disabled = true
  // } else {
  //   decrementButtons.disabled = false
  // }
})

decrementButtons.addEventListener("click", function() {
  let currentCount = +productsQuantity.value;
  let nextCount = currentCount - 1;
  productsQuantity.value = nextCount; 
  toggleDecrementState(nextCount)
  // if ( nextCount <= 1) {
  //   decrementButtons.disabled = true
  // } else {
  //   decrementButtons.disabled = false
  // }
})

// ************************************************AOS library*********************************
AOS.init();
// data-aos="fade-up" data-aos-duration="1000"