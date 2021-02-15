// Script.js

/** TODO: CHANGE CSS/HTML FILE REFERENCES BACK WHEN DONE**/

window.addEventListener('DOMContentLoaded', () => {
  // check if localstorage already has the data
  if (!localStorage.getItem("products")) {
    fetch("https://fakestoreapi.com/products")
      .then(response => response.json())
      .then(data => localStorage.setItem("products", JSON.stringify(data)))
      .then(createProducts());
    }
  else {
    createProducts();
  }
});

function createProducts() {
  let base = document.getElementById("product-list");
  let products = JSON.parse(localStorage.getItem("products"));
  for(const product of products) {
    let productElement = document.createElement("product-item");
    productElement.setImgAttribute(product.image, product.title);
    productElement.setP1Attribute(product.title);
    productElement.setP2Attribute(product.price);
    base.appendChild(productElement);
  }
}