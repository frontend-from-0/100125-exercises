/*
4. Sum of Numbers in a Range (While Loop)
    - Define a function `sumRange(start, end)` that uses a while loop
      to sum all integers from `start` to `end` (inclusive).
    - Log the final sum.
*/
function sumRange(start, end) {
  let sum = 0;
  let current = start;

  while (current <= end) {
    sum += current;
    current++;
  }

  console.log(`Sum from ${start} to ${end} is: ${sum}`);
}
sumRange(1, 5);

/*
5. Reverse an Array
   - Define a function `reverseArray(arr)` that reverses the elements
     of an array manually using a for loop (without using .reverse()).
   - Log the reversed array.
*/
function reverseArray(arr) {
  const reversedArr = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    reversedArr.push(arr[i]);
  }
  console.log("Reversed array:", reversedArr);
  const originalArray = [10, 20, 30];
  reverseArray(originalArray); // Output: Reversed array: [ 30, 20, 10 ]
}

/*'
6. Filter Out Negative Numbers
 - Define a function `filterNegative(numbers)` that loops through
     an array of numbers and creates a new array without any negative values.
    - Log the new array.
 */
function filterNegativeEasy(numbers) {
  const positiveNumbers = numbers.filter(number => number >= 0);
  console.log("Pozitif sayılar:", positiveNumbers);
}

const easynumber = [-5, 2, -1, 8, 0, -3];
filterNegativeEasy(easynumber);

/*
7. Double the Values (For-of Loop)
   - Define a function `doubleValues(numbers)` that uses a for-of loop
     to multiply each number by 2, storing results in a new array.
   - Log the new array.
*/
function doubleValues(numbers) {
  const doubledNumbers = [];
  for (const number of numbers) {
    doubledNumbers.push(number * 2);
  }
  console.log("Doubled values:", doubledNumbers);
}
const numbers = [1, 2, 3, 4, 5];
doubleValues(numbers);
const otherNumbers = [-1, 0, 5, -3];
doubleValues(otherNumbers);

/*
8. Print Each Character of a String (For-of)
   - Define a function `printCharacters(str)` that uses a for-of loop
     to log each character in the string on a separate line.
*/
function printCharacters(str) {
  for (let char of str) {
    console.log(char);
  }
}

printCharacters("Hello");
printCharacters("World");

/*
9. Sum All Values in an Object
   - Define a function `sumObjectValues(obj)` that iterates over the
     properties of an object (using a for-in loop) and sums all numeric values.
   - Log the sum.
   - Example: {a: 10, b: 20, c: 5} -> 35
*/
function sumObjectValues(obj) {
  let sum = 0;
  for (let key in obj) {
    if (typeof obj[key] === 'number') {
      sum += obj[key];
    }
  }
  console.log(sum);  // Log the sum here
}

const myObject = { a: 10, b: 20, c: 5 };
sumObjectValues(myObject);  // Output will be 35

/*
10. Print Keys of an Object (For-in)
    - Define a function `printObjectKeys(obj)` that uses a for-in loop
      to log each key of the object.
    - Example: { name: "Alice", age: 25 } -> logs "name", then "age"
*/
function printObjectKeys(obj) {
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      console.log(key);
    }
  }
}
const person = { name: "Alice", age: 25 };
printObjectKeys(person);


/*
11. Sum Array Using do-while Loop
    - Define a function `sumWithDoWhile(numbers)` that uses a do-while loop
      to sum all numbers in the array.
    - Log the total.
*/
function sumWithDoWhile(numbers) {
  let sum = 0;
  let i = 0;
  do {
    sum += numbers[i];
    i++;
  } while (i < numbers.length);

  console.log("Toplam:", sum);
  return sum;
}

sumWithDoWhile([3, 7, 2, 5]);  // sum total: 17

/*
12. Remove Duplicates from an Array
    - Define a function `removeDuplicates(arr)` that loops through the array
      and creates a new array without duplicate elements.
    - Hint: you could check if the item is already in the new array before pushing.
    - Log the new array without duplicates.
*/
function removeDuplicates(arr) {
  const uniqueArray = [];
  for (let i = 0; i < arr.length; i++) {
    if (!uniqueArray.includes(arr[i])) {
      uniqueArray.push(arr[i]);
    }
  }
  console.log("Unique array:", uniqueArray);
}
const numbersWithDuplicates = [1, 2, 2, 3, 4, 4, 5];
removeDuplicates([1, 2, 2, 3, 4, 4, 5]);
/*
13. Calculate Factorial (For Loop)
    - Define a function `factorial(n)` that calculates n! (n factorial)
      using a for loop.
    - Log the result. 
    - Example: factorial(5) -> 120
*/
function factorial(n) {
  let result = 1;
  for (let i = 1; i <= n; i++) {
    result *= i;
  }
  console.log(`Factorial of ${n} is: ${result}`);
}
factorial(5);  // Output: Factorial of 5 is: 120
factorial(0);  // Output: Factorial of 0 is: 1
factorial(1);  // Output: Factorial of 1 is: 1
/*
14. String -> Array -> String
    - Define a function `reverseWords(sentence)` that splits the sentence 
      into an array of words, reverses the array order, then joins it back into
      a string. Use loops or built-in methods as you like.
    - Log the reversed sentence.
*/
function reverseWords(sentence) {
  const words = sentence.split(" ");
  const reversedWords = [];
  for (let i = words.length - 1; i >= 0; i--) {
    reversedWords.push(words[i]);
  }
  const reversedSentence = reversedWords.join(" ");
  console.log(reversedSentence);
}
reverseWords("Bu bir test cümlesi");
reverseWords("JavaScript öğreniyorum");
/*
15. Filter Words Longer Than X
    - Define a function `filterLongWords(words, minLength)` that uses a for loop
      to collect only the words that have a length >= minLength.
    - Log the resulting array.
*/
function filterLongWords(words, minLength) {
  const longWords = [];
  for (let i = 0; i < words.length; i++) {
    if (words[i].length >= minLength) {
      longWords.push(words[i]);
    }
  }
  console.log("Filtered words:", longWords);
}
filterLongWords(["apple", "Pinar", "awesome", "AI"], 4);
/*
16. Log Array Elements with Their Indices
    - Define a function `logElementsWithIndex(arr)` that loops through the array
      and logs "Index: i, Value: arr[i]" for each element.
*/
function logElementsWithIndex(arr) {
  for (let i = 0; i < arr.length; i++) {
    console.log(`Index: ${i}, Value: ${arr[i]}`);
  }
}
logElementsWithIndex(["table", "door", "windows", "car"]);
/*
17. Find the Smallest Number in an Array
    - Define a function `findMin(numbers)` that loops through the array
      to find and return the smallest number.
    - Log the smallest number.
*/
function findMin(numbers) {
  let min = numbers[0];
  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] < min) {
      min = numbers[i];
    }
  }
  console.log("Smallest number:", min);
}
findMin([1, 2, 3, 4, 5]);
/*
18. Count Occurrences of a Word in an Array
    - Define a function `countOccurrences(arr, word)` that loops through `arr`
      to count how many times `word` appears.
    - Log the count.
*/
function countOccurrences(arr, word) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === word) {
      count++;
    }
  }
  console.log(`The word "${word}" appears ${count} times.`);
}

