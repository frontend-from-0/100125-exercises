// Elements

const checkoutForm = document.getElementById('checkoutForm');

// Submit form

checkoutForm.addEventListener('submit', function (e) {
  e.preventDefault();
  console.log(e.target[0].value);

  let formCorrect = true;

  const emailInput = document.getElementById('email');
  if (!validateEmail(emailInput.value, emailInput)) formCorrect = false;

  const phoneInput = document.getElementById('phone');
  if (!validatePhone(phoneInput.value, phoneInput)) formCorrect = false;

  const firstnameInput = document.getElementById('firstname');
  if (!validateFirstName(firstnameInput.value, firstnameInput)) formCorrect = false;

  const lastnameInput = document.getElementById('lastname');
  if (!validateLastName(lastnameInput.value, lastnameInput)) formCorrect = false;

  const addressInput = document.getElementById('address');
  if (!validateAddress(addressInput.value, addressInput)) formCorrect = false;

  const cityInput = document.getElementById('city');
  if (!validateCity(cityInput.value, cityInput)) formCorrect = false;

  const stateInput = document.getElementById('state');
  if (!validateState(stateInput.value, stateInput)) formCorrect = false;

  const zipInput = document.getElementById('zipcode');
  if (!validateZip(zipInput.value, zipInput)) formCorrect = false;

  const cardNumberInput = document.getElementById('cardNumber');
  if (!validateCardNumber(cardNumberInput.value, cardNumberInput)) formCorrect = false;

  const expDateInput = document.getElementById('expDate');
  if (!validateExpDate(expDateInput.value, expDateInput)) formCorrect = false;

  const cvvInput = document.getElementById('cvv');
  if (!validateCvv(cvvInput.value, cvvInput)) formCorrect = false;

  if (formCorrect) {
    checkoutForm.classList.add('hidden');
    document.getElementById('conf-container').classList.remove('hidden');
    document.getElementById('conf-container').classList.add('flex', 'flex-col');
    document.getElementById('conf-overlay').classList.add('fixed');
    updateDisplayedValue()
  }
});

//Event Listeners

document.getElementById('email').addEventListener('change', (e) => validateEmail(e.target.value, e.target));
document.getElementById('phone').addEventListener('change', (e) => validatePhone(e.target.value, e.target));
document.getElementById('firstname').addEventListener('change', (e) => validateFirstName(e.target.value, e.target));
document.getElementById('lastname').addEventListener('change', (e) => validateLastName(e.target.value, e.target));
document.getElementById('address').addEventListener('change', (e) => validateAddress(e.target.value, e.target));
document.getElementById('city').addEventListener('change', (e) => validateCity(e.target.value, e.target));
document.getElementById('state').addEventListener('change', (e) => validateState(e.target.value, e.target));
document.getElementById('zipcode').addEventListener('change', (e) => validateZip(e.target.value, e.target));
document.getElementById('cardNumber').addEventListener('change', (e) => validateCardNumber(e.target.value, e.target));
document.getElementById('expDate').addEventListener('change', (e) => validateExpDate(e.target.value, e.target));
document.getElementById('cvv').addEventListener('change', (e) => validateCvv(e.target.value, e.target));
document.getElementById('go-back').addEventListener('click', (e) => closeConfirmation())


function showError(inputElement, message) {
  const inputGroup = inputElement.closest('.input-group');
  const errorElement = inputGroup.querySelector('.input-error');

  errorElement.classList.remove('hidden');
  errorElement.innerText = message;
}

function hideError(inputElement) {
  const inputGroup = inputElement.closest('.input-group');
  const errorElement = inputGroup.querySelector('.input-error');

  errorElement.classList.add('hidden');
}

//Input Validations

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

function validateFirstName(firstnameInput, element) {
  const namePattern = /\w+(?:\s(\w+))?/

  if (firstnameInput.trim().length < 2 || /\d/.test(firstnameInput)) {
    showError(element, 'First name cannot be empty or contain number');
    return false;
  } else if (!namePattern.test(firstnameInput)) {
    showError(element, `Please enter correct name, e.g John or "John Moustafa"`);
    return false;
  } else {
    hideError(element);
    return true;
  }
}

