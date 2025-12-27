# JavaScript Objects - Complete Notes

## 📌 Objects Kya Hain?

Objects JavaScript mein key-value pairs ka collection hote hain. Real-world entities ko represent karne ka best tarika hai. Jaise ek user ki information - naam, age, address sab ek jagah store kar sakte ho.

---

## 🎯 Object Creation

### Object Literal Syntax:

Sabse simple aur common tarika object banane ka. Curly braces `{}` use karte hain aur usmein key-value pairs likhte hain.

### Structure:

- **Keys** (Properties): Variable names jaise hote hain
- **Values**: Koi bhi data type ho sakta hai (string, number, boolean, array, object, function)
- **Comma Separated**: Har property comma se separate hoti hai

### Real Example:

User information object mein multiple properties:

- userName (string)
- userLastName (string)
- userAge (number)
- userAddress (string)
- userEmail (string)

---

## 🔍 Accessing Object Properties

JavaScript mein object properties ko access karne ke **2 main tarike** hain:

### 1. Dot Notation (`.`)

- Simple aur readable
- Most common tarika
- Property name directly likho dot ke baad
- Static property names ke liye best

**Limitation:** Special characters ya spaces wale names ke saath kaam nahi karta

### 2. Bracket Notation (`[]`)

- Zyada flexible hai
- Property name string ki tarah likho
- Dynamic property access ke liye
- Special characters handle kar sakta hai
- Variable se property name le sakte ho

**Use Case:** Jab property name runtime par decide ho

---

## 🛠️ Object Built-in Methods

JavaScript mein objects ke saath kaam karne ke liye powerful built-in methods hain:

### 1. `Object.keys()`

**Kya karta hai:** Object ke saare keys (property names) return karta hai

**Return Type:** Array of strings

**Use Case:**

- Jab sirf property names chahiye
- Loop karna ho saari properties par
- Object ka structure samajhna ho

### 2. `Object.values()`

**Kya karta hai:** Object ke saare values return karta hai

**Return Type:** Array (mixed data types ho sakte hain)

**Use Case:**

- Sirf values chahiye, keys nahi
- Data extract karna ho
- Values par operations karne ho

### 3. `Object.entries()`

**Kya karta hai:** Key-value pairs ko arrays mein convert karta hai

**Return Type:** Array of arrays (har array mein [key, value] hota hai)

**Format:** Nested array structure

**Use Case:**

- Keys aur values dono chahiye simultaneously
- Loop karna ho with both key and value
- Data transformation

---

## ❌ Deleting Object Properties

### `delete` Operator:

Object se koi property permanently remove karne ke liye use hota hai

### Kaise kaam karta hai:

- Property ko object se hata deta hai
- Memory se clear ho jati hai
- Return value: `true` (successful deletion) ya `false`

### Important Points:

- **Permanent** deletion hai
- Property exist nahi karti deletion ke baad
- Dot notation ya bracket notation dono use kar sakte ho
- Object ka reference change nahi hota

### Side Effects:

- Ek baar delete karo to wapas nahi aa sakti
- `undefined` nahi banti, completely remove ho jati hai

---

## 🔄 JSON (JavaScript Object Notation)

JSON ek lightweight data format hai jo APIs aur data exchange mein use hota hai.

### Kya hai JSON?

- **J**ava**S**cript **O**bject **N**otation
- Text-based data format
- Language-independent (kisi bhi language mein use kar sakte ho)
- Human-readable hai

### Why JSON?

- APIs data JSON format mein bhejte hain
- Server aur client ke beech communication
- Data storage aur transfer
- Configuration files

---

## 📤 `JSON.stringify()`

### Kya karta hai?

JavaScript object ko JSON string mein convert karta hai

### Process: Object → String

### Use Cases:

- Object ko server par bhejne se pehle
- LocalStorage mein save karna (only strings store kar sakte ho)
- API requests mein data send karna
- Logging purposes

### Important Points:

- Functions convert nahi hote
- `undefined` values skip ho jati hain
- Symbols ignore ho jate hain
- Date objects string ban jate hain

### Return Type:

String format mein data (JSON string)

---

## 📥 `JSON.parse()`

### Kya karta hai?

JSON string ko wapas JavaScript object mein convert karta hai

### Process: String → Object

### Use Cases:

- API se data receive karne ke baad
- LocalStorage se data retrieve karke
- JSON file read karne ke baad
- Server response process karna

### Important Points:

