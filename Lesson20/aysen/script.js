const dateInput = document.getElementById("date");
let selectedDate = document.getElementById("selected-date");
const selectedTime = document.getElementById("selected-time");
const messageElement = document.getElementById("message");

const nameInput = document.getElementById("name");
const selectedName = document.getElementById("selected-name");

const emailInput = document.getElementById("email");
const selectedEmail = document.getElementById("selected-email");

const formData = {
  date: null,
  time: null,
  name: null,
  email: null,
};

// Set today as the minimum allowed date
const today = new Date().toISOString().split("T")[0];
dateInput.setAttribute("min", today);

//When the date is selected
dateInput.addEventListener("change", function () {
  if (dateInput.value === "") {
    selectedDate.textContent = "-";
    formData.date = null;
  } else {
    selectedDate.textContent = dateInput.value;
    formData.date = dateInput.value;

     messageElement.textContent = "";
  }
});

//When a time slot is clicked
const timeSlotButtons = Array.from(document.getElementsByClassName("slot")); // Gets all buttons with class slot (the time buttons) and converts them into an array.

// When the user leaves the name input, show it on the right
nameInput.addEventListener("blur", function () {
  const nameValue = nameInput.value.trim(); // remove extra spaces
  const uppercaseName = nameValue.toUpperCase(); // convert to UPPERCASE

  selectedName.textContent = uppercaseName || "-";
  formData.name = uppercaseName; 

  if (uppercaseName) messageElement.textContent = "";
});

// When the user leaves the email input, show it on the right
emailInput.addEventListener("blur", function () {
  const emailValue = emailInput.value.trim().toLowerCase(); // lowercase for emails
  selectedEmail.textContent = emailValue || "-";
  formData.email = emailValue;

    if (emailValue) messageElement.textContent = "";
});

//Adds a click event to each time button:
//	When clicked, show the time and store it in formData.
for (const element of timeSlotButtons) {
  element.addEventListener("click", function () {
    selectedTime.textContent = element.textContent;
    formData.time = element.textContent;

     messageElement.textContent = "";
  });
}

document
  .getElementById("bookingForm")
  .addEventListener("submit", function (event) {
    event.preventDefault(); //Stop the page from reloading (default behavior).
    let formError = "";

    if (
      !!formData.date &&
      !!formData.time &&
      !!formData.name &&
      !!formData.email
    ) {
      // (!!> are used to convert a value to a boolean
      //If both date and time are filled:  (not null or empty)

     
      //messageElement.textContent = "Form submitted successfully";
     // messageElement.textContent = `Thank you, ${formData.name}! Your appointment is booked for ${formData.date} at ${formData.time}.`;
      // TODO: Update Date and Time on the confirmation card

      // Fill in confirmation card with submitted info
      document.getElementById("confirm-date").textContent = formData.date;
      document.getElementById("confirm-time").textContent = formData.time;
      document.getElementById("confirm-name").textContent = formData.name;
      document.getElementById("confirm-email").textContent = formData.email;

      document.getElementById("bookingForm").classList.add("hidden"); // “Hide the form from the page.”   /This adds the class hidden to that element. So after this line runs, your form becomes: <form id="bookingForm" class="booking hidden">
      document.getElementById("confirmation-card").classList.remove("hidden"); //“Make the confirmation card visible.”
    }

    // If fields are missing:Add error messages	Show them in the message box.
    if (!formData.date) {
      formError = "Date is required.\n";
      //console.log("formError", formError);
    }

    if (!formData.time) {
      formError = formError + "Time is required.\n";
      //console.log("formError", formError);
    }

    if (!formData.name) {
      formError += "Name is required\n";
    }
    if (!formData.email) {
      formError += "Email is required.\n";
    }

    if (formError) {
      messageElement.textContent = formError;
    }
  });
