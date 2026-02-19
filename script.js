const dateInput = document.getElementById("date");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");

const selectedDate = document.getElementById("selected-date");
const selectedName = document.getElementById("selected-name");
const selectedEmail = document.getElementById("selected-email");
const selectedTime = document.getElementById("selected-time");

const dateError = document.getElementById("date-error");
const timeError = document.getElementById("time-error");
const nameError = document.getElementById("name-error");
const emailError = document.getElementById("email-error");

const formData = {
  date: null,
  time: null,
  name: null,
  email: null,
};

const today = new Date().toISOString().split("T")[0];
dateInput.setAttribute("min", today);

const timeSlotButtons = Array.from(document.getElementsByClassName("slot"));

function updatePreview(id, value, formatter = (v) => v) {
  document.getElementById(id).textContent = value || "-";
  return formatter(value);
}

function clearSelectedSlots() {
  for (const btn of timeSlotButtons) {
    btn.classList.remove("selected");
  }
}

function setError(inputElement, errorElement, message) {
  errorElement.textContent = message;
  if (inputElement) inputElement.setAttribute("aria-invalid", "true");
}

function clearError(inputElement, errorElement) {
  errorElement.textContent = "";
  if (inputElement) inputElement.setAttribute("aria-invalid", "false");
}

function looksLikeCode(str) {
  const s = str.toLowerCase();
  return (
    /[<>{}()[\];=]/.test(str) ||
    /(script|console\.|function|return|select\s|drop\s|insert\s|alert\s)/.test(
      s,
    )
  );
}

function isValidName(name) {
  return /^[\p{L}][\p{L}\s'-]{1,59}$/u.test(name);
}

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email);
}

dateInput.addEventListener("input", function () {
  selectedDate.textContent = dateInput.value || "-";
  formData.date = dateInput.value || null;

  if (formData.date) {
    clearError(dateInput,dateError);
  }
});

for (const element of timeSlotButtons) {
  element.addEventListener("click", function () {
    clearSelectedSlots();
    element.classList.add("selected");

    selectedTime.textContent = element.textContent;
    formData.time = element.textContent;
    clearError(null,timeError);
  });
}

nameInput.addEventListener("input", function () {
  const nameValue = nameInput.value.trim();
  const uppercaseName = nameValue.toUpperCase();

  selectedName.textContent = uppercaseName || "-";
  formData.name = uppercaseName|| null;

  if (formData.name) clearError(nameInput,nameError);
});

emailInput.addEventListener("input", function () {
  const emailValue = emailInput.value.trim().toLowerCase();
  selectedEmail.textContent = emailValue || "-";
  formData.email = emailValue|| null;

  if (formData.email) clearError(emailInput,emailError);
});

document
  .getElementById("bookingForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    let hasError = false;
    if (!formData.date) {
      setError(dateInput,dateError, "Date is required.");
      hasError = true;
    } else {
      clearError(dateInput,dateError);
    }

    if (!formData.time) {
      setError(null,timeError, "Time is required. Please select a time slot.");
      hasError = true;
    } else {
      clearError(null,timeError);
    }

    if (!formData.name) {
      setError(nameInput, nameError, "Name is required.");
      hasError = true;
    } else if (looksLikeCode(formData.name) || !isValidName(formData.name)) {
      setError(
        nameInput,
        nameError,
        "Please enter a real name (letters only).",
      );
      hasError = true;
    } else {
      clearError(nameInput,nameError);
    }

    if (!formData.email) {
      setError(emailInput,emailError, "Email is required.");
      hasError = true;
    } else if (looksLikeCode(formData.email) || !isValidEmail(formData.email)) {
      setError(
        emailInput,
        emailError,
        "Please enter a valid email. Example: name@example.com",
      );
      hasError = true;
    } else {
      clearError(emailInput,emailError);
    }

    if (hasError) return;

    document.getElementById("confirm-date").textContent = formData.date;
    document.getElementById("confirm-time").textContent = formData.time;
    document.getElementById("confirm-name").textContent = formData.name;
    document.getElementById("confirm-email").textContent = formData.email;

    document.getElementById("bookingForm").classList.add("hidden");
    document.getElementById("confirmation-card").classList.remove("hidden");
  });
