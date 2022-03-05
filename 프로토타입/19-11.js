const log = require("../log");

/**
 * 함수 객체만 prototype 프로퍼티를 소유한다
 * 생성자 함수가 생성할 인스턴스의 프로토타입을 가리킨다
 */

// 함수 객체는 prototype 프로퍼티를 소유한다.
log(function () {}.hasOwnProperty("prototype")); // true

// 일반 객체는 prototype 프로퍼티를 소유하지 않는다.
log({}.hasOwnProperty("prototype")); // false
// vs
log(Object.prototype.hasOwnProperty("__proto__")); // true
