const { log } = require("../log");

/**
 * 🔥 일급 객체 🔥
 * 1. 무명의 리터럴로 생성할 수 있다, 즉 런타임에 생성이 가능하다
 * 2. 변수나 자료구조에 저장할 수 있다
 * 3. 함수의 매개변수에 전달할 수 있다
 * 4. 함수의 반환값으로 사용할 수 있다
 */

// 1. 함수는 무명의 리터럴로 생성할 수 있다
// 2. 함수는 변수에 저장할 수 있다
// 런타임(할당 단계)에 함수 리터럴이 평가되어 함수 객체가 생성되고
// 변수에 할당된다
const increase = function (num) {
  return ++num;
};

const decrease = function (num) {
  return --num;
};

// 2. 함수는 객체에 저장할 수 있다.
const predicates = { increase, decrease };

// 3. 함수의 매개변수에 전달할 수 있다
// 4. 함수의 반환값으로 사용할 수 있다
function makeCounter(predicate) {
  let num = 0;

  return function () {
    num = predicate(num);
    return num;
  };
}

// 3. 함수는 매개변수에게 함수를 전달할 수 있다.
const increaser = makeCounter(predicates.increase);
log(increaser());
log(increaser());

// 3. 함수는 매개변수에게 함수를 전달할 수 있다.
const decreaser = makeCounter(predicates.decrease);
log(decreaser());
log(decreaser());
