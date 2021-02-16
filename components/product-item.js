// product-item.js

class ProductItem extends HTMLElement {
  constructor() {
    super();
    /*
    const product0 {
      title:        "title text"    //String
      price:        priceNumber     //Number
      description:  "aaaaa"         //String
      category:     "men-clothing"  //String
      image:        "imageUrl.png"  //String
    };

    <!-- Sample Product -->
                <!-- li class="product">
                    <img src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg" alt="Fjallraven - Foldstack No. 1 Backpack, Fits 15 Laptops" width=200>
                    <p class="title">Fjallraven - Foldstack No. 1 Backpack, Fits 15 Laptops</p>
                    <p class="price">$109.95</p>
                    <button onclick="alert('Added to Cart!')">Add to Cart</button>
                </li -->

    */

    // product functionality
    let shadow = this.attachShadow({mode: "open"});

    // Create list item
    let li = document.createElement("li");
    li.setAttribute("class","product");

    // Create image element
    let img = document.createElement("img");
    img.setAttribute("id","imgID")
    img.setAttribute("width","200");

    // Create first p element
    let p1 = document.createElement("p");
    p1.setAttribute("id","p1");
    p1.setAttribute("class","title");

    // Create second p element
    let p2 = document.createElement("p");
    p2.setAttribute("id","p2");
    p2.setAttribute("class","price");

    // Create button
    let button = document.createElement("button");
    button.setAttribute("id","buttonID");
    button.setAttribute("prodID","-1");   // Embed product id as button attribute, can't figure out how to make class variables work here for the life of me. Set this later with setID().
    let btext = document.createTextNode("Add to Cart");
    button.appendChild(btext);
    button.addEventListener("click", function() {
      let counter = document.getElementById("cart-count");
      if (button.innerHTML == "Add to Cart") {
        counter.innerHTML = parseInt(counter.innerHTML) + 1;
        button.innerHTML = "Remove from Cart";
        localStorage.setItem(button.getAttribute("prodID"), "0");
      }
      else {
        counter.innerHTML = parseInt(counter.innerHTML) - 1;
        button.innerHTML = "Add to Cart";
        localStorage.removeItem(button.getAttribute("prodID"));
      }
    });

    // Add image, p1, p2, button to the list item
    li.appendChild(img);
    li.appendChild(p1);
    li.appendChild(p2);
    li.appendChild(button);

    // Style the shadow dom
    let style = document.createElement("style");
    style.textContent = `
    .price {
      color: green;
      font-size: 1.8em;
      font-weight: bold;
      margin: 0;
    }
    
    .product {
      align-items: center;
      background-color: white;
      border-radius: 5px;
      display: grid;
      grid-template-areas: 
      'image'
      'title'
      'price'
      'add';
      grid-template-rows: 67% 11% 11% 11%;
      height: 450px;
      filter: drop-shadow(0px 0px 6px rgb(0,0,0,0.2));
      margin: 0 30px 30px 0;
      padding: 10px 20px;
      width: 200px;
    }
    
    .product > button {
      background-color: rgb(255, 208, 0);
      border: none;
      border-radius: 5px;
      color: black;
      justify-self: center;
      max-height: 35px;
      padding: 8px 20px;
      transition: 0.1s ease all;
    }
    
    .product > button:hover {
      background-color: rgb(255, 166, 0);
      cursor: pointer;
      transition: 0.1s ease all;
    }
    
    .product > img {
      align-self: center;
      justify-self: center;
      width: 100%;
    }
    
    .title {
      font-size: 1.1em;
      margin: 0;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
    
    .title:hover {
      font-size: 1.1em;
      margin: 0;
      white-space: wrap;
      overflow: auto;
      text-overflow: unset;
    }`;

    // Add style and list item to shadow dom
    shadow.appendChild(style);
    shadow.appendChild(li);
  }

  // Sets image attributes
  setImgAttribute(src, alt) {
    let img = this.shadowRoot.getElementById("imgID");
    img.setAttribute("src",src);
    img.setAttribute("alt",alt);
  }

  // Sets first paragraph attributes
  setP1Attribute(title) {
    this.shadowRoot.getElementById("p1").innerHTML = title;
  }

  // Sets second paragraph attributes
  setP2Attribute(price) {
    this.shadowRoot.getElementById("p2").innerHTML = "$" + price;
  }

  // Toggles the button to "save" previous session's cart
  toggleButton() {
    let counter = document.getElementById("cart-count");
    counter.innerHTML = parseInt(counter.innerHTML) + 1;
    this.shadowRoot.getElementById("buttonID").innerHTML = "Remove from Cart";
  }
  
  // Sets the product id, and checks if the id was previously in the cart.
  setID(id) {
    this.shadowRoot.getElementById("buttonID").setAttribute("prodID", id);
    if (localStorage.getItem(id)) {
      this.toggleButton();
    }
  }
}

customElements.define('product-item', ProductItem);