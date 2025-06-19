// Strict vs loose equality
5 == "5"; // true
5 === "5"; // false

// Type coercion examples
0 == false; // true
1 == true; // true

// Comparison with null/undefined
null == undefined; // true
null === undefined; // false

// String comparisons
"a" < "b"; // true
"Z" < "a"; // true (uppercase letters are "less than" lowercase)

// this is Conditional Statements
function cnt(a, b) {
  if (a === b) {
    console.log(`${a} is strictly equal to ${b}`);
  } else if (a == b) {
    console.log(`${a} is loosely  equal to ${b}`);
  } else if (a > b) {
    console.log(`${a} is greater  equal to ${b}`);
  } else {
    console.log(`${a} is less than ${b}`);
  }
}

cnt(10, 10); // acording to chnage value

// Comparison Functions

function isAdult(age) {
  return age >= 18;
}

function isValidPassowrd(password) {
  return password !== "" && password.length >= 8;
}

console.log(isAdult(40));
console.log(isValidPassowrd('55555555'));
