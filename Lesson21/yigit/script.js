const checkoutForm = document.getElementById('checkoutForm');

checkoutForm.addEventListener('submit', function (e){
    e.preventDefault();
    console.log(e.target[0].value, typeof e.target[0]);

    let formCorrect = true; 
    
 const emailInput = document.getElementById('email');
if (!validateEmail(emailInput.value, emailInput)) formCorrect = false;

const phoneInput = document.getElementById('phone');
if (!validatePhone(phoneInput.value, phoneInput)) formCorrect = false;

  const firstNameInput = document.getElementById('firstname');
if (!validateRequired(firstNameInput.value, firstNameInput, "First name cannot be empty.")) formCorrect = false;

const lastNameInput = document.getElementById('lastname');
if (!validateRequired(lastNameInput.value, lastNameInput, "Last name cannot be empty.")) formCorrect = false;

const addressInput = document.getElementById('address');
if (!validateRequired(addressInput.value, addressInput, "Address cannot be empty.")) formCorrect = false;

const cityInput = document.getElementById('city');
if (!validateRequired(cityInput.value, cityInput, "City cannot be empty.")) formCorrect = false;

const stateInput = document.getElementById('state');
if (!validateRequired(stateInput.value, stateInput, "State cannot be empty.")) formCorrect = false;

const zipInput = document.getElementById('zipcode');
if (!validateZip(zipInput.value, zipInput)) formCorrect = false;

const cardInput = document.getElementById('cardNumber');
if (!validateCardNumber(cardInput.value, cardInput)) formCorrect = false;

const expInput = document.getElementById('expDate');
if (!validateExpDate(expInput.value, expInput)) formCorrect = false;

const cvvInput = document.getElementById('cvv');
if (!validateCVV(cvvInput.value, cvvInput)) formCorrect = false;



   if (formCorrect) {
    checkoutForm.classList.add('hidden');
    document.getElementById('success').classList.remove('hidden');
    document.getElementById('success').innerHTML = `<p>Thank you! Your order has been placed successfully.</p>`;
  }
});




document.getElementById('email').addEventListener('change', (e) =>
  validateEmail(e.target.value, e.target)
);

document.getElementById('phone').addEventListener('change', (e) =>
  validatePhone(e.target.value, e.target)
);

document.getElementById('firstname').addEventListener('change', (e) =>
  validateRequired(e.target.value, e.target, "First name cannot be empty.")
);


document.getElementById('address').addEventListener('change', (e) =>
  validateRequired(e.target.value, e.target, "Address cannot be empty.")
);

document.getElementById('city').addEventListener('change', (e) =>
  validateRequired(e.target.value, e.target, "City cannot be empty.")
);

document.getElementById('state').addEventListener('change', (e) =>
  validateRequired(e.target.value, e.target, "State cannot be empty.")
);

document.getElementById('zipcode').addEventListener('change', (e) =>
  validateZip(e.target.value, e.target)
);

document.getElementById('cardNumber').addEventListener('change', (e) =>
  validateCardNumber(e.target.value, e.target)
);

document.getElementById('expDate').addEventListener('change', (e) =>
  validateExpDate(e.target.value, e.target)
);

document.getElementById('cvv').addEventListener('change', (e) =>
  validateCVV(e.target.value, e.target)
);


function validateRequired(value, element, message) {
  if (value.trim().length < 1) {
    showError(element, message);
    return false;
  } else {
    hideError(element);
    return true;
  }
}


function validateEmail(emailInput, element) {
  const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  if (emailInput.trim().length < 1) {
    showError(element, "E-mail cannot be empty");
    return false;
  } else if (!emailPattern.test(emailInput)) {
    showError(element, 'Please enter correct email address, e.g. email@example.com');
    return false;
  } else {
    hideError(element);
    return true;
  }
}

function validatePhone(phoneInput, element) { 
  const phonePattern = /^\+?\d(?:\s?\d){9,19}$/;

  if (phoneInput.trim().length < 1) {
    showError(element, 'Phone cannot be empty.');
    return false;
  } else if (!phonePattern.test(phoneInput)) {
    showError(element, 'Please enter correct phone number, e.g. 555 123 4567');
    return false;
  } else {
    hideError(element);
    return true;
  }
}

  
function validateZip(zip, element) {
  const zipPattern = /^\d{5}(-\d{4})?$/;
  if (zip.trim().length < 1) {
    showError(element, 'Zip code cannot be empty.');
    return false;
  } else if (!zipPattern.test(zip)) {
    showError(element, 'Please enter a valid zip code, e.g. 90210');
    return false;
  } else {
    hideError(element);
    return true;
  }
}


function validateCardNumber(card, element) {
  const cardPattern = /^\d{4} ?\d{4} ?\d{4} ?\d{4}$/;
  if (card.trim().length < 1) {
    showError(element, 'Card number cannot be empty.');
    return false;
  } else if (!cardPattern.test(card)) {
    showError(element, 'Please enter a valid card number, e.g. 1234 5678 9101 1121');
    return false;
  } else {
    hideError(element);
    return true;
  }
}

function validateExpDate(date, element) {
  const expPattern = /^(0[1-9]|1[0-2])\/\d{2}$/;
  if (date.trim().length < 1) {
    showError(element, 'Expiration date cannot be empty.');
    return false;
  } else if (!expPattern.test(date)) {
    showError(element, 'Please enter a valid expiration date, e.g. MM/YY');
    return false;
  } else {
    hideError(element);
    return true;
  }
}

function validateCVV(cvv, element) {
  const cvvPattern = /^\d{3,4}$/;
  if (cvv.trim().length < 1) {
    showError(element, 'CVV cannot be empty.');
    return false;
  } else if (!cvvPattern.test(cvv)) {
    showError(element, 'Please enter a valid CVV, e.g. 123');
    return false;
  } else {
    hideError(element);
    return true;
  }
}

function showError(element, message) {
  let error = element.parentNode.querySelector('.input-error');
  if (!error) {
    error = document.createElement('span');
    error.className = 'input-error';
    error.style.color = 'orange';
    error.style.fontSize = '0.9em';
    element.parentNode.appendChild(error);
  }
  error.textContent = message;
}

function hideError(element) {
  let error = element.parentNode.querySelector('.input-error');
  if (error) {
    error.textContent = '';
  }
}


console.log("JS Loaded.");


