var cart = [];

var purchaseForm = document.querySelector("#formProduct");
var cartCount = document.querySelector("#cartCount");
var checkoutQuantity = document.querySelector("#quantity");

const cartProducts = document.querySelector("#cartProducts");

loadCart();

if (purchaseForm) {
    purchaseForm.addEventListener("submit", addToCart);
}

function addToCart(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const product = {
        name: formData.get("name"),
        price: formData.get("price"),
        sizes: formData.get("sizes"),
        color: formData.get("color"),
        image: formData.get("image")
    }
    cart.push(product);
    saveCart();
}

function getCartQuantity() {
    if (cart.length > 0) {
        cartCount.innerHTML = cart.length;
    } else {
        cartCount.innerHTML = "";
    }
}

function saveCart() {
    localStorage.setItem("cart", JSON.stringify(cart));
    getCartQuantity();
}

function loadCart() {
    var savedCart = localStorage.getItem("cart");
    if (savedCart) {
        cart = JSON.parse(savedCart);
    }
    getCartQuantity();
}

if (checkoutQuantity || cartProducts) {
    var sumTotal = 0;
    for (const key in cart) {
        if (Object.hasOwnProperty.call(cart, key)) {
            const product = cart[key];
            sumTotal += parseInt(product.price);
            const output = `
            <div>
                <img src="${product.image}" alt="purchased product">
                <h5>${product.name}</h5>
            </div>
            `;
            cartProducts.innerHTML += output;
        }
    }
}

if (checkoutQuantity) {
    checkoutQuantity.innerHTML = cart.length + " artikler";
    const total = document.querySelector("#total");
    total.innerHTML = sumTotal + " kr";
}