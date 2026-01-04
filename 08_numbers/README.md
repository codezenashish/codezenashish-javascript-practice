# JavaScript Numbers - Notes

## Overview

Yeh file JavaScript mein numbers ke saath different operations aur methods ko demonstrate karti hai. Code mein teen main topics covered hain:

- Number formatting methods (`toFixed()`, `toPrecision()`)
- Number to String conversion
- Math object ke built-in methods
- Random number generation

Sabhi methods practical examples ke saath explained hain.

## Code Breakdown

### 1. toFixed() Method

```javascript
function tofix(x) {
  return Number.parseFloat(x).toFixed(2);
}
```

- `Number.parseFloat()` string ko number mein convert karta hai
- `toFixed(2)` decimal ke baad 2 digits tak round kar deta hai
- Example: `12.222222` → `12.22`
- `0.0` → `0.00` (hamesha 2 decimal places dikhata hai)
- **Return type**: String (number nahi!)

### 2. Number to String Conversion

```javascript
let num = new Number(1024);
let str = num.toString();
```

- `new Number()` se Number object create hota hai
- `.toString()` method number ko string mein convert karta hai
- `typeof num` → `"object"` (kyunki new keyword use kiya)
- `typeof str` → `"string"` (conversion ke baad)

### 3. toPrecision() Method

```javascript
function pera(y) {
  return Number.parseFloat(y).toPrecision(4);
}
```

- Total significant digits specify karta hai (decimal point include)
- Examples:
  - `1111` → `"1111"` (4 digits)
  - `111` → `"111.0"` (4 digits tak extend)
  - `11` → `"11.00"` (4 digits tak extend)
  - `1` → `"1.000"` (4 digits tak extend)
- **Return type**: String

### 4. Number Length Calculation

```javascript
let num1 = new Number(100);
let someChange = num1.toString().length;
```

- Number ko pehle string mein convert kiya
- Phir `.length` property se kitne digits hain wo count kiya
- `100` mein 3 digits hain, toh output `3` hoga

### 5. toLocaleString() Method

```javascript
let bigNum = 10000000;
let bigSomeChnage = bigNum.toLocaleString("en-IN");
```

- Numbers ko locale-specific format mein display karta hai
- `"en-IN"` Indian numbering system use karta hai (commas Indian style mein)
- `10000000` → `"1,00,00,000"` (Indian format)
- Padhai mein easy ho jata hai bade numbers samajhna

### 6. Math.abs() - Absolute Value

```javascript
Math.abs(-20);
```

- Negative number ko positive mein convert karta hai
- `-20` → `20`
- Distance calculations mein useful hai

### 7. Math.round() - Round to Nearest

```javascript
Math.round(121.12222);
```

- Number ko nearest integer tak round karta hai
- `121.12222` → `121`
- 0.5 se zyada ho to upar, kam ho to neeche

### 8. Math.ceil() - Round Up

```javascript
Math.ceil(1.1);
```

- Hamesha upar ki taraf round karta hai (ceiling)
- `1.1` → `2`
- Even `1.01` bhi `2` ban jayega

### 9. Math.floor() - Round Down

```javascript
Math.floor(1.9);
```

- Hamesha neeche ki taraf round karta hai (floor)
- `1.9` → `1`
- Decimal part completely ignore ho jata hai

### 10. Math.max() and Math.min()

```javascript
Math.max(1, 2, 3, 4, 10, 50, 70, 100);
Math.min(1, 2, 3, 4, 10, 50, 70, 100);
```

- `Math.max()` sabse bada number return karta hai → `100`
- `Math.min()` sabse chota number return karta hai → `1`
- Multiple arguments pass kar sakte hain

### 11. Random Number Generation (Range ke saath)

```javascript
let max = 20;
let min = 10;
Math.floor(Math.random() * (max - min + 1)) + min;
```

- **Formula explanation**:
  - `Math.random()` → 0 se 1 ke beech random decimal (0 inclusive, 1 exclusive)
  - `(max - min + 1)` → Range calculate karta hai (20-10+1 = 11)
  - Multiply karke → 0 se 10.999... tak random number
  - `+ min` → 10 se 20.999... tak shift ho jata hai
  - `Math.floor()` → Decimal hata kar integer milta hai
- Result: 10 se 20 ke beech (inclusive) random integer

## Important Functions / Logic

### Number Formatting Methods:

- **toFixed(n)**: Decimal ke baad exactly 'n' digits (string return)
- **toPrecision(n)**: Total 'n' significant digits (string return)
- **toLocaleString()**: Locale-specific formatting (India, US, etc.)
- **toString()**: Number ko string mein convert

### Math Object Methods:

- **Math.abs()**: Absolute value (negative → positive)
- **Math.round()**: Nearest integer
- **Math.ceil()**: Round up (ceiling)
- **Math.floor()**: Round down (floor)
- **Math.max()**: Maximum value
- **Math.min()**: Minimum value
- **Math.random()**: Random decimal (0 to 1)

## Execution Flow

1. **toFixed demo**: 12.222222 aur 0.0 ko 2 decimal places mein format karke console log
2. **Type conversion check**: Number object create, string mein convert, types verify
3. **toPrecision demo**: Different numbers ko 4 significant digits mein format
4. **Length calculation**: 100 ko string banake uski length nikali
5. **Locale formatting**: 10000000 ko Indian format mein display
6. **Math methods demo**: abs, round, ceil, floor ka output
7. **Max/Min demo**: Array of numbers mein se max aur min find
8. **Random number**: 10 se 20 ke beech random integer generate

Saare outputs console mein print ho rahe hain.

## Key Notes

### Important Points:

- **toFixed() aur toPrecision() string return karte hain**, number nahi!
- `new Number()` se Number object banta hai, simple `100` ek primitive value hai
- Math methods directly use kar sakte hain, koi object create karne ki zarurat nahi
- `Math.random()` kabhi exactly 1 nahi return karta, hamesha 1 se kam

### Use Cases:

- **toFixed()**: Price display, currency formatting
- **toPrecision()**: Scientific calculations, significant digits
- **toLocaleString()**: International number formatting
- **Math.floor()**: Array indexing, pagination
- **Math.random()**: Games, randomization, shuffling

### Common Mistakes:

- toFixed() ka result number samajh kar direct calculation na karein, pehle Number() mein wrap karein
- Math.random() \* max seedha use karne se 0 se max-1 milega, formula properly use karein
- Math.ceil() aur Math.floor() ka difference samajhna important hai

### Random Number Formula:

```
Math.floor(Math.random() * (max - min + 1)) + min
```

Yeh formula min se max (both inclusive) ke beech integer deta hai - yaad rakhein!
