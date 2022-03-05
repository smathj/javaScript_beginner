const log = require("../log");

// 생성자 함수
function Person(name) {
  this.name = name;
}

const me = new Person("Kim");

log(Person.prototype);
log(me.__proto__);

log(Person.prototype === me.__proto__);
/*
{constructor: ƒ}
__proto__:Object
constructor:ƒ Person(name) {\r\n  this.name = name;\r\n}
*/
