const { log, dir } = require("../log");

let obj = new Object();
log(obj); // {}

obj = Object();
log(obj); // {}

let f = new Function("x", "return x ** x");
log(f); // [Function: anonymous]

f = Function("x", "return x ** x");
log(f); // [Function: anonymous]

/**
 * 🔥 빌트인 생성자 함수는
 * new 가 없어도 동일하게 동작한다
 *
 * String, Number, Boolean은 new가 없이 호출되면
 * 문자열/ 숫자/ 불리언 값을 반환한다
 * 데이터 타입도 변형되는 효과도 있다.
 */
