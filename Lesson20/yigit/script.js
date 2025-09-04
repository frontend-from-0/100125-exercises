const dateInput = document.getElementById('date');
let selectedDate = document.getElementById('selected-date');
const selectedTime = document.getElementById('selected-time');
const messageElement = document.getElementById('message');

const usernameInput = document.getElementById('username');
const emailInput = document.getElementById('email');
const selectedUsername = document.getElementById('selected-username');
const selectedEmail = document.getElementById('selected-email');



  const today = new Date();
  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, '0');
  const day = String(today.getDate()).padStart(2, '0');
  const minDate = `${year}-${month}-${day}`;
  document.getElementById('date').setAttribute('min', minDate);

const formData = {
  date: null,
  time: null,
};

dateInput.addEventListener('change', function () {
  if (dateInput.value === '') {
    selectedDate.textContent = '-';
    formData.date = null;
  } else {
    selectedDate.textContent = dateInput.value;
    formData.date = dateInput.value;
  }
});

const timeSlotButtons = Array.from(document.getElementsByClassName('slot'));

for (const element of timeSlotButtons) {
  element.addEventListener('click', function () {
    selectedTime.textContent = element.textContent;
    formData.time = element.textContent;
  });
}

usernameInput.addEventListener('blur', function () {
  selectedUsername.textContent = usernameInput.value;
  formData.username = usernameInput.value;
});

emailInput.addEventListener('blur', function () {
  selectedEmail.textContent = emailInput.value;
  formData.email = emailInput.value;
});

document
  .getElementById('bookingForm')
  .addEventListener('submit', function (event) {
    event.preventDefault();
    let formError = '';

if (!!formData.date && !!formData.time) {
  messageElement.textContent = 'Form submitted successfully';

  document.getElementById('confirmation-date').textContent = formData.date;
  document.getElementById('confirmation-time').textContent = formData.time;

  document.getElementById('confirmation-username').textContent = formData.username;
  document.getElementById('confirmation-email').textContent = formData.email;

  document.getElementById('bookingForm').classList.add('hidden');
  document.getElementById('confirmationCard').classList.remove('hidden');
}

    if (!formData.date) {
      formError = 'Date is required.';
      console.log('formError', formError)
    }

    if (!formData.time) {
      formError = formError + ' Time is required.';
      console.log('formError', formError)
    }

     if (!formData.username) {
      formError = ' username is required.';
      console.log('formError', formError)
    }

    if (!formData.email) {
      formError = formError + ' email is required.';
      console.log('formError', formError)
    }

    if (formError) {
      messageElement.textContent = formError;
    }
  });
