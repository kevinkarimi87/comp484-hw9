// ==========================
// Part 1: Date Display
// ==========================

// TODO:
// 1. Create a Date object

// create Date object for current date
var currentDate = new Date();

// 2. Get the current month, day, and year
// 3. Adjust month if needed (JavaScript months are 0-based)
// get month (add 1 because months are 0-based), day, and year
var month = currentDate.getMonth() + 1;
var day = currentDate.getDate();
var year = currentDate.getFullYear();

// 4. Add leading zeros to month/day if needed
// add leading zeros so month and day are always two digits
var formattedMonth = String(month).padStart(2, "0");
var formattedDay = String(day).padStart(2, "0");

// 5. Create a string in the format: "Today is MM/DD/YYYY"
var dateMessage = "Today is " + formattedMonth + "/" + formattedDay + "/" + year;

// 6. Display the result in the element with id="dateOutput"
document.getElementById("dateOutput").textContent = dateMessage;

// ==========================
// Part 2: Number Conversion
// ==========================

// TODO:
// 1. Create at least 4 separate variables:
//    - at least 2 numeric strings (example: "42")
//    - at least 1 decimal string (example: "19.75")
//    - at least 1 non-numeric string (example: "hello")

var numericString1 = "10";
var numericString2 = "27";
var decimalString = "19.25";
var nonNumericString = "ok";

// TODO:
// 2. For EACH variable:
//
//    a. Convert the value using Number()
//    b. Check if it is NaN using Number.isNaN()
//    c. Check if it is an integer using Number.isInteger()

// convert each value with Number(), then check if it is NaN and if it is an integer
var convertedNumericString1 = Number(numericString1);
var isNaNNumericString1 = Number.isNaN(convertedNumericString1);
var isIntegerNumericString1 = Number.isInteger(convertedNumericString1);

var convertedNumericString2 = Number(numericString2);
var isNaNNumericString2 = Number.isNaN(convertedNumericString2);
var isIntegerNumericString2 = Number.isInteger(convertedNumericString2);

var convertedDecimalString = Number(decimalString);
var isNaNDecimalString = Number.isNaN(convertedDecimalString);
var isIntegerDecimalString = Number.isInteger(convertedDecimalString);

var convertedNonNumericString = Number(nonNumericString);
var isNaNNonNumericString = Number.isNaN(convertedNonNumericString);
var isIntegerNonNumericString = Number.isInteger(convertedNonNumericString);

// TODO:
// 3. For EACH value, create a sentence showing:
//    - original value
//    - converted value
//    - whether it is NaN
//    - whether it is an integer
//
// Example format (you must create your own variables):
// "Original: '42' -> Converted: 42 -> isNaN: false -> isInteger: true"

var numericString1Result = "Original: '" + numericString1 + "' -> Converted: " + convertedNumericString1 + " -> isNaN: " + isNaNNumericString1 + " -> isInteger: " + isIntegerNumericString1;
var numericString2Result = "Original: '" + numericString2 + "' -> Converted: " + convertedNumericString2 + " -> isNaN: " + isNaNNumericString2 + " -> isInteger: " + isIntegerNumericString2;
var decimalStringResult = "Original: '" + decimalString + "' -> Converted: " + convertedDecimalString + " -> isNaN: " + isNaNDecimalString + " -> isInteger: " + isIntegerDecimalString;
var nonNumericStringResult = "Original: '" + nonNumericString + "' -> Converted: " + convertedNonNumericString + " -> isNaN: " + isNaNNonNumericString + " -> isInteger: " + isIntegerNonNumericString;

// if/else check whether the non-numeric value is a valid number
var validityMessage;
if (isNaNNonNumericString) {
  validityMessage = "'" + nonNumericString + "' is not a valid number.";
} else {
  validityMessage = "'" + nonNumericString + "' is a valid number.";
}

// TODO:
// 4. Combine all your results into ONE string
//    (you can use + to join multiple strings)

// combine all results into one string
var numberConversionMessage =
  numericString1Result + "<br>" +
  numericString2Result + "<br>" +
  decimalStringResult + "<br>" +
  nonNumericStringResult + "<br>" +
  validityMessage;

// TODO:
// 5. Display the final result inside the element:
//    id="numberConversionOutput"

// display results on the page
document.getElementById("numberConversionOutput").innerHTML = numberConversionMessage;

// ==========================
// Part 3: Math & Formatting
// ==========================

// OPTION B: GRADE SCORE CALCULATOR

// TODO:
// 1. Create at least 2-3 numeric variables
var examScore1 = 85;
var examScore2 = 90;
var examScore3 = 50;
var passingScore = 70;

// 2. Perform calculations:
//    - at least one addition
//    - at least one other operation (subtract, multiply, or divide)

// add all scores
var totalScore = examScore1 + examScore2 + examScore3;

// divide the total by the number of scores to get the average
var averageScore = totalScore / 3;

// 3. Use at least ONE of the following:
//    - toFixed()
//    - toLocaleString()
//    - Number.parseInt()
//    - Number.parseFloat()

// round the average to 2 decimal places
var formattedAverage = averageScore.toFixed(2);

// if/else check if the average is passing
var passingMessage;
if (averageScore >= passingScore) {
  passingMessage = "Passing";
} else {
  passingMessage = "Not passing";
}

// extra credit: ternary operator to label each exam as Pass or Fail
var examLabel1 = examScore1 >= passingScore ? "Pass" : "Fail";
var examLabel2 = examScore2 >= passingScore ? "Pass" : "Fail";
var examLabel3 = examScore3 >= passingScore ? "Pass" : "Fail";

// 4. Build a string showing your results
var mathMessage =
  "Exam 1: " + examScore1 + " (" + examLabel1 + ")<br>" +
  "Exam 2: " + examScore2 + " (" + examLabel2 + ")<br>" +
  "Exam 3: " + examScore3 + " (" + examLabel3 + ")<br>" +
  "Total score: " + totalScore + "<br>" +
  "Average score: " + formattedAverage + "<br>" +
  "Result: " + passingMessage;

// 5. Display the results inside the element with id="mathOutput"
document.getElementById("mathOutput").innerHTML = mathMessage;

// ==========================
// Part 4: Conditionals
// ==========================

// TODO:
// 1. Write at least TWO if/else statements
//
// Ideas:
// - check if a value is NaN
// - check if a number is an integer
// - check if a result is greater than a certain value
//
// 2. Display a message on the page based on the condition
//    (append it to an existing section or create a new message)

// if/else statements are used in:
// - Part 2: checks if the non-numeric value is NaN and shows a validity message
// - Part 3: checks if the average score is passing (70 or higher)
