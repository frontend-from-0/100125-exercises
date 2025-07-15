/*
3. Lowercase Email
   - Define a function `normalizeEmail(email)` that returns a lowercased version of the email.
   - Log the normalized email to the console.
   - Example: "USER@Example.COM" -> "user@example.com"
*/

function normalizeEmail(email) {
  console.log(email.toLowerCase());
}

normalizeEmail("aySENA.Tuna@gmAiL.Com");
/*
6. File Extension Check
   - Define a function `checkFileExtension(filename)` that checks if the filename
     ends with ".pdf" using .endsWith().
   - If it does, log: "This is a PDF file."
   - Otherwise, log: "Not a PDF file."
*/

function checkFileExtension(filename) {
  if (filename.endsWith(".pdf")) {
    console.log(filename, " This is a PDF file.");
  } else {
    console.log(filename, " Not a PDF file.");
  }
}

checkFileExtension("deneme.pdf");
checkFileExtension("deneme.txt");

/*
7. Compare Numbers (if-else)
   - Define a function `compareNumbers(a, b)` that:
     - Logs "a is bigger" if a > b
     - Logs "b is bigger" if b > a
     - Logs "Numbers are equal" if they are the same
*/

function compareNumbers(a, b) {
  if (a > b) {
    console.log(a, "is bigger than", b);
  } else if (a < b) {
    console.log(b, "is bigger than", a);
  } else {
    console.log(a, "=", b, " Numbers are equal");
  }
}

compareNumbers(2, 5);
compareNumbers(9, 1);
compareNumbers(2, 2);

/*
8. Palindrome Check
   - Define a function `isPalindrome(str)` that checks if `str` is the same
     forwards and backwards.
   - If it is, log: "<str> is a palindrome"
   - Otherwise, log: "<str> is not a palindrome"
*/

function isPalindrome(str) {
  const reversedStr = str.split("").reverse().join("");
  if (str === reversedStr) {
    console.log(str, "is a palindrome", reversedStr);
  } else {
    console.log(str, "is not a palindrome", reversedStr);
  }
}

isPalindrome("kayak");
isPalindrome("hello");
isPalindrome("level");
isPalindrome("world");
isPalindrome("ay");

/*
9. String Truncation
   - Define a function `truncateString(text, maxLength)` that uses slice() to
     cut the string to `maxLength` characters, then appends "..." if it was too long.
   - Log the final truncated string.
*/

function truncateString(text, maxLength) {
  if (text.length > maxLength) {
    console.log(text.slice(0, maxLength) + "...");
  } else {
    console.log(text);
  }
}

truncateString("This is a long string that needs to be truncated.", 21);
truncateString("Short string", 20);

/*
10. Check Even or Odd (if-else)
   - Define a function `evenOrOdd(number)` that:
     - Logs "Even" if the number is even
     - Logs "Odd" if the number is odd
*/

function evenOrOdd(number) {
  if (number % 2 === 0) {
    console.log(number, " is Even");
  } else {
    console.log(number, " is Odd");
  }
}

evenOrOdd(4);
evenOrOdd(7);
evenOrOdd(0);

/*
11. URL Protocol Checker
   - Define a function `checkProtocol(url)` that converts the URL to lowercase
     and checks if it starts with "https" using .startsWith().
   - Log "Secure connection" if true, otherwise "Unsecure connection".
*/

function checkProtocol(url) {
  if (url.toLowerCase().startsWith("https")) {
    console.log(url, "Secure connection");
  } else {
    console.log(url, "Unsecure connection");
  }
}

checkProtocol("https://abc.com");
checkProtocol("http://abc.com");
checkProtocol("HTTPS://ABC.COM");
checkProtocol("HTTP://ABC.COM");

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
      console.log(num, " = Monday");
      break;
    case 2:
      console.log(num, " = Tuesday");
      break;
    case 3:
      console.log(num, " = Wednesday");
      break;
    case 4:
      console.log(num, " = Thursday");
      break;
    case 5:
      console.log(num, " = Friday");
      break;
    case 6:
      console.log(num, " = Saturday");
      break;
    case 7:
      console.log(num, " = Sunday");
      break;
    default:
      console.log(num, " = Invalid day");
  }
}

getDayOfWeek(1);
getDayOfWeek(79);
getDayOfWeek(5);
getDayOfWeek(8);
/*
13. Repeat a String
   - Define a function `repeatWord(word, times)` that uses the .repeat() method
     to repeat `word` `times` times.
   - Log the repeated result.
*/

