/*
4. Sum of Numbers in a Range (While Loop)
    - Define a function `sumRange(start, end)` that uses a while loop
      to sum all integers from `start` to `end` (inclusive).
    - Log the final sum.
*/

function sumRange(start, end){
  let i=start;
  let result=0;
  while (i<= end)
  { result +=i;
    i++;
  } 


  console.log('Final Sum  = ', result)
}


sumRange(1,3);
sumRange(6,8);

/*
5. Reverse an Array
   - Define a function `reverseArray(arr)` that reverses the elements
     of an array manually using a for loop (without using .reverse()).
   - Log the reversed array.
*/

function reverseArray(arr){
let reversedArr=[];
// my solution was:
  //for (let j=0; j<arr.length; j++){
   // reverseArr.push(arr[((arr.length-1)-j)]);

  //Anna's suggestion
    for (let i = arr.length - 1; i >= 0; i--) {
    reversedArr.push(arr[i]);
  }
    
  console.log("Array= ", arr , "Reverse Array = ",reversedArr);
}

reverseArray(["A","y","S","E","N"]);
reverseArray(["A","23",67,"E",21]);

/*
6. Filter Out Negative Numbers
   - Define a function `filterNegative(numbers)` that loops through
     an array of numbers and creates a new array without any negative values.
   - Log the new array.
*/

function filterNegative(numbers)
{
  let noNegativeNumbers=[];
  for (let ii=0; ii<numbers.length; ii++ ){
    if (numbers[ii] >= 0){
      noNegativeNumbers.push(numbers[ii]);
    } }
    console.log("Non Negative Numbers = ", noNegativeNumbers , "Numbers were= ", numbers);
}
filterNegative ([1,-3,-5,6,-4,8,5,3,0]);


/*
7. Double the Values (For-of Loop)
   - Define a function `doubleValues(numbers)` that uses a for-of loop
     to multiply each number by 2, storing results in a new array.
   - Log the new array.
*/

function doubleValues(numbers){
let multiplyNum=[];
for(let a of numbers){
  multiplyNum.push(a*2);
} 
console.log("Numbers are =", numbers, "Multiply by 2 are = ",multiplyNum);
}

doubleValues([2,3,4,6,8,9,10]);


/*
8. Print Each Character of a String (For-of)
   - Define a function `printCharacters(str)` that uses a for-of loop
     to log each character in the string on a separate line.
*/

 function printCharacters(str){
  for (let s of str) {
    console.log(s);
  }
 }

 printCharacters("Aysen Tuna");


/*
9. Sum All Values in an Object
   - Define a function `sumObjectValues(obj)` that iterates over the
     properties of an object (using a for-in loop) and sums all numeric values.
   - Log the sum.
   - Example: {a: 10, b: 20, c: 5} -> 35
*/

function sumObjectValues(obj)
{
  let sum=0;
  for (let key in obj){

    console.log(key, obj[key]);
    
    if (typeof obj[key] === 'number'){
      sum+=obj[key];

    }
  }
  console.log("sum is =",sum);
}


sumObjectValues( {a: 10, b: 20, c: 5} );
sumObjectValues( [10,"b",20,50,6]);



/*
10. Print Keys of an Object (For-in)
    - Define a function `printObjectKeys(obj)` that uses a for-in loop
      to log each key of the object.
    - Example: { name: "Alice", age: 25 } -> logs "name", then "age"
*/

function printObjectKeys(obj)
{
  for (let key in obj){
    console.log(key);
   // console.log(obj[jj]);
  }
}

printObjectKeys({ name: "Alice", age: 25 });


/*
11. Sum Array Using do-while Loop
    - Define a function `sumWithDoWhile(numbers)` that uses a do-while loop
      to sum all numbers in the array.
    - Log the total.
*/