countOccurrences(["apple", "banana", "apple", "orange", "banana"], "apple");
/*
19. Remove Falsy Values
    - Define a function `removeFalsyValues(arr)` that loops through an array
      and returns a new array without falsy values (false, 0, "", null, undefined, NaN).
    - Log the new array.
*/
function removeFalsyValues(arr) {
  const truthyArray = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i]) {
      truthyArray.push(arr[i]);
    }
  }
  console.log("Array without falsy values:", truthyArray);
}

removeFalsyValues([0, "hello", false, "", 42, null, "world", undefined, NaN]);

/*
20. Sum of All Digits in a String
    - Define a function `sumDigits(str)` that loops through each character of `str`,
      checks if it's a digit, and if so, adds it to a total sum.
    - Log the final sum.
    - Example: "abc123" -> 6
*/
function sumDigits(str) {
  let sum = 0;
  for (let i = 0; i < str.length; i++) {
    if (!isNaN(str[i]) && str[i] !== " ") {
      sum += Number(str[i]);
    }
  }
  console.log("Sum of digits:", sum);
}

sumDigits("abc123"); // Output: 6

/*
21. Average of Array Elements
    - Define a function `averageArray(numbers)` that uses a loop
      to calculate the average (sum / length).
    - Log the average.
*/
function averageArray(numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  let average = sum / numbers.length;
  console.log("Average:", average);
}

averageArray([10, 20, 30, 40]); // Output: 25

/*
22. Flatten a 2D Array (Nested Loops)
    - Define a function `flattenArray(twoDArray)` that takes an array of arrays
      (e.g., [[1,2],[3,4]]) and uses nested loops to create a new one-dimensional array.
    - Log the flattened array.
*/
function flattenArray(twoDArray) {
  const flat = [];
  for (let i = 0; i < twoDArray.length; i++) {
    for (let j = 0; j < twoDArray[i].length; j++) {
      flat.push(twoDArray[i][j]);
    }
  }
  console.log("Flattened array:", flat);
}
flattenArray([[1, 2], [3, 4]]); // Output: [1, 2, 3, 4]

/*
23. Find Words Containing a Letter
    - Define a function `findWordsWithLetter(words, letter)` that loops through
      an array of words and returns a new array of only the words that contain
      the given letter.
    - Log the filtered array.
*/
function findWordsWithLetter(words, letter) {
  const result = [];
  for (let i = 0; i < words.length; i++) {
    if (words[i].includes(letter)) {
      result.push(words[i]);
    }
  }
  console.log("Words containing", letter + ":", result);
}

findWordsWithLetter(["apple", "banana", "cherry"], "a");

/*
24. Push and Pop Operations
    - Define a function `pushPopExample(arr, itemToPush)` that:
      - pushes itemToPush to arr
      - logs the updated array
      - then pops the last element
      - logs the popped element
      - logs the final array
*/
function pushPopExample(arr, itemToPush) {
  arr.push(itemToPush);
  console.log("After push:", arr);
  const popped = arr.pop();
  console.log("Popped item:", popped);
  console.log("Final array:", arr);
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
function manageQueue(queue, newPerson) {
  queue.push(newPerson);
  console.log("Queue after adding:", queue);
  const removed = queue.shift();
  console.log("Removed from front:", removed);
  console.log("Final queue:", queue);
}

manageQueue(["Alice", "Bob"], "Charlie");

/*
26. To-Do List Application 
  - Define a function `updateTodoList(todoList, startIndex, deleteCount, ...newTasks)`:
   - Logs the current list of tasks.
   - Removes `deleteCount` tasks starting at `startIndex`.
   - Inserts any new tasks at the end of the array.
   - Logs the updated list.
*/
function updateTodoList(todoList, startIndex, deleteCount, ...newTasks) {
  let todoList = ["Study JS", "Eat breakfast", "Walk dog"];
  console.log("Original list:", todoList);
  todoList.splice(startIndex, deleteCount); // remove items
  todoList.push(...newTasks);              // add new tasks at end
  console.log("Updated list:", todoList);
}
const todoList = ["Study JS", "Eat breakfast", "Walk dog"]; // REMOVE or comment out if already declared above
updateTodoList(todoList, 1, 1, "Write code", "Read a book");