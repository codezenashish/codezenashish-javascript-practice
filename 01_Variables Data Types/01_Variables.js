// Variables in JavaScript
// Variables are used to store data values.
// There are three ways to declare variables in JavaScript: var, let, and const.
// 1. var: The var keyword is used to declare a variable that can be re-assigned later.
// 2. let: The let keyword is used to declare a block-scoped variable that can be re-assigned later.
// 3. const: The const keyword is used to declare a block-scoped variable that cannot be re-assigned later.
// Example of using var

var a  = 10; // Re-assigning the variable
var b = 20; // Re-assigning the variable
var c = a + b; // Adding two variables
console.log("Value of c is: " + c); 

// Example of using let
let x = 5; // Initializing a variable
let y = 10; // Initializing another variable
let z = x + y; // Adding two variables
console.log("Value of z is: " + z);

// Example of using const
const pi = 3.14; // Initializing a constant variable
console.log("Value of pi is: " + pi);
// pi = 3.14159; // This will throw an error because pi is a constant and cannot be re-assigned         

// Data Types in JavaScript
// JavaScript has dynamic typing, which means variables can hold values of any data type.   
// The basic data types in JavaScript are:
// 1. Number: Represents both integer and floating-point numbers.
let num = 42; // Integer
let floatNum = 3.14; // Floating-point number

// 2. String: Represents a sequence of characters.
let str = "Hello, World!"; // String

// 3. Boolean: Represents a logical value, either true or false.
let isTrue = true; // Boolean value
let isFalse = false; // Boolean value

// 4. Undefined: Represents a variable that has been declared but not assigned a value.
let undefinedVar; // This variable is declared but not assigned a value
console.log("Value of undefinedVar is: " + undefinedVar); // Output: undefined

// 5. Null: Represents an intentional absence of any value.
let nullVar = null; // This variable is explicitly set to null
console.log("Value of nullVar is: " + nullVar); // Output: null

// 6. Object: Represents a collection of key-value pairs.
let person = {
    name: "John Doe",
    age: 30,
    isEmployed: true
}; // Object with properties    

console.log("Person object:", person); 

// 7. Array: Represents a list-like structure that can hold multiple values.
let fruits = ["Apple", "Banana", "Cherry"]; // Array of strings 
console.log("Fruits array:", fruits);

// 8. Symbol: Represents a unique and immutable value, often used as object property keys.
let uniqueSymbol = Symbol("uniqueIdentifier"); // Creating a unique symbol
console.log("Unique Symbol:", uniqueSymbol);

// 9. BigInt: Represents integers with arbitrary precision, useful for very large numbers.
let bigIntValue = BigInt(1234567890123456789012345678901234567890); // BigInt value
console.log("BigInt value:", bigIntValue);

// Summary
// In JavaScript, variables can be declared using var, let, or const.
// Data types include Number, String, Boolean, Undefined, Null, Object, Array, Symbol, and BigInt.
// JavaScript is dynamically typed, allowing variables to hold values of any data type.
// Understanding these concepts is essential for effective programming in JavaScript.
// Note: Always use let or const for variable declarations in modern JavaScript to avoid issues with variable hoisting and scope.
// Avoid using var unless necessary, as it has function scope and can lead to unexpected behavior.
// Best practices suggest using const for variables that won't change and let for those that will.
// This code provides a basic understanding of variables and data types in JavaScript.