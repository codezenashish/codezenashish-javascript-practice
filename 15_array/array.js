let newArray = ["Ashish", "Honey", "kevin", "Unex"];

newArray.forEach(function (newArray, index) {
  console.log(newArray, index);
});

const arryObj = {
  fristName: "Ashish",
  lastName: "Kumar",
  age: 29,
  addres: "BSR",
};

console.log(typeof newArray) 
console.log(typeof arryObj)

console.log(Array.isArray(newArray))
console.log(Array.isArray(arryObj))


