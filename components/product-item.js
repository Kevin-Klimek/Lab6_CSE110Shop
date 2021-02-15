// product-item.js

class ProductItem extends HTMLElement {
  constructor(product) {
    super();
    this.product = product;
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

    // this.getAttribute("attName");

    // product functionality
    let shadow = this.attachShadow({mode: "open"});

    // Create list item
    let li = document.createElement("li");
    li.setAttribute("class","product");

    // Create image element
    let img = document.createElement("img");
    img.setAttribute("src",this.getAttribute("image"));
    img.setAttribute("alt",this.getAttribute("title"));
    img.setAttribute("width","200");

    // Create first p element
    let p1 = document.createElement("p");
    p1.setAttribute("class","title");
    let p1text = document.createTextNode(this.getAttribute("title"));
    p1.appendChild(p1text);

    // Create second p element
    let p2 = document.createElement("p");
    p2.setAttribute("class","price");
    let p2text = document.createTextNode(this.getAttribute("price"));
    p2.appendChild(p2text);

    // Create button
    let button = document.createElement("button");
    let btext = document.createTextNode("Add to Cart");
    button.appendChild(btext);
    button.addEventListener("click", function() {
      // if btext = add, change to remove from cart and add 1 to count. otherwise flip back and sub 1
    });

    // Add image, p1, p2, button to the list item
    li.appendChild(img);
    li.appendChild(p1);
    li.appendChild(p2);
    li.appendChild(button);

    shadow.appendChild(li);
  }
}

customElements.define('product-item', ProductItem);