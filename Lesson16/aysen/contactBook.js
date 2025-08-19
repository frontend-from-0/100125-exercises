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
  { name: "Alice", phone: "111-456-7890", email: "alice@example.com" },
  { name: "John", phone: "222-456-7890", email: "john@example.com" },
  { name: "Ali", phone: "333-456-7890", email: "ali@example.com" },
];

//console.log(contacts[0].name, contacts[0].phone, '\n', contacts[0].email);

/* FindContact helper function
-----------------------------------------------------------
Implement a findContact helper function that will loop through the contacts and return a contact if found- Refactor 'viewContact', 'addContact' and similar functions so they use 'findContact' helper function
*/

function findContact(name) {
  for (const contact of contacts) {
    //if (name === contact.name) {// this allows exact matches only
    //if(contact.name.toLowerCase().includes(name.toLowerCase())){ // this allows partial matches but shows first match only
    if (contact.name.toLowerCase() === name.toLowerCase()) {
      // this allows exact matches only
      //  console.log(
      //   `Name: ${contact.name}, Phone: ${contact.phone}, Email: ${contact.email}`);
      return contact;
    }
  }
  // console.log(`Contact not found with the name: ${name}`);
  return null;
}

//findContact('Alice');
//findContact('Aysen');
//findContact('Ali');
//findContact('ali');

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
  for (const contact of contacts) {
    console.log(
      `Name: ${contact.name}, Phone: ${contact.phone}, Email: ${contact.email}`
    );
    console.log("-----");
  }
}

//displayAllContacts();

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
  //for (const contact of contacts) {
  //if (name === contact.name) {
  if (findContact(name)) {
    console.log(
      `Warning: a contact with name: ${name} phone: ${phone} email: ${email} already exist. Not adding the contact!`
    );
    //console.log("Already exists, not adding the contact!");
    return;
  }

  //console.log("Contact is not found, adding the contact!");
  console.log("Adding a new contact:", name, phone, email);
  contacts.push({ name, phone, email });
  console.log("Contact added successfully.");
  return contacts;
}

//addContact("name", "saasdas", "asdsadsa");
//addContact("Mike","444-444-4444", "mike@example.com");

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
  //for (const contact of contacts) {
  //if (name === contact.name) {
  
  const contact = findContact(name);
  if (contact) {
    console.log(
      ` Viewing Contact:  Name: ${contact.name}, Phone: ${contact.phone}, Email: ${contact.email}`
    );
  }
  // return;
  else {
    console.log(`No contact found with the name: ${name}`);
  }
}

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
  //for (const contact of contacts) {
  //if (name === contact.name) {
  const contact = findContact(name);
  if (contact) {
    contact.phone = newPhone;
    contact.email = newEmail;
    console.log(
      `Contact ${name} updated successfully with new phone: ${newPhone} and new email: ${newEmail}`
    );
    //return;
  } else {
    console.log(`No contact found with the name: ${name}`);
  }
}
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


function removeContact(name) {
  
  const index = contacts.findIndex(
    (contact) => contact.name.toLowerCase() === name.toLowerCase()
  );
  if (index !== -1) {// If the contact is not found -1
    contacts.splice(index, 1); // Remove the contact at the found index, 1 is how many items to remove
    console.log(`Contact ${name} removed successfully.`);
  } else {
    console.log(`No contact found with the name: ${name}`);
  }
 

}

/*
-----------------------------------------------------------
  STEP 7: Testing Our Functions
-----------------------------------------------------------
Below are some sample function calls to demonstrate the 
Contact Book in action.
*/

console.log("Initial contact list:");
displayAllContacts();

/*console.log(
  "\n Testing findContact function: Also ,trying to use includes()..."
);
findContact("Alice");
findContact("Aysen");
findContact("Ali");
findContact("ali");*/

console.log("\nAdding a new contact: Charlie");
addContact("Charlie", "777-777-7777", "charlie@example.com");

console.log("\n Displaying all contacts after adding Charlie:");
displayAllContacts();

console.log("\nViewing Charlie's contact:");
viewContact("Charlie");

console.log("\nViewing Bob's contact:");
viewContact("Bob");

console.log("\nUpdating Bob's contact:");
updateContact("Bob", "999-999-9999", "bob@updated.com");

console.log("\nUpdating Charlie's contact:");
updateContact("Charlie", "999-999-1111", "charlie@updated.com");

console.log("\nRemoving Alice:");
removeContact("Alice");
displayAllContacts();

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

function findContactByPartialName(name) {
  for (const contact of contacts) {

    if(contact.name.toLowerCase().includes(name.toLowerCase())){ // this allows partial matches but shows first match only
    console.log(`Name: ${contact.name}, Phone: ${contact.phone}, Email: ${contact.email}`);
      return contact;
    }
  }
   console.log(`Contact not found with the name: ${name}`);
  return null;
}

console.log("\nTesting Optional enhancements:");
findContactByPartialName("Ali");
findContactByPartialName("Alice");
findContactByPartialName("Char");

function sortContacts() {
  contacts.sort((a, b) => a.name.localeCompare(b.name));// Sort contacts alphabetically by name permanently (case-insensitive) if a come first it will return -1, if b comes first it will return 1, if they are equal it will return 0
  console.log("\nContacts sorted alphabetically by name:");
  displayAllContacts();
} 
sortContacts();


function multipleFieldSearch(searchTerm) {
  
  const contact = contacts.find(contact =>
    contact.name.toLowerCase() === searchTerm.toLowerCase() ||
    contact.phone === searchTerm ||
    contact.email.toLowerCase() === searchTerm.toLowerCase()
  );

  if (contact) {
   console.log(`Found contact: Name: ${contact.name}, Phone: ${contact.phone}, Email: ${contact.email}`);
   
  } else {
    console.log(`No contact found matching exactly: ${searchTerm}`);
  
  }
}


multipleFieldSearch("Charlie");
multipleFieldSearch("999-999-1111");
multipleFieldSearch("mcharlie@updated.com");
multipleFieldSearch("ali@example.com");