function repeatWord(word, times) {
  console.log(word.repeat(times));
}

repeatWord("Hello", 3);
repeatWord("Aysen", 5);

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

censorWord("This is a test sentence with a target word.", "target");

function censorWord1(sentence, target) {
  let censored = sentence;
  while (censored.includes(target)) {
    censored = censored.replace(target, "****");
  }
  console.log(censored);
}

censorWord1("This is a test sentence with a target word. target", "target");

/*
15. Check First Character (if-else)
   - Define a function `startsWithA(str)` that checks if the string starts with 'A'
     (use .charAt(0) or [0]).
   - Log "Starts with A" or "Does not start with A".
*/

function startsWithA(str) {
  // if (str.charAt(0) === 'A') {
  if (str[0] === "A") {
    console.log(str, "Starts with A");
  } else {
    console.log(str, "Does not start with A");
  }
}
startsWithA("apple");
startsWithA("banana");
startsWithA("Aysen");

/*
16. Slice Last N Characters
   - Define a function `sliceLastN(text, n)` that uses .slice(-n) to extract
     the last `n` characters of `text`.
   - Log the result.
*/

function sliceLastN(text, n) {
  const sliced = text.slice(-n); // negative index starts from the end
  // const sliced = text.slice(text.length - n); // alternative way
  const sliced1 = text.slice(n); // positive index starts from the beginning
  // const sliced1 = text.slice(0, text.length - n); // alternative way
  console.log(sliced, "\n", sliced1);
}

sliceLastN("Hello, World!", 5);
sliceLastN("Hello, World!", 4);
sliceLastN("JavaScript", 3);

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
    console.log(score, "Grade: A");
  } else if (score >= 80) {
    console.log(score, "Grade: B");
  } else if (score >= 70) {
    console.log(score, "Grade: C");
  } else if (score >= 60) {
    console.log(score, "Grade: D");
  } else {
    console.log(score, "Grade: F");
  }
}

gradeChecker(95);
gradeChecker(89);
gradeChecker(60);
gradeChecker(59);

function gradeChecker1(score) {
  switch (true) {
    case score >= 90:
      console.log(score, "Grade: A");
      break;
    case score >= 80:
      console.log(score, "Grade: B");
      break;
    case score >= 70:
      console.log(score, "Grade: C");
      break;
    case score >= 60:
      console.log(score, "Grade: D");
      break;
    default:
      console.log(score, "Grade: F");
  }
}

gradeChecker1(95);
gradeChecker1(89);
gradeChecker1(60);
gradeChecker1(59);

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

replaceCharacter("Hello World", "o", "0");
replaceCharacter("JavaScript is fun", "a", "@");

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
  console.log(words);
  for (let i = 0; i < words.length; i++) {
    words[i] =
      words[i].charAt(0).toUpperCase() + words[i].slice(1).toLowerCase();
    //console.log(words[i]);
  }
  console.log(words.join(" "));
}

titleCase("hello world this is a test");

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
      break;
  }
}

trafficLight("red");
trafficLight("green");
trafficLight("blue");
trafficLight("yellow");

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

isLongString("I Love Javascript");
isLongString("Hello");

/*
22. Convert to Lowercase Then Check
   - Define a function `isSpam(text)` that converts the text to lowercase
     and checks if it includes "spam".
   - If it does, log "This text is spam."
   - Otherwise, log "This text is not spam."
*/

function isSpam(text) {
  text = text.toLowerCase();
  console.log("Lowercase: ", text);
  if (text.includes("spam")) {
    console.log("This text is spam.");
  } else {
    console.log("This text is not spam.");
  }
}

isSpam("ThiS TexT iS Not SpaM");
isSpam("this TEXT IS NOT");

/*
23. Extract Initials
   - Define a function `getInitials(fullName)` that uses .split() to get each name part,
     then logs the capitalized first letter of each.
   - Example: "John Doe" -> "J.D."
*/

function getInitials(fullName) {
  let fn = fullName.split(" ");
  console.log(fn);
  const initials =
    fn.map((initials) => initials[0].toUpperCase()).join(".") + ".";
  console.log(initials);
}

getInitials("Aysen Tuna");

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
    case 2: {
      console.log("Winter");
      break;
    }
    case 3:
    case 4:
    case 5: {
      console.log("Spring");
      break;
    }

    case 6:
    case 7:
    case 8: {
      console.log("Summer");
      break;
    }
    case 9:
    case 10:
    case 11: {
      console.log("Autumn");
      break;
    }
    default:
      console.log("Invalid month");
  }
}

