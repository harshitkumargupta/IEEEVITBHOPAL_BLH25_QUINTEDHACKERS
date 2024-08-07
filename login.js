// Add event listener to seller login button
const sellerLoginBtn = document.getElementById("seller-login-btn");
sellerLoginBtn.addEventListener("click", () => {
    const sellerForm = document.getElementById("seller-form");
    sellerForm.classList.remove("hidden");
});