- Valid JSON string hona chahiye
- Invalid JSON par error throw karta hai
- Nested objects bhi parse ho jate hain
- Arrays bhi handle karta hai

### Error Handling:

Invalid JSON string par `SyntaxError` throw hota hai

---

## 🔄 Object ↔ JSON Workflow

### Complete Flow:

**Step 1: Object Creation**
JavaScript mein object banao with properties

**Step 2: Convert to JSON**
`JSON.stringify()` se string bana lo

**Step 3: Transfer/Store**
String ko send/save karo (API, LocalStorage, etc.)

**Step 4: Receive/Retrieve**
JSON string receive/retrieve karo

**Step 5: Convert back to Object**
`JSON.parse()` se object bana lo

**Step 6: Use Object**
Normal JavaScript object ki tarah use karo

---

## ✅ Best Practices

### 1. Property Naming:

- **camelCase** use karo (userName, userAge)
- Meaningful names rakho
- Special characters avoid karo
- Spaces avoid karo

### 2. Accessing Properties:

- **Dot notation** prefer karo (cleaner hai)
- **Bracket notation** jab dynamic access chahiye
- Consistent approach rakho

### 3. Object Methods:

- `Object.keys()` for property names
- `Object.values()` for property values
- `Object.entries()` for both simultaneously

### 4. JSON Handling:

- Always try-catch use karo `JSON.parse()` ke saath
- Validate JSON string before parsing
- Error handling implement karo

### 5. Delete Operation:

- Carefully use karo
- Alternative: Property ko `null` set kar do (soft delete)
- Backup rakho important data ka

---

## 🚨 Common Mistakes

### 1. Bracket Notation mein Quotes:

- ❌ `obj[userName]` (variable samajhega)
- ✅ `obj["userName"]` (string chahiye)

### 2. JSON Parse without Error Handling:

- Invalid JSON par code crash hota hai
- Always try-catch use karo

### 3. Delete vs Setting to Null:

- `delete obj.prop` - Property remove
- `obj.prop = null` - Property exists but null value

### 4. JSON.stringify Limitations:

- Functions lose ho jate hain
- `undefined` values skip
- Circular references error dete hain

### 5. Spelling Mistakes:

- JSON ko JASON nahi likhte
- Object ko boject nahi

---

## 📊 Object Methods Summary Table

| Method             | Input           | Output                | Use Case               |
| ------------------ | --------------- | --------------------- | ---------------------- |
| `Object.keys()`    | Object          | Array of keys         | Property names chahiye |
| `Object.values()`  | Object          | Array of values       | Sirf values chahiye    |
| `Object.entries()` | Object          | Array of [key, value] | Keys + values dono     |
| `JSON.stringify()` | Object          | JSON string           | Object to string       |
| `JSON.parse()`     | JSON string     | Object                | String to object       |
| `delete`           | Object property | Boolean               | Property remove karna  |

---

## 🎓 Key Concepts

### 1. Objects:

- Key-value pairs ka collection
- Complex data structures
- Real-world entities represent karne ke liye

### 2. Property Access:

- Dot notation - simple cases
- Bracket notation - dynamic cases
- Dono valid hain

### 3. Object Methods:

- Built-in utility methods
- Keys, values, entries extract karna
- Powerful data manipulation

### 4. JSON:

- Data exchange format
- String representation of objects
- API communication essential

### 5. Stringify vs Parse:

- Stringify: Object → String
- Parse: String → Object
- Round-trip conversion

---

## 💡 Real-world Applications

### 1. User Profiles:

User ka data ek object mein store karna (naam, email, age)

### 2. API Requests:

Server ko data bhejne se pehle `JSON.stringify()` use karna

### 3. API Responses:

Server se JSON receive karke `JSON.parse()` se object banana

### 4. LocalStorage:

Browser storage mein objects save karne ke liye JSON use karna

### 5. Configuration:

Application settings object format mein maintain karna

### 6. Data Processing:

`Object.keys()`, `Object.values()` se data loop aur process karna

---

## 📝 Summary

1. **Objects** - Key-value pairs ka collection
2. **Property Access** - Dot (`.`) ya Bracket (`[]`) notation
3. **Built-in Methods** - `keys()`, `values()`, `entries()`
4. **Delete** - Properties remove karne ke liye
5. **JSON.stringify()** - Object ko string mein convert
6. **JSON.parse()** - String ko object mein convert
7. **Use Case** - API communication, data storage, manipulation

---

**Objects master karo, data handling easy ho jayega! 🚀**
