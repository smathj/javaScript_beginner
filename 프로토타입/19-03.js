/**
 * 생성자 함수로 중복코드 줄이기
 */

function Circle(radius) {
  this.radius = radius;
  this.getArea = function () {
    return Math.PI * this.radius ** 2;
  };
}

// 반지름이 1인 인스턴스를 생성한다
const circle1 = new Circle(1);
console.log(circle1.getArea());

// 반지름이 2인 인스턴스를 생성한다
const circle2 = new Circle(2);
console.log(circle2.getArea());

console.log(circle1.getArea === circle2.getArea); // false

/**
 * getArea는 같은 동작을 하는 메서드인데
 * 현재 인스턴스마다 메서드가 각자 따로 가지고 있는것이다
 * 이를 공통(상속)으로 뺀다면 7~9번 까지의 라인을 줄일 수 있다.
 * Where? 어디에뺄까- 해당 생성자의 프로토타입에 빼면된다
 */
