const { log, dir } = require("../log");

function foo() {}

// 일반적인 함수로서 호출 한다면
// [[Call]]이 호출된다
foo();

// 생성자 함수로서 호출한다면
// [[Contruct]]이 호출된다
new foo();

/**
 * 함수는 객체이므로
 * 객체가 갖는 내부슬롯, 내부 메서드,
 * 함수 객체를 위한 [[Enviroment]], [[FormalParameters]] 등의 내부슬롯 과
 * [[Call]], [[Construct]] 같은 내부 메서드를 추가로 가지고 있다.
 *
 * 🔥 즉, [[Call]], [[Construct]] 두개가 있어서
 * 함수로서, 생성자 함수로서 호출할 수 있다
 */
