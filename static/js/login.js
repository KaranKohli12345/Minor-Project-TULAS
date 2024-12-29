let loginForm = document.querySelector('.login-form');
let loginButton = document.querySelector('#login-button');
let closeButton = document.querySelector('.close');

loginButton.addEventListener('click', (e) => {
    loginForm.style.display = 'flex';
})

closeButton.addEventListener('click', (e) => {
    loginForm.style.display = 'none';
})


let signupForm = document.querySelector('.signup-form');
let signupButton = document.querySelector('#signup-button');
let signupCloseButton = document.querySelector('.close_');

signupButton.addEventListener('click', (e) => {
    signupForm.style.display = 'flex';
})

signupCloseButton.addEventListener('click', (e) => {
    signupForm.style.display = 'none';
})
