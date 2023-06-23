const inputs = document.querySelectorAll(".input-field");
const toggle_btn = document.querySelectorAll(".toggle");
const main = document.querySelector("main");
const bullets = document.querySelectorAll(".bullets span");
const images = document.querySelectorAll(".image");

inputs.forEach((inp) => {
  inp.addEventListener("focus", () => {
    inp.classList.add("active");
  });
  inp.addEventListener("blur", () => {
    if (inp.value != "") return;
    inp.classList.remove("active");
  });
});

toggle_btn.forEach((btn) => {
  btn.addEventListener("click", () => {
    main.classList.toggle("sign-up-mode");
  });
});

function moveSlider() {
  let index = this.dataset.value;

  let currentImage = document.querySelector(`.img-${index}`);
  images.forEach((img) => img.classList.remove("show"));
  currentImage.classList.add("show");

  const textSlider = document.querySelector(".text-group");
  textSlider.style.transform = `translateY(${-(index - 1) * 2.2}rem)`;

  bullets.forEach((bull) => bull.classList.remove("active"));
  this.classList.add("active");
}

bullets.forEach((bullet) => {
  bullet.addEventListener("click", moveSlider);
});

// Get the forms and the relevant input fields
const signInForm = document.querySelector('.sign-in-form');
const signUpForm = document.querySelector('.sign-up-form');
const signInEmailInput = signInForm.querySelector('input[type="text"]');
const signInPasswordInput = signInForm.querySelector('input[type="password"]');
const signUpNameInput = signUpForm.querySelector('input[name="name"]');
const signUpEmailInput = signUpForm.querySelector('input[type="email"]');
const signUpPasswordInput = signUpForm.querySelector('input[type="password"]');

// Handle sign-in form submission
signInForm.addEventListener('submit', (event) => {
  event.preventDefault(); // Prevent the form from submitting normally

  // Get the entered email and password
  const email = signInEmailInput.value;
  const password = signInPasswordInput.value;

  // Perform sign-in authentication or any necessary actions
  // Replace this with your actual sign-in logic
  console.log('Sign In:', email, password);

  // Reset the form inputs
  signInEmailInput.value = '';
  signInPasswordInput.value = '';
});

// Handle sign-up form submission
signUpForm.addEventListener('submit', (event) => {
  event.preventDefault(); // Prevent the form from submitting normally

  // Get the entered name, email, and password
  const name = signUpNameInput.value;
  const email = signUpEmailInput.value;
  const password = signUpPasswordInput.value;

  // Perform sign-up authentication or any necessary actions
  // Replace this with your actual sign-up logic
  console.log('Sign Up:', name, email, password);

  // Reset the form inputs
  signUpNameInput.value = '';
  signUpEmailInput.value = '';
  signUpPasswordInput.value = '';
});
