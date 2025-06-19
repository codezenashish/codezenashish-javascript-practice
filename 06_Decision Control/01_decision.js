// ? Falsy values: false, 0, "", null, undefined, NaN
//? Truthy values: Everything else (true, 1, "hello", [], {}, etc.)

// decision control

// Example
let age = 20;
if (age >= 18) {
  console.log("You are an adult.");
} else {
  console.log("You are a minor.");
}

// ? if else

let score = 75;
if (score >= 90) {
  console.log("Grade: A");
} else if (score >= 80) {
  console.log("Grade: B");
} else if (score >= 70) {
  console.log("Grade: C");
} else {
  console.log("Grade: F");
}

// ? Ternary Operator (? :)

let ageX = 17; // Example age
// Using ternary operator to check voting eligibility
let canVot = ageX >= 18 ? "yes" : "no";
console.log(canVot);

//? switch

let nameMonth = 5; // Example day number (1-7 for days of the week)
switch (nameMonth) {
  case 1:
    console.log("Sunday");
    break;
  case 2:
    console.log("Monday");
    break;
  case 3:
    console.log("Tuesday");
    break;
  case 4:
    console.log("Wednesday");
    break;
  case 5:
    console.log("Thursday");
    break;
  case 6:
    console.log("Friday");
    break;
  case 7:
    console.log("Saturday");
    break;
  default:
    console.log("Invalid day number");
}

let name = ""; // Example empty string

if (name) {
  console.log("Name is provided.");
} else {
  console.log("Name is empty."); // This runs
}

//? && (AND) → Both conditions must be true.
//? || (OR) → At least one condition must be true.
//? ! (NOT) → Inverts a condition.

// Example of using logical operators
let a = 18;
let b = true;

if (a >= 18 && b) {
  console.log("You can drive.");
} else {
  console.log("You cannot drive.");
}

// Example of using OR operator
let c = 20;
let adx = 16;
if (adx >= 1 || c >= 18) {
  console.log("At least one person can drive.");
} else {
  console.log("Neither can drive.");
}


// Example of using NOT operator

let isRaining = true; // Example condition
if (!isRaining) {
  console.log("You can go outside without an umbrella.");
}else {
  console.log("You need an umbrella.");
}