function sumWithDoWhile(numbers){
let total=0;
let i=0;

do{
  if (typeof numbers[i] === "number"){
total+=numbers[i];
  }
  i++;
}while (i< numbers.length);

console.log('Total is = ', total);
}
sumWithDoWhile([1,4,7,8,9]);
sumWithDoWhile([1,4,7,8,9,["c",10],0,45,79, "A", 'b']);



/*
12. Remove Duplicates from an Array
    - Define a function `removeDuplicates(arr)` that loops through the array
      and creates a new array without duplicate elements.
    - Hint: you could check if the item is already in the new array before pushing.
    - Log the new array without duplicates.
*/

function removeDuplicates(arr){
  let noDuplicated=[];
  for (let element of arr){
    if (noDuplicated.includes(element))
      {console.log("Duplicated ",element);}
    else{ noDuplicated.push(element);}
  }
console.log("Not Duplicated=",noDuplicated);
}

removeDuplicates(["A","a","a","b","b",'c',1,1,10,2,2,["c",1],'c']);

/*
13. Calculate Factorial (For Loop)
    - Define a function `factorial(n)` that calculates n! (n factorial)
      using a for loop.
    - Log the result. 
    - Example: factorial(5) -> 120
*/

function factorial(n){
  let factorial=1;
  for (let number=1; number<=n; number++){
    factorial*=number;

  }
  console.log("Factorial(", n,")=",factorial);
}

factorial(5);
factorial(10);

/*
14. String -> Array -> String
    - Define a function `reverseWords(sentence)` that splits the sentence 
      into an array of words, reverses the array order, then joins it back into
      a string. Use loops or built-in methods as you like.
    - Log the reversed sentence.
*/

function reverseWords(sentence){

  const words=sentence.split(" ");
  //let reverseWord=[];
  let reversedSentence=[];
  for (let i= words.length-1; i>=0; i--){
    reversedSentence.push(words[i]);
  }
   //reversedSentence= reverseWord.join(" ");
console.log("REVERSED SENTENCE = ",reversedSentence.join(" "));
}

reverseWords("I LOVE JUMPNG");

/*
15. Filter Words Longer Than X
    - Define a function `filterLongWords(words, minLength)` that uses a for loop
      to collect only the words that have a length >= minLength.
    - Log the resulting array.

*/
function filterLongWords(words, minLength) {
   let longWords=[];
  for (let i of words){
    if (i.length >= minLength){

longWords.push(i);  
    }

}

console.log(longWords);
}

filterLongWords(['Aysen','Mia',"Sahil"],4);


/*
16. Log Array Elements with Their Indices
    - Define a function `logElementsWithIndex(arr)` that loops through the array
      and logs "Index: i, Value: arr[i]" for each element.
*/

function logElementsWithIndex(arr){
  for (let i=0; i<arr.length; i++)
  {
    console.log("Index: ", i, "Value: ", arr[i]);
  }

}

logElementsWithIndex(['Aysen','Mia',"Sahil"]);



/*
17. Find the Smallest Number in an Array
    - Define a function `findMin(numbers)` that loops through the array
      to find and return the smallest number.
    - Log the smallest number.
*/

function findMin(numbers){

  let minNumber=numbers[0];

  for (let i=1 ; i< numbers.length; i++)
  {
    if (numbers[i] < minNumber)
      {minNumber=numbers[i];
      }

  }
  console.log(minNumber);
}

findMin([4,6,9,100,0,6,75,103,3,-1,102]);

/*
18. Count Occurrences of a Word in an Array
    - Define a function `countOccurrences(arr, word)` that loops through `arr`
      to count how many times `word` appears.
    - Log the count.
*/

function countOccurrences(arr, word){
  let counter=0;
  for (let element of arr)
  {
    if (element=== word) {counter+=1;}
  }
console.log(counter);
}


countOccurrences(['Aysen','Mia', "Mia",'banana','apples'],'banana');
countOccurrences(['Aysen','Mia', "Mia",'banana','apples'],'Mia');
countOccurrences(['Mia','Mia', "Mia",'banana','apples'],'Mia');
countOccurrences(['Aysen','Mia', "Mia",'banana','apples'],'Banana');


