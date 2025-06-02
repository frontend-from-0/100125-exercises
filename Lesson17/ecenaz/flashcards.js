/*
===========================================================
  FLASHCARD PRACTICE APP
===========================================================
In this project, you'll create a Flashcard app to store
and practice study questions and answers.

You'll practice:
1. Arrays and objects
2. Loops (for, for-of, etc.)
3. Conditionals (if-else)
4. Basic CRUD (Create, Read, Update, Delete) functionality
*/

/*
-----------------------------------------------------------
  STEP 1: Setup and Initial Data
-----------------------------------------------------------
1. Create an array named 'flashcards' with a few sample
   questions and answers.
2. Each flashcard is an object with 'question' and 'answer'.
*/

const flashcards = [
  {
    question: 'What is HTML?',
    answer: 'A language for making web pages',
  },
  {
    question: 'What does CSS do?',
    answer: 'Styles the web page',
  },
];


function printAlignedFlashcards(flashcards) { // This function will be the helper function to print the flashcards with aligned. // I planned to use it in the other functions.
   const maxLength = flashcards.reduce((max, card) => { // I use reduce to calculate the maximum length of the questions.
    return Math.max(max, card.question.length); // Math.max is used to find the maximum length.
  }, 0); // 0 is the initial value for the max length.

  flashcards.forEach(card => { // forEach is used to loop over each flashcard.
    const paddedQuestion = card.question.padEnd(maxLength, ' '); // padEnd is used to add spaces to the end of the question with the maximum lngth.
    console.log(`${paddedQuestion} | ${card.answer}`); // I use template literals to print the question and nswer with a separator.
  });

}

/*
-----------------------------------------------------------
  STEP 2: Show All Flashcards
-----------------------------------------------------------
Function: showAllFlashcards()
- Loops over the 'flashcards' array.
- Logs the question and answer for each card.
- HOMEWORK: Make questions equal in length so it's easier to read output
*/
function showAllFlashcards() {
   console.log('All available flashcards:');
  printAlignedFlashcards(flashcards);
  console.log();
 
}
showAllFlashcards();

/*
-----------------------------------------------------------
  STEP 3: Add a New Flashcard
-----------------------------------------------------------
Function: addFlashcard(question, answer)
- Creates a new flashcard object and adds it to 'flashcards'.
- Checks if a flashcard with the same question already exists.
- Logs a message if added or if already exists.
*/
function addFlashcard(question, answer) { // I do not use helper function here. because I want to add a new card so it is pointless to use it in here.

  console.log();
  console.log('Adding a new flashcards...');
 

  const flashcard = {
    question: question,
    answer: answer,
  }; // is the same as: const flashcard = {question, answer};

  for (const card of flashcards) {
    if (card.question === question) {
      console.log(`Flashcard with question \'${question}\' already exists`);
      return;
    }
  }
  flashcards.push(flashcard);
  console.log(`Added a new flashcard with question: \'${question}\'`);
  console.log();
}

addFlashcard('What is HTML?', 'A language for making web pages');
addFlashcard('What is JS?', 'A programming language');

showAllFlashcards();

/*
-----------------------------------------------------------
  STEP 4: Practice Flashcard
-----------------------------------------------------------
Function: practiceFlashcard(index)
- Shows the question at a given index.
- Waits for user to "flip" (just simulate it here).
- Shows the answer.

NOTE: For simplicity, we'll just log both.
*/


function practiceFlashcard(index, delayInSeconds) {
  if (index >= 0 && index < flashcards.length) {
    console.log(`Question: ${flashcards[index].question}`);

    setTimeout(() => {
      console.log(`Answer: ${flashcards[index].answer}`);
      console.log('----------------');
    }, delayInSeconds * 1000);
  } else {
    console.log(`Invalid index. Use a number from 0 to ${flashcards.length - 1}`);
  }
}


practiceFlashcard(0, 2);

/*
-----------------------------------------------------------
  STEP 5: Update a Flashcard
-----------------------------------------------------------
Function: updateFlashcard(question, newQuestion, newAnswer)
- Finds flashcard by question and updates it.
- Logs if updated or not found.
*/
function updateFlashcard(question, newQuestion, newAnswer) {
  const flashcard = flashcards.findIndex(card => card.question === question);


  if(flashcard !== -1) { // If the flashcard is found update it.
    flashcards[flashcard].question = newQuestion;
    flashcards[flashcard].answer = newAnswer;
    console.log(`Flascard with question \'${question}\' update to: \'${newQuestion}\' with answer: \'${newAnswer}\'`);


  }else {
    console.log(`No flashcard found with question: \'${question}\'`);

  }


}
updateFlashcard('What is HTML?', 'Why is HTML important?', 'HTML is the backbone of web pages');
showAllFlashcards();

