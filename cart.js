// Get cart data from API or database
const cartItems = [
    {
        id: 1,
        name: "Product 1",
        price: 10.99,
        image: "product1.jpg"
    },
    {
        id: 2,
        name: "Product 2",
        price: 9.99,
        image: "product2.jpg"
    }
];

// Create cart item list dynamically
const cartItemsContainer = document.querySelector(".cart-items");

cartItems.forEach(cartItem => {
    const cartItemHTML = `
        <div class="cart-item">
            <img src="${cartItem.image}" alt="${cartItem.name}">
            <div class="cart-item-info">
                <h4>${cartItem.name}</h4>
                <p>$${cartItem.price}</p>
            </div>
        </div>
    `;
    cartItemsContainer.innerHTML += cartItemHTML;
});

// Update cart summary
const cartSummary = document.querySelector(".cart-summary");
const subtotal = cartItems.reduce((acc, item) => acc + item.price, 0);
cartSummary.querySelector("h3").textContent = `Subtotal: $${subtotal.toFixed(2)}`;