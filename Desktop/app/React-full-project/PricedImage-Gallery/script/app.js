document.addEventListener('DOMContentLoaded', () => {
    fetchProducts();

    const loginModal = document.getElementById('login-modal');
    const registerModal = document.getElementById('register-modal');
    const loginBtn = document.getElementById('login-btn');
    const registerBtn = document.getElementById('register-btn');
    const searchBar = document.getElementById('search-bar');
    const closeBtns = document.getElementsByClassName('close');

    loginBtn.addEventListener('click', () => {
        loginModal.style.display = 'block';
    });

    registerBtn.addEventListener('click', () => {
        registerModal.style.display = 'block';
    });

    Array.from(closeBtns).forEach(btn => {
        btn.addEventListener('click', () => {
            closeModal(btn.parentElement.parentElement.id);
        });
    });

    window.onclick = (event) => {
        if (event.target.classList.contains('modal')) {
            event.target.style.display = 'none';
        }
    };

    searchBar.addEventListener('input', (e) => {
        const searchTerm = e.target.value.toLowerCase();
        const products = document.querySelectorAll('.product');
        products.forEach(product => {
            const title = product.querySelector('h3').textContent.toLowerCase();
            if (title.includes(searchTerm)) {
                product.style.display = '';
            } else {
                product.style.display = 'none';
            }
        });
    });

    document.getElementById('login-form').addEventListener('submit', handleLogin);
    document.getElementById('register-form').addEventListener('submit', handleRegister);
});

function fetchProducts() {
    fetch('http://localhost:3000/products')
        .then(response => response.json())
        .then(products => displayProducts(products))
        .catch(error => console.error('Error fetching products:', error));
}

function displayProducts(products) {
    const productContainer = document.getElementById('product-container');
    productContainer.innerHTML = '';

    products.forEach(product => {
        const productDiv = document.createElement('div');
        productDiv.className = 'product';
        productDiv.innerHTML = `
            <img src="${product.image}" alt="${product.title}" width="100" height="100">
            <h3>${product.title}</h3>
        `;
        productDiv.addEventListener('click', () => showProductDetails(product));
        productContainer.appendChild(productDiv);
    });
}

function showProductDetails(product) {
    const modal = document.getElementById('product-modal');
    document.getElementById('modal-image').src = product.image;
    document.getElementById('modal-title').textContent = product.title;
    document.getElementById('modal-description').textContent = product.description;
    document.getElementById('modal-price').textContent = `$${product.price}`;

    modal.style.display = 'block';
}

function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    modal.style.display = 'none';
}

/**
 * Handles the login form submission.
 * Prevents default form submission behavior and logs the username and password.
 * @param {Event} event - The submit event object.
 */
function handleLogin(event) {
    event.preventDefault();
    const username = document.getElementById('login-username').value;
    const password = document.getElementById('login-password').value;
    // Implement login logic (to be added)
    console.log(`Logging in with username: ${username} and password: ${password}`);
    closeModal('login-modal');
}

/**
 * Handles the register form submission.
 * Prevents default form submission behavior and logs the username and password.
 * @param {Event} event - The submit event object.
 */
function handleRegister(event) {
    event.preventDefault();
    const username = document.getElementById('register-username').value;
    const password = document.getElementById('register-password').value;
    // Implement register logic (to be added)
    console.log(`Registering with username: ${username} and password: ${password}`);
    closeModal('register-modal');
}
