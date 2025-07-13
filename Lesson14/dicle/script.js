/*
3. Lowercase Email
   - Define a function `normalizeEmail(email)` that returns a lowercased version of the email.
   - Log the normalized email to the console.
   - Example: "USER@Example.COM" -> "user@example.com"
*/
function normalizeEmail(email) {
  console.log(email.toLowerCase());
}
normalizeEmail('DICLEARPAK@GMAIL.COM');
/*
6. File Extension Check
   - Define a function `checkFileExtension(filename)` that checks if the filename
     ends with ".pdf" using .endsWith().
   - If it does, log: "This is a PDF file."
   - Otherwise, log: "Not a PDF file."
*/
function checkFileExtension(filename) {
  if (filename.endsWith('.pdf')) {
    console.log('This is a PDF file.');
  } else {
    console.log('Not a PDF file.');
  }
}
checkFileExtension('dicle.pdf');
checkFileExtension('dicle.png');

/*
7. Compare Numbers (if-else)
   - Define a function `compareNumbers(a, b)` that:
     - Logs "a is bigger" if a > b
     - Logs "b is bigger" if b > a
     - Logs "Numbers are equal" if they are the same
*/
function compareNumbers(a, b) {
  if (a > b) {
    console.log('a is bigger');
  } else if (b > a) {
    console.log('b is bigger');
  } else {
    console.log('Numbers are equal');
  }
}
compareNumbers(5, 7);
compareNumbers(12, 3);
compareNumbers(3, 3);

/*
8. Palindrome Check
   - Define a function `isPalindrome(str)` that checks if `str` is the same
     forwards and backwards.
   - If it is, log: "<str> is a palindrome"
   - Otherwise, log: "<str> is not a palindrome"
*/
function isPalindrome(str) {
  if (str == str.split('').reverse().join('')) {
    console.log(str + ' is a palindrome');
  } else {
    console.log(str + ' is not a palindrome');
  }
}
isPalindrome('abba');
isPalindrome('apples');
/*
9. String Truncation
   - Define a function `truncateString(text, maxLength)` that uses slice() to
     cut the string to `maxLength` characters, then appends "..." if it was too long.
   - Log the final truncated string.
*/
function truncateString(text, maxLength) {
  if (text.length > maxLength) {
    console.log(text.slice(0, maxLength) + '...');
  } else {
    console.log(text);
  }
}
truncateString('I cannot wait to move abroad', 15);
truncateString('Three Apples', 15);
truncateString('Three Apples', 12);

/*
10. Check Even or Odd (if-else)
   - Define a function `evenOrOdd(number)` that:
     - Logs "Even" if the number is even
     - Logs "Odd" if the number is odd
*/
function evenOrOdd(number) {
  if (number % 2 === 0) {
    console.log('Even');
  } else {
    console.log('Odd');
  }
}

evenOrOdd(25);
evenOrOdd(12);
evenOrOdd(0);

/*
11. URL Protocol Checker
   - Define a function `checkProtocol(url)` that converts the URL to lowercase
     and checks if it starts with "https" using .startsWith().
   - Log "Secure connection" if true, otherwise "Unsecure connection".
*/
function checkProtocol(url) {
  if (url.toLowerCase().startsWith('https')) {
    console.log('Secure connection');
  } else {
    console.log('Unsecure connection');
  }
}

checkProtocol('www.w3schools.com/');
checkProtocol('HTTPS://GITHUB.COM');

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
      console.log('Monday');
      break;
    case 2:
      console.log('Tuesday');
      break;
    case 3:
      console.log('Wednesday');
      break;
    case 4:
      console.log('Thursday');
      break;
    case 5:
      console.log('Friday');
      break;
    case 6:
      console.log('Saturday');
      break;
    case 7:
      console.log('Sunday');
      break;
    default:
      console.log('Invalid Day');
  }
}

getDayOfWeek(3);
getDayOfWeek(8);
getDayOfWeek(0);

/*
13. Repeat a String
   - Define a function `repeatWord(word, times)` that uses the .repeat() method
     to repeat `word` `times` times.
   - Log the repeated result.
*/
function repeatWord(word, times) {
  console.log(word.repeat(times));
}

