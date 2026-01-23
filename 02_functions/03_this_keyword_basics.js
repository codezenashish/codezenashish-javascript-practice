let a = 10;

function f1() {
//   console.log(this.a); // undefined
}
f1(); // undefined

const obj = {
  name: "Ashish",
  age: 29,
  sayHi: function () {
    console.log(this);
    // console.log('i am '+this.name)
  },
};

obj.sayHi();

const anotherObj = {
  name: "Khushi",
};
anotherObj.sayHi = obj.sayHi
anotherObj.sayHi()
obj.sayHi()
 