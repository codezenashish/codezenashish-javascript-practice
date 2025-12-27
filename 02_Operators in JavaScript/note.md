# JavaScript Operators - Complete Notes

## 📌 Operators Kya Hain?

Operators special symbols hote hain jo values aur variables par operations perform karte hain. JavaScript mein bahut saare types ke operators hain.

---

## 1️⃣ Arithmetic Operators (Ganit ke Operators)

### Basic Math Operations:

- **`+` (Addition)** - Jodna
- **`-` (Subtraction)** - Ghatana
- **`*` (Multiplication)** - Guna karna
- **`/` (Division)** - Bhag karna
- **`%` (Modulus)** - Remainder nikalna

### Division ke Special Cases:

**Normal Division:** Decimal answer deta hai

- `7 / 4` = `1.75`

**Floor Division:** Integer answer chahiye to `Math.floor()` use karo

- `Math.floor(12 / 36)` = `0`

**Modulus (%):** Remainder nikalta hai

- `10 % 3` = `1` (kyunki 10 ÷ 3 = 3, bacha 1)

---

## 2️⃣ Increment & Decrement Operators

### Post-Increment/Decrement (`x++`, `x--`)

- **Pehle value assign hoti hai, phir increment/decrement**

Jaise:

- `x = 5`, `z = x--`
- Pehle `z = 5` ho jata hai
- Phir `x = 4` ho jata hai

### Pre-Increment/Decrement (`++x`, `--x`)

- **Pehle increment/decrement, phir value assign**

Example dekho:

- `a++` → Pehle a use hota hai, phir badhta hai
- `++a` → Pehle a badhta hai, phir use hota hai

---

## 3️⃣ Assignment Operators

### Basic Assignment: `=`

- Value assign karta hai

### Compound Assignment Operators:

- **`+=`** (Add and Assign)
  - `sm = 10; sm += 10;` → Ab `sm = 20`
- **`-=`** (Subtract and Assign)
- **`*=`** (Multiply and Assign)
- **`/=`** (Divide and Assign)
- **`%=`** (Modulus and Assign)

Ye shortcuts hain:

- `sm += 10` matlab `sm = sm + 10`

---

## 4️⃣ Comparison Operators (Tulna Operators)

### Greater Than / Less Than:

- **`>`** (Greater than) - Bada hai
- **`<`** (Less than) - Chota hai
- **`>=`** (Greater than or Equal) - Bada ya barabar hai
- **`<=`** (Less than or Equal) - Chota ya barabar hai

Example:

- `chackAge >= 20` → Check karta hai age 20 ya usse zyada hai

---

## 5️⃣ Equality Operators - Bahut Important! ⚠️

### `==` (Loose Equality)

- **Sirf value check karta hai, type nahi**
- Type coercion hota hai (automatic conversion)

Examples:

- `12 == "12"` → `true` (type convert ho jata hai)
- `5 == "5"` → `true`
- `0 == false` → `true`
- `1 == true` → `true`

### `===` (Strict Equality) - Recommended ✅

- **Value aur Type dono check karta hai**
- Type coercion NAHI hota

Examples:

- `12 === "12"` → `false` (number !== string)
- `5 === "5"` → `false`
- `12 === 12` → `true`

### `!=` (Loose Not Equal)

- Loose equality ka opposite

### `!==` (Strict Not Equal) - Recommended ✅

- Strict equality ka opposite

---

## 6️⃣ Special Cases - Null & Undefined

### Loose Equality (`==`):

- `null == undefined` → `true` (special case!)

### Strict Equality (`===`):

- `null === undefined` → `false` (different types hain)

**Best Practice:** Hamesha `===` use karo confusion avoid karne ke liye!

---

## 7️⃣ String Comparison

### Alphabetical Order:

- Strings ko alphabetically compare karta hai
- `"a" < "b"` → `true`

### Uppercase vs Lowercase:

- **Uppercase letters < Lowercase letters**
- `"Z" < "a"` → `true`
- Kyunki ASCII values mein uppercase pehle aate hain

### String Concatenation (`+`):

