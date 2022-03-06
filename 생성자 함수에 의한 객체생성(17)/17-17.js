const { log, dir } = require("../log");

// new 연산자

// 생성자 함수로서 정의하지 않은 일반 함수
function add(x, y) {
  return x + y;
}

// 생성자 함수로서 정의하지 않은 일반 함수를
// new 연산자와 함께 호출
let inst = new add();

// 함수가 객체를 반환하지 않았으므로 반환문이 무시된다
// 따라서 빈 객체가 생성되어 반한된다
log(inst); // {}

// 객체를 반환하는 일반 함수
function createUser(name, role) {
  return { name, role };
}

// 일반 함수를 new 연산자와 함께 호출
inst = new createUser("서하북", "하북왕");

// 함수가 생성한 객체를 반환한다
log(inst); // { name: '서하북', role: '하북왕' }
