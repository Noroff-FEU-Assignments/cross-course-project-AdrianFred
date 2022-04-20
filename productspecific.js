const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");
console.log(id);

const baseUrl = "https://stoicmedia.no/cross-course/wp-json/wc/store/products/";
const productContainer = document.querySelector(".productlayout");
productContainer.innerHTML = "";

async function getProducts(url) {
  const response = await fetch(url);
  const product = await response.json();
  console.log(product);
  productContainer.innerHTML += `
  <div><img src="${product.images[0].src}" alt="jacketpicture"/></div>
  <div class="producttext">
    <h2>${product.name}</h2>
    <p>${product.description}</p>
    <p>${product.price_html}</p>
    <div class="selectionbox">
      <select name="size" id="size">
        <option selected disabled>Choose a size</option>
        <option value="small">Small</option>
        <option value="medium">Medium</option>
        <option value="large">Large</option>
        <option value="xlarge">Extra Large</option>
        <option value="xxlarge">Extra Extra Large</option>
      </select>
    </div>
    <div class="Cartbutton">
      <div class="ATCbutton">
        <a href="checkout.html?id=${product.id}"><i class="fas fa-shopping-cart">Add to cart</i></a>
      </div>
    </div>
  </div>`;
}

getProducts(baseUrl + id);
