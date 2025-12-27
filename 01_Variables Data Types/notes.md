# JavaScript Variables aur Data Types - Complete Notes

## 📌 Variables in JavaScript

### Variable Declaration ke 3 Tarike

JavaScript mein variables declare karne ke 3 main tarike hain:

1. **`var`** - Purana tarika, function-scoped hota hai
2. **`let`** - Modern tarika, block-scoped hota hai
3. **`const`** - Constant values ke liye, re-assign nahi kar sakte

#### Example:

```javascript
var a = 10; // var se variable
let b = 20; // let se variable
const c = 30; // const se constant
d = 40; // global variable (bina keyword ke - avoid karna chahiye)
```

### 🔍 Scope Samajhna

- **Function Scope (var)**: `var` function ke andar tak limited rehta hai
- **Block Scope (let/const)**: `let` aur `const` block `{}` ke andar tak limited rehte hain
- **Local vs Global**: Function ke andar declare = local, bahar = global

---

## 🎯 Hoisting Concept

### Kya hai Hoisting?

JavaScript mein variables aur functions ko upar move kar diya jata hai (mentally), isse hoisting kehte hain.

### `var` ka Hoisting:

```javascript
console.log(myVar); // Output: undefined (error nahi!)
var myVar = "Ashish Chaudhary";
```

☝️ `var` hoist hota hai aur `undefined` se initialize ho jata hai

### `let` ka Hoisting:

```javascript
console.log(myLet); // Error: Cannot access before initialization
let myLet = "Honey Chaudhary";
```

☝️ `let` hoist hota hai par initialize nahi hota (Temporal Dead Zone)

### Function Hoisting:

```javascript
// Function declaration - fully hoisted
myFun1(); // ✅ Kaam karega
function myFun1() {
  console.log("hello");
}

// Function expression - variable jaise behave karta hai
myFun2(); // ❌ Error
var myFun2 = function () {
  console.log("hello");
};
```

---

## 📊 Data Types in JavaScript

JavaScript mein **Dynamic Typing** hai - matlab variable ka type runtime par decide hota hai.

### 1️⃣ Primitive Data Types (7 total)

#### a) **Number**

```javascript
let num = 42; // Integer
let floatNum = 3.14; // Decimal/Float
```

- Integer aur floating-point dono ko handle karta hai
- Special values: `Infinity`, `-Infinity`, `NaN`

#### b) **String**

```javascript
let str = "Hello, World!";
let name = "Ashish";
```

- Text ko represent karta hai
- Single ya double quotes dono chalte hain

#### c) **Boolean**

```javascript
let isTrue = true;
let isFalse = false;
```

- Sirf 2 values: `true` ya `false`
- Conditions mein use hota hai

#### d) **Undefined**

```javascript
let x; // Declared but not assigned
console.log(x); // Output: undefined
```

- Variable declare kiya par value nahi di
- Default value hai

#### e) **Null**

```javascript
let y = null; // Intentionally empty
```

- Purposely empty value
- ⚠️ **Bug**: `typeof null` = "object" (JavaScript ki galti!)

#### f) **BigInt**

```javascript
let bigNum = 1121n; // 'n' suffix se BigInt
```

- Bahut bade numbers ke liye
- Normal number se bada hota hai

#### g) **Symbol**

```javascript
let sym = Symbol("id"); // Unique identifier
```

- Unique aur immutable value
- Object properties ke liye use hota hai

### 2️⃣ Non-Primitive (Reference) Data Types

#### a) **Object**

```javascript
let person = {
  name: "Ashish",
  age: 29,
  city: "Bulandshahr",
};

// Access karne ke tarike:
console.log(person.name); // Dot notation
console.log(person["name"]); // Bracket notation
console.log(Object.keys(person)); // Keys nikalna
console.log(Object.values(person)); // Values nikalna
```

#### b) **Array**

```javascript
let fruits = ["Apple", "Banana", "Cherry"];
let numbers = [20, 30, 40, 50];
```

#### c) **Function**

```javascript
function f1() {
  console.log("Hello");
}
```

---

## 🔬 Type Checking Techniques

### 1. Basic `typeof` Operator

```javascript
console.log(typeof 42); // "number"
console.log(typeof "hello"); // "string"
console.log(typeof true); // "boolean"
console.log(typeof undefined); // "undefined"
console.log(typeof null); // "object" ⚠️ (bug!)
console.log(typeof {}); // "object"
console.log(typeof []); // "object" ⚠️
console.log(typeof function () {}); // "function"
```

### 2. Array Check (Array aur Object distinguish karne ke liye)

```javascript
let arr = [20, 30, 40];
let obj = { name: "honey" };

console.log(typeof arr); // "object" (confusing!)
console.log(typeof obj); // "object"

// ✅ Correct way - Array.isArray()
console.log(Array.isArray(arr)); // true
console.log(Array.isArray(obj)); // false
```

### 3. null Check

```javascript
let y = null;
console.log(y === null); // true (best way)
```

### 4. Function Check

```javascript
function f2() {
  console.log("hello");
}

console.log(typeof f2); // "function"
console.log(f2 instanceof Object); // true
console.log(f2 instanceof Function); // true
```

---

## 🎓 Important Concepts

### Functions bhi Objects hain!

```javascript
function f2() {
  console.log("hello");
}

// Function mein property add kar sakte hain!
f2.yx = 10;
console.log(f2.yx); // 10
```

### Counter Function Example (Function as Object)

```javascript
function counter() {
  counter.count++;
}
counter.count = 0; // Function mein property

counter();
counter();
counter();
console.log(counter.count); // 3
```

---

## ✅ Best Practices

1. **`const` use karo** jab value change na karni ho
2. **`let` use karo** jab value change karni ho
3. **`var` avoid karo** - purana hai aur confusing scope hai
4. **Variable names meaningful rakho** - `x`, `y` se better hai `userName`, `totalPrice`
5. **Array check ke liye** `Array.isArray()` use karo, `typeof` nahi
6. **null check ke liye** `=== null` use karo
7. **Global variables se bacho** - har jagah accessible hone se bugs aate hain

---

## 🚨 Common Mistakes

1. ❌ `typeof null` = "object" (JavaScript bug)
2. ❌ `typeof []` = "object" (array check ke liye `Array.isArray()` use karo)
3. ❌ Hoisting samajhe bina variables use karna
4. ❌ `var` use karna modern code mein
5. ❌ `const` object/array ko re-assign karna (error dega)

---

## 📝 Summary

- **3 variable types**: `var` (old), `let` (modern), `const` (constant)
- **Hoisting**: Variables aur functions upar move hote hain
- **7 Primitive types**: Number, String, Boolean, Undefined, Null, BigInt, Symbol
- **3 Non-primitive types**: Object, Array, Function
- **Type checking**: `typeof`, `Array.isArray()`, `instanceof`
- **Best practice**: `const` > `let` > `var` (kabhi use mat karo)

---

**Happy Coding! 🚀**
