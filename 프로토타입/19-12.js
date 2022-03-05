const log = require("../log");

/**
 * 일반함수의 "prototype 프로퍼티"는 생성자 함수가
 * 생성할 객체의 프로토타입을 가리킨다
 * 하지만!
 * 화살표함수의 경우
 * "prototype 프로퍼티"를 소유하고 있지않다
 * 프로토타입도 생성하지 않는다( 객체는 입장에서 )
 */

// 화살표 함수는 non-constructor이다 (생성자 없음)
const Person = (name) => {
  this.name = name;
};

// non-constructor는 prototype 프로퍼티를 소유하지 않는다
log(Person.prototype); // undefined

// ES6의 메서드 축약 표현으로 정의한 메서드는 non-constructor이다
const obj = {
  foo() {}, // 축약 메서드 함수
};

// non-constructor는 prototype 프로퍼티를 소유하지 않는다.
log(obj.foo.hasOwnProperty("prototype")); // false

// non-constructor는 프로토타입을 생성하지 않는다
log(obj.foo.prototype); // undefined
