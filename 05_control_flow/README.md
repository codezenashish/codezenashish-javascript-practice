# JavaScript Loops - Notes

## Overview

Yeh file JavaScript mein different types of loops ka demonstration hai. Code mein total 5 types ke loops covered hain:

- `while` loop
- `do...while` loop
- `for` loop
- `for...in` loop (objects aur arrays ke liye)
- `for...of` loop (iterable objects ke liye)

Har loop ka apna specific use case hai aur different situations mein different loops use hote hain.

## Code Breakdown

### 1. While Loop

```
let i = 1;
while (i <= 5) {
  i++;
}
```

- Variable `i` ko 1 se initialize kiya gaya hai
- Loop tab tak chalta rahega jab tak `i` 5 se chota ya equal hai
- Har iteration mein `i` ki value 1 se badh rahi hai
- Currently console.log commented hai

### 2. Do...While Loop

```
let j = 1;
do {
  j++;
} while (j <= 5);
```

- Yeh loop pehle execute hota hai, phir condition check hoti hai
- `j` ko 1 se start kiya aur 5 tak increment kiya
- While loop se difference: yeh kam se kam ek baar zaroor chalega, chahe condition false bhi ho

### 3. For Loop

```
for (let i = 0; i <= 10; i++) {
  // console.log('hello', i);
}
```

- Classic for loop pattern: initialization, condition, increment sab ek line mein
- `i` ko 0 se start karke 10 tak chalaya
- Sabse common aur widely used loop hai

### 4. For...In Loop (Object Properties)

```
const person = {
  name: "John",
  age: 30,
  city: "New York"
};

for (let key in person) {
  console.log(`${key}: ${person[key]}`);
}
```

- Object ki properties ko iterate karne ke liye use hota hai
- `key` variable mein property ka naam aata hai
- `person[key]` se us property ki value access kar sakte hain
- Output: name, age, aur city keys print hongi with their values

### 5. For...In Loop (Array Indices)

```
let arry = ["Ashish", "honey", "kevin", "codezen"];
for (let key in arry) {
  console.log(key, arry[key]);
}
```

- Arrays mein for...in use karne se indices milte hain (0, 1, 2, 3)
- `key` mein index number aata hai, string format mein
- `arry[key]` se actual element access hota hai

### 6. For...Of Loop

```
const fruits = ["Apple", "Banana", "Cherry"];
for (let fruit of fruits) {
  console.log(fruit);
}
```

- Iterable objects (arrays, strings, etc.) ke liye best hai
- Direct values milti hain, indices nahi
- `fruit` variable mein seedha array ka element aata hai
- Arrays iterate karne ka modern aur clean way hai

## Important Functions / Logic

### Loop Types Ka Comparison:

- **while**: Jab iterations ki exact count pata na ho
- **do...while**: Jab kam se kam ek baar execution zaruri ho
- **for**: Jab iterations ki count pata ho
- **for...in**: Objects ki properties ya array indices chahiye hon
- **for...of**: Arrays ya iterable objects ke values chahiye hon

### For...In vs For...Of:

- **for...in**: Keys/indices return karta hai
- **for...of**: Values return karta hai

## Execution Flow

1. **while loop**: Pehle condition check, phir execute
2. **do...while loop**: Pehle execute, phir condition check
3. **for loop**: Initialization → Condition Check → Execute → Increment → Repeat
4. **for...in loop**: Har property/index ko iterate karta hai
5. **for...of loop**: Har value ko directly iterate karta hai

Currently sirf `for...in` aur `for...of` loops hi console.log kar rahe hain, baaki sab commented hain.

## Key Notes

- **Commented Code**: File mein zyada tar console.log statements commented hain, sirf for...in aur for...of loops active hain
- **Variable Naming**: Loop variables ke liye `i`, `j`, `key`, `fruit` jaise descriptive names use kiye gaye hain
- **Modern Approach**: `for...of` loop modern JavaScript ka preferred way hai arrays iterate karne ke liye
- **Object Iteration**: Objects ko iterate karne ke liye `for...in` best option hai
- **Array Iteration**: Arrays ke liye `for...of` zyada clean aur readable hai `for...in` se
- **Incomplete Code**: File ke end mein `array.forEach()` ka syntax hai jo incomplete hai - yeh shayad work in progress hai

### Best Practices:

- Arrays ke liye: `for...of` ya `forEach()` prefer karo
- Objects ke liye: `for...in` ya `Object.keys()` use karo
- Specific count iterations ke liye: traditional `for` loop best hai
- `while` loop tab use karo jab iterations beforehand pata na hon
