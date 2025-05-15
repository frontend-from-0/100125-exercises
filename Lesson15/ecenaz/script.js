/*
1. Sum Array Elements with a For Loop
   - Define a function `sumArray(numbers)` that uses a for loop
     to sum all elements in an array of numbers.
   - Log the final sum.
*/

const ex1Array = [1, 3, 6, 123, 500, -10, -1000];

function sumArray(numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum = sum + numbers[i];
  }
  console.log(sum);
}

sumArray(ex1Array);
sumArray([0, 0, 0, 5]);

/*
2. Find Maximum Number in an Array
   - Define a function `findMax(numbers)` that uses a for loop to iterate
     through an array and find the largest value.
   - Log the largest value.
*/

function findMax(numbers) {
  let maxNumber = numbers[0];
  for (let i = 0; i < numbers.length; i++) {
    if (maxNumber < numbers[i]) {
      maxNumber = numbers[i];
    }
  }
  console.log("-------EX. 2-------");
  console.log(maxNumber);
  console.log("-------EX. 2-------");
}

findMax(ex1Array);

/*
3. Count Odd and Even Numbers
   - Define a function `countOddEven(numbers)` that loops through an array
     of numbers and counts how many are odd and how many are even.
   - Log the counts in the format: "Odd: X, Even: Y"
   
*/
function countOddEven(numbers) {
  let oddNumbers = 0;
  let evenNumbers = 0;

  for (let i = 0; i < numbers.length; i++) {
    const currentElement = numbers[i];
    console.log("Current element", currentElement, "Current index", i);

    console.log("currentElement % 2 === 1", currentElement % 2 === 1);
    if (currentElement % 2 === 1) {
      console.log("In the currentElement % 2 === 1 condition.");
      oddNumbers = oddNumbers + 1;
    } else if (currentElement % 2 === 0) {
      evenNumbers = evenNumbers + 1;
    }
  }
  console.log(`Odd: ${oddNumbers}, Even: ${evenNumbers}`);
}

function countOddEvenV2(numbers) {
  let oddNumbers = 0;
  let evenNumbers = 0;

  for (let i = 0; i < numbers.length; i++) {
    if (typeof numbers[i] === "number") {
      if (numbers[i] % 2 === 1) {
        oddNumbers = oddNumbers + 1;
      } else {
        evenNumbers = evenNumbers + 1;
      }
    }
  }
  console.log(`Odd: ${oddNumbers}, Even: ${evenNumbers}`);
}
countOddEvenV2([3, "hello", 5, 13]);
countOddEven([5, 4, 6, 5, 13]);

/*
4.  Sum of Numbers in a Range (While Loop)
    - Define a function `sumRange(start, end)` that uses a while loop
      to sum all integers from `start` to `end` (inclusive).
    - Log the final sum.

*/
function sumRange(start, end) {
  let sum = 0;
  let i = start; // initialize i to start
  while (i <= end) {
    sum = sum + i; // add i to sum
    i++;
  }
  console.log('---EX4---', sum);
  return sum;
}
sumRange(1, 20);
sumRange(1, 5);

 /* 

5. Reverse an Array
   - Define a function `reverseArray(arr)` that reverses the elements
     of an array manually using a for loop (without using .reverse()).
   - Log the reversed array.
*/

// Add ! at the end of every element in array
const colors = ["red", "green", "blue"];

function reverseArray(arr) {
  let updatedArray = [];
  for (let i= arr.length -1; i>= 0; i--) { 
    updatedArray.push(element + "!");
  
  }
  console.log('-----EX. 5-------');
  console.log(updatedArray);
  return updatedArray;
}

reverseArray(colors);
/*
6. Filter Out Negative Numbers
   - Define a function `filterNegative(numbers)` that loops through
     an array of numbers and creates a new array without any negative values.
   - Log the new array.
*/
let numbers = [1, 2 ,3 ,4 , -5 ,-4, -3, -2, -1];

function filterNegative(numbers) {
  let positiveNumbers = [];

  for (let i = 0; i < numbers.length; i++) {
    if(numbers[i] >= 0) {
      positiveNumbers.push(numbers[i]);

    }
  }
console.log('---EX.6---', positiveNumbers);
 return positiveNumbers;
}
filterNegative(numbers);
filterNegative([-3, 2, -1, 0, 1, -2, 3]);


