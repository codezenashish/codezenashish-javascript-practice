# API Request using XMLHttpRequest - JavaScript Notes

## Overview
Ye file **XMLHttpRequest** ka use karke external API se data fetch karne ka example hai. Isme Random User API se user ka naam aur profile picture fetch karke webpage par display kiya jata hai.

---

## Code Breakdown

### 1. **API URL Setup**
- **`requestUrl`** variable mein API ka URL store kiya gaya
- API: `https://randomuser.me/api` - Ye random user data generate karta hai

### 2. **XMLHttpRequest Object Creation**
- **`xhr`** - Naya XMLHttpRequest object banaya gaya
- Ye object HTTP requests bhejne ke liye use hota hai

### 3. **Request Configuration**
- **`xhr.open("GET", requestUrl)`** - Request ko initialize kiya
  - `"GET"` - HTTP method (data fetch karne ke liye)
  - `requestUrl` - Kahan se data fetch karna hai

### 4. **State Change Handler**
- **`xhr.onreadystatechange`** - Jab bhi request ki state change hoti hai ye function execute hota hai
- **`console.log(xhr.readyState)`** - Current state ko console mein print karta hai

### 5. **Ready State Check**
- **`if (xhr.readyState === 4)`** - Check karta hai ki request complete hui ya nahi
  - `readyState === 4` matlab request successfully complete ho gayi

### 6. **Response Processing**
- **`JSON.parse(this.responseText)`** - API se aaya hua JSON string ko JavaScript object mein convert karta hai
- **`typeof data`** - Data ka type check kiya (object hoga)

### 7. **User Name Extraction**
- **`Object.values(data.results[0].name)`** - Name object ki saari values ko array mein convert karta hai
- **`userNameData.join(" ")`** - Array ke saare elements ko space ke saath join karke full name banata hai
- **`getElementById("userName")`** - HTML element ko select karta hai
- **`innerText`** - User ka naam element mein display karta hai

### 8. **Profile Picture Extraction**
- **`data.results[0].picture.large`** - API response se large size ki picture ka URL nikalta hai
- **`getElementById("imageUrl")`** - Image element ko select karta hai
- **`imageUrl.src`** - Image ka source set karta hai taaki picture display ho

### 9. **Request Send**
- **`xhr.send()`** - Configured request ko server par bhejta hai

---

## Important Functions / Logic

### XMLHttpRequest Ready States
```
0 - UNSENT (request abhi initialize nahi hui)
1 - OPENED (open() call ho gaya)
2 - HEADERS_RECEIVED (headers receive ho gaye)
3 - LOADING (data receive ho raha hai)
4 - DONE (request complete ho gayi)
```

### Data Navigation Path
```
data.results[0].name → User ka name object
data.results[0].picture.large → Profile picture URL
```

### JSON Parsing
- `JSON.parse()` - String ko object mein convert karta hai
- API response text format mein aata hai, use JavaScript object banana padta hai

### Object.values()
- Object ki saari values ko array mein convert karta hai
- Example: `{title: "Mr", first: "John", last: "Doe"}` → `["Mr", "John", "Doe"]`

---

## Execution Flow

1. **API URL define** kiya gaya
2. **XMLHttpRequest object create** kiya
3. **GET request configure** ki using `open()`
4. **State change listener attach** kiya
5. **Request send** ki using `send()`
6. **Server se response aaya** (state changes console mein print hote rahe)
7. **ReadyState 4 hone par:**
   - JSON response ko parse kiya
   - Name object se values extract ki
   - Full name ko join karke HTML element mein display kiya
   - Picture URL extract karke image element ka source set kiya
8. **Webpage par user ka naam aur photo display** ho gaya

---

## Key Notes

✅ **XMLHttpRequest** traditional way hai API calls karne ka - modern code mein `fetch()` prefer kiya jata hai

✅ **readyState** values track karte hain ki request kis stage par hai

✅ **readyState === 4** matlab request complete ho gayi (successful ya failed dono ho sakti hai)

✅ **JSON.parse()** jaruri hai kyunki API response string format mein aata hai

✅ **Object.values()** se object ki values ko array mein convert kar sakte hain

✅ **Array.join()** se array elements ko combine karke string bana sakte hain

✅ **getElementById()** se DOM elements ko access karte hain

✅ **innerText** text content set karta hai, **src** image ka source set karta hai

✅ **API path navigation** important hai - `data.results[0]` se pehle user ka data access hota hai

✅ **onreadystatechange** multiple times trigger hota hai (har state change par)

---