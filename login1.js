// script.js

let isLoggedIn = false;
let accountDetails = {
    email: 'example@example.com',
    name: 'John Doe'
};

document.querySelector('.login-btn').addEventListener('click', () => {
    document.querySelector('.login-form').style.display = 'block';
});

document.querySelector('.logout-btn').addEventListener('click', () => {
    isLoggedIn = false;
    document.querySelector('.logout-btn').classList.add('hidden');
    document.querySelector('.login-btn').classList.remove('hidden');
});

document.querySelector('.account-btn').addEventListener('click', () => {
    if (isLoggedIn) {
        document.querySelector('.account-details').style.display = 'block';
        document.querySelector('#account-email').textContent = accountDetails.email;
        document.querySelector('#account-name').textContent = accountDetails.name;
    } else {
        alert('You can sign ');
    }
});

document.querySelector('.about-btn').addEventListener('click', () => {
    window.location.href = 'about.html'; // Replace with the URL of the new page
});