/*
7. Double the Values (For-of Loop)
   - Define a function `doubleValues(numbers)` that uses a for-of loop
     to multiply each number by 2, storing results in a new array.
   - Log the new array.
*/
let numbersEx7 = [1, 2, 3, 4, 5];

function doubleValues(numbers) {
  let doubledNumbers = [];

  for (const number of numbers) {
    doubledNumbers.push(number * 2);
  }
  console.log('---EX.7---', doubledNumbers);
  return doubledNumbers;
}
doubleValues(numbersEx7);
doubleValues([100,200,300,400]);


/*
8. Print Each Character of a String (For-of)
   - Define a function `printCharacters(str)` that uses a for-of loop
     to log each character in the string on a separate line.
*/
function printCharacters(str) {

  console.log('---EX.8---');
  for (const character of str){
    console.log(character);
  }
}
printCharacters("Hello World!");

/*
9. Sum All Values in an Object
   - Define a function `sumObjectValues(obj)` that iterates over the
     properties of an object (using a for-in loop) and sums all numeric values.
   - Log the sum.
   - Example: {a: 10, b: 20, c: 5} -> 35
*/
let object = {a: 10, b: 20, c: 5 , d: "hello", e: 90, f: "world"};

function sumObjectValues(obj) {
  let sum = 0;
  
  for (const key in obj) {
    if(typeof obj[key] === "number") {
      sum += obj[key];
    }

  } 
  console.log('---EX.9---', sum);
  return sum;
}

sumObjectValues(object);
sumObjectValues({a: 1, b: "string", c: 3, d: "cat"});


/*
10. Print Keys of an Object (For-in)
    - Define a function `printObjectKeys(obj)` that uses a for-in loop
      to log each key of the object.
    - Example: { name: "Alice", age: 25 } -> logs "name", then "age"
*/
let objEx10 = { name: "Alice", age: 25 };

function printObjectKeys(obj) {
  console. log('---EX.10---');
  for (const key in obj){
    console.log(key);
  }
}

printObjectKeys(objEx10);
printObjectKeys({class: "JS", level: 1, student: "Ece"});
/*
11. Sum Array Using do-while Loop
    - Define a function `sumWithDoWhile(numbers)` that uses a do-while loop
      to sum all numbers in the array.
    - Log the total.
*/
let numbersEx11 = [1, 2, 3, 4, 5];

function sumWithDoWhile(numbers) {
  let sum = 0;
  let i = 0;
  do {
    sum += numbers[i];
    i++;
    
  } while (i < numbers.length);
  console.log('---EX.11---', sum);
  return sum;
}
sumWithDoWhile(numbersEx11);
sumWithDoWhile([10,20,30,40]);

/*
12. Remove Duplicates from an Array
    - Define a function `removeDuplicates(arr)` that loops through the array
      and creates a new array without duplicate elements.
    - Hint: you could check if the item is already in the new array before pushing.
    - Log the new array without duplicates.
*/
function removeDuplicates(arr) {
  let removed = [];

  for (let i= 0; i <arr.length; i++){
    if(!removed.includes(arr[i])) {
      removed.push(arr[i]);
    }

  }
  console.log('---Ex.12---', removed);
  return removed;
}

let numbersEx12 = [1, 2 ,2 ,5, 6,6,6,7,8,9];
let arrEx12 = [1,3,4,10,10,11];

removeDuplicates(numbersEx12);
removeDuplicates(arrEx12);


/*
13. Calculate Factorial (For Loop)
    - Define a function `factorial(n)` that calculates n! (n factorial)
      using a for loop.
    - Log the result. 
    - Example: factorial(5) -> 120
*/

function factorial(n) {
  let result = 1;

  for (let i = 1; i<=n; i++) {
    result *= i;
  }
  console.log('---EX.13---', result);
  return result;
}
factorial(5);
factorial(3);
factorial(10);


/*
14. String -> Array -> String
    - Define a function `reverseWords(sentence)` that splits the sentence 
      into an array of words, reverses the array order, then joins it back into
      a string. Use loops or built-in methods as you like.
    - Log the reversed sentence.
*/
//loops version
 function reverseWords(sentence) {
  const words = sentence.split(" ");
  let reversedArray = [];

  for ( let i = words.length -1; i >= 0; i--) {
    reversedArray.push(words[i]);

  } 

   /* Since we are iterating through the array in reverse,
    we need to find its length first to go to the end. 
   */
  let reversedSentence = reversedArray.join(" ");
  console.log('---EX.14---', reversedSentence);
  return reversedSentence;
 }

