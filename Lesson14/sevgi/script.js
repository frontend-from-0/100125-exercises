/*
3. Lowercase Email
   - Define a function `normalizeEmail(email)` that returns a lowercased version of the email.
   - Log the normalized email to the console.
   - Example: "USER@Example.COM" -> "user@example.com"
*/

function normalizeEmail(email) {
   return email.toLowerCase();
 }
 
 const inputEmail = "USER@Example.COM";
 const normalizedEmail = normalizeEmail(inputEmail);
 
 console.log('Ex.3', normalizedEmail);  // Ekranda: "user@example.com"
 
/*
6. File Extension Check
   - Define a function `checkFileExtension(filename)` that checks if the filename
     ends with ".pdf" using .endsWith().
   - If it does, log: "This is a PDF file."
   - Otherwise, log: "Not a PDF file."
*/

function checkFileExtension(filename) {
   if (filename.endsWith(".pdf")) {
     console.log('Ex.6',"This is a PDF file.");
   } else {
     console.log('Ex.6',"Not a PDF file.");
   }
 }
 
 checkFileExtension("document.pdf");   // This is a PDF file.
 checkFileExtension("image.png");      // Not a PDF file.
 
/*
7. Compare Numbers (if-else)
   - Define a function `compareNumbers(a, b)` that:
     - Logs "a is bigger" if a > b
     - Logs "b is bigger" if b > a
     - Logs "Numbers are equal" if they are the same
*/

function compareNumbers(a, b) {
   if (a>b) {
     console.log('Ex.7',"a is bigger");
   } else if (b>a) {
     console.log('Ex.7',"b is bigger");
   } else {
      console.log('Ex.7',"Numbers are equal");
    }
 }

 compareNumbers(7, 7); // Numbers are equal
 compareNumbers(1, 9); // b is bigger
 compareNumbers(8, 6); // a is bigger

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
     console.log('Ex.8',`${str} is a palindrome`);
   } else {
     console.log('Ex.8',`${str} is not a palindrome`);
   }
 }
 
 isPalindrome("beuty");     // beuty is not a palindrome
 isPalindrome("level");     // level is a palindrome

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
 
 truncateString("Hello, My name is Sevgi.", 10);        // "Hello, My..."
 truncateString("Hello", 10);                          // "Hello"

/*
10. Check Even or Odd (if-else)
   - Define a function `evenOrOdd(number)` that:
     - Logs "Even" if the number is even
     - Logs "Odd" if the number is odd
*/

function evenOrOdd(number) {
   if (number % 2 === 0) {
     console.log('Ex.10',"Even");
   } else {
     console.log('Ex.10',"Odd");
   }
 }
 
 evenOrOdd(8);  // Even
 evenOrOdd(7);  // Odd

/*
11. URL Protocol Checker
   - Define a function `checkProtocol(url)` that converts the URL to lowercase
     and checks if it starts with "https" using .startsWith().
   - Log "Secure connection" if true, otherwise "Unsecure connection".
*/

function checkProtocol(url) {
   const lowerUrl = url.toLowerCase();
 
   if (lowerUrl.startsWith("https")) {
     console.log('Ex.11',"Secure connection");
   } else {
     console.log('Ex.11',"Unsecure connection");
   }
 }
 
 checkProtocol("https://example.com");  // Secure connection
 checkProtocol("http://example.com");   // Unsecure connection
 checkProtocol("HTTPS://example.com");  // Secure connection

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
       console.log('Ex.12',"Monday");
       break;
     case 2:
       console.log('Ex.12',"Tuesday");
       break;
     case 3:
       console.log('Ex.12',"Wednesday");
       break;
     case 4:
       console.log('Ex.12',"Thursday");
       break;
     case 5:
       console.log('Ex.12',"Friday");
       break;
     case 6:
       console.log('Ex.12',"Saturday");
       break;
     case 7:
       console.log('Ex.12',"Sunday");
       break;
     default:
       console.log('Ex.12',"Invalid day");
   }
 }

 getDayOfWeek(5); // Friday
 getDayOfWeek(7); // Sunday
 getDayOfWeek(9); // Invalid day
 