/*
-----------------------------------------------------------
  STEP 6: Remove a Flashcard
-----------------------------------------------------------
Function: removeFlashcard(question)
- Finds the index of the flashcard and removes it.
- Logs if removed or not found.
*/
function removeFlashcard(question) {
  const flashcardIndex = flashcards.findIndex(card => card.question === question);

  if(flashcardIndex !== -1) { // If the flashcard is found remmove it.
    flashcards.splice(flashcardIndex, 1); // splice is used to remove the flashcard from the array.
    console.log(`Flashcard with question "${question}" removed successfully.`);

    
  }else {
    console.log(`Flashcard with question "${question}" not found.`);
  }

}
removeFlashcard('What is JS?');
showAllFlashcards();
removeFlashcard('Which is not programming language?');


/*
-----------------------------------------------------------
  STEP 7: Test the App
-----------------------------------------------------------
Use these function calls to test your app.
*/

console.log('------------');


console.log('Testing the Flashcards App: ');

showAllFlashcards();
addFlashcard('What is React?', 'A JavaScript library for building user interfaces');
console.log('-------------------');
showAllFlashcards();

console.log('Practicing flashcards: ');
practiceFlashcard(0, 5);
console.log('--------------------');
console.log('Practicing flashcard with invalid index: ');
practiceFlashcard(10, 5); // This should show an error message for invalid index.

console.log('Updating a flashcard: ');
updateFlashcard('What is CSS?', 'What does CSS do?', 'CSS styles the web page and makes it look good');
updateFlashcard('Why is HTML important?', 'What is HTML?', 'HTML is the substance of web pages.');
showAllFlashcards();

console.log('Removing a flashcard: ');
removeFlashcard('What is HTML?');
removeFlashcard('What is React?');
showAllFlashcards();


// I want to add additional questions and answers to the flashcards array beacause There are not enough questions to practice following tasks.
console.log('Adding more flashcards: ');

addFlashcard('What is React?', 'A JavaScript library for building user interfaces');
addFlashcard('What is HTML?', 'HTML is the backbone of web pages.');
addFlashcard('What is JS?', 'JS is a programming language used to create dynamic web pages.');
addFlashcard('What is VS Code do?', 'A code editor for writing and editing code.');
showAllFlashcards();

/*
-----------------------------------------------------------
  OPTIONAL ENHANCEMENTS:
-----------------------------------------------------------
1. Random Practice:
   - Choose a random flashcard each time.


2. Category or Topic Tag:
   - Add tags like "HTML", "JS", "CSS" to flashcards.

3. Flip Mode:
   - First show only question, then show answer after delay.
*/

console.log('RANDOM PRACTICE: ');

function randomPractice() {
  const randomIndex = Math.floor(Math.random() * flashcards.length) // Generate a random index based on the length of the flashcards.
  console.log('Randomly selected flashcard: ');


  if (flashcards.length === 0) {
    console.log('No flashcards available for random practice.'); // If there are no flashcards, return a message.
    return;

  }
  console.log(`Question: ${flashcards[randomIndex].question} |  Answer:  ${flashcards[randomIndex].answer}`);
  return;

}

randomPractice();

console.log('CATEGORY PRACTICE: ');



function addTagsToFlashcards(flashcards) {
  
  flashcards.forEach(card => {
    const lowerCaseQuestion = card.question.toLowerCase(); // Convert the question to Lowercase for case-sensitive matching.

    
    if (lowerCaseQuestion.includes("html")) {
      card.tag = "HTML";
    } else if (lowerCaseQuestion.includes("css")) {
      card.tag = "CSS";
    } else if (lowerCaseQuestion.includes("javascript") || lowerCaseQuestion.includes("js")) {
      card.tag = "JavaScript";
    }else if (lowerCaseQuestion.includes("VS Code") || lowerCaseQuestion.includes("vs code")) {
      card.tag = "Vs Code";
    } else {
      card.tag = "Genel"; //If no specitic tag is found assign this tag.
    }
  });
  console.log('Tags added to flashcards: ')
}


addTagsToFlashcards(flashcards);
console.log(flashcards);






