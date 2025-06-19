const elements = {
  form: document.getElementById('bookingForm'),
  nameInput: document.getElementById('name'),
  surnameInput: document.getElementById('surname'),
  emailInput: document.getElementById('email'),
  countryCode: document.getElementById('countryCode'),
  phoneInput: document.getElementById('phoneNumber'),
  dateInput: document.getElementById('date'),
  timeSlotButtons: Array.from(document.getElementsByClassName('slot')),


  enteredName: document.getElementById('entered-name'),
  selectedDate: document.getElementById('selected-date'),
  selectedTime: document.getElementById('selected-time'),
  enteredEmail: document.getElementById('entered-email'),
  enteredNumber: document.getElementById('entered-number'),


  bookedName: document.getElementById('booked-name'),
  bookedDate: document.getElementById('booked-date'),
  bookedTime: document.getElementById('booked-time'),
  bookedEmail: document.getElementById('booked-email'),
  bookedNumber: document.getElementById('booked-number'),


  confirmationCard: document.getElementById('confirmationCard'),
  missingInput: document.getElementById('inputNotification'),
  emailNotification: document.getElementById('e-mailNotification'),
  smsNotification: document.getElementById('smsNotification'),
  returnButton: document.getElementById('go__back'),
  heading: document.querySelector('h1')
};

const formData = {
  date: null,
  time: null,
  name: null,
  surname: null,
  email: null,
  phoneNumber: null,
};

function updateDisplay(displayElement, bookedElement, value, defaultValue = '-') {
  const displayValue = value || defaultValue;
  displayElement.textContent = displayValue;
  if (bookedElement) {
    bookedElement.textContent = displayValue;
  }
}

function formatName(name) {
  return name
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

function createInputHandler(config) {
  return function () {
    const value = this.value.trim();

    if (config.formatter) {
      const formattedValue = config.formatter(value);
      formData[config.dataKey] = formattedValue || null;
      updateDisplay(config.displayElement, config.bookedElement, formattedValue);
    } else if (config.combiner) {
      config.combiner();
    } else {
      formData[config.dataKey] = value || null;
      updateDisplay(config.displayElement, config.bookedElement, value);
    }
  };
}

function updateDisplayedName() {
  const nameValue = elements.nameInput.value.trim();
  const surnameValue = elements.surnameInput.value.trim();

  if (!nameValue && !surnameValue) {
    formData.name = null;
    formData.surname = null;
    updateDisplay(elements.enteredName, elements.bookedName, null);
    return;
  }

  let displayName = '';

  if (nameValue) {
    const formattedName = formatName(nameValue);
    displayName += formattedName;
    formData.name = formattedName;
  }

  if (surnameValue) {
    const formattedSurname = formatName(surnameValue);
    displayName += (displayName ? ' ' : '') + formattedSurname;
    formData.surname = formattedSurname;
  }

  updateDisplay(elements.enteredName, elements.bookedName, displayName);
}

function updatePhoneNumber() {
  const countryCodeValue = elements.countryCode.value.trim();
  const phoneNumberValue = elements.phoneInput.value.trim();

  if (!countryCodeValue && !phoneNumberValue) {
    formData.phoneNumber = null;
    updateDisplay(elements.enteredNumber, elements.bookedNumber, null);
    return;
  }

  const displayPhoneNumber = `${countryCodeValue}${countryCodeValue ? ' ' : ''}${phoneNumberValue}`;
  formData.phoneNumber = displayPhoneNumber;
  updateDisplay(elements.enteredNumber, elements.bookedNumber, displayPhoneNumber);
}

function handleTimeSlotClick(event) {
  event.stopPropagation();
  const selectedTimeValue = this.textContent;
  formData.time = selectedTimeValue;
  updateDisplay(elements.selectedTime, elements.bookedTime, selectedTimeValue);
}

function showNotification(notificationElement, duration = 2000, topOffset = null) {
  if (topOffset) {
    notificationElement.style.top = topOffset;
  }

  notificationElement.classList.add('show');
  setTimeout(() => {
    notificationElement.classList.remove('show');
  }, duration);
}

function validateForm() {
  const isValid = Object.values(formData).every(value => value !== null);
  return isValid;
}


function toggleFormVisibility(showForm = true) {
  const method = showForm ? 'remove' : 'add';
  elements.form.classList[method]('hidden');
  elements.heading.classList[method]('hidden');

  elements.confirmationCard.classList[showForm ? 'add' : 'remove']('hidden');
  elements.confirmationCard.classList[showForm ? 'remove' : 'add']('flex');
}

function setupEventListeners() {
  elements.nameInput.addEventListener('input', updateDisplayedName);
  elements.surnameInput.addEventListener('input', updateDisplayedName);

  elements.emailInput.addEventListener('input', createInputHandler({
    dataKey: 'email',
    displayElement: elements.enteredEmail,
    bookedElement: elements.bookedEmail
  }));

  elements.dateInput.addEventListener('change', createInputHandler({
    dataKey: 'date',
    displayElement: elements.selectedDate,
    bookedElement: elements.bookedDate
  }));

  elements.countryCode.addEventListener('input', updatePhoneNumber);
  elements.phoneInput.addEventListener('input', updatePhoneNumber);

  elements.timeSlotButtons.forEach(button => {
    button.addEventListener('click', handleTimeSlotClick);
  });

  elements.form.addEventListener('submit', function (event) {
    event.preventDefault();

    if (!validateForm()) {
      showNotification(elements.missingInput, 5000);
      return;
    }

    toggleFormVisibility(false);

    const emailCheckbox = document.getElementById('e-mail');
    const smsCheckbox = document.getElementById('sms');

    if (emailCheckbox.checked && smsCheckbox.checked) {
      showNotification(elements.emailNotification, 2000, '70px');
      showNotification(elements.smsNotification);
    } else {
      if (emailCheckbox.checked) {
        showNotification(elements.emailNotification);
      }
      if (smsCheckbox.checked) {
        showNotification(elements.smsNotification);
      }
    }
  });

  elements.returnButton.addEventListener('click', function () {
    toggleFormVisibility(true);
    location.reload();
  });
}

function initializeApp() {
  const today = new Date().toISOString().split('T')[0];
  elements.dateInput.min = today;
  setupEventListeners();
}

document.addEventListener('DOMContentLoaded', initializeApp);