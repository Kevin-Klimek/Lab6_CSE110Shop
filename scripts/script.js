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
  //console.log("products created");
  let products = JSON.parse(localStorage.getItem("products"));
  for(var product of products) {
    ;
  }
}