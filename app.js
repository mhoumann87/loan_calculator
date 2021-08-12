// Get "access" to the input fields on the page
const amount = document.querySelector('#amount');
const startup = document.querySelector('#startup');
const running = document.querySelector('#running');
const runningFeq = document.querySelector('#runningFeq');
const years = document.querySelector('#years');
const months = document.querySelector('#months');
const interest = document.querySelector('#interest');
const interestFeq = document.querySelector('#interestFeq');

// Set a variable for checking if all data is valid
let buttonDisabled = true;

// Get the output fields for the result
const totalWithFee = document.querySelector('#total-with-fees');

const allValid = {
  amount: false,
  startup: false,
  duration: false,
  interest: false,
};

const values = {
  amount: 0,
  startup: 0,
  running: 0,
  runningFeq: 0,
  years: 0,
  months: 0,
  interest: 0,
  interestFeq: 0,
};

/*
 * Because running fee isn't always on loans, we set a zero from the beginning
 */
running.value = 0;

/*
 * Function to validate our input. We only check for if there are an input
 * and that input is a number.
 */
const validateInput = input => input.length > 0 && !isNaN(parseInt(input));

/* Function to calculate monthly payments */
const monthlyPayment = () => {};

/* Function to calculate total payback */
const totalPayback = () => {};

/* Calculate Annual Percentage Rate */
const apr = () => {};

/*
 * Function to check all inputs are valid, and enable the button
 */
const checkValidity = () => {
  const allItemsValid = Object.values(allValid).every(item => item === true);
  //console.log(allItemsValid);
  allItemsValid ? (buttonDisabled = false) : (buttonDisabled = true);
  disableButton();
};

/*
 * Function to add red border in value not is valid
 */
const markError = event => {
  const elm = document.querySelector(`#${event.target.id}`);
  const isValid = validateInput(event.target.value);

  if (event.target.id === 'years' || event.target.id === 'months') {
    if (validateInput(years.value) || validateInput(months.value)) {
      years.classList.remove('error');
      months.classList.remove('error');
      allValid.duration = true;
    } else {
      years.classList.add('error');
      months.classList.add('error');
    }
  } else {
    if (isValid) {
      elm.classList.remove('error');
      allValid[event.target.id] = true;
    } else {
      elm.classList.add('error');
    }
  }
  checkValidity();
};

const formSubmit = e => {
  e.preventDefault();
  if (years.value === '') {
    years.value = 0;
  }
  if (months.value === '') {
    months.value = 0;
  }
  const values = {
    amount: parseInt(amount.value),
    startup: parseInt(startup.value),
    running: parseInt(running.value),
    runningFeq: parseInt(runningFeq.value),
    years: parseInt(years.value),
    months: parseInt(months.value),
    interest: parseInt(interest.value),
    interestFeq: parseInt(interestFeq.value),
  };

  console.log(values);
};

/*
 * Disable the button if isValid is false
 */
const disableButton = () =>
  (document.querySelector('button').disabled = buttonDisabled);

/*
 * Get all input fields where the type is text, and add an event listener to them,
 * and run the markError function when focus in removed from them
 */
document.querySelectorAll('input[type=text]').forEach(input => {
  input.addEventListener('blur', markError);
});

/*
 * if user tabs away from the select input, run the check for the button
 */
// feq.addEventListener('blur', disableButton);

/*
 * Start everything when the form is submitted
 */
document.querySelector('form').addEventListener('submit', formSubmit);

disableButton();
