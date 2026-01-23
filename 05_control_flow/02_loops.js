// Example of a while loop in JavaScript
// Loops in JavaScript

let i = 1;
while (i <= 5) {
  //   console.log(`Iteration ${i}`);
  i++;
}

// do...while loop example
let j = 1;
do {
  //   console.log(`Iteration ${j}`);
  j++;
} while (j <= 5);

// for loop example
for (let i = 0; i <= 10; i++) {
  // console.log('hello', i);
}

// for...in loop example (for iterating over object properties)
const person = {
  name: "John",
  age: 30,
  city: "New York",
};

for (let key in person) {
  console.log(`${key}: ${person[key]}`);
}

// for...in loop example (for iterating over array indices)
let arry = ["Ashish", "honey", "kevin", "codezen"];
for (let key in arry) {
  console.log(key, arry[key]);
}

// for...of loop example (for iterating over iterable objects like arrays)
const fruits = ["Apple", "Banana", "Cherry"];
for (let fruit of fruits) {
  console.log(fruit);
}



array.forEach(element => {
  
});