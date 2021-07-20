// Get "access" to the input fields on the page
const amount = document.querySelector('#amount');
const startup = document.querySelector('#startup');
const years = document.querySelector('#years');
const months = document.querySelector('#months');
const interest = document.querySelector('#interest');
const feq = document.querySelector('#feq');

// Set a variable for checking if all data is valid
let isValid = true;

const validateInput = input => input.length > 0 && !isNaN(parseInt(input));

// Function to add red border in value not is valid
const markError = event => {
  const elm = document.querySelector(`#${event.target.id}`);
  const isValid = validateInput(event.target.value);

  if (event.target.id === 'years' || event.target.id === 'months') {
  }

  isValid ? elm.classList.remove('error') : elm.classList.add('error');
};

const formSubmit = e => {
  e.preventDefault();
};

// Disable the button if isValid is false
const disableButton = () =>
  (document.querySelector('button').disabled = isValid);

// Check to see is the value is valid when focus is removed from an input field
amount.addEventListener('blur', markError);

/*
 * Get all input fields where the type is text, and add an event listener på them,
 * and run the markError function when focus in removed from them
 */
document.querySelectorAll('input[type=text]').forEach(input => {
  input.addEventListener('blur', markError);
});

// Start everything when the form is submitted
document.querySelector('form').addEventListener('submit', formSubmit);

disableButton();

/**
 * event => {
  console.log(event.target.id);
  /* if (!validateInput(amount.value.trim())) {
    amount.classList.add('error');
  } else {
    if (amount.classList.contains('error')) {
      amount.classList.remove('error');
    }
  } */
