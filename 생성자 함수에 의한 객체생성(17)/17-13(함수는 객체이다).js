const { log, dir } = require("../log");

// 함수는 객체임
function foo() {}

// 함수는 객체니까, 프로퍼티 가질수 있음
foo.prop = 10;

// 함수는 객체니까, 메서드도 가질수 있음
foo.method = function () {
  log(this.prop);
};

foo.method(); // 10

/**
 * 함수는 객체이므로
 * 객체가 갖는 내부슬롯, 내부 메서드,
 * 함수 객체를 위한 [[Enviroment]], [[FormalParameters]] 등의 내부슬롯 과
 * [[Call]], [[Construct]] 같은 내부 메서드를 추가로 가지고 있다.
 */
