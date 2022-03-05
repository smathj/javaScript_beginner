const person = {};

// 데이터 프로퍼티 정의
Object.defineProperty(person, "firstName", {
  value: "habook",
  writable: true,
  enumerable: true,
  configurable: true,
});

// lastName 출력 x, enumerable이 false여서
Object.defineProperty(person, "lastName", {
  value: "ee",
});

let descriptor = Object.getOwnPropertyDescriptor(person, "firstName");
console.log(descriptor);
/*
    {
    value: 'habook',
    writable: true,
    enumerable: true,
    configurable: true
    }
*/

// 디스크립터 객체의 프로퍼티를 누락시키면 undefined, false가 기본값이다
descriptor = Object.getOwnPropertyDescriptor(person, "lastName");
console.log(descriptor);
/*
    {
    value: 'ee',
    writable: false,
    enumerable: false,
    configurable: false
    }
*/

// [[Enumerable]]의 값이 false 인경우에는
// 해당 프로퍼티를 for ... in 문이나 Object.keys 등으로 열거 할 수없다
// lastName 프로퍼티는 지금 false여서 열거되지 않는다
console.log(Object.keys(person));
// [ 'firstName' ]

// [[Writable]]의 값이 false인 경우 해당 프로퍼티의 [[Value]]를 바꿀수 없다
// lastName 프로퍼티는 [[Writable]]의 값이 false이므로 값을 변경할수 없음
// 이때 값을 변경하려 하면 에러는 발생하지않고 그냥 무시당함
person.lastName = "Kim";

// [[Configurable]]의 값이 false인 경우 해당 프로퍼티를 삭제할 수 없음(재정의도 X)
// lastName 프로퍼티 [[Configurable]]의 값이 false이므로 삭제할 수 없음
// 이때 프로퍼티를 삭제하려하면 에러는 발생하지 않고 무시당함
delete person.lastName;

// [[Configurable]]의 값이 false인 경우 해당 프로퍼티를 재정의 할 수 없다
//Object.defineProperty(person, 'lastName', {enumerable: true}) // 에러

descriptor = Object.getOwnPropertyDescriptor(person, "lastName");
console.log(descriptor);
/*
    {
    value: 'ee',
    writable: false,
    enumerable: false,
    configurable: false         ◀ 이거
    }
*/

// 접근자 프로퍼티 정의
Object.defineProperty(person, "fullName", {
  // getter 함수
  get() {
    return `${this.firstName}``${this.lastName}`;
  },

  // setter 함수
  set(name) {
    [this.firstName, this.lastName] = name.split(" ");
  },
  enumerable: true,
  configurable: true,
});

descriptor = Object.getOwnPropertyDescriptor(person, "fullName");
console.log(descriptor);
/*
    {
    get: [Function: get],
    set: [Function: set],
    enumerable: true,
    configurable: true
    }
*/

person.fullName = "natae koon";
console.log(person);
// { firstName: 'natae', fullName: [Getter/Setter] }
