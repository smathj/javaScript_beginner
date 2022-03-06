const log = require("../log");

// 생성자 함수
function Person(name) {
  this.name = name;
}

const me = new Person("Kim");

// me 객체의 생성자 함수는 Person이다
// 🔥 프로토 타입 체인으로
// me.__proto__.constructor 을 검색
// 아 책에도 이설명이 있네...
log(me.constructor === Person); // true
// 즉 생성자 함수를 가리킨다