repeatWord('Dicle ', 3);
repeatWord('Javascript ', 10);

/*
14. Replace Substring
   - Define a function `censorWord(sentence, target)` that replaces `target`
     with "****" (use .replaceAll() or multiple .replace()).
   - Log the censored sentence.
*/
function censorWord(sentence, target) {
  console.log(sentence.replaceAll(target, '***'));
}
censorWord('Just do it.', 'it');

/*
15. Check First Character (if-else)
   - Define a function `startsWithA(str)` that checks if the string starts with 'A'
     (use .charAt(0) or [0]).
   - Log "Starts with A" or "Does not start with A".
*/
function startsWithA(str) {
  if (str.charAt(0) === 'A') {
    console.log('Starts with A');
  } else {
    console.log('Does not start with A');
  }
}
startsWithA('Anna');
startsWithA('Dicle');

/*
16. Slice Last N Characters
   - Define a function `sliceLastN(text, n)` that uses .slice(-n) to extract
     the last `n` characters of `text`.
   - Log the result.
*/
function sliceLastN(text, n) {
  console.log(text.slice(-n));
}
sliceLastN(
  'The padding CSS shorthand property sets the padding area on all four sides of an element at once.',
  15
);

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
  if (score > 100) {
    console.log('Score is out of range.');
  } else if (score >= 90 && score <= 100) {
    console.log('A');
  } else if (score >= 80 && score <= 89) {
    console.log('B');
  } else if (score >= 70 && score <= 79) {
    console.log('C');
  } else if (score >= 60 && score <= 69) {
    console.log('D');
  } else if (score < 60) {
    console.log('F');
  }
}
gradeChecker(25);
gradeChecker(65);
gradeChecker(76);
gradeChecker(80);
gradeChecker(100);
gradeChecker(110);

/*
18. Character Replacement
   - Define a function `replaceCharacter(str, oldChar, newChar)` that uses .replaceAll()
     (or a loop) to swap all occurrences of oldChar with newChar.
   - Log the result.
*/

// Solution 1
function replaceCharacter(str, oldChar, newChar) {
  console.log(str.replaceAll(oldChar, newChar));
}
replaceCharacter('Mamma', 'a', 'i');
replaceCharacter('Mamma', 'e', 'i');

//Solution 2
function replaceCharacter(str, oldChar, newChar) {
  let result = '';
  for (let i = 0; i < str.length; i++) {
    if (str[i] === oldChar) {
      result += newChar;
    } else {
      result += str[i];
    }
  }
  console.log(result);
}
replaceCharacter('Mamma', 'a', 'i');
replaceCharacter('Mamma', 'e', 'i');

/*
19. Title Case a Sentence
   - Define a function `titleCase(sentence)` that:
     - Splits the sentence by spaces
     - Uppercases the first letter of each word
     - Joins them back
   - Log the transformed string.
*/
function titleCase(sentence) {
  const mySentence = sentence
    .split(' ')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
  console.log(mySentence);
}
titleCase(
  'The term spam is derived from the 1970 "Spam" sketch of the BBC sketch comedy television series Monty Python\'s Flying Circus.'
);

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
    case 'red':
      console.log('Stop!');
      break;
    case 'yellow':
      console.log('Caution!');
      break;
    case 'green':
      console.log('Go!');
      break;
    default:
      console.log('Invalid color!');
  }
}

trafficLight('red');
trafficLight('yellow');
trafficLight('green');
trafficLight('blue');

/*
21. Check String Length (if-else)
   - Define a function `isLongString(str)` that checks if the string length
     is more than 10.
   - Log "Long string" or "Short string".
*/
function isLongString(str) {
  if (str.length > 10) {
    console.log('Long string');
  } else {
    console.log('Short string');
  }
}
isLongString('Stockholm');
isLongString('Rindfleischetikettierungsüberwachungsaufgabenübertragungsgesetz');

