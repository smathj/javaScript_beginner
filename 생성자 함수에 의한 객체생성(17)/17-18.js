const { log, dir } = require("../log");

// 생성자 함수
function Circle(radius) {
  this.radius = radius;
  this.getDiameter = function () {
    return 2 * this.radius;
  };
}

// new 연산자 없이 생성자 함수 호출하면 일반 함수로서 호출된다
// 잘알제
const circle = Circle(5);
log(circle); // undefined ; return 문이 없어서

// 일반 함수 내부의 this는 전역 객체이니까
// 브라우저는 window, Nodejs는 global
log(radius); // 5

log(getDiameter()); // 10

//circle.getDiameter();     // 🌟 옳바른 방법: getDiameter();
// TypeError: Cannot read property 'getDiameter' of undefined
