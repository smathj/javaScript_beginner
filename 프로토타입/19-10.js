const log = require("../log");

const obj = {};
const parent = { x: 1 };

// obj 객체의 프로토타입을 취득
log(Object.getPrototypeOf(obj));

// obj 객체의 프로토타입을 교체
log(Object.setPrototypeOf(obj, parent));

// 프로토 타입 체인으로 x를 검색한다
log(obj.x);
