const checkoutForm = document.getElementById("checkoutForm");

checkoutForm.addEventListener("submit", function (e) {
  e.preventDefault();
  console.log(e.target[0].value);

  let formCorrect = true;

  const emailInput = document.getElementById("email");
  if (!validateEmail(emailInput.value)) formCorrect = false;

  const phoneInput = document.getElementById("phone");
  if (!validatePhone(phoneInput.value)) formCorrect = false;

  const firstNameInput = document.getElementById("firstname");
  if (!validateFirstName(firstNameInput.value)) formCorrect = false;

  const lastNameInput = document.getElementById("lastname");
  if (!validateLastName(lastNameInput.value)) formCorrect = false;

  const addressInput = document.getElementById("address");
  if (!validateAddress(addressInput.value)) formCorrect = false;

  const cityInput = document.getElementById("city");
  if (!validateCity(cityInput.value)) formCorrect = false;

  const stateInput = document.getElementById("state");
  if (!validateState(stateInput.value)) formCorrect = false;

  const zipCodeInput = document.getElementById("zipcode");
  if (!validateZipCode(zipCodeInput.value)) formCorrect = false;

  const cardNumberInput = document.getElementById("cardnumber");
  if (!validateCardNumber(cardNumberInput.value)) formCorrect = false;

  const expirationDateInput = document.getElementById("expirationDate");
  if (!validateExpirationDate(expirationDateInput.value)) formCorrect = false;

  const cvvInput = document.getElementById("cvv");
  if (!validateCvv(cvvInput.value)) formCorrect = false;

  if (formCorrect) {
    checkoutForm.classList.add("hidden");

    const firstName = firstNameInput.value.trim();
    const email = emailInput.value.trim();
    document.getElementById("greetingMessage").innerHTML =
      `Dear <span class="highlight">${firstName}</span>,`;
    document.getElementById("orderPlacedMessage").innerText =
      "Your order has been placed successfully!";
    document.getElementById("emailConfirmationMessage").innerHTML =
      `You will receive a confirmation mail to <span class="highlight">${email}</span>.`;

    document.getElementById("success").classList.remove("hidden");
  }
});

document.getElementById("email").addEventListener("input", function (e) {
  validateEmail(e.target.value);
});

document
  .getElementById("phone")
  .addEventListener("input", (e) => validatePhone(e.target.value));

document.getElementById("firstname").addEventListener("input", function (e) {
  validateFirstName(e.target.value);
});

document.getElementById("lastname").addEventListener("input", function (e) {
  validateLastName(e.target.value);
});

document.getElementById("address").addEventListener("input", function (e) {
  validateAddress(e.target.value);
});

document.getElementById("city").addEventListener("input", function (e) {
  validateCity(e.target.value);
});

document.getElementById("state").addEventListener("input", function (e) {
  validateState(e.target.value);
});

document.getElementById("zipcode").addEventListener("input", function (e) {
  validateZipCode(e.target.value);
});

document
  .getElementById("cardnumber")
  .addEventListener("input", (e) => validateCardNumber(e.target.value));

document
  .getElementById("expirationDate")
  .addEventListener("input", (e) => validateExpirationDate(e.target.value));

document
  .getElementById("cvv")
  .addEventListener("input", (e) => validateCvv(e.target.value));

function validateEmail(emailInput) {
  const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const emailError = document.getElementById("emailError");

  if (isEmpty(emailInput, emailError, "Email")) {
    return false;
  } else if (!emailPattern.test(emailInput)) {
    emailError.innerText =
      "Please enter correct email address, e.g. email@example.com";
    emailError.classList.remove("hidden");
    return false;
  } else {
    emailError.classList.add("hidden");
    return true;
  }
}

function validatePhone(phoneInput) {
  const phonePattern = /^\+?\d(?:\s?\d){9,19}$/;
  const phoneError = document.getElementById("phoneError");

  if (isEmpty(phoneInput, phoneError, "Phone")) {
    return false;
  } else if (!phonePattern.test(phoneInput)) {
    phoneError.innerText =
      "Please enter correct phone number, e.g. 555 123 4567";
    phoneError.classList.remove("hidden");
    return false;
  } else {
    phoneError.classList.add("hidden");
    return true;
  }
}

