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
4. 

*/

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
  for (let i = arr.length - 1; i >= 0; i--){
    updatedArray.push(i + "!");
  
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

function filterNegative(numbers){
  let updatedArray = [];
  for (let i = 0; i < numbers.length; i++){
    if (numbers[i] >= 0) {
      updatedArray.push(numbers[i]);
    }
  }
  console.log('--EX. 6--');
  console.log(updatedArray);
}

filterNegative([3, 4, -12, -5, -4, 8, 9, 25]);


/*
7. Double the Values (For-of Loop)
   - Define a function `doubleValues(numbers)` that uses a for-of loop
     to multiply each number by 2, storing results in a new array.
   - Log the new array.
*/

function doubleValues(numbers) {
  let doubledValues = [];
  for (const number of numbers){
   let multiply = number * 2
   doubledValues.push(multiply);
  }
  console.log('--EX. 7--');
  console.log(doubledValues);
}

doubleValues([2, 4, 12, 427, 3, 5]);

/*
8. Print Each Character of a String (For-of)
   - Define a function `printCharacters(str)` that uses a for-of loop
     to log each character in the string on a separate line.
*/

function printCharacters(str){
  let newStr = [];
  for (const char of str){
   newStr.push(char); 
  }
  console.log('--EX. 8--');
  console.log(newStr);
}

printCharacters('Code to career');

/*
9. Sum All Values in an Object
   - Define a function `sumObjectValues(obj)` that iterates over the
     properties of an object (using a for-in loop) and sums all numeric values.
   - Log the sum.
   - Example: {a: 10, b: 20, c: 5} -> 35
*/

function sumObjectValues(obj) {
  let sumValue = 0;
  for (const value in obj){
    if (typeof obj[value] === typeof sumValue ){
      sumValue += obj[value];
    }
  }
  console.log('--EX. 9--');
  console.log(sumValue);
}

sumObjectValues({age: 10, c: 25, b: 32, j: 12});

/*
10. Print Keys of an Object (For-in)
    - Define a function `printObjectKeys(obj)` that uses a for-in loop
      to log each key of the object.
    - Example: { name: "Alice", age: 25 } -> logs "name", then "age"
*/

function printObjectKeys(obj){
  console.log('--EX. 10--');
  for(const key in obj){
    console.log(key);
  };
}

printObjectKeys({name: "Batikan", age: 32, location: "Istanbul"});

/*
11. Sum Array Using do-while Loop
    - Define a function `sumWithDoWhile(numbers)` that uses a do-while loop
      to sum all numbers in the array.
    - Log the total.
*/

function sumWithDoWhile(numbers){
  console.log('--EX. 11--')
  let sumDoWhileResult = 0;
  let i = 0;
  do {
    sumDoWhileResult += numbers[i];
    i++;
  } while (i < numbers.length)
  console.log(sumDoWhileResult);
}

sumWithDoWhile([24, 10, 8, 32]);

/*
12. Remove Duplicates from an Array
    - Define a function `removeDuplicates(arr)` that loops through the array
      and creates a new array without duplicate elements.
    - Hint: you could check if the item is already in the new array before pushing.
    - Log the new array without duplicates.
*/

function removeDuplicates(arr){
  let newArr = []; 
for (i = 0; i < arr.length; i++){
 if (!newArr.includes(arr[i])){
    newArr.push(arr[i]);
 }
}
  console.log('--EX. 12--');
  console.log(newArr);
}


removeDuplicates([12, 12, 4, 8, 5, 5, 10, 10]);

/*
13. Calculate Factorial (For Loop)
    - Define a function `factorial(n)` that calculates n! (n factorial)
      using a for loop.
    - Log the result. 
    - Example: factorial(5) -> 120
*/

function factorial(n){
  console.log('--EX. 13--');
  let result = 1;
  for (let i = 1; i <= n ; i++ ){
    result *= i
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

function reverseWords(sentence){
  let reversed = "";
  for (words of sentence){
    reversed = sentence.split(" ").reverse(words)
    .join(" ").toString();
  }
  console.log('--EX. 14--');
  console.log(reversed);
}

reverseWords("Marketten üç elma aldım")

/*
15. Filter Words Longer Than X
    - Define a function `filterLongWords(words, minLength)` that uses a for loop
      to collect only the words that have a length >= minLength.
    - Log the resulting array.
*/

function filterLongWords(words, minLength){
  let longWords = [];
  for (const word of words){
    if (word.length > minLength){
      longWords.push(word);
    }
  }
  console.log('--EX. 15--');
  console.log(longWords);
}

filterLongWords(["surf", "smurf", "cat", "octopus", "tulip", "longsword", "mouse"], 5);


/*
16. Log Array Elements with Their Indices
    - Define a function `logElementsWithIndex(arr)` that loops through the array
      and logs "Index: i, Value: arr[i]" for each element.
*/

function logElementsWithIndex(arr){
  console.log('--EX. 16--');
  for (i = 0; i < arr.length; i++){
    console.log("Index:", i, "Value:", arr[i]);
  }
}

logElementsWithIndex(["spring", "autumun", "winter", "summer"]);

/*
17. Find the Smallest Number in an Array
    - Define a function `findMin(numbers)` that loops through the array
      to find and return the smallest number.
    - Log the smallest number.
*/

function findMin(numbers){
  let smallestNumber = numbers[0];
  for(const number of numbers){
    if(number < smallestNumber  ){
      smallestNumber = number;
    }
  } 
    console.log('--EX. 17--');
    console.log(smallestNumber);
}

findMin([12, 2204, 320, 7, 5, 4]);

/*
18. Count Occurrences of a Word in an Array
    - Define a function `countOccurrences(arr, word)` that loops through `arr`
      to count how many times `word` appears.
    - Log the count.
*/

function countOccurrences(arr, word){
  let occurrenceNumber = 0;
  for(const element of arr){
    if(element === word){
      occurrenceNumber++;
    }
  }
  console.log('--EX. 18--');
  console.log(occurrenceNumber);
}

countOccurrences(["hardcoded", "padding", "hardcoded", "margin", "hardcoded" ], "hardcoded");

/*
19. Remove Falsy Values
    - Define a function `removeFalsyValues(arr)` that loops through an array
      and returns a new array without falsy values (false, 0, "", null, undefined, NaN).
    - Log the new array.
*/

function removeFalsyValues(arr){
  let trueyValues = [];
  for (const element of arr){
    if (element){
      trueyValues.push(element);
    }
  }
  console.log('--EX. 19--');
  console.log(trueyValues);
}

removeFalsyValues([false, 0, "coded", NaN, null, "jogging" ]);

/*
20. Sum of All Digits in a String
    - Define a function `sumDigits(str)` that loops through each character of `str`,
      checks if it's a digit, and if so, adds it to a total sum.
    - Log the final sum.
    - Example: "abc123" -> 6
*/

function sumDigits(str){
  let result = 0;
  let tempNum = "";
  for (subStr of str){
    if (!isNaN(subStr) && subStr !== " "){
     tempNum += subStr;
    } else if (tempNum){
      result += Number(tempNum);
      tempNum = "";
    }
  }
    if(tempNum !== ""){
    result += Number(tempNum);
  }
  console.log('--EX. 20--');
  console.log(result);
}

sumDigits("Yarın en uzun gün 7 6 40");

/*
21. Average of Array Elements
    - Define a function `averageArray(numbers)` that uses a loop
      to calculate the average (sum / length).
    - Log the average.
*/

function avarageArray(numbers){
  let sumNumber = 0;
  let avgNumber = 0;
  for(let i = 0; i < numbers.length; i++){
     sumNumber += numbers[i];
     avgNumber = sumNumber / numbers.length;
  }
  console.log('--EX. 21--');
  console.log(avgNumber);
}

avarageArray([2, 4, 12, 8, 5 , 7]);

/*
22. Flatten a 2D Array (Nested Loops)
    - Define a function `flattenArray(twoDArray)` that takes an array of arrays
      (e.g., [[1,2],[3,4]]) and uses nested loops to create a new one-dimensional array.
    - Log the flattened array.
*/

function flattenArray(twoDArray){
  let flattenedArray = [];
  for (let i = 0; i < twoDArray.length; i++){
    for (let j = 0; j < twoDArray[i].length; j++){
       flattenedArray.push(twoDArray[i][j]);
      }
  
  }
  console.log('--EX. 22--');
  console.log(flattenedArray);
}

flattenArray([[23, 11], [45, 47, 5], [424, 555, 30], ["bir", "iki", "üç"]]);

/*
23. Find Words Containing a Letter
    - Define a function `findWordsWithLetter(words, letter)` that loops through
      an array of words and returns a new array of only the words that contain
      the given letter.
    - Log the filtered array.
*/

function findWordsWithLetter(words, letter){
     let newArr = [];
  for (let i = 0; i < words.length; i++){
    if (words[i].includes(letter)){
      newArr.push(words[i]);
    }
  }
  console.log('--EX. 23--');
  console.log(newArr);
}

findWordsWithLetter(['stone', 'rock', 'woodstock', 'stockExchange', 'rare', 'near'], "c");

/*
24. Push and Pop Operations
    - Define a function `pushPopExample(arr, itemToPush)` that:
      - pushes itemToPush to arr
      - logs the updated array
      - then pops the last element
      - logs the popped element
      - logs the final array
*/

function pushPopExample(arr, itemToPush){
  let poppedElement = [];
   console.log('--EX. 24--');
    arr.push(itemToPush);
    console.log(arr);
    poppedElement = arr.pop(arr[-1]);
    console.log(poppedElement);
  console.log(arr);
}

pushPopExample(["hey"], "you");

/*
25. Push and Shift Operations
    - Define a function `manageQueue(queue, newPerson)` that:
      - push `newPerson` to the end of `queue`
      - logs the updated queue
      - shifts (removes) the first person in the queue
      - logs the removed person
      - logs the final queue
*/
function manageQueue(queue, newPerson){
  console.log('--EX. 25--');
  let removedPerson = [];
      queue.push(newPerson);
      console.log(queue);
      removedPerson = queue.shift();
      console.log(removedPerson);
  console.log(queue);
}

manageQueue(['Cihan', 'Batıkan', 'Seda', 'Ozlem', 'Emre'], 'Uygar');

/*
26. To-Do List Application 
  - Define a function `updateTodoList(todoList, startIndex, deleteCount, ...newTasks)`:
   - Logs the current list of tasks.
   - Removes `deleteCount` tasks starting at `startIndex`.
   - Inserts any new tasks at the end of the array.
   - Logs the updated list.
*/

function updateTodoList(todoList, startIndex, deleteCount, newTasks){
  console.log('--EX. 26--');
  console.log(todoList);
  for (const task of newTasks){
    todoList.splice(startIndex, deleteCount);
    todoList.push(task);
  }

  console.log("Updated to do list:", todoList);
}

updateTodoList(["Study JS", "Eat breakfast", "Walk dog"],0, 1, ["1 hour swim", "prepare lunch"]);

