const { log, dir } = require("../log");

const circle1 = {
  radius: 5,
  // 반복됨
  getDiameter() {
    return 2 * this.radius;
  },
};

log(circle1.getDiameter());

const circle2 = {
  radius: 10,
  // 반복됨
  getDiameter() {
    return 2 * this.radius;
  },
};

log(circle2.getDiameter());

/**
 * 반지름을 바꾸기 위해서 또 객체 리터럴 방식으로
 * 객체를 생성했다.. 반복된다... 객체 리터럴의 단점을 보여준다.
 * 이럴때 필요한게 생성자 함수이다
 *
 */