/*
22. Convert to Lowercase Then Check
   - Define a function `isSpam(text)` that converts the text to lowercase
     and checks if it includes "spam".
   - If it does, log "This text is spam."
   - Otherwise, log "This text is not spam."
*/
function isSpam(text) {
  if (text.toLowerCase().includes('spam')) {
    console.log('This text is spam.');
  } else {
    console.log('This text is not spam.');
  }
}
isSpam(
  'The term spam is derived from the 1970 "Spam" sketch of the BBC sketch comedy television series Monty Python\'s Flying Circus.'
);

isSpam(
  'In the late 19th century, Western Union allowed telegraphic messages on its network to be sent to multiple destinations.'
);

/*
23. Extract Initials
   - Define a function `getInitials(fullName)` that uses .split() to get each name part,
     then logs the capitalized first letter of each.
   - Example: "John Doe" -> "J.D."
*/
function getInitials(fullName) {
  const fullNameParts = fullName.split(' ');
  const initials = fullNameParts
    .map((word) => word.charAt(0).toUpperCase() + '.')
    .join('');
  console.log(initials);
}
getInitials('Dicle Arpak');

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
      console.log('Winter');
      break;
    case 3:
    case 4:
    case 5:
      console.log('Spring');
      break;
    case 6:
    case 7:
    case 8:
      console.log('Summer');
      break;
    case 9:
    case 10:
    case 11:
      console.log('Autumn');
      break;
    default:
      console.log('Invalid Season');
  }
}
getSeason(4);
getSeason(15);

/*
25. Check If String Contains Number
   - Define a function `containsNumber(str)` that uses a loop or a method like
     .match() to check if there's any digit in the string.
   - Log "Contains number" or "No number found".
*/
function containsNumber(str) {
  if (str.match(/\d/g)) {
    console.log('Contains number');
  } else {
    console.log('No number found');
  }
}
containsNumber('MDN Web Docs is better than W3Schools.');
containsNumber('Working on a string.');

/*
26. Pad a String
   - Define a function `padString(str, maxLength)` that if str.length < maxLength,
     uses .padEnd() or .padStart() to make the string reach maxLength with '*'.
   - Log the padded string.
*/
function padString(str, maxLength) {
  if (str.length < maxLength) {
    console.log(str.padEnd(maxLength, '*'));
  }
}
padString('Dicle', 10);

/*
27. If-Else: Voting Eligibility
   - Define a function `canVote(age)` that logs:
     - "Can vote" if age >= 18
     - "Too young to vote" otherwise
*/
function canVote(age) {
  if (age >= 18) {
    console.log('Can vote');
  } else {
    console.log('Too young to vote');
  }
}
canVote(16);
canVote(18);
canVote(20);

/*
28. Reverse Words in a Sentence
   - Define a function `reverseWords(sentence)` that:
     - Splits the sentence by spaces
     - Reverses each word individually
     - Joins them back
   - Log the result.
*/
function reverseWords(sentence) {
  const reversingWords = sentence.split(' ');
  const reversed = reversingWords
    .map((word) => word.split('').reverse().join(''))
    .join(' ');
  console.log(reversed);
}
reverseWords('Javascript is getting more fun everyday.');

/*
29. Check Substring Position
   - Define a function `findWordPosition(sentence, word)` that uses .indexOf(word)
     to find the starting index. If not found, return -1.
   - Log the index or log "Not found" if it's -1.
*/
function findWordPosition(sentence, word) {
  const index = sentence.indexOf(word);
  if (index !== -1) {
    console.log(sentence.indexOf(word));
  } else {
    console.log('Not found');
  }
}
findWordPosition('I am really excited about learning Javascript', 'really');
findWordPosition('I am really excited about learning Javascript', 'do');

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
    case '+':
      console.log(a + b);
      break;
    case '-':
      console.log(a - b);
      break;
    case '*':
      console.log(a * b);
      break;
    case '/':
      console.log(a / b);
      break;
    default:
      console.log('Invalid Operator');
  }
}
calculate(12, '+', 4);
calculate(12, '-', 4);
calculate(12, '*', 4);
calculate(12, '/', 4);
calculate(12, '%', 4);
