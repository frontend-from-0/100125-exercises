/*
3. Lowercase Email
   - Define a function `normalizeEmail(email)` that returns a lowercased version of the email.
   - Log the normalized email to the console.
   - Example: "USER@Example.COM" -> "user@example.com"
*/
function normalizeEmail(email) {
   return email.toLowerCase();
}
const email = "Pinarbildirici87@gmail.com";
const normalizedEmail = normalizeEmail(email);
console.log(normalized);

/*
6. File Extension Check
   - Define a function `checkFileExtension(filename)` that checks if the filename
     ends with ".pdf" using .endsWith().
   - If it does, log: "This is a PDF file."
   - Otherwise, log: "Not a PDF file."
*/
function checkFileExtension(filename) {
   if (filename.endsWith('.pdf')) {
      console.log("This is a PDF file.");
   } else {
      console.log("Not a PDF file.");
   }
}
checkFileExtension("document.pdf"); // This is a PDF file.
checkFileExtension("document.docx"); // Not a PDF file.
/*
7. Compare Numbers (if-else)
   - Define a function `compareNumbers(a, b)` that:
     - Logs "a is bigger" if a > b
     - Logs "b is bigger" if b > a
     - Logs "Numbers are equal" if they are the same
*/
function compareNumbers(a, b) {
   if (a > b) {
      console.log("a is bigger");
   }
   else if (b > a) {
      console.log("b is bigger");
   }
   else {
      console.log("Numbers are equal");
   }
}
/*
8. Palindrome Check
   - Define a function `isPalindrome(str)` that checks if `str` is the same
     forwards and backwards.
   - If it is, log: "<str> is a palindrome"
   - Otherwise, log: "<str> is not a palindrome"
*/
function isPalindrome(str) {
   // I am not sure about this exempel couldnt do that Pinar //
   /*
   
   9. String Truncation
      - Define a function `truncateString(text, maxLength)` that uses slice() to
        cut the string to `maxLength` characters, then appends "..." if it was too long.
      - Log the final truncated string.
   */
   function truncateString(text, maxLength) {
      if (text.lengt > maxLength) {
         const truncated = text.slice(0, maxLength) + "...";
         console.log(truncated);

      } else
         console.log(text);
   }
}

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
/*
11. URL Protocol Checker
   - Define a function `checkProtocol(url)` that converts the URL to lowercase
     and checks if it starts with "https" using .startsWith().
   - Log "Secure connection" if true, otherwise "Unsecure connection".
*/
function checkProtocol(url) {
   if (url.toLowerCase().startsWith("https")) {
      console.log("Secure connection");
   } else {
      console.log("Unsecure connection");
   }
}
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
/*
14. Replace Substring
   - Define a function `censorWord(sentence, target)` that replaces `target`
     with "****" (use .replaceAll() or multiple .replace()).
   - Log the censored sentence.
*/
function censorWord(sentence, target) {
   const censored = sentence.replaceAll(target, "****");
   console.log(censored);
}
/*
15. Check First Character (if-else)
   - Define a function `startsWithA(str)` that checks if the string starts with 'A'
     (use .charAt(0) or [0]).
   - Log "Starts with A" or "Does not start with A".
*/
function startsWithA(str) {
   if (str.charAt(0).toUpperCase() === 'A') {
      console.log("Starts with A");
   } else {
      console.log("Does not start with A");
   }
}

