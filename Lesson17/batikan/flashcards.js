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
  console.log('All available flashcards:');
  console.log()
  let maxQuestionLength = 0;
  let maxAnswerLength = 0;
  for (const flashcard of flashcards) {
    if (flashcard.question.length > maxQuestionLength){
      maxQuestionLength = flashcard.question.length;
    }
    if (flashcard.answer.length > maxAnswerLength){
      maxAnswerLength = flashcard.answer.length;
    }
  }
    

maxQuestionLength += 2;
maxAnswerLength += 2;


  for(const flashcard of flashcards){
      const paddedQuestion = flashcard.question.padEnd(maxQuestionLength, ' ');
      const paddedAnswer = flashcard.answer.padEnd(maxAnswerLength, ' ');
      const topicInfo = flashcard.topic ? `[Topic: \'${flashcard.topic}\']` : '[No topic]';
      console.log(` ${paddedQuestion} --- ${paddedAnswer} --- ${topicInfo}`);
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

/*Now question and all the answers appearing at the same time.*/

function practiceFlashcard(index) {
  if (index >= 0 && index < flashcards.length) {
    setTimeout(() => {
      console.log('-------');
      console.log();
      console.log('Question: ', flashcards[index].question);
      console.log();
      console.log('The answer is:', flashcards[index].answer);
    }, 3000);
    } else {
    setTimeout( () => {
    console.log(`*** Invalid Index: Flashcard with index \'${index}\' is not in the list. Use index from 0 to ${flashcards.length - 1} ***`);
    console.log();
    console.log('-------');
    },3000);
  }
}

practiceFlashcard(2);
practiceFlashcard(5);
/*
-----------------------------------------------------------
  STEP 5: Update a Flashcard
-----------------------------------------------------------
Function: updateFlashcard(question, newQuestion, newAnswer)
- Finds flashcard by question and updates it.
- Logs if updated or not found.
*/

function updateFlashcard(question, newQuestion, newAnswer){
  for(let i = 0; i < flashcards.length; i++){
    if (flashcards[i].question === question){
      setTimeout(() => {
      console.log();
      console.log(` Question: \'${question}\' is found. Wait a second..`);
      flashcards[i].question = newQuestion;
      flashcards[i].answer = newAnswer;
      }, 3500);
      setTimeout(() => {
        console.log(`New question '${newQuestion}' and new answer '${newAnswer}' have been set.`);
        console.log();
      }, 4000);
      
      setTimeout(() => {
        showAllFlashcards();
        console.log('------')
      }, 4500);
      
      return;
    }
  }
  setTimeout(() => {      
  console.log();
  console.log(`'${question}' is not found.`);    
}, 3500);
}
 
updateFlashcard('What is HTML?', 'What is C++?', 'C++ is a high-level, general-purpose programming language');
updateFlashcard('What is C#', 'What is Java?', 'Java is a high-level, general-purpose, memory-safe, object-oriented programming language.');


/*
-----------------------------------------------------------
  STEP 6: Remove a Flashcard
-----------------------------------------------------------
Function: removeFlashcard(question)
- Finds the index of the flashcard and removes it.
- Logs if removed or not found.
*/

function removeFlashcard(question){
  console.log();
  setTimeout(() => {
  for(let i = 0; i < flashcards.length; i++){
    if (flashcards[i].question === question){
      let foundQuestion = flashcards.indexOf(flashcards[i])
      flashcards.splice(foundQuestion, 1)
      console.log();
      console.log(`Question: \'${question}\' has been removed`)
      console.log();
      return;
      } 
    }
      console.log(`Question: \'${question}\' is not found.`)
      showAllFlashcards();
      console.log('------')
    }, 5000)
  }
 

removeFlashcard('What does CSS do?');
removeFlashcard('What is compiled mean?');


/*CHOOSE A RANDOM FLASHCARD EACH TIME */

function getRandomFlashcard() {
  setTimeout(() => {
  console.log();
  console.log('Selecting a random flashcard...');
  
  const randomIndex = Math.floor(Math.random() * flashcards.length);
  const randomCard = flashcards[randomIndex];
  
  console.log(`Selected card #${randomIndex}: \"${randomCard.question}\"`);
  }, 6000);
}

getRandomFlashcard();

/* ADDING TOP OR TOPIC TO FLASHCARD */

function addTopic(cardIndex, topic){
  setTimeout(() => {
  console.log();
      if (cardIndex < 0 || cardIndex >= flashcards.length || typeof cardIndex !== 'number'){
      console.log(`\'${cardIndex}\' is not a number or index can't found. Please enter a number between '0' and \'${flashcards.length - 1}\'`);
      return;
    } 

  flashcards[cardIndex].topic = topic;
  console.log(`Topic name: \'${topic}\` is added.`);
  showAllFlashcards();
  console.log();
  console.log('------')
  }, 6000);
}

addTopic(4, 'HTML')
addTopic(1, 'JS');


/* FLIP MODE */

function flipCards(cardIndex){  
      console.log();
      if (cardIndex < 0 || cardIndex >= flashcards.length || typeof cardIndex !== 'number'){
        setTimeout(() => {
      console.log();
      console.log(`\'${cardIndex}\' is not a number or index can't found. Please enter a number between '0' and \'${flashcards.length - 1}\'`);
  }, 6500);
      return  } else {
        setTimeout(() => {
      if (cardIndex >= 0 || cardIndex < flashcards.length){
      console.log();
      console.log(`Question: \'${flashcards[cardIndex].question}\'`);
    }
  }, 7000);
        setTimeout(() => {
      console.log(`Answer: \'${flashcards[cardIndex].answer}\'`)
  },8000);
    } 
}



flipCards(3);
flipCards(1);
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
