const buttonMenu = document.querySelector(".menu_mobile");
const menuMobile = document.querySelector(".menu-mobile-over-screen");
const buttonCloseMenuMobile = document.querySelector(".close_menu_mobile");
const buttonCloseShoppingCart = document.querySelector(".close-shopping-cart");

const shoppingCart = document.querySelector(".shopping-cart");
const buttonShoppingCart = document.querySelector(".add-to-card");
buttonShoppingCart.addEventListener("click", toggleShoppingCart);
buttonMenu.addEventListener("click", toggleMenu);
buttonCloseMenuMobile.addEventListener("click", toggleMenu);
buttonCloseShoppingCart.addEventListener("click", toggleShoppingCart)
function toggleMenu() {
  menuMobile.classList.toggle("visible");
}
function toggleShoppingCart() {
  shoppingCart.classList.toggle("visible");
}
