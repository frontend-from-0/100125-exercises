/*
===========================================================
  SIMPLE CONTACT BOOK APPLICATION
===========================================================
In this project, you'll create a Contact Book to store and
manage basic info: name, phone, and email.

You'll practice:
1. Arrays and objects
2. Loops (for, for-of, findIndex, etc.)
3. Conditionals (if-else)
4. Basic CRUD (Create, Read, Update, Delete) functionality

Below is a step-by-step guide, with sample code and 
comments explaining what each section does. Run this file
in Node.js or in your browser's console to see the output.
*/

/*
-----------------------------------------------------------
  STEP 1: Setup and Initial Data
-----------------------------------------------------------
1. Create an array named 'contacts' with a few initial 
   sample contacts.
2. Each contact is an object with 'name', 'phone', and 
   'email' properties.
*/

const contacts = [
  { name: 'Alice', phone: '123-456-7890', email: 'alice@example.com' },
  { name: 'John', phone: '123-456-7890', email: 'john@example.com' },
  { name: 'Janna', phone: '333-323-3222', email: 'alice@yahoo.com'},
];

console.log(contacts[0].name);

/*
-----------------------------------------------------------
  STEP 2: Display All Contacts
-----------------------------------------------------------
Function: displayAllContacts()
- Loops over the 'contacts' array.
- Logs a descriptive string for each contact.

Example output:
  Name: Alice, Phone: 123-456-7890, Email: alice@example.com
  -----
*/
function displayAllContacts() {
  for (let i = 0; i < contacts.length; i++) {
    console.log(
      `Name: ${contacts[i].name}, Phone: ${contacts[i].phone}, Email: ${contacts[i].email}`,
    );
    console.log('-----');
  }
}

console.log('Initial contact list:');
displayAllContacts();


/* contactFinder helper function */

  const contactFinder = function findContact (name){
    for (let i = 0; i < contacts.length; i++){
      if (name && contacts[i].name.includes(name)
          ) {    
      return contacts[i];
    }
  }
  return null;
}



/*
-----------------------------------------------------------
  STEP 3: Add a New Contact
-----------------------------------------------------------
Function: addContact(name, phone, email)
- Creates a new contact object and pushes it into 'contacts'.
- Checks if a contact with the same name already 
  exists before adding. If found, logs a warning and returns.
- Logs "Contact added successfully." if everything is good.
*/
function addContact(name, phone, email) {
  const foundContact = contactFinder(name);
  if (foundContact){
    console.log('Contact already exists. Not adding the new contact');
    return;
  }
  console.log('Contacts is not found, adding the contact!');
  contacts.push({ name, phone, email });
  console.log('Contact added successfully.');
  return contacts;
  
}

addContact('John', '123-456-7891', 'john@eyample.com');
addContact('Bob', '123-456-7895', 'bob@example.com');
addContact('Alice', '143-456-7890', 'altce@eymple.com');
addContact('Charlie', '777-777-7777', 'charlie@example.com');
displayAllContacts();


/*
-----------------------------------------------------------
  STEP 4: View a Contact by Name
-----------------------------------------------------------
Function: viewContact(name)
- Loops over 'contacts' to find one matching 'name'.
- Logs the contact info if found (Name: Alice, Phone: 123-456-7890, Email: alice@example.com)
- Otherwise, logs: "No contact found with the name: <name>"
*/



function viewContact(name) { 
  const foundContact = contactFinder(name);
    if (foundContact) {
      console.log(
        `Name: ${foundContact.name}, Phone: ${foundContact.phone}, Email: ${foundContact.email}`,
      );
      return;
    }
    console.log(`No contact found with the name: ${name}`);
  }


console.log("\nViewing Charlie's contact:");
viewContact('Charlie');

console.log("\nViewing Bob's contact:");
viewContact('Bob');

viewContact('Mark');

/*
-----------------------------------------------------------
  STEP 5: Update a Contact
-----------------------------------------------------------
Function: updateContact(name, newPhone, newEmail)
- Finds the contact by name and updates phone + email.
- Logs "Contact updated successfully." if found.
- Otherwise, logs: "No contact found with the name: <name>"
*/
function updateContact(name, newPhone, newEmail) {
  const foundContact = contactFinder(name);
    if (foundContact) {
      foundContact.phone = newPhone;
      foundContact.email = newEmail;
      console.log("Contact updated successfully.");
      return; 
    }
  console.log(`No contact found with the name: ${name}`);
  }

console.log("\nUpdating Bob's contact:");
updateContact('Bob', '999-999-9999', 'bob@updated.com');

console.log("\nUpdating Charlie's contact:");
updateContact('Charlie', '999-999-1111', 'charlie@updated.com');

updateContact("Maria");

displayAllContacts();
/*
-----------------------------------------------------------
  STEP 6: Remove a Contact
-----------------------------------------------------------
Function: removeContact(name)
- Finds the index of the contact with 'name' using 
  findIndex() or a loop.
- Splices it from the array if found.
- Logs "Contact removed successfully." if found.
- Otherwise, logs: "No contact found with the name: <name>"
*/

function removeContact(name){
  const foundContact = contactFinder(name);
    if (foundContact) {
      const index = contacts.indexOf(foundContact);
      console.log('Found contact:', foundContact);
      contacts.splice(index, 1);
      console.log('Contact removed successfully')
    } else {
    console.log(`No contact found with the name ${name}`)
    }
}

console.log('\nRemoving Alice:');
removeContact('Alice');
console.log('\nRemoving Charlie:');
removeContact('Charlie');
removeContact('George');

displayAllContacts();

/* Alphabetically sorting */

function sortAlphabetically(obj) {
  return obj.sort((a, b) => a.name.localeCompare(b.name));
}
  
  const sortedContacts = sortAlphabetically(contacts);
  console.log(sortedContacts)
  

/* Contact finder by email and phone */

  function findContact (phone, email){
      for (let i = 0; i < contacts.length; i++){
      if (phone && contacts[i].phone.includes(phone) ||
          email && contacts[i].email.includes(email)
          ){
          return console.log('Contact is found:', contacts[i]);
          }
  }
  console.log(`Contact is not found: ${phone} or ${email}`)
  return null;
}


findContact('999-999-9999', '');
findContact('', 'alice@yahoo.com');
findContact('John', 'john@example.com');
findContact('222-425-789', 'charlie@example.com');

/*

-----------------------------------------------------------
  OPTIONAL ENHANCEMENTS:
-----------------------------------------------------------
1. Partial Name Search:
   - Instead of strict ===, use .includes() for the name check.
2. Sort Contacts:
   - Add a function to sort contacts alphabetically by name.
3. Search by multiple fields:
   - e.g., find a contact by phone number or email.
*/
