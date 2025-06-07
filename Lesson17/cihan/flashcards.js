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
  console.log('All available flashcard:');
  const maxLength = Math.max(...flashcards.map(fc => fc.question.length));
  for (const flashcard of flashcards) {
    const paddedQuestion = flashcard.question.padEnd(maxLength + 2, ' ');
    console.log(`${paddedQuestion} --- ${flashcard.answer} [${flashcard.tag}]`);
  }
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
function addFlashcard(question, answer) {
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


function addFlashcard(question, answer, tag = 'General') {
  console.log('\nAdding a new flashcard...');

  const exists = flashcards.some(card => card.question === question);
  if (exists) {
    console.log(`Flashcard with question '${question}' already exists.`);
    return;
  }

  flashcards.push({ question, answer, tag });
  console.log(`Added a new flashcard with question: '${question}'`);
}

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

function practiceFlashcard(index) {
  if (index >= 0 && index < flashcards.length) {
    console.log('Question: ', flashcards[index].question);
    setTimeout(
      () => console.log('The answer is:', flashcards[index].answer)
    , 3000);

  } else {
    console.log(`Flashcard with index ${index} is not in the list. Use index from 0 to ${flashcards.length - 1}`);
  }
}

practiceFlashcard(2);
console.log('---');
practiceFlashcard(5);


function practiceFlashcard(index) {
  if (index >= 0 && index < flashcards.length) {
    console.log(`\nQuestion: ${flashcards[index].question}`);
    console.log('...thinking...');
    setTimeout(() => {
      console.log(`Answer: ${flashcards[index].answer}\n`);
    }, 3000);
  } else {
    console.log(`Invalid index. Please use 0 - ${flashcards.length - 1}`);
  }
}
/*
-----------------------------------------------------------
  STEP 5: Update a Flashcard
-----------------------------------------------------------
Function: updateFlashcard(question, newQuestion, newAnswer)
- Finds flashcard by question and updates it.
- Logs if updated or not found.
*/
function updateFlashcard(question, newQuestion, newAnswer, newTag) {
  let found = false;
  for (const card of flashcards) {
    if (card.question === question) {
      card.question = newQuestion;
      card.answer = newAnswer;
      card.tag = newTag || card.tag;
      console.log(`Updated flashcard: '${question}'`);
      found = true;
      break;
    }
  }

  if (!found) {
    console.log(`Flashcard with question '${question}' not found.`);
  }
}
/*
-----------------------------------------------------------
  STEP 6: Remove a Flashcard
-----------------------------------------------------------
Function: removeFlashcard(question)
- Finds the index of the flashcard and removes it.
- Logs if removed or not found.
*/
function removeFlashcard(question) {
  const index = flashcards.findIndex(card => card.question === question);
  if (index !== -1) {
    flashcards.splice(index, 1);
    console.log(`Removed flashcard with question: '${question}'`);
  } else {
    console.log(`Flashcard with question '${question}' not found.`);
  }
}
/*
-----------------------------------------------------------
  STEP 7: Test the App
-----------------------------------------------------------
Use these function calls to test your app.
*/
showAllFlashcards();

addFlashcard('What is JS?', 'A programming language', 'JS');
addFlashcard('What is the DOM?', 'Document Object Model', 'JS');
addFlashcard('What is JS?', 'Duplicate check', 'JS'); // duplicate check

showAllFlashcards();

practiceFlashcard(2);

updateFlashcard('What is JS?', 'What is JavaScript?', 'A powerful scripting language', 'JavaScript');
showAllFlashcards();

removeFlashcard('What does CSS do?');
showAllFlashcards();

practiceRandomFlashcard();

showFlashcardsByTag('JS');
showFlashcardsByTag('CSS');
/*
-----------------------------------------------------------
  OPTIONAL ENHANCEMENTS:
-----------------------------------------------------------
*/
/*
1. Random Practice:
   - Choose a random flashcard each time.
   */
function practiceRandomFlashcard() {
  const index = Math.floor(Math.random() * flashcards.length);
  practiceFlashcard(index);
}

/*
2. Category or Topic Tag:
   - Add tags like "HTML", "JS", "CSS" to flashcards.
   */
  function showFlashcardsByTag(tag) {
  console.log(`\nFlashcards with tag: ${tag}`);
  const filtered = flashcards.filter(card => card.tag.toLowerCase() === tag.toLowerCase());
  if (filtered.length === 0) {
    console.log('No flashcards found with that tag.');
    return;
  }
  for (const card of filtered) {
    console.log(`${card.question} --- ${card.answer}`);
  }
}
/*
3. Flip Mode:
   - First show only question, then show answer after delay.
*/
function flipFlashcard(index) {
  if (index >= 0 && index < flashcards.length) {
    console.log(`\nQuestion: ${flashcards[index].question}`);
    console.log('Press ENTER to flip the card...');
    
    setTimeout(() => {
      console.log(`Answer: ${flashcards[index].answer}\n`);
    }, 5000);
  } else {
    console.log('Invalid index.');
  }
}
