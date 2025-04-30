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
  console.log(
    email
    .toLowerCase()
  );
}
normalizeEmail('BATİKANSEVİL@ANNAATALAY.COM');


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

function checkFileExtension(filename) {
  if (filename.endsWith('pdf')) {
    console.log(
      "This is a PDF file"
    )
  } else {
    console.log(
      "Not a PDF file"
    )
  }
}

checkFileExtension('lesson13.pdf');
checkFileExtension('lesson13.jpg');


/*
7. Compare Numbers (if-else)
  - Define a function `compareNumbers(a, b)` that:
    - Logs "a is bigger" if a > b
    - Logs "b is bigger" if b > a
    - Logs "Numbers are equal" if they are the same
*/

function compareNumbers(a, b) {
  if (a > b) {
    console.log(
      "a is bigger"
    );
  } else if (b > a ){
    console.log(
      "b is bigger"
    );
  } else if ( a == b || a === b) {
    console.log(
      "Numbers are equal"
    );
  };
}

compareNumbers(8, 5);
compareNumbers(5, 9);
compareNumbers(12, 12);

/*
8. Palindrome Check
  - Define a function `isPalindrome(str)` that checks if `str` is the same
    forwards and backwards.
  - If it is, log: "<str> is a palindrome"
  - Otherwise, log: "<str> is not a palindrome"
*/

 function isPalindrome(str) {

  const cleanedStr = String(str).toLowerCase().replace(/[^a-z0-9]/g, '');
  const reversedStr = cleanedStr.split('').reverse().join('');

  if ( cleanedStr === reversedStr ) {
    console.log(
    `${str} is a palindrome`
    );
  } else {
    console.log(
      `${str} is not a palindrome`
    );
  };
   
}

isPalindrome('racecar');
isPalindrome(1212121);
isPalindrome('racetr');


/*
9. String Truncation
  - Define a function `truncateString(text, maxLength)` that uses slice() to
    cut the string to `maxLength` characters, then appends "..." if it was too long.
  - Log the final truncated string.
*/

function truncateString(text, maxLength) {

    if (text.length > maxLength) {
      console.log(text.slice(0, 23) + "...")
    } else {
      console.log(text);
    };   
};
truncateString(`I'am ready to dive into JavaScript but i don't know how to deal with it`, 23);
truncateString(`I'am ready to dive`, 23);

/*
10. Check Even or Odd (if-else)
  - Define a function `evenOrOdd(number)` that:
    - Logs "Even" if the number is even
    - Logs "Odd" if the number is odd
*/

function evenOrOdd(number) {
  if (number % 2 === 0) {
    console.log(`${number} is even`)
  } else {
    console.log(`${number} is odd`)
  };
};

evenOrOdd(7);
evenOrOdd(33);


/*
11. URL Protocol Checker
  - Define a function `checkProtocol(url)` that converts the URL to lowercase
    and checks if it starts with "https" using .startsWith().
  - Log "Secure connection" if true, otherwise "Unsecure connection".
*/

function checkProtocol(url) {
  console.log(
    url.toLowerCase(),
  );
  
  if(url.startsWith("HTTPS") || (url.startsWith("https"))) {
    console.log(
      "Secure connection"
    );
  } else {
    console.log("Unsecure connection")  
  };
};

checkProtocol("HTTPS://www.CODE2carrer.dev");
checkProtocol("www.code2career.dev");
checkProtocol("https://www.CODE2carrer.dev")

/*
12. Switch: Day of the Week
  - Define a function `getDayOfWeek(num)` that uses a switch statement:
    1 -> "Monday"
    2 -> "Tuesday"
    ...
    7 -> "Sunday"
    - Log the matched day or "Invalid day" if out of range.
*/

function getDayOfWeek(num){
  switch (num) {
    case 0: 
    num = "Monday";
    break;
    case 1:
      num = "Tuesday";
      break;
      case 2: 
      num = "Wednesday";
      break;
      case 3:
        num = "Thursday";
        break;
        case 4: 
        num = "Friday";
        break;
        case 5: 
        num = "Saturday";
        break;
        case 6:
          num = "Sunday";
          break;
          default:
            num = "Invalid Day";    
  };
  console.log(num)
};

getDayOfWeek(5);
getDayOfWeek(12);


/*
13. Repeat a String
  - Define a function `repeatWord(word, times)` that uses the .repeat() method
    to repeat `word` `times` times.
  - Log the repeated result.
*/

function repeatWord(word, times) {
  console.log(
    word.repeat(times)
  );
};

repeatWord("batibatii", 2);


/*
14. Replace Substring
  - Define a function `censorWord(sentence, target)` that replaces `target`
    with "****" (use .replaceAll() or multiple .replace()).
  - Log the censored sentence.
*/

