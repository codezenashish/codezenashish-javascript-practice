// this is promise for frist

// let permiseOne = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     console.log("async task is complete");
//     resolve();
//   }, 1000);
// });

// permiseOne.then(() => {
//   console.log("promise consumed");
// });

// seconde promise useing without varibal

// new Promise((resolve, reject) => {
//   setTimeout(() => {
//     console.log("async task is complete");
//     resolve();
//   }, 1000);
// }).then(() => {
//   console.log("async 2 is complete");
// });

// three

// const forPromise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     let error = false;
//     console.log("async task is complete");
//     if (!error) {
//       resolve({
//         userName: "Ashish Choudhary",
//         gmail: "simple@gmail",
//         number: 123,
//       });
//     } else {
//       reject("Error: somthing went wrong");
//     }
//   });
// });

// forPromise
//   .then((user) => {
//     return user.userName;
//   })
//   .then((userName) => {
//     console.log(userName);
//   })
//   .catch((error) => {
//     console.log(error);
//   })
//   .finally(() => {
//     console.log("promise is complete");
//   });

// promise 5

// let promiseFive = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     let error = false;
//     if (!error) {
//       console.log("async task is complete");
//       resolve({
//         userName: "javaScript",
//         gmail: "js@gmail.com",
//       });
//     } else {
//       reject("Error:js went wrong");
//     }
//   }, 1000);
// });

// async function consumePromiseFive() {
//   const response = await promiseFive;
//   console.log(promiseFive);
// }
// consumePromiseFive();

// api requst 1

async function getAllUsers() {
  try {
    const response = await fetch("https://randomuser.me/api/");
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log("Error", error);
  }
}
// getAllUsers();

// api request fatch

fetch("https://randomuser.me/api/")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error);
  });