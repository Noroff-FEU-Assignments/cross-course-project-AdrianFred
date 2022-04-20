const baseUrl = "https://stoicmedia.no/cross-course/wp-json/wc/store/products";
const productContainer = document.querySelector(".jacket-list");
productContainer.innerHTML = "";

async function getProducts(url) {
  const response = await fetch(url);
  const products = await response.json();
  console.log(products);
  products.forEach(function (product) {
    productContainer.innerHTML += `
    <div>
    <a href="productspecific.html?id=${product.id}"><img src="${product.images[0].src}" alt="Image of a jacket" class="jacket-image" /></a>
    <p>${product.name}</p>
    <p>${product.price_html}</p>
    </div>`;
  });
}

getProducts(baseUrl);
