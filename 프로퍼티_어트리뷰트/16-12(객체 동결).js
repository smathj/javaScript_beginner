// 읽기만 가능
const person = { name: "Kim" };

// person 객체는 동결(freeze)된 객체가 아니다.
console.log(Object.isFrozen(person)); // false

// person 객체를 동결(freeze)하여 프로퍼티 추가, 삭제, 재정의, 쓰기를 금지한다
Object.freeze(person);

// person 객체는 동결(freeze)된 객체이다
console.log(Object.isFrozen(person)); // true

// 동결(freeze)된 객체는 writable과 configurable이 false이다
console.log(Object.getOwnPropertyDescriptors(person));
/*
  name: {
    value: 'Kim',
    writable: false,        ◀   수정 못하게
    enumerable: true,
    configurable: false     ◀   삭제 못하게
  }
*/

// 프로퍼티 추가가 금지된다
person.age = 20; // 무시. 엄격 모드에서는 에러
console.log(person);

// 프로퍼티 삭제가 금지된다
delete person.name; // 무시. 엄격 모드에서는 에러
console.log(person);

// 프로퍼티 값 갱신이 금지된다
person.name = "Kim";
console.log(person);

// 프로퍼티 어트리뷰트 재정의가 금지된다
// Object.defineProperty(person, "name", {
//   configurable: true,
// });
// Cannot redefine property: name
