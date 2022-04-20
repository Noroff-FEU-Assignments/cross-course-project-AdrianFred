const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");
console.log(id);

const baseUrl = "https://stoicmedia.no/cross-course/wp-json/wc/store/products/";
const productContainer = document.querySelector(".checkoutjacket");
productContainer.innerHTML = "";

async function getProducts(url) {
  const response = await fetch(url);
  const product = await response.json();
  console.log(product);
  productContainer.innerHTML += `
    <img src="${product.images[0].src}" alt="checkoutjacketimg" />
    <h4>${product.name} x 1</h4>
    <p>${product.price_html}</p>
    `;
}

getProducts(baseUrl + id);
