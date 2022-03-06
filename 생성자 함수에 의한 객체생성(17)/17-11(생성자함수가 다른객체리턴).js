const { log, dir } = require("../log");

// 생성자 함수
function Circle(radius) {
  // 생성자 함수 내부의 this는 생성자 함수가 생성할 인스턴스를 가리킨다
  this.radius = radius;
  this.getDiameter = function () {
    return 2 * this.radius;
  };

  // 🔥 명시적으로 다른 객체를 리턴해버리기
  // 암묵적인 객체{}를 바라보는 this는 무시가 되버린다
  return {};
}

// 인스턴스 생성
const circle = new Circle(1);
log(circle); // {}