- Strings ko jodne ke liye
- `"Ashish" + " " + "Choudhary"` → `"Ashish Choudhary"`

---

## 8️⃣ Logical Operators

### `&&` (AND Operator)

- **Dono conditions true honi chahiye**

Example:

- `age1 >= 18 && entery` → Dono true hone par hi true

### `||` (OR Operator)

- **Koi bhi ek condition true ho**

### `!` (NOT Operator)

- **Opposite value deta hai**
- `!true` → `false`
- `!false` → `true`

---

## 9️⃣ Ternary Operator (Conditional Operator)

### Syntax: `condition ? true_value : false_value`

Short form of if-else:

- `test >= 20 ? 'Adult' : 'minor'`
- Agar `test >= 20` true hai to `'Adult'` warna `'minor'`

**One liner if-else hai ye!**

---

## 🔍 Conditional Statements mein Operators

### If-Else Statements:

**Simple If:**
Agar condition true hai to block execute hoga

**If-Else:**
True ho to if block, false ho to else block

**If-Else If-Else:**
Multiple conditions check kar sakte ho

Example Flow:

1. Pehle strict equality check (`===`)
2. Phir loose equality check (`==`)
3. Phir greater than check (`>`)
4. Else less than

---

## 🎯 Comparison Functions

### Age Validation:

Ek function jo check kare ki adult hai ya nahi

- Return type: `boolean` (true/false)
- `age >= 18` → Adult

### Password Validation:

Strong password ke liye checks:

- Empty nahi hona chahiye (`!== ""`)
- Length kam se kam 8 characters (`length >= 8`)
- Dono conditions ko `&&` se combine karo

Function mein return karke directly true/false mil jata hai

---

## ✅ Best Practices

1. **Hamesha `===` use karo** instead of `==`

   - Type safety milti hai
   - Bugs kam hote hain

2. **Ternary operator** simple conditions ke liye best hai

   - One liner clean code

3. **Meaningful variable names** use karo

   - `chackAge` → Better: `userAge`
   - `chake` → Better: `number` ya `value`

4. **Compound operators** use karo shorthand ke liye

   - `x += 5` better hai `x = x + 5` se

5. **Logical operators** multiple conditions combine karne ke liye
   - Clean aur readable code

---

## 🚨 Common Mistakes

1. ❌ `==` use karna (type confusion hota hai)

   - ✅ `===` use karo

2. ❌ String comparison mein case sensitivity bhulna

   - `"Z" < "a"` → `true` (unexpected!)

3. ❌ Post vs Pre increment/decrement confuse hona

   - `x++` vs `++x` ka difference samajho

4. ❌ `&&` aur `||` ka priority bhulna

   - Brackets use karo clarity ke liye

5. ❌ Empty string (`""`) ko false samajhna
   - Explicitly check karo: `password !== ""`

---

## 📝 Summary Table

| Operator Type       | Symbols                  | Example                         |
| ------------------- | ------------------------ | ------------------------------- | ------ | -------- |
| Arithmetic          | `+`, `-`, `*`, `/`, `%`  | `10 + 5`                        |
| Increment/Decrement | `++`, `--`               | `x++`, `--y`                    |
| Assignment          | `=`, `+=`, `-=`, etc.    | `x += 10`                       |
| Comparison          | `>`, `<`, `>=`, `<=`     | `age >= 18`                     |
| Equality            | `==`, `===`, `!=`, `!==` | `x === 5`                       |
| Logical             | `&&`, `                  |                                 | `, `!` | `a && b` |
| Ternary             | `? :`                    | `age >= 18 ? 'Adult' : 'Minor'` |

---

## 🎓 Key Takeaways

1. **`===` > `==`** - Hamesha strict equality prefer karo
2. **Type Coercion** - `==` automatically type convert karta hai
3. **Post vs Pre** - Increment/Decrement ka order important hai
4. **Ternary** - Clean one-liner conditional ke liye
5. **Logical Operators** - Multiple conditions combine karne ke liye powerful
6. **Validation Functions** - Reusable code ke liye functions banao

---

**Practice karo aur master bano! 🚀**
