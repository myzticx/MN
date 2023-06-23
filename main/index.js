// Get references to the form elements
const signInForm = document.querySelector('.sign-in-form');
const signUpForm = document.querySelector('.sign-up-form');
const nameInput = document.getElementById('name');
const passwordInput = document.getElementById('password');
const signInBtn = document.getElementById('signInBtn');
const signUpBtn = document.getElementById('signUpBtn');

// Function to handle sign-in form submission
signInForm.addEventListener('submit', (event) => {
  event.preventDefault(); // Prevent form submission
  const name = nameInput.value;
  const password = passwordInput.value;
  
  // Perform validation
  if (name.trim() === '') {
    alert('Please enter your name.');
    return;
  }

  if (password.trim() === '') {
    alert('Please enter your password.');
    return;
  }

  // Perform sign-in logic here
  // You can make an AJAX request to a server-side endpoint or handle it client-side
  console.log('Sign in:', name, password);
});

// Function to handle sign-up form submission
signUpForm.addEventListener('submit', (event) => {
  event.preventDefault(); // Prevent form submission
  const name = nameInput.value;
  const password = passwordInput.value;

  // Perform validation
  if (name.trim() === '') {
    alert('Please enter your name.');
    return;
  }

  if (password.trim() === '') {
    alert('Please enter your password.');
    return;
  }

  // Perform sign-up logic here
  // You can make an AJAX request to a server-side endpoint or handle it client-side
  console.log('Sign up:', name, password);
});

const pages = document.querySelectorAll('.page');

function switchPage(index) {
  pages.forEach((page) => {
    page.classList.remove('active');
  });
  pages[index].classList.add('active');
}

const buttons = document.querySelectorAll('button');

buttons.forEach((button, index) => {
  button.addEventListener('click', () => {
    switchPage(index);
  });
});

const greeting = document.querySelector('.greeting');

window.onload = () => {
    if(!sessionStorage.name){
        location.href = '/login';
    } else{
        greeting.innerHTML = `hello ${sessionStorage.name}`;
    }
}

const logOut = document.querySelector('.logout');

logOut.onclick = () => {
    sessionStorage.clear();
    location.reload();
}