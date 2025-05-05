/*
1. Check Password Length
   - Define a function `checkPassword(password)` that checks if `password` length
     is at least 8 characters.
   - If >= 8, log: "Password length is sufficient."
   - Otherwise, log: "Password is too short."
   - Call the function with different passwords and log the result.
*/

function checkPassword(password) {
   if (password.length >= 8) {
      console.log("Password length is sufficient.");
   } else {
      console.log("Password is too short.");
   }
}

checkPassword('qwertyu');
checkPassword('123456789');
checkPassword('12345678');


 
/*
2. Uppercase Name
   - Define a function `uppercaseName(name)` that converts a given name to uppercase.
   - Remove any extra spaces in around the name ('   John  ')
   - Log the uppercase result to the console.
   - Example: "John Doe" -> "JOHN DOE"
*/
function upperCaseName(name) {
   console.log(
      name
      .trim()
      .toUpperCase()
   );
}
upperCaseName(' cihan ');
upperCaseName('John Doe');

/*
3. Lowercase Email
   - Define a function `normalizeEmail(email)` that returns a lowercased version of the email.
   - Log the normalized email to the console.
   - Example: "USER@Example.COM" -> "user@example.com"
*/
function normalizeEmail(email) {
   console.log(email.toLowerCase());
}

normalizeEmail("ECENAZ@example.COM");
/*
4. Extract Domain
   - Define a function `getDomain(email)` that uses `slice` or `substring` to
     extract everything after '@'.
   - Log the domain to the console.
   - Example: "user@example.com" -> "example.com"
*/

function getDomain(email) {
   const atChar = email.indexOf('@');
   console.log('atChar position', atChar);
   const domain = email.substring(atChar + 1);
   console.log(domain);   
}

getDomain('batikan@annaatalay.com');

/*
5. Check Substring
   - Define a function `containsWord(sentence, word)` that checks if the `sentence`
     includes `word` (use the .includes() method).
   - If true, log: "<word> found in sentence."
   - Else, log: "<word> not found in sentence."
*/
function containsWord(sentence, word) {
   if (sentence.includes(word)) {
      console.log(word + ' is found in the sentence.');
   } else {
      console.log(word + ' is not found in the sentence.' )
   }
}
   
containsWord('I like apples', 'like');
containsWord('I like apples', 'oranges');



/*
6. File Extension Check
   - Define a function `checkFileExtension(filename)` that checks if the filename
     ends with ".pdf" using .endsWith().
   - If it does, log: "This is a PDF file."
   - Otherwise, log: "Not a PDF file."
*/
function checkFileExtension(filename){
   if(filename.endsWith('.pdf')) {
      console.log('This is a PDF file.');
   }
   else {
      console.log('Not a PDF file.');
   }
}

checkFileExtension("document.pdf");
checkFileExtension("document.com");

/*
7. Compare Numbers (if-else)
   - Define a function `compareNumbers(a, b)` that:
     - Logs "a is bigger" if a > b
     - Logs "b is bigger" if b > a
     - Logs "Numbers are equal" if they are the same
*/
function compareNumbers(a, b) {
   if (a > b) {
      console.log(a + " is bigger.");
   } else if (b > a) {
      console.log(b + " is bigger.");
   }else if (a === b) {
      console.log("Numbers are equal.");
   }
}
compareNumbers(5, 4);
compareNumbers(7, 6);
compareNumbers(5, 5);

/*
8. Palindrome Check
   - Define a function `isPalindrome(str)` that checks if `str` is the same
     forwards and backwards.
   - If it is, log: "<str> is a palindrome"
   - Otherwise, log: "<str> is not a palindrome"
*/
function isPalindrome(str) {
   const reversed = str.split('').reverse().join('');

   if (str === reversed) {
      console.log(str + " is a palindrome.");
       
   } else {
      console.log(str + " is not a palindrome.");
   }
}
isPalindrome('kayak');
isPalindrome('elma');

/*
9. String Truncation
   - Define a function `truncateString(text, maxLength)` that uses slice() to
     cut the string to `maxLength` characters, then appends "..." if it was too long.
   - Log the final truncated string.

*/
function truncateString(text, maxLength) {
   if (text.length > maxLength) {
      const truncated = text.slice(0, maxLength) + "...";
      console.log(truncated);
   } else {
      console.log(text);
   }
}
truncateString("This is a very very long sentence.", 25);
truncateString("This is short", 4);

/*
10. Check Even or Odd (if-else)
   - Define a function `evenOrOdd(number)` that:
     - Logs "Even" if the number is even
     - Logs "Odd" if the number is odd
*/
function evenOrOdd(number) {
   if (number % 2 === 0) {
      console.log("Even");

   } else {
      console.log("Odd");
   }
}
evenOrOdd(6);
evenOrOdd(9);

