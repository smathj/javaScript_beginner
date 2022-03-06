const log = require("../log");

// 생성자 함수
function Person(name) {
  this.name = name;
}

const me = new Person("Kim");

log(Person.prototype); // {constructor: ƒ}
log(me.__proto__); // {constructor: ƒ}

log(Person.prototype === me.__proto__);
/*
{constructor: ƒ}
__proto__:Object
constructor:ƒ Person(name) {\r\n  this.name = name;\r\n}
*/

/*
Person 생성자 함수의 "prototype"  프로퍼티는
Person.prototype(프로토 타입)의 constructor를 가리킨다

마찬가지로 생성된 객체의 "__proto__" 프로퍼티도
Person.prototype(프로토 타입)의 constructor를 가리킨다

따라서 둘다 같은것을 가리킨다
*/
