/* Hamburger Menu */
const hamburger = document.querySelector("#hamburger");
const mobileMenu = document.querySelector(".mobile-menu");
const close = document.querySelector("#close"); //The element that closes the mobile menu.
hamburger.addEventListener("click", () => {
  mobileMenu.style.transform = "translateX(0)";
});

close.addEventListener("click", () => {
  mobileMenu.style.transform = "translateX(-300px)";
});
/* Hamburger Menu */

/*Popup Product Image*/
const popup = document.querySelector(".popup-product");
const productImg = document.querySelector(".product-image");
const popupImg = document.querySelector(".popup-image");
productImg.addEventListener("click", () => {
  popup.style.display = "flex";
});
popup.addEventListener("click", () => {
  popup.style.display = "none";
});
/*Popup Product Image*/

/*Increasing and decreasing product count*/
const btnIncrease = document.querySelector("#increase");
const btnDecrease = document.querySelector("#decrease");
var numberOfProducts = parseInt(
  document.querySelector(".numberOfProducts").textContent
);

btnIncrease.addEventListener("click", () => {
  numberOfProducts++;
  document.querySelector(".numberOfProducts").textContent = numberOfProducts;
});

btnDecrease.addEventListener("click", () => {
  if (numberOfProducts > 0) {
    numberOfProducts--;
  }
  document.querySelector(".numberOfProducts").textContent = numberOfProducts;
});
/*Increasing and decreasing product count*/

/*Thumbnails selection*/
var selectedThumbnail = document.querySelector(".thumbnails > .selected");
const thumbnails = document.querySelectorAll(".thumbnails > div");

thumbnails.forEach((thumbnail) => {
  thumbnail.addEventListener("click", () => {
    console.log(selectedThumbnail);
    thumbnail.classList.add("selected");
    if (thumbnail != selectedThumbnail) {
      selectedThumbnail.classList.remove("selected");
    }
    selectedThumbnail = thumbnail;
    productImg.setAttribute("src", thumbnail.getAttribute("data-src"));
    popupImg.setAttribute("src", thumbnail.getAttribute("data-src"));
  });
});
/*Thumbnails selection*/

/* Cart displaying */
const checkout = document.querySelector(".checkout");
const cart = document.querySelector(".cart");
const itemContainer = document.querySelector(".cart .item");
const item = document.querySelector(".cart .item .row");
itemSumPrice = sessionStorage.getItem("itemSumPrice");
const btnAddToCart = document.querySelector(".add-to-cart");
const cartIcon = document.querySelector("#cart-icon");
const btnCheckout = document.querySelector(".btn-checkout");
btnAddToCart.addEventListener("click", () => {
  numberOfItems += numberOfProducts;
  sessionStorage.setItem("numberOfItems", numberOfItems);
  itemSumPrice = numberOfItems * 125;
  sessionStorage.setItem("itemSumPrice", itemSumPrice);
  itemSumPrice = Number(sessionStorage.getItem("itemSumPrice"));
  checkItemNumber();
  cart.style.display = "flex";
  document.querySelector("#numberOfItems").textContent = numberOfItems;
  document.querySelector("#itemSumPrice").textContent = `$${itemSumPrice}.00`;
});

cartIcon.addEventListener("click", () => {
  //Toggle cart
  if (cart.style.display != "flex") {
    cart.style.display = "flex";
  } else {
    cart.style.display = "none";
  }
});

checkItemNumber();

function checkItemNumber() {
  numberOfItems = Number(sessionStorage.getItem("numberOfItems"));
  if (numberOfItems == 0) {
    item.style.display = "none";
    itemContainer.innerHTML = "<p>Your cart is empty.</p>";
    itemContainer.classList.add("no-item");
    btnCheckout.style.display = "none";
    checkout.setAttribute("data-content", 0);
  } else {
    checkout.setAttribute("data-content", numberOfItems);
    btnCheckout.style.display = "block";
    itemContainer.classList.remove("no-item");
    item.style.display = "flex";
    itemContainer.innerHTML = `
        <div class="row">
            <div class="item-image"></div>
            <div class="column">
              <div class="item-title">Fall Limited Edition Sneakers</div>
              <div class="item-quantity">($125.00 x <span id="numberOfItems">${numberOfItems}</span>) <span
                  id="itemSumPrice">$${itemSumPrice}.00</span></div>
            </div>
            <svg id="delete" width="14" height="16" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
              <defs>
                <path
                  d="M0 2.625V1.75C0 1.334.334 1 .75 1h3.5l.294-.584A.741.741 0 0 1 5.213 0h3.571a.75.75 0 0 1 .672.416L9.75 1h3.5c.416 0 .75.334.75.75v.875a.376.376 0 0 1-.375.375H.375A.376.376 0 0 1 0 2.625Zm13 1.75V14.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 1 14.5V4.375C1 4.169 1.169 4 1.375 4h11.25c.206 0 .375.169.375.375ZM4.5 6.5c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Zm3 0c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Zm3 0c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Z"
                  id="a" />
              </defs>
              <use fill="#C3CAD9" fill-rule="nonzero" xlink:href="#a" />
            </svg>
            </div>
        </div>
        `;
    //Delete item
    const deleteIcon = document.querySelector("#delete");
    deleteIcon.addEventListener("click", () => {
      sessionStorage.setItem("numberOfItems", 0);
      checkItemNumber();
    });
  }
}
/* Cart displaying */
