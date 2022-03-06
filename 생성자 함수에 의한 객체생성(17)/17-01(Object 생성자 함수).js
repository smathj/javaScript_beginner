const log = require("../log");

// 빈 객체의 생성
// Object 생성자 함수
const person = new Object();

// 프로퍼티 추가
person.name = "서하북";
person.sayHabook = function () {
  log("하북이는 수지가 아닌데, 왜 자꾸 수지라 하는지");
};

log(person);
person.sayHabook();
