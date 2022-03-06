const { log, dir } = require("../log");

// 생성자 함수
function Circle(radius) {
  // 생성자 함수 내부의 this는 생성자 함수가 생성할 인스턴스를 가리킨다
  this.radius = radius;
  this.getDiameter = function () {
    return 2 * this.radius;
  };

  // 🔥 명시적으로 원시값을 리턴해버리기 ( 무시됨 ㅅㄱ)
  return 119;
}

// 인스턴스 생성
const circle = new Circle(1);
log(circle); // Circle { radius: 1, getDiameter: [Function (anonymous)] }
