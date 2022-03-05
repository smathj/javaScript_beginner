// 접근자 프로퍼티
/**
 * 접근자 프로퍼티는 자체적으로 값을 갖지 않음
 * 다른 "데이터 프로퍼티"의 값을 읽거나
 *
 * 프로퍼티 어트리뷰트        프로퍼티 디스크립터 객체의 프로퍼티
 * [[Get]]                    get
 * [[Set]]                    set
 * [[Enumerable]]             enumerable
 * [[Configurable]]           configurable
 */

const person = {
  // 데이터 프로퍼티
  firstName: "Natae",
  lastName: "Koon",

  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  },

  set fullName(name) {
    [this.firstName, this.lastName] = name.split(" ");
  },
};

// 데이터 프로퍼티를 통해서 프로퍼티의 value를 가져온다
console.log(person.firstName + " " + person.lastName);

// 접근자 프로퍼티로 프로퍼티 값 저장
// 접근자 프로퍼티로 fullName을 저장하면 setter함수가 호출된다
person.fullName = "나태 쿤";
console.log(person);

// 접근자 프로퍼티로 fullName에 접근하면 getter 함수가 호출
console.log(person.fullName);

let descriptor = Object.getOwnPropertyDescriptor(person, "firstName");
console.log(descriptor);
// { value: '나태', writable: true, enumerable: true, configurable: true }

descriptor = Object.getOwnPropertyDescriptor(person, "fullName");
console.log(descriptor);
/*
    {
    get: [Function: get fullName],
    set: [Function: set fullName],
    enumerable: true,
    configurable: true
    }
*/
