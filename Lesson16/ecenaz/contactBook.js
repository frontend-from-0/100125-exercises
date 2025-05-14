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
  for (const contact of contacts) {
    if (name === contact.name) {
      console.log(`Warning: a contact named ${name} already exist`);
      return;
    }
  }
  console.log('Contact is not found, adding the contact!');
  contacts.push({ name, phone, email });
  console.log('Contact added successfully.');
  return contacts;
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
  for (const contact of contacts) {
    if (name === contact.name) {
      console.log(
        `Name: ${contact.name}, Phone: ${contact.phone}, Email: ${contact.email}`,
      );
      return;
    }
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
  for (const contact of contacts) {
    if (name === contact.name) {
      contact.phone = newPhone;
      contact.email = newEmail;
      console.log("Contact updated successfully.");
      return; 
    }
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
 function removeContact(name) {
  let indexToRemove = -1; // we assume the contact is not found so we set it to -1 to indicate that
  let i = 0; // we need to set the index to 0 to start from the first element

   for (let i = 0; i < contacts.length; i++) {
    if (contacts[i].name === name) {
      indexToRemove = i; // we set the index to the current index
      break; // we return to break the loop- I do not use return here because I want to continue the loop below.
    
    }
    i++; // we increment the index
  } 

  if (indexToRemove !== -1) { // if the index is not -1, it means we found the contact
    contacts.splice(indexToRemove, 1); // we remove the contact from the array by using the splice method. 
    console.log("Contact removed successfully.");
    
  }else {
     console.log(`No contact found with the name: ${name} `);
  }
 
} 

// with findIndex() method


/* function removeContact(name) {

 const indexToRemove = contacts.findIndex(contact => contact.name === name);

  if (indexToRemove !== -1) {
  contacts.splice(indexToRemove, 1);
    console.log("Contact removed successfully.");
    }else{
    console.log(`No contact found with the name: ${name}`);
}
    } */
  

 


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
displayAllContacts();

console.log("\nViewing Charlie's contact:");
viewContact('Charlie');

console.log("\nViewing Bob's contact:");
viewContact('Bob');

console.log("\nUpdating Bob's contact:");
updateContact('Bob', '999-999-9999', 'bob@updated.com');

console.log("\nUpdating Charlie's contact:");
updateContact('Charlie', '999-999-1111', 'charlie@updated.com');


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
  for (const contact of contacts) {
    if(contact.name.includes(name)){
      console.log(`Name: ${contact.name}, Phone: ${contact.phone}, Email: ${contact.email}`);
    }else {
      console.log(`No contact found with the name: ${name}`);
    }
return;
  }
  
}
checkName('Alice');
checkName('John');

// 2. Sort Contacts:

function sortContacts(name){
  contacts.sort((a, b) => a.name.localeCompare(b.name)); // sort() method 
  console.log('contacts sorted by name:');
  console.log(contacts);
 
}

sortContacts('name'); 

// 3. Search by multiple fields:

function searchByField(field) {

for (const contact of contacts) {
  if (contact.phone === field || contact.email === field) {
    console.log('Contact found:', contact);
    return contact;
  }
    
}
console.log('No contact found with the given field:', field);
return;
}

searchByField('john@example.com');
searchByField('999-999-1111');
searchByField('555-444-2222');
