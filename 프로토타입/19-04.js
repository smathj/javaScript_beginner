/**
 * Prototype으로 코드 중복 줄이기
 */
function Circle(radius) {
  this.radius = radius;
}

Circle.prototype.getArea = function () {
  return Math.PI * this.radius ** 2;
};

// 반지름이 1인 인스턴스를 생성한다
const circle1 = new Circle(1);
console.log(circle1.getArea());

// 반지름이 2인 인스턴스를 생성한다
const circle2 = new Circle(2);
console.log(circle2.getArea());

// true ( 하나의 부모(프로토타입)에서 받아왔기때문에 동일하다)
console.log(circle1.getArea === circle2.getArea);

/**
 * 🎈 핵심 개념
 * 모든 객체는 [[Prototype]]  이라는 내부 슬롯을 가지며
 * 프로토타입이 이 슬롯에 저장된다
 * 객체 생성 방식에 따라 프로토타입이 결정되는데
 * 앞서 생성자 함수를 통해 생성할 수 도 있고,
 * {} 와 같은 객체 리터럴로도 생성할 수 있다.
 *
 * 마지막으로 [[Prototype]]은 내부슬롯이라서 접근할 수 없지만
 * __proto__ 접근자 프로퍼티로 간접적으로 접근할 수 있다
 * 즉, prototype이 궁금하면 __proto__를 찍어서 확인하자
 */