/*
16. Slice Last N Characters
   - Define a function `sliceLastN(text, n)` that uses .slice(-n) to extract
     the last `n` characters of `text`.
   - Log the result.
*/
function sliceLastN(text, n) {
   const result = text.slice(-n);
   console.log(result);
}
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
   let grade;

   switch (true) {
      case (score >= 90):
         grade = "A";
         break;
      case (score >= 80 && score < 90):
         grade = "B";
         break;
      case (score >= 70 && score < 80):
         grade = "C";
         break;
      case (score >= 60 && score < 70):
         grade = "D";
         break;
      default:
         grade = "F";
   }

   console.log(`Grade: ${grade}`);
}
/*
18. Character Replacement
   - Define a function `replaceCharacter(str, oldChar, newChar)` that uses .replaceAll()
     (or a loop) to swap all occurrences of oldChar with newChar.
   - Log the result.
*/
function replaceCharacter(str, oldChar, newChar) {
   const result = str.replaceAll(oldChar, newChar);
   console.log(result);
}
/*
19. Title Case a Sentence
   - Define a function `titleCase(sentence)` that:
     - Splits the sentence by spaces
     - Uppercases the first letter of each word
     - Joins them back
   - Log the transformed string.
*/
// This was a bit hard  Pinar//
/*
20. Switch: Traffic Light
   - Define a function `trafficLight(color)` that uses a switch statement:
     - "red" -> log: "Stop"
     - "yellow" -> log: "Caution"
     - "green" -> log: "Go"
     - anything else -> "Invalid color"
*/
function trafficLight(color) {
   switch (color.toLowerCase()) {
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
/*
21. Check String Length (if-else)
   - Define a function `isLongString(str)` that checks if the string length
     is more than 10.
   - Log "Long string" or "Short string".
*/
function isLongString(str) {
   if (str.length > 10) {
      console.log("Long string");
   } else {
      console.log("Short string");
   }
}
/*
22. Convert to Lowercase Then Check
   - Define a function `isSpam(text)` that converts the text to lowercase
     and checks if it includes "spam".
   - If it does, log "This text is spam."
   - Otherwise, log "This text is not spam."
*/
function isSpam(text) {
   const lowerText = text.toLowerCase();
   if (lowerText.includes("spam")) {
      console.log("This text is spam.");
   } else {
      console.log("This text is not spam.");
   }
}
/*
23. Extract Initials
   - Define a function `getInitials(fullName)` that uses .split() to get each name part,
     then logs the capitalized first letter of each.
   - Example: "John Doe" -> "J.D."
*/
function getInitials(fullName) {
   const nameParts = fullName.split(" ");
   const initials = nameParts.map(part => part.charAt(0).toUpperCase()).join(".");
   console.log(initials + ".");
}

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
         console.log("Autumn");
         break;
      default:
         console.log("Invalid month");
   }
}


/*
25. Check If String Contains Number
   - Define a function `containsNumber(str)` that uses a loop or a method like
     .match() to check if there's any digit in the string.
   - Log "Contains number" or "No number found".
*/
function containsNumber(str) {
   if (/\d/.test(str)) {
      console.log("Contains number");
   } else {
      console.log("No number found");
   }
}
/*
26. Pad a String
   - Define a function `padString(str, maxLength)` that if str.length < maxLength,
     uses .padEnd() or .padStart() to make the string reach maxLength with '*'.
   - Log the padded string.
*/
function padString(str, maxLength) {
   if (str.length < maxLength) {
      const padded = str.padEnd(maxLength, '*');
      console.log(padded);
   } else {
      console.log(str);
   }
}
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
   const reversedWords = words.map(word => word.split("").reverse().join(""));
   const result = reversedWords.join(" ");
   console.log(result);
}
/*
29. Check Substring Position
   - Define a function `findWordPosition(sentence, word)` that uses .indexOf(word)
     to find the starting index. If not found, return -1.
   - Log the index or log "Not found" if it's -1.
*/
function findWordPosition(sentence, word) {
   const index = sentence.indexOf(word);
   if (index !== -1) {
      console.log(index);
   } else {
      console.log("Not found");
   }
}
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
   let result;
   switch (operator) {
      case "+":
         result = a + b;
         break;
      case "-":
         result = a - b;
         break;
      case "*":
         result = a * b;
         break;
      case "/":
         result = a / b;
         break;
      default:
         console.log("Invalid operator");
         return; // Exit the function if the operator is invalid
   }
   console.log(result);
}