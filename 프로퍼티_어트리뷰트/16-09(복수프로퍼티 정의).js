// Object.defineProperties 를 이용해서 여러개 프로퍼티 정의하자
const person = {};

Object.defineProperties(person, {
  // 데이터 프로퍼티 정의
  firstName: {
    value: "natae", // 💭 프로퍼티 값
    writable: true, // 💭 값 변경 가능여부(Read Only)
    enumerable: true, // 💭 반복문에서 열거 가능 여부
    configurable: true, // 💭 프로퍼티 재정의여부(삭제)
  },

  lastName: {
    value: "koon", // 💭 프로퍼티 값
    writable: true, // 💭 값 변경 가능여부(Read Only)
    enumerable: true, // 💭 반복문에서 열거 가능 여부
    configurable: true, // 💭 프로퍼티 재정의여부(삭제)
  },

  // 접근자 프로퍼티 정의
  fullName: {
    // getter 함수
    get() {
      return `${this.firstName}``${this.lastName}`;
    },
    set(name) {
      [this.firstName, this.lastName] = name.split(" ");
    },
    enumerable: true,
    configurable: true,
  },
});

person.fullName = "나태 쿤";
console.log(person);
// { firstName: '나태', lastName: '쿤', fullName: [Getter/Setter] }