/*
13. Repeat a String
   - Define a function `repeatWord(word, times)` that uses the .repeat() method
     to repeat `word` `times` times.
   - Log the repeated result.
*/

function repeatWord(word, times) {
   const result = word.repeat(times);
   console.log('Ex.13', result);
 }
 
 repeatWord("hello", 2);    // hellohello
 repeatWord("HO", 3);   // HOHOHO
 
/*
14. Replace Substring
   - Define a function `censorWord(sentence, target)` that replaces `target`
     with "****" (use .replaceAll() or multiple .replace()).
   - Log the censored sentence.
*/

function censorWord(sentence, target) {
   const censored = sentence.replaceAll(target, "****");
   console.log('Ex.14', censored);
 }

 censorWord("This government is terrible.", "terrible");   // This government is ****.

/*
15. Check First Character (if-else)
   - Define a function `startsWithA(str)` that checks if the string starts with 'A'
     (use .charAt(0) or [0]).
   - Log "Starts with A" or "Does not start with A".
*/

function startsWithA(str) {
   if (str.charAt(0) === 'A') {
     console.log('Ex.15',"Starts with A");
   } else {
     console.log('Ex.15',"Does not start with A");
   }
 }
 
 startsWithA("Apple");     // Starts with A
 startsWithA("Samsung");    // Does not start with A
 
/*
16. Slice Last N Characters
   - Define a function `sliceLastN(text, n)` that uses .slice(-n) to extract
     the last `n` characters of `text`.
   - Log the result.
*/

function sliceLastN(text, n) {
   const result = text.slice(-n);
   console.log('Ex.16',result);
 }

 sliceLastN("Frontend", 5);  // "ntend"
 sliceLastN("Pixel", 1);     // "l"
 
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
     console.log('Ex.17',"A");
   } else if (score >= 80) {
     console.log('Ex.17',"B");
   } else if (score >= 70) {
     console.log('Ex.17',"C");
   } else if (score >= 60) {
     console.log('Ex.17',"D");
   } else {
     console.log('Ex.17',"F");
   }
 }
 
 gradeChecker(91);  // A
 gradeChecker(81);  // B
 gradeChecker(73);  // C
 gradeChecker(68);  // D
 gradeChecker(35);  // F 

/*
18. Character Replacement
   - Define a function `replaceCharacter(str, oldChar, newChar)` that uses .replaceAll()
     (or a loop) to swap all occurrences of oldChar with newChar.
   - Log the result.
*/

function replaceCharacter(str, oldChar, newChar) {
   const result = str.replaceAll(oldChar, newChar);
   console.log('Ex.18',result);
 }
 
 replaceCharacter("banana", "a", "o");   // bonono

/*
19. Title Case a Sentence
   - Define a function `titleCase(sentence)` that:
     - Splits the sentence by spaces
     - Uppercases the first letter of each word
     - Joins them back
   - Log the transformed string.
*/

function titleCase(sentence) {
   const words = sentence.split(" ");
   const capitalizedWords = words.map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase());
   const result = capitalizedWords.join(" ");
   console.log('Ex.19', result);
 }
 
 titleCase("hello world");  // Hello World

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
       console.log('Ex.20',"Stop");
       break;
     case "yellow":
       console.log('Ex.20',"Caution");
       break;
     case "green":
       console.log('Ex.20',"Go");
       break;
     default:
       console.log('Ex.20',"Invalid color");
   }
 }
 
 trafficLight("red");     // Stop
 trafficLight("Yellow");  // Caution
 trafficLight("GREEN");   // Go
 trafficLight("blue");    // Invalid color

/*
21. Check String Length (if-else)
   - Define a function `isLongString(str)` that checks if the string length
     is more than 10.
   - Log "Long string" or "Short string".
*/

function isLongString(str) {
   if (str.length > 10) {
     console.log('Ex.21',"Long string");
   } else {
     console.log('Ex.21',"Short string");
   }
 }
 
 isLongString("Hello!");              // Short string
 isLongString("FrontendDeveloper");     // Long string
 
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
    console.log('Ex.22',"This text is spam.");
  } else {
    console.log('Ex.22',"This text is not spam.");
  }
}

