const baseUrl = "https://ca.zenabi.no/wp-json/wc/store/products";
const jackets = document.querySelector(".jackets");
const perPage = document.querySelector(".per-page-selection");
const categories = document.querySelectorAll(".categories");

async function getProducts(url) {
    const response = await fetch(url);
    const products = await response.json();
    products.forEach(function (product) {
        jackets.innerHTML += `
        <div class="jacket-preview">
        <div class="jacket-image"><img src="${product.images[0].src}" class="imgproduct"></div>
        <h2 class="h2-jacket">${product.name}</h2>
        <a>${product.description}</a>
        <h2 class="h2-jacket">${product.prices.price} ${product.prices.currency_code}</h2>
        
        </div>
        `

    });

}

getProducts(baseUrl);


perPage.onchange = function (event) {

    const newUrl = baseUrl + `?per_page=${event.target.value}`;
    jackets.innerHTML = "";
    getProducts(newUrl);
}

categories.forEach(function (category) {
    category.onclick = function (event) {
        let newUrl;
        if (event.target.id === "Featured") {
            newUrl = baseUrl + "?featured=true";
        }
        else {
            const categoryChosen = event.target.value;
            newUrl = baseUrl + `?category=${categoryChosen}`
        }
        jackets.innerHTML = "";
        getProducts(newUrl);
    }
})