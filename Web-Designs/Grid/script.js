document.getElementById('ctaButton').addEventListener('click', function() {
    alert('Button clicked!');
});

// Modal logic
var loginModal = document.getElementById('loginModal');
var registerModal = document.getElementById('registerModal');

var loginLink = document.getElementById('loginLink');
var registerLink = document.getElementById('registerLink');

var closeLogin = document.getElementById('closeLogin');
var closeRegister = document.getElementById('closeRegister');

var openRegisterFromLogin = document.getElementById('openRegisterFromLogin');

// Hamburger menu logic
var hamburger = document.getElementById('hamburger');
var navMenu = document.getElementById('navMenu');

hamburger.onclick = function() {
    navMenu.classList.toggle('active');
    hamburger.classList.toggle('active');
}

// Open modals
loginLink.onclick = function(event) {
    event.preventDefault();
    loginModal.style.display = "block";
}

registerLink.onclick = function(event) {
    event.preventDefault();
    registerModal.style.display = "block";
}

closeLogin.onclick = function() {
    loginModal.style.display = "none";
}

closeRegister.onclick = function() {
    registerModal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == loginModal) {
        loginModal.style.display = "none";
    }
    if (event.target == registerModal) {
        registerModal.style.display = "none";
    }
}

// Link from login to register
openRegisterFromLogin.onclick = function(event) {
    event.preventDefault();
    loginModal.style.display = "none";
    registerModal.style.display = "block";
}

// Login form submission
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    loginModal.style.display = "none";
    loginLink.textContent = "Logout";
    loginLink.removeEventListener('click', loginLink.onclick);
    loginLink.onclick = function(event) {
        event.preventDefault();
        loginLink.textContent = "Login";
        loginLink.onclick = loginLink.onclick; // Re-attach the original login link onclick event
    }
});

// Register form submission
document.getElementById('registerForm').addEventListener('submit', function(event) {
    event.preventDefault();
    registerModal.style.display = "none";
});
