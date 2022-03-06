const { log, dir } = require("../log");

// 함수는 다양한 방식으로 호출될 수 있다
function foo() {
  log(this); // ◀ 생성자로서 (this = 객체)? 함수로서 (전역 객체)?
}

// 일반적인 함수로서 호출
// 전역 객체는
// 브라우저 환경에서는 window
// Node.js 환경에서는 global을 가리킨다

foo();

const obj = { foo }; // ES6의 축약 버전
/*
 const obj = {
  foo() {},
};
*/
log(obj);

// 메서드로서 호출
obj.foo(); // foo {}

// 생성자 함수로서 호출
const inst = new foo();
