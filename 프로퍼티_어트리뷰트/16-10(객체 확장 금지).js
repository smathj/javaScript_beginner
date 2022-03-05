// 객체 확장 금지
const person = { name: "Kim" };

// person 객체는 확장이 금지된 객체가 아니다.
console.log(Object.isExtensible(person)); // true

// 확장 금지 시켜보자
Object.preventExtensions(person);

// person 객체는 확장이 금지된 객체이다.
console.log(Object.isExtensible(person)); // false

// 프로퍼티 추가가 금지된다
// 무시된다, 'use strict' 에서는 에러
person.age = 10;
person.name = "하북이";
console.log(person);
// { name: 'Kim' }

// 추가가 금지라했지, 삭제,수정은 금지가아니다
delete person.name;
console.log(person);
// {}

// 프로퍼티 정의에 의한 프로퍼티 추가도 금지
Object.defineProperty(person, "age", {
  value: 10,
  writable: true,
  enumerable: true,
  configurable: true,
});
// TypeError: Cannot define property age, object is not extensible
