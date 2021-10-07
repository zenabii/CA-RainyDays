var sumTotal = 0;
const checkoutQuantity = document.querySelector("#quantity");
const cartProducts = document.querySelector("#cartProducts");
const cartEmpty = document.querySelector(".contact-press-empty")
var cartContent = JSON.parse(localStorage.getItem("cartContent") || "[]");
const continueShopping = document.querySelector(".empty_cart");

function getCartContent() {
    if (cartContent) { 
        cartProducts.innerHTML = ``
        sumTotal = 0;
        for (const key in cartContent) {
            if (Object.hasOwnProperty.call(cartContent, key)) {
                const product = cartContent[key];
                sumTotal += parseInt(product.prices.price);
                const output = `
                <div>
                    <img src="${product.images[0].src}" alt="purchased product" class="cartJacket">
                    <h5 id="productTitle">${product.name}</h5>
                </div>
                `;
                cartProducts.innerHTML += output;
            }
        }
        if (checkoutQuantity) {
            checkoutQuantity.innerHTML = cartContent.length + " artikler";
            const total = document.querySelector("#total");
            total.innerHTML = sumTotal + " kr";   
        }
    }
}

getCartContent();

function emptyCart() {
    localStorage.removeItem("cartContent");
    cartContent = [];
    getCartContent();
    updateCartCount();
}

if (cartEmpty) {
    cartEmpty.onclick = emptyCart
}
if (continueShopping) {
    continueShopping.onclick = emptyCart

}

