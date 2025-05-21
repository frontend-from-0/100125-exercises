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
  { name: 'John', phone: '8585-456-7890', email: 'john@example.com' },
];

console.log(contacts[0].name);

// The helper function to find a contact by name
// I put this function above because I am going to use it in the followinf functions.

function findContact(name) { 
  for (const contact of contacts) { 
    if (contact.name.toLowerCase() === name.toLowerCase()) { 
      return contact;
    }
  }
  return null; // I use 'null' to indicate that the contact is not found. I did not use 'undefined' because is usually returned automatically  when no value has been assigned.
}


function findContactIndex(name) { // This helper function is used to find the index of the contact. I will use it in the removeContact function. Or any other function that needs to find index.
  return contacts.findIndex(contact => contact.name === name);
}

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
function displayAllContacts() { // I do not to use 'findContact' function here because I want to display all the contacts. 
if (contacts.length === 0) { // check if the contacts array is empty
    console.log("No contacts to display.");
    return;
  }

  for (const contact of contacts) {
    console.log(
      `Name: ${contact.name}, Phone: ${contact.phone}, Email: ${contact.email}`,
    );
    console.log('-----');
  }
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

  const newContact = findContact(name); // I use the helper function to check if the contact already exists.


 if (newContact) { // I use the helper function. 
      console.warn(`Warning: a contact named ${name} already exist`);
      return;
      
    } 
     // If the contact does not exist I create a new contact object and push it to the contacts array. 
  contacts.push({ name, phone, email });
  console.log('Contact added successfully.');
  return;
}
 
addContact('name', 'saasdas', 'asdsadsa');

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
  
  const contact = findContact(name); // I use the helper function.

    if (contact) {
      console.log(
        `Name: ${contact.name}, Phone: ${contact.phone}, Email: ${contact.email}`,
      );
      return;
    }
  

  console.log(`No contact found with the name: ${name}`);
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
  const contact = findContact(name);

    if (contact) {
    
      contact.phone = newPhone;
      contact.email = newEmail;
      console.log("Contact updated successfully.");
      return; 
    }
  
  console.log(`No contact found with the name: ${name}`);
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

// with for loop
 function removeContact(name) {// I need to use another helper function here. because I need to find index of cotact to remove it.

 
  const indexToRemove = findContactIndex; // findIndex, helper function

   if (indexToRemove !== -1) { // if the index is not -1, it means we found the contact.
      contacts.splice(indexToRemove, 1); // we remove the contact from the array by using the splice method.
      console.log("Contact removed successfully.");
    } else {
    console.warn(`No contact found with the name: ${name}`);

  }
  return;
    
  }

  
/*
-----------------------------------------------------------
  STEP 7: Testing Our Functions
-----------------------------------------------------------
Below are some sample function calls to demonstrate the 
Contact Book in action.
*/

console.log('Initial contact list:');
displayAllContacts();

console.log('\nAdding a new contact: Charlie');
addContact('Charlie', '777-777-7777', 'charlie@example.com');
console.log('Initial contact list:');
displayAllContacts();

console.log('\nAdding a new contact: Ece');
addContact('Ece', '555-213-789', 'ece.naz@example.com');
console.log('Initial contact list:');
displayAllContacts();
addContact('Ece', '555-213-789', 'ece.naz@example.com');



console.log("\nViewing Charlie's contact:");
viewContact('Charlie');

console.log("\nViewing Ece's contact:");
viewContact('Ece');



console.log("\nViewing Bob's contact:");
viewContact('Bob');

console.log("\nUpdating Bob's contact:");
updateContact('Bob', '999-999-9999', 'bob@updated.com');





console.log("\nUpdating Charlie's contact:");
updateContact('Charlie', '999-999-1111', 'charlie@updated.com');

console.log("\nUpdating Ece's contact:");
updateContact('Ece', '123-456-987', 'ece@updated.com');


console.log('\nRemoving Alice:');
removeContact('Alice');
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
// 1. Partial Name Search: 

function checkName(name) {
  
  const lowerName = name.toLowerCase();

  for (const contact of contacts) { // We modify the helper function to find contact by partial name.
   
    if (contact.name.toLowerCase().includes(lowerName)) { //.toLowerCase() method is converted to lower case to make the search case insensitive.
      console.log("Contact found:", contact);
      return ; 
    }
  }
  return null; 
}
  

console.log("\nPartial Name Search:");
checkName('Jo');
console.log("\nPartial Name Search:");
checkName('ec');

// 2. Sort Contacts:

function sortContacts(name){
  contacts.sort((a, b) => a.name.localeCompare(b.name)); // sort() method 
  console.log('contacts sorted by name:');
  console.log(contacts);
 
}
console.log("\Sort Contact Search:");
sortContacts('name'); 

// 3. Search by multiple fields:

function searchByField(field) {

for(const contact of contacts) // I do not need to use helper function because I am going to search by multiple fields other than name.
  if (contact.phone === field || contact.email === field) {
    console.log('Contact found:', contact);
    return contact;
  }
    console.log('No contact found with the given field:');
return;
}


console.log("\Search by multiple fields:");
searchByField('john@example.com');
console.log("\Search by multiple fields:");
searchByField('999-999-1111');
console.log("\Search by multiple fields:");
searchByField('555-444-2222');
