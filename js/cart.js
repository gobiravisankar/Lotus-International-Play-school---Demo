/* ========================================
   VOGUEVA CART SYSTEM
   LocalStorage Cart
======================================== */

document.addEventListener("DOMContentLoaded", () => {

    initializeCart();

});


/* ========================================
   INITIALIZE
======================================== */

function initializeCart() {

    updateCartCount();

    bindAddToCartButtons();

}


/* ========================================
   GET CART
======================================== */

function getCart() {

    return JSON.parse(
        localStorage.getItem("voguevaCart")
    ) || [];

}


/* ========================================
   SAVE CART
======================================== */

function saveCart(cart) {

    localStorage.setItem(
        "voguevaCart",
        JSON.stringify(cart)
    );

}


/* ========================================
   ADD TO CART
======================================== */

function addToCart(product) {

    const cart = getCart();

    const existingItem =
        cart.find(item =>
            item.name === product.name
        );

    if (existingItem) {

        existingItem.quantity += 1;

    } else {

        cart.push({

            ...product,

            quantity: 1

        });

    }

    saveCart(cart);

    updateCartCount();

    showCartNotification(
        `${product.name} added to cart`
    );

}


/* ========================================
   REMOVE FROM CART
======================================== */

function removeFromCart(productName) {

    let cart = getCart();

    cart = cart.filter(item =>
        item.name !== productName
    );

    saveCart(cart);

    updateCartCount();

}


/* ========================================
   UPDATE COUNT
======================================== */

function updateCartCount() {

    const cart = getCart();

    const totalItems =
        cart.reduce(
            (total, item) =>
                total + item.quantity,
            0
        );

    const cartButton =
        document.querySelector(
            ".cart-count"
        );

    if (cartButton) {

        cartButton.textContent =
            totalItems;

    }

}


/* ========================================
   BIND BUTTONS
======================================== */

function bindAddToCartButtons() {

    const buttons =
        document.querySelectorAll(
            ".add-to-cart"
        );

    buttons.forEach(button => {

        button.addEventListener(
            "click",
            () => {

                const card =
                    button.closest(
                        ".product-card"
                    );

                if (!card) return;

                const name =
                    card.querySelector("h3")
                    ?.textContent
                    ?.trim() || "Product";

                const price =
                    card.querySelector(".price")
                    ?.textContent
                    ?.trim() || "$0";

                const image =
                    card.querySelector("img")
                    ?.src || "";

                addToCart({

                    name,
                    price,
                    image

                });

            }
        );

    });

}


/* ========================================
   CART NOTIFICATION
======================================== */

function showCartNotification(message) {

    const existing =
        document.querySelector(
            ".cart-toast"
        );

    if (existing) {

        existing.remove();

    }

    const toast =
        document.createElement("div");

    toast.className =
        "cart-toast";

    toast.textContent =
        message;

    document.body.appendChild(
        toast
    );

    setTimeout(() => {

        toast.classList.add("show");

    }, 50);

    setTimeout(() => {

        toast.classList.remove("show");

        setTimeout(() => {

            toast.remove();

        }, 300);

    }, 2500);

}


/* ========================================
   CLEAR CART
======================================== */

function clearCart() {

    localStorage.removeItem(
        "voguevaCart"
    );

    updateCartCount();

}


/* ========================================
   DEBUG HELPERS
======================================== */

window.voguevaCart = {

    getCart,
    addToCart,
    removeFromCart,
    clearCart

};


/* ========================================
   CONSOLE
======================================== */

console.log(
    "%cVOGUEVA Cart Loaded",
    "color:#c9a227;font-size:14px;font-weight:bold;"
);
