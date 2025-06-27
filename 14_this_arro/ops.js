// This code demonstrates the use of 'this' in a regular function and an arrow function.

// The 'this' keyword behaves differently in regular functions and arrow functions.
// In regular functions, 'this' refers to the object that calls the function.
// Regular function
function regularFunction() {
  console.log(this);
}
// In non-strict mode, 'this' refers to the global object (window in browsers). in Node.js).
// In strict mode, 'this' will be undefined.// If you want to see the difference, you can uncomment the line below to enable strict mode.
// 'use strict'; // Uncomment this line to enable strict mode
// Calling the regular function
// regularFunction(); // In non-strict mode, this will refer to the global object (window
// In strict mode, this will be undefined

// Arrow function
// In arrow functions, 'this' is lexically bound, meaning it takes 'this' from the surrounding context.
// In this case, it will refer to the global object (window in browsers) or undefined
// in strict mode.
// Arrow function
const arrowFunction = () => {
  console.log(this);
};
// Calling the arrow function
// arrowFunction(); // In non-strict mode, this will refer to the global object (window in browsers) or undefined in strict mode.
// Example of 'this' in an object method
// In an object method, 'this' refers to the object itself.
// This is a simple object with a method that uses 'this' to refer to its properties.

// Example of 'this' in an object method
// In an object method, 'this' refers to the object itself.

const user = {
  userName: "Ashish Choudhary",
  userAge: 29,
  userDetails: function () {
    console.log(this.userName + " is " + this.userAge + " years old.");
    console.log(this);
  },
};

// user.userDetails(); // This will log "Ashish Choudhary is 29 years old." and the user object itself.

function userOne(userName, userAge, loginStatus) {
  this.userName = userName;
  this.userAge = userAge;
  this.loginStatus = loginStatus;

  return this;

  // this.userDetails = function () {
  //     console.log(this.userName + " is " + this.userAge + " years old.");
  //     console.log(this);
  // };
}

// const userOneobj1 = userOne("Ashish Choudhary", 29, true);  // without new value is overhide ocinstractear fucntion 
const userOneobj1 = new userOne("Ashish Choudhary", 29, true); 
const userOneobj2 = new userOne("khushi Choudhary", 25, false);


console.log(userOneobj1); 
console.log(userOneobj2); 

