// primitive data types

//types
// 1. Number // example: 42, 3.14

// 2. String // example: "Hello, World!"

// 3. Boolean // example: true, false

// 4. Undefined // example: let x; // x is declared but not assigned a value

// 5. Null // example: let y = null;

// 6. BigInt // example: 1121n

// 7. Symbol // symbol(id)

// non-primitive data types
// 1. Object // example: { name: "John", age: 30 }
// 2. Array // example: [1, 2, 3, 4, 5]
// 3. Function // example: function myFunction() { return "Hello"; }

let x = {
  name: "Ashish",
  age: 29,
  city: "Bulandshahr",
};

console.log(x['name'])
console.log(typeof x)
console.log(Object.keys(x))
console.log(Object.values(x))

function f1() {
  let x = "Ashish";
}
// console.log(typeof(f1))

let y = null; // output is object but null all ready null valu why show output is object
// console.log(typeof y)

// console.log(y === null)

// type chacking

let ab = [20, 30, 40, 50];

let obj = {
  name: "honey",
  age: 29,
};

console.log(typeof ab) // object
console.log(typeof obj) // object

// Adavance checking
console.log(Array.isArray(ab)) // true
console.log(Array.isArray(obj)) // flase

// function chacking

function f2() {
  console.log("hello");
}

console.log(typeof f2);

f2.yx = 10;
console.log(f2.yx);

console.log(f2 instanceof Object);
console.log(f2 instanceof Function);


function counter() {
  counter.count++;
}
counter.count = 0;
counter()
counter()
counter()
counter()

console.log(counter.count)
