# String Methods - JavaScript Notes

## Overview
Ye file different **String methods** ko explore karti hai jo JavaScript mein strings ko manipulate karne ke liye use hote hain. Isme basic string operations jaise concatenation, case conversion, character access, aur string transformation methods cover kiye gaye hain.

---

## Code Breakdown

### 1. **String Creation aur Concatenation**
- **Variables declare kiye gaye:** `userName` aur `userEmail`
- **Two ways se strings ko print kiya:**
  - Normal concatenation using `+` operator
  - Template literals using backticks `` ` `` aur `${}` syntax

### 2. **String Object Creation**
- `new String()` constructor ka use karke string object banaya
- **Note:** Jab aap `new String()` use karte ho, tab type `object` hota hai, primitive string nahi

### 3. **Case Conversion Methods**
- **`toUpperCase()`** - String ko uppercase mein convert karta hai
- **`toLocaleLowerCase()`** - String ko lowercase mein convert karta hai

### 4. **Character Access Methods**
- **`charAt(index)`** - Kisi particular index par character return karta hai
- **`indexOf(character)`** - Kisi character ka index/position return karta hai
- **Bracket notation `[index]`** - Directly index se character access kar sakte ho

### 5. **Character Code Method**
- **`charCodeAt(index)`** - Character ka UTF-16 code return karta hai
- Example: Character "s" ka UTF-16 code nikala gaya position 4 se

### 6. **String Combination**
- **`concat()`** - Do ya zyada strings ko combine karta hai
- Multiple strings ko space ke saath join kiya ja sakta hai

### 7. **String Checking Methods**
- **`endsWith(substring)`** - Check karta hai ki string kisi particular text se end ho rahi hai ya nahi
- Returns `true` ya `false`
- Example: "Honey" string par test kiya - "ney", "ey", "y" se end hota hai

### 8. **Search Method**
- **`includes(substring)`** - Check karta hai ki koi word/substring string mein exist karta hai ya nahi
- Case-sensitive hota hai (example mein "this" aur "This" different hain)

### 9. **Substring Extraction**
- **`substring(start, end)`** - String ka ek portion extract karta hai
- **`slice(start, end)`** - Similar to substring, but negative indices bhi support karta hai
  - Negative index: String ke end se counting start hoti hai

### 10. **Whitespace Removal**
- **`trim()`** - String ke front aur end se extra spaces remove karta hai

### 11. **String to Array Conversion**
- **`split()`** - String ko array mein convert karta hai
- Phir `push()` method se naye elements add kar sakte ho

### 12. **String Replacement**
- **`replace(oldText, newText)`** - String mein kisi text ko replace karta hai
- Example: "Ashish" ko "Honey" se replace kiya

---

## Important Functions / Logic

### Template Literals
```
`hello i am ${userName} and my email: ${userEmail}`
```
- Modern way to combine variables with strings
- Cleaner aur readable code

### Character Access Comparison
- `charAt(index)` - Safe method, invalid index par empty string return karta hai
- `[index]` - Direct access, invalid index par `undefined` return karta hai

### Negative Indexing
- `slice(-9)` - Last 9 characters extract karta hai
- Negative numbers backward counting karte hain

---

## Execution Flow

1. **Basic strings create aur display** kiye
2. **String object banaya** aur uska type check kiya
3. **Case conversion methods** test kiye
4. **Character access** different methods se kiya
5. **Character codes** extract kiye UTF-16 format mein
6. **Strings concatenate** kiye using `concat()`
7. **String ending** check ki using `endsWith()`
8. **Substring existence** verify kiya using `includes()`
9. **String portions extract** kiye using `substring()` aur `slice()`
10. **Whitespace remove** kiya using `trim()`
11. **String ko array mein convert** kiya aur elements add kiye
12. **Text replacement** kiya using `replace()`

---

## Key Notes

✅ **Template literals** (`${}`) modern aur preferred way hai string concatenation ke liye

✅ **`new String()`** se string object banta hai, not primitive - usually avoid karo

✅ **Most string methods** original string ko change nahi karte - naya string return karte hain (immutable)

✅ **`charAt()` vs `[]`** - `charAt()` zyada safe hai

✅ **`includes()`** case-sensitive hai - "this" aur "This" different hain

✅ **`slice()` vs `substring()`** - `slice()` negative indices support karta hai

✅ **`trim()`** sirf front aur end ki spaces remove karta hai, beech ki nahi

✅ **`split()`** powerful method hai jab string ko process karke array format mein chahiye

✅ **`replace()`** sirf pehli occurrence replace karta hai - saari occurrences ke liye `replaceAll()` use karo

---




