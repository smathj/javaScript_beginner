const log = require("../log");

// new 연산자 없이 객체를 생성할때는 어떨까?

// 객체 리터럴
const obj = {};

// 함수 리터럴
const add = function (a, b) {
  return a + b;
};

// 배열 리터럴
const arr = [1, 2, 3];

// 정규 표현식 리터럴
const regexp = /is/gi;

/**
 * 이렇게 생성해도 프로토타입이 존재하지만
 * 프로토 타입의 constructor 프로퍼티가 가리키는 생성자 함수가
 * 반드시 객체를 생성한 생성자 함수라고 단정못한다 ( 부모가 아닐 수 있다 )
 * 다음 예제에서 확인하자
 */
