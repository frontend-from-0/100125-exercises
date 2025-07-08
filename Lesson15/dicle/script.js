/*
4. Sum of Numbers in a Range (While Loop)
    - Define a function `sumRange(start, end)` that uses a while loop
      to sum all integers from `start` to `end` (inclusive).
    - Log the final sum.
*/

function sumRange(start, end) {
  let sum = 0;
  let i = start;

  while (i <= end) {
    sum += i;
    i++;
  }

  console.log('---Ex.4---', 'Toplam:', sum);
}
sumRange(1, 7);

/*
5. Reverse an Array
   - Define a function `reverseArray(arr)` that reverses the elements
     of an array manually using a for loop (without using .reverse()).
   - Log the reversed array.
*/
function reverseArray(arr) {
  let reversedArray = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    reversedArray.push(arr[i]);
  }
  console.log('---Ex.5---', reversedArray);
}
reverseArray([1, 2, 3, 4, 5]);
/*
6. Filter Out Negative Numbers
   - Define a function `filterNegative(numbers)` that loops through
     an array of numbers and creates a new array without any negative values.
   - Log the new array.
*/

function filterNegative(numbers) {
  let positiveNumbers = [];

  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] >= 0) {
      positiveNumbers.push(numbers[i]);
    }
  }
  console.log('---Ex.6---', positiveNumbers);
}
filterNegative(['dicle', 'semra']);
filterNegative([12, -36, 46, -13, 3]);

/*
7. Double the Values (For-of Loop)
   - Define a function `doubleValues(numbers)` that uses a for-of loop
     to multiply each number by 2, storing results in a new array.
   - Log the new array.
*/
function doubleValues(numbers) {
  let valueNumbers = [];

  for (const number of numbers) {
    let multiply = number * 2;
    valueNumbers.push(multiply);
  }
  console.log('---Ex.7---', valueNumbers);
}
doubleValues([3, 6, 9]);

/*
8. Print Each Character of a String (For-of)
   - Define a function `printCharacters(str)` that uses a for-of loop
     to log each character in the string on a separate line.
*/
function printCharacters(str) {
  let myString = [];
  console.log('---Ex.8---');
  for (const char of str) {
    myString.push(char);

    console.log(char);
  }
}

printCharacters('Dicle ARPAK');

/*
9. Sum All Values in an Object
   - Define a function `sumObjectValues(obj)` that iterates over the
     properties of an object (using a for-in loop) and sums all numeric values.
   - Log the sum.
   - Example: {a: 10, b: 20, c: 5} -> 35
*/
console.log('---Ex.9---');
function sumObjectValues(obj) {
  let sumValue = 0;
  for (let key in obj) {
    sumValue += obj[key];
    console.log(sumValue);
  }
}
sumObjectValues({ a: 10, b: 20, c: 5 });

/*
10. Print Keys of an Object (For-in)
    - Define a function `printObjectKeys(obj)` that uses a for-in loop
      to log each key of the object.
    - Example: { name: "Alice", age: 25 } -> logs "name", then "age"
*/

console.log('---Ex.10---');
function printObjectKeys(obj) {
  for (const key in obj) {
    console.log(key);
  }
}
printObjectKeys({ name: 'Alice', age: 25 });

/*
11. Sum Array Using do-while Loop
    - Define a function `sumWithDoWhile(numbers)` that uses a do-while loop
      to sum all numbers in the array.
    - Log the total.
*/
console.log('---Ex.11---');
function sumWithDoWhile(numbers) {
  let sumOfTheArray = 0;
  let i = 0;
  do {
    sumOfTheArray += numbers[i];
    i++;
  } while (i < numbers.length);
  console.log(sumOfTheArray);
}
sumWithDoWhile([1, 2, 3, 4]);
/*
12. Remove Duplicates from an Array
    - Define a function `removeDuplicates(arr)` that loops through the array
      and creates a new array without duplicate elements.
    - Hint: you could check if the item is already in the new array before pushing.
    - Log the new array without duplicates.
*/

