// 불변 객체
const person = {
  name: "Habook",
  address: { city: "Curi" },
};
// 객체 안에 객체 또있음

// 얕은 객체 동결
Object.freeze(person);

// 직속 프로퍼티만 동결한다
console.log(Object.isFrozen(person)); // true

// 중첩 객체(내부 객체)까지 동결하지 못한다
console.log(Object.isFrozen(person.address)); // false

person.address.city = "구리";
console.log(person);
// { name: 'Habook', address: { city: '구리' } }

/**
 * [Issue]
 * 내부에 있는 객체까지 동결되지 않았다.
 * 다음 예제에서 이를 처리해보자
 */