isSpam("This is a spam message.");   // This text is spam.
isSpam("This is a normal message."); // This text is not spam.

/*
23. Extract Initials
   - Define a function `getInitials(fullName)` that uses .split() to get each name part,
     then logs the capitalized first letter of each.
   - Example: "John Doe" -> "J.D."
*/

function getInitials(fullName) {
  const parts = fullName.split(" ");
  let initials = " ";

  for (let i = 0; i < parts.length; i++) {
    const firstLetter = parts[i].charAt(0).toUpperCase();
    initials += firstLetter + ".";
  }

  console.log('Ex.23', initials);
}

getInitials("John Doe");          // J.D.
getInitials("sevgi kilic");       // S.K.

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
  if ([12, 1, 2].includes(monthNum)) {
    console.log('Ex.24',"Winter");
  } else if ([3, 4, 5].includes(monthNum)) {
    console.log('Ex.24',"Spring");
  } else if ([6, 7, 8].includes(monthNum)) {
    console.log('Ex.24',"Summer");
  } else if ([9, 10, 11].includes(monthNum)) {
    console.log('Ex.24',"Autumn");
  } else {
    console.log('Ex.24',"Invalid month");
  }
}

getSeason(1);   // Summer
getSeason(10);  // Autumn
getSeason(13);  // Invalid month

/*
25. Check If String Contains Number
   - Define a function `containsNumber(str)` that uses a loop or a method like
     .match() to check if there's any digit in the string.
   - Log "Contains number" or "No number found".
*/

function containsNumber(str) {
  if (str.match(/\d/)) {
    console.log('Ex.25',"Contains number");
  } else {
    console.log('Ex.25',"No number found");
  }
}

containsNumber("hello123");   // Contains number
containsNumber("hello");      // No number found

/*
26. Pad a String
   - Define a function `padString(str, maxLength)` that if str.length < maxLength,
     uses .padEnd() or .padStart() to make the string reach maxLength with '*'.
   - Log the padded string.
*/

function padString(str, maxLength) {
  if (str.length < maxLength) {
    const padded = str.padEnd(maxLength, '*');
    console.log('Ex.26',padded);
  } else {
    console.log('Ex.26',str);
  }
}

padString("Hello", 10);     // "Hello*****"
padString("JS", 2);         // "JS"

/*
27. If-Else: Voting Eligibility
   - Define a function `canVote(age)` that logs:
     - "Can vote" if age >= 18
     - "Too young to vote" otherwise
*/

function canVote(age) {
  if (age >= 18) {
    console.log('Ex.27',"Can vote");
  } else {
    console.log('Ex.27',"Too young to vote");
  }
}

canVote(20);   // Can vote
canVote(17);   // Too young to vote

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
  const reversedWords = words.map(word => word.split("").reverse().join("") );
  const result = reversedWords.join(" ");
  console.log('Ex.28',result);
}

reverseWords("Hello world");           // olleH dlrow

/*
29. Check Substring Position
   - Define a function `findWordPosition(sentence, word)` that uses .indexOf(word)
     to find the starting index. If not found, return -1.
   - Log the index or log "Not found" if it's -1.
*/

function findWordPosition(sentence, word) {
  const index = sentence.indexOf(word);

  if (index === -1) {
    console.log('Ex.29',"Not found");
  } else {
    console.log('Ex.29',"Found at index:", index);
  }
}

findWordPosition("I love JavaScript", "JavaScript");   // Found at index: 7
findWordPosition("This is a test", "apple");           // Not found

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
      console.log('Ex.30', a + b);
      break;
    case "-":
      console.log('Ex.30', a - b);
      break;
    case "*":
      console.log('Ex.30', a * b);
      break;
    case "/":
      if (b !== 0) {
        console.log('Ex.30', a / b);
      } else {
        console.log('Ex.30', "Cannot divide by zero");
      }
      break;
    default:
      console.log('Ex.30', "Invalid operator");
  }
}

calculate(10, "+", 5);  // 15
calculate(10, "-", 3);  // 7
calculate(4, "*", 6);   // 24
calculate(8, "/", 2);   // 4
calculate(9, "/", 0);   // Cannot divide by zero
calculate(7, "%", 2);   // Invalid operator