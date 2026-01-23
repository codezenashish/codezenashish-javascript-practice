//? objests

let userInformation = {
  userName: "Ashish",
  userLastName: "Choudhary",
  userAge: 29,
  userAddresh: "Bulandhsaher",
  userEmail: "ixtashish@gmail.com",
};

// boject keys and valus
console.log(Object.keys(userInformation));
console.log(Object.values(userInformation));
console.log(userInformation);

console.log(userInformation["userName"]);
console.log(userInformation.userName);

//? delete using for boject in key delete

// console.log(delete userInformation.userAddresh)  //? userAddres is delete and true

//? Api  using JASON

let jason = JSON.stringify(userInformation);
console.log(jason);

let tObj = JSON.parse(jason);
console.log(tObj);

//? keys valus both
let newx = Object.entries(userInformation);
console.log(newx);
