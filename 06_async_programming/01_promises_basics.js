// let promiseOne = new Promise(function (resolve, reject) {
//   setTimeout(function () {
//     console.log("async task is complete");
//     resolve();
//   }, 1000);
// });
// promiseOne.then(function () {
//   console.log("promise consumed");
// });

// new Promise(function (resolve, reject) {
//   setTimeout(function () {
//     console.log("async task is complete");
//     resolve();
//   }, 1000);
// }).then(function () {
//   console.log("async 2 is complete");
// });

// const threePromise = new Promise(function (resolve, reject) {
//   setTimeout(function () {
//     console.log("three task is done");
//     resolve({ name: "Ashish", email: "example@gmail.com" });
//   }, 1000);
// });

// threePromise.then(function(user){
//     console.log(user)
// })

// const forPromise = new Promise(function (resolve, reject) {
//   setTimeout(function () {
//     let error = false; // Simulating an error condition
//     console.log("Async task is complete");
//     if (!error) {
//       resolve({
//         userName: "Ashish Choudhary",
//         gmail: "simple@gmail.com",
//         password: 123,
//       });
//     } else {
//       reject("Error: Something went wrong");
//     }
//   });
// });

// forPromise
//   .then((user) => {
//     return user.userName;
//   })
//   .then((username) => {
//     console.log(username);
//   })
//   .catch((error) => {
//     console.log(error);
//   })
//   .finally(() => {
//     console.log("Promise is completed");
//   });

// let promiseFive = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     let error = false;
//     console.log("Async task is complete");
//     if (!error) {
//       resolve({
//         userName: "Java Script",
//         gmail: "js@gmail.com",
//       });
//     } else {
//       reject("Error: JS went wrong");
//     }
//   }, 1000);
// });

// async function consumePromiseFive() {
//   const response = await promiseFive;
//   console.log(promiseFive);
// }

// consumePromiseFive()

// api request

async function getAllUsers() {
  try {
    const response = await fetch("https://randomuser.me/api/");
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log("E", error);
  }
}

// getAllUsers();

fetch("https://randomuser.me/api/")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((error) => console.log(error));