/*
11. URL Protocol Checker
   - Define a function `checkProtocol(url)` that converts the URL to lowercase
     and checks if it starts with "https" using .startsWith().
   - Log "Secure connection" if true, otherwise "Unsecure connection".
*/
function checkProtocol(url) {
   if (url.toLowerCase().startsWith("https")){
      console.log("Secure connection");
   } else {
      console.log("Unsecure connection");
   }
}
checkProtocol("https://ornek.com");
checkProtocol("://ornek.cok");

/*
12. Switch: Day of the Week
   - Define a function `getDayOfWeek(num)` that uses a switch statement:
     1 -> "Monday"
     2 -> "Tuesday"
     ...
     7 -> "Sunday"
     - Log the matched day or "Invalid day" if out of range.
*/
function getDayOfWeek(num) {
switch (num) {
   case 1:
      console.log("Monday");
      break;
   case 2:
      console.log("Tuesday");
      break;
   case 3:
      console.log("Wednesday");
      break;
   case 4:
      console.log("Thursday");
      break;
   case 5:
      console.log("Friday");
      break;
   case 6:
      console.log("Saturday");
      break;
   case 7:
      console.log("Sunday");
      break;
      default: 
      console.log("Invalid day");

}
}

getDayOfWeek(2);
getDayOfWeek(4);
getDayOfWeek(6);
getDayOfWeek(9);

/*
13. Repeat a String
   - Define a function `repeatWord(word, times)` that uses the .repeat() method
     to repeat `word` `times` times.
   - Log the repeated result.
*/
function repeatWord(word, times) {
   const repeated = word.repeat(times);
   console.log(repeated);
}

repeatWord("word", 3);
repeatWord("merhaba", 4);

/*
14. Replace Substring
   - Define a function `censorWord(sentence, target)` that replaces `target`
     with "****" (use .replaceAll() or multiple .replace()).
   - Log the censored sentence.
*/
function censorWord(sentence, target){
   const censored = sentence.replaceAll(target, "****");
   console.log(censored);
}

censorWord("I am learning JS right now", "right now");

/*
15. Check First Character (if-else)
   - Define a function `startsWithA(str)` that checks if the string starts with 'A'
     (use .charAt(0) or [0]).
   - Log "Starts with A" or "Does not start with A".
*/
function startsWithA(str) {
  if (str.charAt(0).toUpperCase() === "A") {
      console.log("Starts with A");
   } else {
      console.log("Does not start with A");
   
   }
}

startsWithA("Appeles are my favorite fruit.");
startsWithA("a car is parked outsite the house.");
startsWithA("Bananas are yellow.");

/*
16. Slice Last N Characters
   - Define a function `sliceLastN(text, n)` that uses .slice(-n) to extract
     the last `n` characters of `text`.
   - Log the result.
*/
function sliceLastN(text, n) {
   const slicedText = text.slice(-n);
   console.log(slicedText);
}

sliceLastN("apple", 2);
/*
17. Switch: Grade Checker
   - Define a function `gradeChecker(score)` that uses a switch (or if-else chain):
     90+ -> "A"
     80-89 -> "B"
     70-79 -> "C"
     60-69 -> "D"
     below 60 -> "F"
   - Log the grade.
*/
function gradeChecker(score) {
   if (score >= 90) {
      console.log("A");
   } else if (score >= 80) {
      console.log("B");
   } else if (score >= 70) {
      console.log("C");
   } else if (score >= 60) {
      console.log("D");
   } else if (score <= 60) {
      console.log("F");
   }
}
gradeChecker(55);
gradeChecker(90);
gradeChecker(74);

/*
18. Character Replacement
   - Define a function `replaceCharacter(str, oldChar, newChar)` that uses .replaceAll()
     (or a loop) to swap all occurrences of oldChar with newChar.
   - Log the result.
*/
function replaceCharacter(str, oldChar, newChar) {
   const replaced = str.replaceAll(oldChar, newChar);
   console.log(replaced);
}

replaceCharacter("merhaba herkese", "e", "i");

/*
19. Title Case a Sentence
   - Define a function `titleCase(sentence)` that:
     - Splits the sentence by spaces
     - Uppercases the first letter of each word
     - Joins them back
   - Log the transformed string.
*/
function titleCase(sentence) {
   const words = sentence.split(" ").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ");
   console.log(words);

}

titleCase("hello world, this is a js lesson.");
/*
20. Switch: Traffic Light
   - Define a function `trafficLight(color)` that uses a switch statement:
     - "red" -> log: "Stop"
     - "yellow" -> log: "Caution"
     - "green" -> log: "Go"
     - anything else -> "Invalid color"
*/
function trafficLight(color) {
   switch (color) {

      case "red":
         console.log("Stop");
         break;
      case "yellow":
         console.log("Caution");
         break;
      case "green":
         console.log("Go");
         break;
      default:
            console.log("Invalid color");

   }
}
trafficLight("red");
trafficLight("yellow");
trafficLight("green");
trafficLight("blue");

