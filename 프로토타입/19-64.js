const person = {
  name: "Lee",
  address: "Seoul",
};

for (const key in person) {
  console.log(key + " : " + person[key]);
}

// 상속받은 프로퍼티까지 열거하지만
// Object.prototype의 프로퍼티는 열거되지않는다
// [[Enumerable]]의 값이 false 여서
