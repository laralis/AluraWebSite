import * as axios from "https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js";
const buttonMenu = document.querySelector(".menu_mobile");
const menuMobile = document.querySelector(".menu-mobile-over-screen");
const buttonCloseMenuMobile = document.querySelector(".close_menu_mobile");
const buttonCloseShoppingCart = document.querySelector(".close-shopping-cart");
const productsContainer = document.querySelector(".Most_Wanted_container");

const shoppingCart = document.querySelector(".shopping-cart");
const buttonShoppingCart = document.querySelector(".add-to-card");
buttonShoppingCart.addEventListener("click", toggleShoppingCart);
buttonMenu.addEventListener("click", toggleMenu);
buttonCloseMenuMobile.addEventListener("click", toggleMenu);
buttonCloseShoppingCart.addEventListener("click", toggleShoppingCart);
function toggleMenu() {
  menuMobile.classList.toggle("visible");
}
function toggleShoppingCart() {
  shoppingCart.classList.toggle("visible");
}

async function getApi() {
  try {
    const response = await fetch("http://localhost:3000/products", {
      referrer: "",
    });
    if (!response.ok) {
      throw new Error(`Erro HTTP! status: ${response.status}`);
    }
    const products = await response.json();

    productsContainer.innerHTML = products
      .map(
        (product) => `
      <div class="border">
        <div class="product center">
          <img src="${product.urlImagem}" alt="${product.nome}" referrerpolicy="no-referrer"/>
          <span class="tag">${product.tag}</span>
          <h3>${product.nome}</h3>
          <p>${product.descricao}</p>
          <span class="price"><strong>R$ ${product.preco}</strong>,00</span>
        </div>
      </div>
    `
      )
      .join("");
  } catch (error) {
    productsContainer.innerHTML =
      "<strong class='center'>Erro ao consumir dados da api </strong>";
    console.error("Falha ao buscar produtos:", error);
  }
}

const products = getApi();
