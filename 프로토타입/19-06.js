const obj = {};
const parent = { x: 1 };

// getter 함수인 get __proto__가 호출되어서 obj 객체의 프로토타입을 얻는다
obj.__proto__;

// setter 함수인 set __proto__가 호출되어 obj 객체의 프로토타입을 바꿀수 있다
obj.__proto__ = parent;

console.log("obj");
console.log(obj);
