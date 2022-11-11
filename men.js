const baseUrl =
  "https://stoicmedia.no/cross-course/wp-json/wc/v3/products?consumer_key=ck_ee54b6d16a6371de23d6c83d1c28d514d3bdc101&consumer_secret=cs_f8f386698e53ca286404328bc0b76aec6dd18246&per_page=20&orderby=title&order=asc";
const productContainer = document.querySelector(".jacket-list");
productContainer.innerHTML = "";

async function getProducts(url) {
  const response = await fetch(url);
  const products = await response.json();
  console.log(products);
  products.forEach(function (product) {
    if (product.categories[0].slug === "mens") {
      productContainer.innerHTML += `
    <div>
    <a href="productspecific.html?id=${product.id}"><img src="${product.images[0].src}" alt="Image of a jacket" class="jacket-image" /></a>
    <p>${product.name}</p>
    <p>${product.price_html}</p>
    </div>`;
    }
  });
}

getProducts(baseUrl);
