function deepFreeze(target) {
  // 타겟이 존재하고, 타겟이 객체이고, 객체가 동결이 되지않았다면
  if (target && typeof target === "object" && !Object.isFrozen(target)) {
    console.log("들어옴");
    console.log(target);
    Object.freeze(target);
    Object.keys(target).forEach((key) => deepFreeze(target[key]));
  }
  return target;
}

const person = {
  name: "Kim",
  address: { cith: "Seoul" },
};

// 깊은 객체 동결
deepFreeze(person);

console.log(Object.isFrozen(person)); // true

// 중첩 객체까지 동결한다
console.log(Object.isFrozen(person.address)); // true

person.address.city = "Busan";
console.log(person);
// { name: 'Kim', address: { cith: 'Seoul' } }