function validateLastName(lastnameInput, element) {
  const namePattern = /\w+(?:\s(\w+))?/

  if (lastnameInput.trim().length < 2 || /\d/.test(lastnameInput)) {
    showError(element, 'Last name cannot be empty or contain number');
    return false;
  } else if (!namePattern.test(lastnameInput)) {
    showError(element, `Please enter correct last name, e.g "Doe"`);
    return false;
  } else {
    hideError(element);
    return true;
  }
}

function validateAddress(addressInput, element) {
  if (addressInput.trim().length === 0 || addressInput.trim().length > 150) {
    showError(element, 'Address cannot be empty or longer than 150 characters');
    return false;
  } else {
    hideError(element);
    return true;
  }
}

function validateCity(cityInput, element) {
  const cityPattern = /^\p{L}+(?: \p{L}+)*$/u;

  if (cityInput.trim().length === 0 || cityInput.trim().length > 30) {
    showError(element, 'This field cannot be empty or longer than 30 characters.');
    return false;
  } else if (!cityPattern.test(cityInput.trim())) {
    showError(element, 'Only letters and a single space between words are allowed.');
    return false;
  } else {
    hideError(element);
    return true;
  }
}

function validateState(stateInput, element) {
  const statePattern = /^\p{L}+(?: \p{L}+)*$/u;

  if (stateInput.trim().length === 0 || stateInput.trim().length > 15) {
    showError(element, 'This field cannot be empty or longer than 15 characters.');
    return false;
  } else if (!statePattern.test(stateInput.trim())) {
    showError(element, 'Only letters and a single space between words are allowed.');
    return false;
  } else {
    hideError(element);
    return true;
  }
}

function validateZip(zipInput, element) {
  if (zipInput.trim().length === 0) {
    showError(element, 'Zipcode cannot be empty.');
    return false;
  } else {
    hideError(element);
    return true;
  }
}

function validateCardNumber(cardNumberInput, element) {
  const cleaned = cardNumberInput.replace(/[\s-]/g, '');

  if (!/^\d+$/.test(cleaned)) {
    showError(element, 'This field should not contain any non-digit characters and cannot be empty');
    return false;
  }

  if (cleaned.length < 13 || cleaned.length > 19) {
    showError(element, 'The card number does not have the correct length value.');
    return false;
  }

  if (!validateLuhn(cleaned)) {
    showError(element, 'The card number does not have the correct type.');
    return false;
  }

  hideError(element);
  return true;
}

function validateLuhn(cardNumber) {
  const digits = cardNumber.replace(/\D/g, '');
  const digitArray = digits.split('').map(Number);

  let sum = 0;
  let isEven = false;

  for (let i = digitArray.length - 1; i >= 0; i--) {
    let digit = digitArray[i];

    if (isEven) {
      digit *= 2;

      if (digit > 9) {
        digit = Math.floor(digit / 10) + (digit % 10);
      }
    }

    sum += digit;
    isEven = !isEven;
  }

  return sum % 10 === 0;
}

function validateExpDate(expDateInput, element) {
  const expDatePattern = /^(0[1-9]|1[0-2])\/\d{2}$/

  if (expDateInput.trim().length < 1) {
    showError(element, "Expiration date cannot be empty");
    return false;
  } else if (!expDatePattern.test(expDateInput)) {
    showError(element, `Please enter correct expiration date e.g "12/24"`);
    return false;
  } else {
    hideError(element);
    return true;
  }
}

function validateCvv(cvvInput, element) {
  const cvvPattern = /^\d{3,4}$/;

  if (/[^\d]/.test(cvvInput)) {
    showError(element, "Cvv should only contain numbers");
    return false;
  } else if (!cvvPattern.test(cvvInput)) {
    showError(element, "CVV must be 3 or 4 digits");
    return false;
  } else {
    hideError(element);
    return true;
  }
}

// Confirmation container

function closeConfirmation() {
  checkoutForm.classList.remove('hidden');
  document.getElementById('conf-container').classList.add('hidden');
  document.getElementById('conf-overlay').classList.remove('fixed');
  location.reload();
}

function updateDisplayedValue() {
  const emailInput = document.getElementById('email');
  const addressInput = document.getElementById('address');
  const displayedEmail = document.getElementById('displayed-email');
  const displayedAddress = document.getElementById('displayed-address');

  if (emailInput) {
    displayedEmail.textContent = emailInput.value;
  }

  if (addressInput) {
    displayedAddress.textContent = addressInput.value;
  }
}