getSeason(2);
getSeason(12);
getSeason(5);
getSeason(10);
getSeason(8);
getSeason(22);

function getSeason2(monthNum) {
  if (monthNum === 12 || monthNum === 1 || monthNum === 2) {
    console.log("Winter");
  } else if (monthNum >= 3 && monthNum <= 5) {
    console.log("Spring");
  } else if (monthNum >= 6 && monthNum <= 8) {
    console.log("Summer");
  } else if (monthNum >= 9 && monthNum <= 11) {
    console.log("Autumn");
  } else {
    console.log("Invalid month");
  }
}

getSeason2(2);
getSeason2(12);
getSeason2(5);
getSeason2(10);
getSeason2(8);
getSeason2(22);

/*
25. Check If String Contains Number
   - Define a function `containsNumber(str)` that uses a loop or a method like
     .match() to check if there's any digit in the string.
   - Log "Contains number" or "No number found".
*/

function containsNumber(str) {
  if (str.match(/\d/)) {
    // /\d/ is a regex that matches any one digit (0–9).
    console.log(str, "Contains number");
  } else {
    console.log(str, "No number found");
  }
}

containsNumber("this is the number test 99!");
containsNumber("this is the number test!");

/*
26. Pad a String
   - Define a function `padString(str, maxLength)` that if str.length < maxLength,
     uses .padEnd() or .padStart() to make the string reach maxLength with '*'.
   - Log the padded string.
*/

function padString(str, maxLength) {
  if (str.length < maxLength) {
    // padEnd: add '*' at the end until total length is maxLength
    console.log(str.padEnd(maxLength, "*"));
  } else {
    console.log(str);
  }
}

padString("Hi", 5);
padString("Welcome", 10);
padString("LongEnough", 5);

function padStringStart1(str, maxLength) {
  if (str.length < maxLength) {
    console.log(str.padStart(maxLength, "*"));
  } else {
    console.log(str);
  }
}

padStringStart1("Hi", 5);

/*
27. If-Else: Voting Eligibility
   - Define a function `canVote(age)` that logs:
     - "Can vote" if age >= 18
     - "Too young to vote" otherwise
*/

function canVote(age) {
  if (age >= 18) {
    console.log(age, "Can vote");
  } else {
    console.log(age, "Too young to vote");
  }
}

canVote(23);
canVote(3);
canVote(0);

/*
28. Reverse Words in a Sentence
   - Define a function `reverseWords(sentence)` that:
     - Splits the sentence by spaces
     - Reverses each word individually
     - Joins them back
   - Log the result.
*/

function reverseWords(sentence) {
  console.log(sentence);
  let wordsArray= sentence.split(" ");

  const result = wordsArray.reverse().join(" ");
  console.log(result);
}

reverseWords("I am very happy to learn Javascript");

function reverseWords1(sentence) {
  // 1. Split into words
  const words = sentence.split(" ");

  // 2. Reverse each word’s letters
  const reversedWords = words.map((word) => word.split("").reverse().join(""));

  // 3. Join back into a sentence
  const result = reversedWords.join(" ");

  // 4. Log it
  console.log(result);
}

reverseWords1("I am very happy to learn Javascript");

/*
29. Check Substring Position
   - Define a function `findWordPosition(sentence, word)` that uses .indexOf(word)
     to find the starting index. If not found, return -1.
   - Log the index or log "Not found" if it's -1.
*/

function findWordPosition(sentence, word) {
  const index = sentence.indexOf(word);
  console.log(index);
  if (index === -1) {
    console.log("Not found");
  } else {
    console.log(index);
  }

  return index;
}

findWordPosition("JavaScript is fun", "Script");

findWordPosition("JavaScript is fun", "script");

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
      console.log(a, operator, b, " = ", a + b);
      break;
    case "-":
      console.log(a, operator, b, " = ", a - b);
      break;
    case "*":
      console.log(a, operator, b, " = ", a * b);
      break;
    case "/":
      console.log(a, operator, b, " = ", a / b);
      break;
    default:
      console.log("Invalid operator");
      break;
  }
}

calculate(3, "+", 5);
calculate(5, "-", 5);
calculate(6, "*", 6);
calculate(7, "/", 1);
calculate(6, "**", 6);
