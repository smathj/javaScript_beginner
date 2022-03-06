const { log, dir } = require("../log");

// 생성자 함수
function Circle(radius) {
  // 생성자 함수 내부의 this는 생성자 함수가 생성할 인스턴스를 가리킨다
  this.radius = radius;
  this.getDiameter = function () {
    return 2 * this.radius;
  };
}

// 인스턴스 생성
const circle1 = new Circle(5);
const circle2 = new Circle(10);

log(circle1.getDiameter()); // 10
log(circle2.getDiameter()); // 20

/**
 * 🔥 주의 🔥
 * 생성자 함수는 제일 앞의 문자를 대문자로 적고 (룰)
 * new를 붙여서 호출해야지 생성자 함수로서 작동하여 인스턴스를 만든다
 * 그게아니라면 그냥 함수를 호출한 샘이다
 *
 * ☑ 생성자 함수내의 this는 생성자 함수가 생성할 인스턴스를 가리킨다
 */
