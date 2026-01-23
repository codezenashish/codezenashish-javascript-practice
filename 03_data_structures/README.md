# JavaScript Arrays - Complete Notes

## Overview

Ye folder teen JavaScript files contain karta hai jo arrays ke different concepts ko cover karti hain:

- **array.js** - Array aur Object ka difference samajhne ke liye
- **main.js** - Basic array operations aur methods
- **map_filter.js** - Advanced array methods jaise map, filter, reduce, splice, spread operator

---

## Code Breakdown

### 📁 File 1: array.js

#### Kya seekha:

- Array aur Object mein difference
- `typeof` operator ka use
- `Array.isArray()` method

#### Code Logic:

1. **Array creation**: String values ke saath ek array banaya
2. **forEach loop**: Array ke har element ko index ke saath print kiya
3. **Object creation**: Ek simple object banaya hai properties ke saath
4. **Type checking**:
   - `typeof` dono (array aur object) ke liye "object" return karta hai
   - `Array.isArray()` se properly check kar sakte hain ki koi value array hai ya nahi

---

### 📁 File 2: main.js

#### Kya seekha:

- Array indexing aur access
- Array manipulation methods
- forEach loop

#### Important Functions/Methods:

**1. Array Access:**

- Index 0 se start hota hai
- `fruits[0]` - First element
- `fruits[fruits.length - 1]` - Last element

**2. Array Modification Methods:**

- **`push()`** - Last mein element add karta hai
- **`pop()`** - Last se element remove karta hai
- **`unshift()`** - Start mein element add karta hai
- **`shift()`** - Start se element remove karta hai

**3. forEach Loop:**

- Array ke har element par iterate karta hai
- Callback function leta hai jo element aur index dono provide karta hai

---

### 📁 File 3: map_filter.js

Ye file sabse advanced hai aur kaafi important array methods cover karti hai.

#### Important Functions/Methods:

**1. `splice()` Method:**

- Array mein specific position par elements add/remove karta hai
- Syntax: `array.splice(index, deleteCount, item1, item2, ...)`
- Example: `a.splice(3, 0, true)` - index 3 par true add karo, kuch delete mat karo

**2. `map()` Method:**

- Har element par operation perform karke **naya array** return karta hai
- Original array change nahi hota
- Examples:
  - Numbers ko double karna: `newAry.map(num => num * 2)`
  - Square nikalna: `sqr.map(num => num * num)`
  - Object se specific property extract karna: `user.map(user => user.name)`

**3. `join()` Method:**

- Array ko string mein convert karta hai
- Separator specify kar sakte hain
- Example: `names.join(" ")` - Space se join karega

**4. `filter()` Method:**

- Condition ke basis par naya array return karta hai
- Jo elements condition satisfy karte hain, wo include hote hain
- Example: `filterUse.filter(e => e > 25)` - 25 se bade numbers

**5. `reduce()` Method:**

- Array ko ek single value mein reduce karta hai
- Accumulator aur current value leta hai
- Example: `filterUse.reduce((s, m) => s + m, 0)` - Sabhi numbers ka sum

**6. Search Methods:**

- **`indexOf()`** - First occurrence ka index return karta hai
- **`lastIndexOf()`** - Last occurrence ka index return karta hai
- **`includes()`** - Element present hai ya nahi (true/false)

**7. `splice()` for Sub-array:**

- Array ka portion extract karta hai
- Original array ko modify kar deta hai
- Example: `ax.splice(2, 4)` - Index 2 se 4 elements nikal lo

**8. Spread Operator (`...`):**

- Multiple arrays ko combine karne ke liye
- Clean aur modern syntax
- Example: `[...az, ...bz, ...cz]`

**9. `concat()` Method:**

- Arrays ko merge karta hai
- Naya array return karta hai
- Example: `az.concat(az, bz)`

---

## Execution Flow

### array.js:

1. Array aur Object define karo
2. forEach se array print karo
3. typeof se type check karo
4. Array.isArray() se confirm karo

### main.js:

1. Different types ke arrays create karo
2. Indexing se elements access karo
3. Push, Pop, Unshift, Shift methods use karo
4. forEach se iterate karo

### map_filter.js:

1. splice() se array manipulate karo
2. map() se transformation karo
3. filter() se specific elements select karo
4. reduce() se sum calculate karo
5. Search methods use karo
6. Spread operator aur concat() se arrays merge karo

---

## Key Notes

### 🎯 Important Concepts:

1. **Array vs Object:**

   - Dono `typeof` se "object" return karte hain
   - `Array.isArray()` use karo proper checking ke liye

2. **Mutating vs Non-Mutating:**

   - **Mutating** (original array change hota hai): push, pop, shift, unshift, splice
   - **Non-Mutating** (naya array return hota hai): map, filter, concat

3. **map() vs filter():**

   - `map()` - Same length ka naya array, har element transform hota hai
   - `filter()` - Choti ya same length ka array, sirf matching elements

4. **reduce() Power:**

   - Sum, average, maximum, minimum calculate kar sakte hain
   - Complex transformations ke liye useful

5. **Modern Syntax:**

   - Arrow functions (`=>`) cleaner aur shorter hain
   - Spread operator (`...`) array operations ko easy banata hai

6. **Common Patterns:**
   - Last element: `array[array.length - 1]`
   - Array clone: `[...array]` ya `array.concat()`
   - Array clear: `array.length = 0`

---

## Practice Tips

✅ Har method ko console mein try karo  
✅ Original array change hota hai ya nahi, ye dhyan rakho  
✅ Arrow functions ki practice karo  
✅ Real-world examples ke saath practice karo (user lists, products, etc.)  
✅ Method chaining seekho: `array.filter().map().reduce()`

---

**Happy Coding! 🚀**