//  Built-in method version
 function reverseWordsV2(sentence) {
let reversedSentence = sentence.split(" ").reverse().join(" ");
console.log('---EX.14 V2---', reversedSentence);
  return reversedSentence;
  
 }

 reverseWords("I am learning JavaScript.");
 reverseWordsV2("It can be hard sometimes.");

/*
15. Filter Words Longer Than X
    - Define a function `filterLongWords(words, minLength)` that uses a for loop
      to collect only the words that have a length >= minLength.
    - Log the resulting array.
*/
function filterLongWords(words, minLength) {
  let longWord = [];

  for (let i = 0; i < words.length; i++){
    if (words[i].length >= minLength) {
      longWord.push(words[i]);
    }
  }
  console.log('---EX.15---', longWord);
  return longWord;
}

filterLongWords(["apple", "banana", "orange", "green", "javascript"], 10);


/*
16. Log Array Elements with Their Indices
    - Define a function `logElementsWithIndex(arr)` that loops through the array
      and logs "Index: i, Value: arr[i]" for each element.
*/
function logElementsWithIndex(arr) {
  for (const [index,value] of arr.entries()) {
    console.log(`---EX.16---: , Index: ${index}, Value: ${value}`);
  }
}
logElementsWithIndex([10, 20, 30, 40, 50]);

/*
17. Find the Smallest Number in an Array
    - Define a function `findMin(numbers)` that loops through the array
      to find and return the smallest number.
    - Log the smallest number.
*/
function findMin(numbers){
  if (numbers.length === 0) {
    console.log('Undefined');
    return undefined; // check if the array is empty
}
  let minNumber = numbers[0]; // set the first element as the minimum

  for (let i = 1; i < numbers.length; i++){ // i=1 because we already set the first element as the minimum.
    if (numbers[i] < minNumber) {
      minNumber = numbers[i]; // if the current element is smaller than the minimum, set it as the new min.
    }
  }
  console.log('---EX.17---', minNumber);
  return minNumber;

}

findMin([4, 5, 1, 22, 0, -2]);
findMin([ ]);
/*
18. Count Occurrences of a Word in an Array
    - Define a function `countOccurrences(arr, word)` that loops through `arr`
      to count how many times `word` appears.
    - Log the count.
*/
function countOccurrences(arr, word){
let count = 0;

for (let i=0; i < arr.length; i++) {
  if (arr[i] === word) {
    count++;
  }
}
console.log('---EX18---', count);
return count;
console.log(`${word} appears ${count} times in the array.`);

}

countOccurrences(["apple", "banana", "apple", "orange", "apple"], "apple");
 /*
19. Remove Falsy Values
    - Define a function `removeFalsyValues(arr)` that loops through an array
      and returns a new array without falsy values (false, 0, "", null, undefined, NaN).
    - Log the new array.
*/
function removeFalsyValues(arr) {
  let trutyValues = [];

  for(const value of arr) {
    if(value) {
      trutyValues.push(value);
    }
  }
  console.log('---EX19---', trutyValues);
  return trutyValues;
}

removeFalsyValues([0, 1, "apple", "", null, 1001, undefined, NaN]);
/*
20. Sum of All Digits in a String
    - Define a function `sumDigits(str)` that loops through each character of `str`,
      checks if it's a digit, and if so, adds it to a total sum.
    - Log the final sum.
    - Example: "abc123" -> 6
*/
function sumDigits(str) {
  let sum = 0;

  for(const char of str) { // iterate through each character of the string
    if(!isNaN(char) && char !== " ") {// check if the character is a number and not a space}
     
      sum += Number(char); // convert the character to a number and add it to the sum.
  }
}
console.log('---EX20---', sum);
return sum;
}
sumDigits("abc123"); 

/*
21. Average of Array Elements
    - Define a function `averageArray(numbers)` that uses a loop
      to calculate the average (sum / length).
    - Log the average.
*/
function averageArray(numbers) {
  let sum = 0;
  

  for (const number of numbers){
    sum += number; // add each number to the sum
  }
let average = sum / numbers.length; // calculate the average
console.log('---EX21---', average);
return average;


}
averageArray([10, 15, 20, 25, 30]);

