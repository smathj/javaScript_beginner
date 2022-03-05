const log = require("../log");
/**
 * __proto__ 접근자 프로퍼티를 통해 프로토타입에 접근하는 이유
 * 🔥 상호 참조에 의해 프로토타입 체인이 생성되는 것을 방지하기 위해서!
 * 프로토타입 체인의 방향은 단방향이다
 */

const parent = {};
const child = {};

// child의 프로토타입을 parent로 설정해보자
child.__proto__ = parent;

// parent의 프로토타입을 마찬가지로 child로 설정해보자
parent.__proto__ = child;
// 😱 TypeError: Cyclic __proto__ value