function censorWord(sentence, target){
console.log(
  sentence.replace(target, "****")
)
};

censorWord("Hayat bize oyun oynuyor", "oyun");

/*
15. Check First Character (if-else)
  - Define a function `startsWithA(str)` that checks if the string starts with 'A'
    (use .charAt(0) or [0]).
  - Log "Starts with A" or "Does not start with A".
*/

function startsWithA(str){
  
  if(str.charAt(0) === "A"){
    console.log(
      "Starts with A"
    );
  } else {
    console.log(
      "Does not start with A"
    );
  };
}

startsWithA("Alphabet");
startsWithA("Boolean");



/*
16. Slice Last N Characters
  - Define a function `sliceLastN(text, n)` that uses .slice(-n) to extract
    the last `n` characters of `text`.
  - Log the result.
*/

function sliceLastN(text, n) {
  console.log(text.slice(-4));
};

sliceLastN("to be or not to be");

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
function gradeChecker(score){
  if (score > 89) {
    console.log("A");
  } else if (score >= 80){
    console.log("B");
  } else if (score >= 70){
    console.log("C");
  } else if (score >= 60){
    console.log("D");
  } else if (score < 60){
    console.log("C");
  };
};

gradeChecker(67);

function gradeCheckerTwo(score2){

  switch(true){
    case score2 >= 90:
      score2 = "A";
      break;
      case score2 >= 80:
        score2 = "B";
        break;
        case score2 >= 70:
          score2 = "C";
          break;
          case score2 >= 60:
            score2 = "D";
            break;
            default:
              score2 = "F";
  };
 console.log(score2);
};

gradeCheckerTwo(92);
gradeCheckerTwo(34);




/*
18. Character Replacement
  - Define a function `replaceCharacter(str, oldChar, newChar)` that uses .replaceAll()
    (or a loop) to swap all occurrences of oldChar with newChar.
  - Log the result.
*/

function replaceCharacter(str, oldChar, newChar){
  console.log(str.replaceAll(oldChar, newChar));
}

replaceCharacter("This is very long road", "r", "R",);

// second option 

const str = "This is very long road"
const newChar = {
  s: "S",
  o: "O"
};

let newStr = "";

for (const char of str){
  newStr += newChar[char] || char;
}
console.log(newStr);



/*
19. Title Case a Sentence
  - Define a function `titleCase(sentence)` that:
    - Splits the sentence by spaces
    - Uppercases the first letter of each word
    - Joins them back
  - Log the transformed string.
*/

function titleCase(sentence) {
  const lowered = sentence.toLowerCase().split(" ");
  const uppered = lowered.map(lower => {
  return lower.charAt(0).toUpperCase() + lower.slice(1);
});
sentence = uppered.join(" ")
console.log(sentence);
}

titleCase("Bugün hava gerçekten çok sıcak");

/*
20. Switch: Traffic Light
  - Define a function `trafficLight(color)` that uses a switch statement:
    - "red" -> log: "Stop"
    - "yellow" -> log: "Caution"
    - "green" -> log: "Go"
    - anything else -> "Invalid color"
*/

function trafficLight(color){
  switch (color) {
    case "red" :
      color = console.log("Stop");
      break;
      case "yellow" :
       color = console.log("Caution");
        break;
        case "green" :
          color = console.log("Go");
          break;
          default:
           color = console.log("Invalid Color");
  };
};

trafficLight("red");
trafficLight("purple");


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
  };
};

isLongString("to be or not to be");
isLongString("to be");

/*
22. Convert to Lowercase Then Check
  - Define a function `isSpam(text)` that converts the text to lowercase
    and checks if it includes "spam".
  - If it does, log "This text is spam."
  - Otherwise, log "This text is not spam."
*/

function isSpam(text){
  text.toLowerCase();
  if(text.includes("spam")){
    console.log("This text is spam")
  } else{
    console.log("This text is not spam");
  };
};

isSpam("Lorem IPSUM Lorem Spam");
isSpam("Lorem IPSUM Lorem IPsum");

/*
23. Extract Initials
  - Define a function `getInitials(fullName)` that uses .split() to get each name part,
    then logs the capitalized first letter of each.
  - Example: "John Doe" -> "J.D."
*/

function getInitials(fullName){

  const splittedFullName = fullName.split(" ");
  const initialsDone = splittedFullName.map(word => word.charAt(0).toUpperCase() + ".")
  .join(""); 
  
   console.log(initialsDone);
}

getInitials("Batıkan Sevil");