/*
22. Flatten a 2D Array (Nested Loops)
    - Define a function `flattenArray(twoDArray)` that takes an array of arrays
      (e.g., [[1,2],[3,4]]) and uses nested loops to create a new one-dimensional array.
    - Log the flattened array.
*/
function flattenArray(twoDArray) {
  let flatArray = [];

  for(const subArray of twoDArray) { // iterate through each sub-array
    for (const item of subArray) { // iterate through each item in the sub-array
      flatArray.push(item); // add the item to the new array

    }
    
  }
  console.log('---EX22---', flatArray);
  return flatArray;
}
flattenArray([[1,2], [3,4],[5,6]]);

/*
23. Find Words Containing a Letter
    - Define a function `findWordsWithLetter(words, letter)` that loops through
      an array of words and returns a new array of only the words that contain
      the given letter.
    - Log the filtered array.
*/
function findWordsWithLetter(words, letter) {
  let filteredWord = [];

  for (const word of words) {
    if (word.includes(letter)){
      filteredWord.push(word);
    }
  }
  console.log('---EX23---', filteredWord);
  return filteredWord;
}
findWordsWithLetter(["apple", "banana", "cherry", "date", "pig", "cat", "dog"], "a");

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
  console.log('---EX24---',arr);

  const poppedElement = arr.pop();
  console.log('---EX24_POPPED ELEMENT:---', poppedElement);
  console.log('---EX24_FINALARRAY:---', arr);
  return arr;

}
pushPopExample([1,2,3], 4);

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
  console.log('---EX25---', queue);

  const removedPerson = queue.shift();
  console.log('---EX25_REMOVED PERSON:---', removedPerson);
  console.log('---Ex25_FINAL QUEUE:---', queue);
  return queue;
}

manageQueue(["Alice", "Bob", "Charlie"], "David");
/*
26. To-Do List Application 
  - Define a function `updateTodoList(todoList, startIndex, deleteCount, ...newTasks)`:
   - Logs the current list of tasks.
   - Removes `deleteCount` tasks starting at `startIndex`.
   - Inserts any new tasks at the end of the array.
   - Logs the updated list.
*/
function updateTodoList(todoList, startIndex, deleteCount, ...newTasks) {
  console.log('---EX26---', todoList);
  todoList.splice(startIndex, deleteCount); // remove tasks from the list
  todoList.push(...newTasks); // add new tasks to the end of the list
  console.log('---EX26_UPDATED LIST---', todoList);
  return todoList;
}
const todoList = ["Study JS", "Eat breakfast", "Walk dog"];
updateTodoList(todoList, 1, 1, "Go shopping", "Read a book", "Exercise");
updateTodoList(todoList, 0, 2, "Go to the gym" ,"Cook dinner", "Watch a movie");

/*
27. Merge Two Arrays
    - Define a function `mergeArrays(arr1, arr2)` that merges two arrays into one, without using `.concat()` or spread operator.
    - Log the merged array.
*/
function mergeArrays(arr1, arr2) {
  const merged = [];

  for (const element of arr1) {
    merged.push(element); // add element from arr1 to mergedArray
  }

  for(const element of arr2){
    merged.push(element); // add element from arr2 to mergedArray
  }

  console.log('---EX27---', merged);
  return merged;
}

mergeArrays([1, 2, 3], [4, 5, 6]);
/*
28. Check if All Elements Are Positive
    - Define a function `areAllPositive(numbers)` that checks if all numbers in an array are positive.
    - Log `true` if all elements are positive, otherwise `false`.
*/
function areAllPositive(numbers) {
let allPositive = true;

  for (const number of numbers){
    if(number <= 0) { // check the number is less than or equal to 0
      // if it is, set allPositive to false and break the loop
      allPositive = false;
      console.log('---EX28---', false);
      return false;
    } 
    
    }
 console.log('---EX28---', allPositive);
  return allPositive;
  }
 
areAllPositive([1, 2, 3, 4, 5]);
areAllPositive([-1, 2, 3, 4, 5]);

/*
29. Find Common Elements Between Two Arrays
    - Define a function `findCommonElements(arr1, arr2)` that finds and returns the common elements between two arrays.
    - Log the common elements.
*/
function findCommonElements(arr1, arr2) {
  const commonElements = [];

  for(const element of arr1) {
    if(arr2.includes(element)) { //check if the element is in arr2
      commonElements.push(element); // if it is, add it to commonElements
    }
    }
 console.log('---EX29---', commonElements);
  return commonElements;
  }
  