function validateFirstName(firstNameInput) {
  const firstNameError = document.getElementById("firstNameError");
  const namePattern = /^(?!\s)[A-Za-z]+(?:[ '\-][A-Za-z]+)*$/;

  if (isEmpty(firstNameInput, firstNameError, "First Name")) {
    return false;
  } else if (!namePattern.test(firstNameInput)) {
    firstNameError.innerText =
      "First name cannot start with a space and may contain only letters, single spaces, hyphens, or apostrophes.";
    firstNameError.classList.remove("hidden");
    return false;
  } else {
    firstNameError.classList.add("hidden");
    return true;
  }
}

function validateLastName(lastNameInput) {
  const lastNameError = document.getElementById("lastNameError");
  const namePattern = /^(?!\s)[A-Za-z]+(?:[ '\-][A-Za-z]+)*$/;

  if (isEmpty(lastNameInput, lastNameError, "Last Name")) {
    return false;
  } else if (!namePattern.test(lastNameInput)) {
    lastNameError.innerText =
      "Last name cannot start with a space and may contain only letters, single spaces, hyphens, or apostrophes.";
    lastNameError.classList.remove("hidden");
    return false;
  } else {
    lastNameError.classList.add("hidden");
    return true;
  }
}

function validateAddress(addressInput) {
  const addressPattern =
    /^(?=.{2,200}$)(?=.*[A-Za-z])(?=.*\d)[A-Za-z0-9\s.,'’"\/\-#()]+$/;
  const addressError = document.getElementById("addressError");
  if (isEmpty(addressInput, addressError, "Address")) {
    return false;
  } else if (!addressPattern.test(addressInput.trim())) {
    addressError.innerText =
      "Address must be 2-200 characters and include at least one letter and one number and may contain letters, numbers, spaces and common punctuation (.,'-/#()).";
    addressError.classList.remove("hidden");
    return false;
  } else {
    addressError.classList.add("hidden");
    return true;
  }
}

function validateCity(cityInput) {
  const cityPattern = /^[A-Za-z\s]{2,}$/;
  const cityError = document.getElementById("cityError");

  if (isEmpty(cityInput, cityError, "City")) {
    return false;
  } else if (!cityPattern.test(cityInput.trim())) {
    cityError.innerText =
      "City must contain only letters and be at least 2 characters long.";
    cityError.classList.remove("hidden");
    return false;
  } else {
    cityError.classList.add("hidden");
    return true;
  }
}

function validateState(stateInput) {
  const statePattern = /^[A-Z]{2}$/;
  const stateError = document.getElementById("stateError");

  if (isEmpty(stateInput, stateError, "State")) {
    return false;
  } else if (!statePattern.test(stateInput.trim())) {
    stateError.innerText =
      "State must be exactly 2 capital letters (e.g. CA, NY)";
    stateError.classList.remove("hidden");
    return false;
  } else {
    stateError.classList.add("hidden");
    return true;
  }
}

function validateZipCode(zipCodeInput) {
  const zipCodeError = document.getElementById("zipcodeError");
  const zipCodePattern = /^\d{5}$/;

  if (isEmpty(zipCodeInput, zipCodeError, "Zip Code")) {
    return false;
  } else if (!zipCodePattern.test(zipCodeInput.trim())) {
    zipCodeError.innerText = "ZIP Code must be exactly 5 digits (e.g. 90210)";
    zipCodeError.classList.remove("hidden");
    return false;
  } else {
    zipCodeError.classList.add("hidden");
    return true;
  }
}

function validateCardNumber(cardNumberInput) {
  const cardNumberPattern = /^\d{4}\s\d{4}\s\d{4}\s\d{4}$/;
  const cardNumberError = document.getElementById("cardNumberError");

  if (isEmpty(cardNumberInput, cardNumberError, "Card Number")) {
    return false;
  } else if (!cardNumberPattern.test(cardNumberInput)) {
    cardNumberError.innerText =
      "Card number must be in format: 1234 5678 9012 3456";
    cardNumberError.classList.remove("hidden");
    return false;
  } else {
    cardNumberError.classList.add("hidden");
    return true;
  }
}

function validateExpirationDate(expirationDateInput) {
  const expirationDatePattern = /^(0[1-9]|1[0-2])\/\d{2}$/;
  const expirationDateError = document.getElementById("expirationDateError");

  if (isEmpty(expirationDateInput, expirationDateError, "Expiration Date")) {
    return false;
  } else if (!expirationDatePattern.test(expirationDateInput)) {
    expirationDateError.innerText =
      "Expiration date must be in MM/YY format (e.g. 10/27)";
    expirationDateError.classList.remove("hidden");
    return false;
  } else {
    expirationDateError.classList.add("hidden");
    return true;
  }
}

function validateCvv(cvvInput) {
  const cvvPattern = /^\d{3}$/;
  const cvvError = document.getElementById("cvvError");

  if (isEmpty(cvvInput, cvvError, "CVV")) {
    return false;
  } else if (!cvvPattern.test(cvvInput)) {
    cvvError.innerText = "CVV must be exactly 3 digits.";
    cvvError.classList.remove("hidden");
    return false;
  } else {
    cvvError.classList.add("hidden");
    return true;
  }
}

function isEmpty(inputValue, errorElement, fieldName) {
  if (inputValue.trim().length < 1) {
    errorElement.innerText = `${fieldName} cannot be empty.`;
    errorElement.classList.remove("hidden");
    return true;
  } else {
    return false;
  }
}