/*
24. Switch: Month to Season
  - Define a function `getSeason(monthNum)` (1-12). Use switch or if-else:
    - 12, 1, 2  -> "Winter"
    - 3, 4, 5   -> "Spring"
    - 6, 7, 8   -> "Summer"
    - 9, 10, 11 -> "Autumn"
  - Log the season or "Invalid month" if out of range.
*/

function getSeason(monthNum){
  switch (monthNum){
    case 1:
      monthNum = "Winter";
      break;
      case 2: 
      monthNum = "Winter";
      break;
      case 3:
        monthNum = "Spring";
        break;
        case 4:
          monthNum = "Spring";
          break;
          case 5:
            monthNum = "Spring";
            break;
            case 6: 
            monthNum = "Summer";
            break;
            case 7:
              monthNum = "Summer";
              break;
              case 8:
                monthNum = "Summer";
                break;
                case 9:
                  monthNum = "Autumun";
                  break;
                  case 10:
                    monthNum = "Autumun";
                    break;
                    case 11: 
                    monthNum = "Autumun";
                    case 12:
                      monthNum = "Winter";
                      break;
                      default:
                        monthNum = "Invalid month";

  }
  console.log(monthNum);
}

getSeason(7);
getSeason(15);

function getSeason2(monthNum){
  if(monthNum === 12 && 1 && 2){
    console.log("Winter");
  } else if (monthNum === 3 && 4 && 5){
    console.log("Spring");
  } else if (monthNum === 6 && 7 && 8){
    console.log("Summer");
  } else if (monthNum === 9 && 10 && 11){
    console.log("Autumn");
  } else {
    console.log("Invalid month");
  };
};

getSeason2(12);
getSeason2(18);

/*
25. Check If String Contains Number
  - Define a function `containsNumber(str)` that uses a loop or a method like
    .match() to check if there's any digit in the string.
  - Log "Contains number" or "No number found".
*/

function containsNumber(str){
  if (str.match(/\d/g)) {
    console.log("Contains number");
  } else {
    console.log("No number found");
  };
};

containsNumber("Ba7ıkan S3viL");

//option 2

function containsNumber2(str){
  const matches = str.match(/\d/g);
  console.log(matches);
}

containsNumber2("Ba7ıkan S3viL");

//option 3

function containsNumber3(str) {

let containsNumber3 = false;

for(let char of str) {
  if (!isNaN(char) && char !== " "){
    containsNumber3 = true;
    break;
  };
};

if (containsNumber3) {
  console.log("Contains number");
} else {
  console.log("No number found");
};
};

containsNumber3("Code 2 Career");
containsNumber3("Code to Career");


/*
26. Pad a String
  - Define a function `padString(str, maxLength)` that if str.length < maxLength,
    uses .padEnd() or .padStart() to make the string reach maxLength with '*'.
  - Log the padded string.
*/

function padString(str, maxLength){
  if(str.length < maxLength){
    console.log(str.padEnd(maxLength, "*"))
  }
}

padString("Java", 12);
padString("Html", 2);


/*
27. If-Else: Voting Eligibility
  - Define a function `canVote(age)` that logs:
    - "Can vote" if age >= 18
    - "Too young to vote" otherwise

*/

function canVote(age){
  if(age >= 18){
    console.log("Can vote");
  } else {
    console.log("Too young to vote");
  };
};

canVote(14);
canVote(32);

/*
28. Reverse Words in a Sentence
  - Define a function `reverseWords(sentence)` that:
    - Splits the sentence by spaces
    - Reverses each word individually
    - Joins them back
  - Log the result.
*/

function reverseWords(sentence) {
 const splittedWords = sentence.split(" ")
 const reversedWords = splittedWords.map(word => word.split("").reverse().join(""))
       .join(" ");

    console.log(reversedWords)
}

reverseWords("I want to run 25KM next weekend");

/*
29. Check Substring Position
  - Define a function `findWordPosition(sentence, word)` that uses .indexOf(word)
    to find the starting index. If not found, return -1.
  - Log the index or log "Not found" if it's -1.
*/

function findWordPosition(sentence, word){

  if (sentence.indexOf(word) >= 0) {
    console.log(sentence.indexOf(word));
  } else {
    console.log("Not found");
  };
};

findWordPosition("Batıkan", "z");
findWordPosition("Bodrum", "m");
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

function calculate(a, operator, b){
  let result;
    switch (operator) {
      case '+':
        result = a + b;
        break;
        case '-':
          result = a - b;
          break;
          case '*':
            result = a * b;
            break;
            case '/':
              if (b !== 0){
                result = a / b;
              } else {
                console.log("Division by zero leads to infinity")
              }
              break;
              default:
                console.log("Invalid operator")
    }
    
    console.log(result);
}

calculate(7, "+", 12);
calculate(8, "/", 2);
calculate(4, "-", 2);
calculate(216, "*", 216);