findCommonElements([1, 2, 3, 4, 5], [3, 4, 5, 6, 7]);
findCommonElements(["apple", "banana", "cherry", "coconut"], ["banana", "kiwi", "cherry", "mango"]);
/*
30. Find the average between the largest and the smallest number  in an Array
    - Define a function that loops through the array to find and return the average between the largest and the smallest number.
    - Log the number.
*/
function averageBetweenLargestAndSmallest (numbers) {
  let maxNumber = numbers[0];
  let minNumber = numbers[0];

  for (const number of numbers){
    if (number > maxNumber) {
      maxNumber = number; // find the largest number

    }else if (number < minNumber){
      minNumber = number; // find the smallest number
    } 
 
  }
  const average = (maxNumber + minNumber) / 2;
  console.log('---EX30---', average);
  return average;
}

averageBetweenLargestAndSmallest ([2, 4, 6, 8, 10]);

/*
31. Count the Number of Vowels in a String
    - Define a function `countVowels(str)` that counts how many vowels (a, e, i, o, u) appear in the string.
    - Log the count of vowels.
*/
function countVowels(str) {
  let vowelCount = 0;
  const vowels = "aeiouEAIUO"; // include uppercase vowels as well

  for(const char of str.toLowerCase()) { // convert the string to Lowercase because we are checking for all vowels in it.
   if(vowels.includes(char)) {
    vowelCount++; // check if the character is a vowel and increase the count

   } 

  } 
  console.log('---EX31---', vowelCount);
  return vowelCount;
}
countVowels('Hello Everyone');

/*
32. Replace Falsy Values with Default
    - Define a function `replaceFalsy(arr, defaultValue)` that replaces all falsy values in an array (false, 0, "", null, undefined, NaN) with `defaultValue`.
    - Log the updated array.
*/
function replaceFalsy(arr, defaultValue) {
  
  for(let i = 0; i < arr.length; i++){
  
    if(!arr[i]) { // check if the value is falsy
      arr[i]= defaultValue;
      
    }
  }
  console.log('---EX32---', arr);
  return arr;
}
replaceFalsy([1, 2, "Hello.", 0, false, 0, "", null, undefined, NaN], "defaultValue");

/*
33. Create a Pyramid Pattern
    - Define a function `createPyramid(n)` that prints a pyramid pattern of stars (`*`), with `n` rows.
    - Example for `n = 4`:
      ```
        *
       ***
      *****
     *******
      ```
*/
function createPyramid(n) {
  for (let i = 1; i <= n; i++) { // iterate through the rows
    const spaces = " ".repeat(n - i); //spaces before the stars
    const stars = "*".repeat(2 * i - 1); // stars in the pyramid
    console.log(spaces + stars);  // print the spaces and stars together
  }
}
createPyramid(4);
createPyramid(5);
 /*
34. Convert String to Title Case
    - Define a function `toTitleCase(str)` that converts a string to title case, i.e., capitalizing the first letter of each word.
    - Log the title-cased string.
*/
function toTitleCase(str) {
  const words = str.split(" ").map(word => 
     word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join(" ");
      // capitalize the firs letter and convert the rest to lowerCase +  join the word back together with spaces
  
  console.log('---EX34---', words);
  return words;
}
toTitleCase("hello friends, how are you?");
/*
35. Create a Range of Numbers
    - Define a function `createRange(start, end)` that generates an array of numbers from `start` to `end` (inclusive).
    - Log the generated range.
*/
function createRange(start, end) {
  const range = [];
  for (let i= start; i <= end; i++){
    range.push(i); // add each number to the range array
  }
  console.log('---EX35---', range);
  return range;
}
createRange(1, 10);
createRange(4, 9);
/*
36. Sum Odd Numbers in a Range
    - Define a function `sumOddNumbers(start, end)` that sums only the odd numbers in the range from `start` to `end`.
    - Log the total sum.
*/
function sumOddNumbers(start, end) {
  const oddNumbers = [];
  let sum = 0;

  for (let i= start; i <= end; i++){
    if(i % 2 === 1) { // check if the number is odd
      oddNumbers.push(i); // add the odd number to the array
      sum += i; // add the odd number to the sum
      
    }

  }
  console.log('---EX36---', sum);
  return sum;
}
sumOddNumbers(1, 10);
sumOddNumbers(2, 7);