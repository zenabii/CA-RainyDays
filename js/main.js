const cartCounter = document.querySelector("#cartCount");

function updateCartCount(){
    var cartContent = JSON.parse(localStorage.getItem("cartContent") || "[]");
    cartCounter.innerHTML = cartContent.length
}

updateCartCount();