/*
19. Remove Falsy Values
    - Define a function `removeFalsyValues(arr)` that loops through an array
      and returns a new array without falsy values (false, 0, "", null, undefined, NaN).
    - Log the new array.
*/

function removeFalsyValues(arr) {
  let truthyArr = [];
  for (let element of arr) {

    if (element) { 
      truthyArr.push(element);
    }
  }

  console.log("Without falsy values:", truthyArr);
}

removeFalsyValues([1, 'false', 0, "", "Hello", false, null, undefined, NaN, "World"]);

/*
20. Sum of All Digits in a String
    - Define a function `sumDigits(str)` that loops through each character of `str`,
      checks if it's a digit, and if so, adds it to a total sum.
    - Log the final sum.
    - Example: "abc123" -> 6
*/

function sumDigits(str){
  let sumOfDigit=0;
  let characters = str.split('');
  for (let char of characters){
   if (!isNaN(char)){
      sumOfDigit+=Number(char);
    }
  }
  console.log(sumOfDigit);
}

sumDigits("abc123");

/*
21. Average of Array Elements
    - Define a function `averageArray(numbers)` that uses a loop
      to calculate the average (sum / length).
    - Log the average.
*/

function averageArray(numbers){
  let numbersAvarage=0;
  let sum=0;

  for(let xx=0; xx<numbers.length; xx++){
    sum+= numbers[xx];
    console.log(xx);
  }
  numbersAvarage = sum / numbers.length;
  console.log(numbersAvarage);
}

averageArray([1,4,7,9,7,3,0,10]);


/*
22. Flatten a 2D Array (Nested Loops)
    - Define a function `flattenArray(twoDArray)` that takes an array of arrays
      (e.g., [[1,2],[3,4]]) and uses nested loops to create a new one-dimensional array.
    - Log the flattened array.
*/


function flattenArray(twoDArray){
  let flatten = [];

  for (let fArray of twoDArray) {
    for (let s of fArray) {
      flatten.push(s);
    }
}
console.log(flatten);
}
flattenArray([[1,2],[4,5],[7,8]])

/*
23. Find Words Containing a Letter
    - Define a function `findWordsWithLetter(words, letter)` that loops through
      an array of words and returns a new array of only the words that contain
      the given letter.
    - Log the filtered array.
*/

function findWordsWithLetter(words, letter){
  let finding = [];

  for (let word of words) {
    if (word.includes(letter)) {
      finding.push(word);
    }
}console.log(finding);
}


findWordsWithLetter(["Javascript", "Html", 'CSS','Python'], "J");


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
console.log(arr)

  arr.push(itemToPush);
  console.log("pushed:",arr);

  let popped = arr.pop();
  console.log("popped:",popped);

  console.log('Final Array:',arr);

}

pushPopExample(["javascript", "Html", "CSS"], 'React');

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
  queue.push(newPerson)
  console.log(queue);
  console.log(queue.shift());
  console.log(queue);
}

manageQueue(["aysen",'Mia','Sahil'], "baytun");


/*
26. To-Do List Application 
  - Define a function `updateTodoList(todoList, startIndex, deleteCount, ...newTasks)`:
   - Logs the current list of tasks.
   - Removes `deleteCount` tasks starting at `startIndex`.
   - Inserts any new tasks at the end of the array.
   - Logs the updated list.
*/

const todoList = ["Study JS", "Eat breakfast", "Walk dog"];

function updateTodoList(todoList, startIndex, deleteCount, ...newTasks){
  console.log(todoList);
  console.log(startIndex,deleteCount,...newTasks)

  todoList.splice(startIndex, deleteCount);
  todoList.push(...newTasks);
  console.log(todoList);
 

}

updateTodoList(todoList,2,1,"Go to gym");
updateTodoList(todoList,1,1,"Go to gym");