console.log('---Ex.12---');

function removeDuplicates(arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (!newArr.includes(arr[i])) {
      newArr.push(arr[i]);
    }
  }
  console.log(newArr);
}

// Diziyi array olarak gönder
removeDuplicates([1, 1, 2, 2, 3, 3, 4, 4]);
/*
13. Calculate Factorial (For Loop)
    - Define a function `factorial(n)` that calculates n! (n factorial)
      using a for loop.
    - Log the result. 
    - Example: factorial(5) -> 120
*/
console.log('---Ex.13---');
function factorial(n) {
  let result = 1;
  for (let i = 1; i <= n; i++) {
    result *= i;
  }
  console.log(result);
}
factorial(5);
/*
14. String -> Array -> String
    - Define a function `reverseWords(sentence)` that splits the sentence 
      into an array of words, reverses the array order, then joins it back into
      a string. Use loops or built-in methods as you like.
    - Log the reversed sentence.
*/
console.log('---Ex.14---');
function reverseWords(sentence) {
  let myArray = sentence.split(' ');
  console.log(myArray);
  let myReversedArray = myArray.reverse();
  console.log(myReversedArray);
  let myFinalString = myReversedArray.toString();
  console.log(myFinalString);
}
reverseWords('Dicle loves Javascript');
/*
15. Filter Words Longer Than X
    - Define a function `filterLongWords(words, minLength)` that uses a for loop
      to collect only the words that have a length >= minLength.
    - Log the resulting array.
*/
console.log('---Ex.15---');
function filterLongWords(words, minLength) {
  const filteredWords = [];
  for (const word of words) {
    if (word.length >= minLength) {
      filteredWords.push(word);
    }
  }
  console.log(filteredWords);
  return filteredWords;
}
filterLongWords(['purple', 'blue', 'red', 'yellow', 'green'], 4);
/*
16. Log Array Elements with Their Indices
    - Define a function `logElementsWithIndex(arr)` that loops through the array
      and logs "Index: i, Value: arr[i]" for each element.
*/

console.log('---Ex.16---');
function logElementsWithIndex(arr) {
  for (i = 0; i < arr.length; i++) {
    console.log(`Index: ${i}, Value: ${arr[i]}`);
  }
}
logElementsWithIndex(['purple', 'blue', 'red', 'yellow', 'green']);
/*
17. Find the Smallest Number in an Array
    - Define a function `findMin(numbers)` that loops through the array
      to find and return the smallest number.
    - Log the smallest number.
*/
console.log('---Ex.17---');
function findMin(numbers) {
  let smallestNumber = numbers[0];
  for (const number of numbers) {
    if (number < smallestNumber) {
      smallestNumber = number;
    }
  }
  console.log(smallestNumber);
}
findMin([355, -25, 716, -1, 0, 15, -150]);
/*
18. Count Occurrences of a Word in an Array
    - Define a function `countOccurrences(arr, word)` that loops through `arr`
      to count how many times `word` appears.
    - Log the count.
*/

console.log('---Ex.18---');
function countOccurrences(arr, word) {
  let occurenceCount = 0;
  for (const element of arr) {
    if (element === word) {
      occurenceCount += 1;
    }
  }
  console.log(occurenceCount);
}
countOccurrences(['dicle', 'deniz', 'semra', 'deniz'], 'deniz');

/*
19. Remove Falsy Values
    - Define a function `removeFalsyValues(arr)` that loops through an array
      and returns a new array without falsy values (false, 0, "", null, undefined, NaN).
    - Log the new array.
*/
console.log('---Ex.19---');
function removeFalsyValues(arr) {
  let removedFalsyValues = [];
  for (const element of arr) {
    if (element) {
      removedFalsyValues.push(element);
    }
  }
  console.log(removedFalsyValues);
}
removeFalsyValues([
  false,
  'dicle',
  15,
  null,
  [1, 2, 3],
  NaN,
  { name: 'dicle', surname: 'arpak', age: 30 },
]);
/*
20. Sum of All Digits in a String
    - Define a function `sumDigits(str)` that loops through each character of `str`,
      checks if it's a digit, and if so, adds it to a total sum.
    - Log the final sum.
    - Example: "abc123" -> 6
*/

