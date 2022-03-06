const { log, dir } = require("../log");

// 생성자 함수
function Circle(radius) {
  log("# 1");
  // 생성자 함수로 호출시 : [Function: Circle]
  // 함수로서 호출시      :  undefined
  log(new.target);

  // 🔥 이 함수가 new 연산자와 함께 호출되지 않았다면
  // new.target은 undefined 이다 !
  if (!new.target) {
    // new 연산자와 함께 생성자 함수를 재귀 호출하여 생성된 인스턴스를 반환한다
    return new Circle(radius);
  }

  this.radius = radius;
  this.getDiameter = function () {
    return 2 * this.radius;
  };
}

// new 연산자 없이 생성자 함수를 호출하여도
// new.target을 통해 생성자 함수로서 호출된다
const circle = Circle(5);
//log(circle.getDiameter());
//const circle = new Circle(5);
