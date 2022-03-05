const log = require("../log");

const person = { name: "Kim" };

log(person);
// person 객체는 __proto__ 프로퍼티를 소유하지 않는다.
// 🔥 상속받은거라고!!!

log(person.hasOwnProperty("__proto__")); // false
// __proto__ 프로퍼티는 모든 객체의 프로토타입 객체인
// Object.prototype의 접근자 프로퍼티이다
log(Object.getOwnPropertyDescriptor(Object.prototype, "__proto__"));
/*
    👀 접근자 프로퍼티
    {
    get: [Function: get __proto__],     ◀ getter
    set: [Function: set __proto__],     ◀ setter
    enumerable: false,
    configurable: true
    }

    ✔ 즉 오브젝트.__proto__ 로 읽기 가능 / 수정 가능
*/

// 모든 객체는 Object.prototype의 접근자 프로퍼티 __proto__를 상속받아
// 사용할 수 있다
log({}.__proto__ === Object.prototype); // true