/*
21. Check String Length (if-else)
   - Define a function `isLongString(str)` that checks if the string length
     is more than 10.
   - Log "Long string" or "Short string".
*/
function isLongString(str) {
   if (str.length > 10){
      console.log("Long string");
   } else {
      console.log("Short string");
   }
}
isLongString("This is a long string.");
isLongString("Short str");

/*
22. Convert to Lowercase Then Check
   - Define a function `isSpam(text)` that converts the text to lowercase
     and checks if it includes "spam".
   - If it does, log "This text is spam."
   - Otherwise, log "This text is not spam."
*/
function isSpam(text) {
   if(text.toLowerCase().includes("spam")){
      console.log("This text is spam.");
   }else {
      console.log("This text is not spam.");
   }
}
isSpam("Text is spam.");
isSpam("Text has a message.");

/*
23. Extract Initials
   - Define a function `getInitials(fullName)` that uses .split() to get each name part,
     then logs the capitalized first letter of each.
   - Example: "John Doe" -> "J.D."
*/
function getInitials(fullName) {
   const names = fullName.split(" ");
   const initial = names.map(name => name.charAt(0).toUpperCase()).join(".");
   console.log(initial + ".");

}
getInitials("ece naz"); 

/*
24. Switch: Month to Season
   - Define a function `getSeason(monthNum)` (1-12). Use switch or if-else:
     - 12, 1, 2  -> "Winter"
     - 3, 4, 5   -> "Spring"
     - 6, 7, 8   -> "Summer"
     - 9, 10, 11 -> "Autumn"
   - Log the season or "Invalid month" if out of range.
*/
function getSeason(monthNum) {
   switch (monthNum) {
      case 12:
      case 1:
      case 2:
         console.log("Winter");
         break;
      case 3:
      case 4:
      case 5:
         console.log("Spring");
         break;
      case 6:
      case 7:
      case 8:
         console.log("Summer");
         break;
      case 9:
      case 10:
      case 11:
         console.log("Autumn");;
         break;
         default:
            console.log("Invalid month");
   }
}

getSeason(12);
getSeason(4);
getSeason(8);
getSeason(10);
getSeason(15);
/*
25. Check If String Contains Number
   - Define a function `containsNumber(str)` that uses a loop or a method like
     .match() to check if there's any digit in the string.
   - Log "Contains number" or "No number found".
*/
function containsNumber(str) {
  if(str.match(/\d/)) {
   console.log("Contains number");
  }else {
   console.log("No number found");
  }

}
containsNumber("Hello123");
containsNumber("Stings without numbers.");

/*
26. Pad a String
   - Define a function `padString(str, maxLength)` that if str.length < maxLength,
     uses .padEnd() or .padStart() to make the string reach maxLength with '*'.
   - Log the padded string.
*/
function padString(str, maxLength) {
   if(str.length < maxLength) {
      const padded = str.padEnd(maxLength, "*");
      console.log(padded);
   } else {
      console.log(str);
   }
}
padString("Hello", 8);
padString("I am learning js", 20);
/*
27. If-Else: Voting Eligibility
   - Define a function `canVote(age)` that logs:
     - "Can vote" if age >= 18
     - "Too young to vote" otherwise
*/
function canVote(age) {
   if (age >= 18) {
      console.log("Can vote");
   } else {
      console.log("Too young to vote");
   }
}

canVote(25);
canVote(11);
canVote(18);
/*
28. Reverse Words in a Sentence
   - Define a function `reverseWords(sentence)` that:
     - Splits the sentence by spaces
     - Reverses each word individually
     - Joins them back
   - Log the result.
*/
function reverseWords(sentence) {
   const words = sentence.split(" ");
   const reversedWords = words.map(word => word.split("").reverse().join("")).join(" ");
   console.log(reversedWords);

}
reverseWords("I am practicing Js right now.");
/*
29. Check Substring Position
   - Define a function `findWordPosition(sentence, word)` that uses .indexOf(word)
     to find the starting index. If not found, return -1.
   - Log the index or log "Not found" if it's -1.
*/
function findWordPosition(sentence, word) {
   const index = sentence.indexOf(word);
   if (index !== -1) {
      console.log("Word found at index: " + index);
   } else {
      console.log("Not found");
   }
   
}

findWordPosition("I love js", "love");
findWordPosition("I am trying to understand the structure.", "get");
/*
30. Switch: Simple Calculator
   - Define a function `calculate(a, operator, b)` that uses switch to handle:
     - "+" -> a + b
     - "-" -> a - b
     - "*" -> a * b
     - "/" -> a / b
     - Otherwise -> "Invalid operator"
   - Log the result.
*/
function calculate(a, operator, b) {
   switch (operator) {
      case "+":
         console.log (a + b);
         break;
      case "-":
         console.log (a - b);
         break;
      case "*":
         console.log (a * b);
         break;
         case "/":
         console.log (a / b);
         break;
         default:
            console.log("Invalid operator");

   }
}
calculate(5, "+", 7);
calculate(8, "-", 2);
calculate(10, "*", 5);
calculate(12, "/", 6);
calculate(20, "%", 2);