console.log('---Ex.20---');
function sumDigits(str) {
  let sum = 0;
  for (const char of str) {
    if (!isNaN(char) && char >= '0' && char <= '9') {
      sum += Number(char);
    }
  }
  console.log(sum);
}
sumDigits('abc123');

/*
21. Average of Array Elements
    - Define a function `averageArray(numbers)` that uses a loop
      to calculate the average (sum / length).
    - Log the average.
*/
console.log('---Ex.21---');
function averageArray(numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  const average = sum / numbers.length;
  console.log(sum);
  console.log(average);
}
averageArray([1, 2, 3, 4, 5, 6]);

/*
22. Flatten a 2D Array (Nested Loops)
    - Define a function `flattenArray(twoDArray)` that takes an array of arrays
      (e.g., [[1,2],[3,4]]) and uses nested loops to create a new one-dimensional array.
    - Log the flattened array.
*/
console.log('---Ex.22---');
let flattenedArray = [];
function flattenArray(twoDArray) {
  for (let i = 0; i < twoDArray.length; i++) {
    if (Array.isArray(twoDArray[i])) {
      flattenArray(twoDArray[i]);
    }
    console.log(twoDArray);
  }
}
flattenArray([
  [1, 2],
  [3, 4],
]);
/*
23. Find Words Containing a Letter
    - Define a function `findWordsWithLetter(words, letter)` that loops through
      an array of words and returns a new array of only the words that contain
      the given letter.
    - Log the filtered array.
*/
console.log('---Ex.23---');
function findWordsWithLetter(words, letter) {
  let filteredArray = [];
  for (const word of words) {
    if (word.includes(letter)) {
      filteredArray.push(word);
    }
  }
  console.log(filteredArray);
}
findWordsWithLetter(['dicle', 'deniz', 'semra'], 'e');

/*
24. Push and Pop Operations
    - Define a function `pushPopExample(arr, itemToPush)` that:
      - pushes itemToPush to arr
      - logs the updated array
      - then pops the last element
      - logs the popped element
      - logs the final array
*/
console.log('---Ex.24---');
function pushPopExample(arr, itemToPush) {
  arr.push(itemToPush);
  console.log(arr);
  const poppedArray = arr.pop();
  console.log(poppedArray);

  console.log(arr);
}
pushPopExample([1, 2, 3], 4);
/*
25. Push and Shift Operations
    - Define a function `manageQueue(queue, newPerson)` that:
      - push `newPerson` to the end of `queue`
      - logs the updated queue
      - shifts (removes) the first person in the queue
      - logs the removed person
      - logs the final queue
*/
console.log('---Ex.25---');
function manageQueue(queue, newPerson) {
  queue.push(newPerson);
  console.log(queue);
  const shiftedPerson = queue.shift();
  console.log(shiftedPerson);

  console.log(queue);
}
manageQueue(['dicle', 'deniz', 'baran', 'semra'], 'mahmut');
/*
26. To-Do List Application 
  - Define a function `updateTodoList(todoList, startIndex, deleteCount, ...newTasks)`:
   - Logs the current list of tasks.
   - Removes `deleteCount` tasks starting at `startIndex`.
   - Inserts any new tasks at the end of the array.
   - Logs the updated list.
*/
console.log('---Ex.26---');

function updateTodoList(todoList, startIndex, deleteCount, ...newTasks) {
  // const todoList = ['Study JS', 'Eat breakfast', 'Walk dog'];
  console.log('Current To-Do List:', todoList);
  todoList.splice(startIndex, deleteCount);
  todoList.push(...newTasks);
  console.log('Updated To-Do List:', todoList);
}

updateTodoList(
  ['Study JS', 'Eat breakfast', 'Walk dog'],
  2,
  2,
  'Watch a movie',
  'Read book',
  'Water the plants'
);
