## This usage in JavaScript
-- `this` is a keyword in JavaScript that refers to the context in which a function is called. It can be used to access properties and methods of an object.
-- The value of `this` depends on how a function is called, not where it is defined.
-- In a regular function, `this` refers to the global object (or `undefined` in strict mode).
-- In an object method, `this` refers to the object that the method is called on.
-- In a constructor function, `this` refers to the newly created object.

## Arrow functions and `this`
-- Arrow functions do not have their own `this` context. Instead, they inherit `this` from the surrounding lexical context.
-- This means that in an arrow function, `this` refers to the same value as it would in the surrounding code.   
-- This is useful for preserving the context of `this` in callbacks and event handlers.
## Example of `this` in a regular function
```javascript
function regularFunction() {
  console.log(this);
}
regularFunction(); // In non-strict mode, this will log the global object (window in browsers).
```
## Example of `this` in a arrow function
```javascript
const arrowFunction = () => {
  console.log(this);
};
arrowFunction(); 

```// In an arrow function, `this` refers to the surrounding context, which is usually the global object or undefined in strict mode.
```

## New keyword and `this`
-- The `new` keyword is used to create an instance of an object defined by a constructor function.
-- When a function is called with `new`, `this` inside that function refers to the newly created object.


## Empty `new` keyword output
-- When you call a constructor function with `new`, it creates a new object and sets `this` to that object.
