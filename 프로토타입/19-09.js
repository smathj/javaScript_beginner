const log = require("../log");

// obj는 프로토타입 체인의 종점이다
// 따라서 Object.__proto__ 를 상속 받을 수 없다.(null)
const obj = Object.create(null);

//log(obj);
// obj는 Object.__proto__를 상속받을 수 없다.
log(obj.__proto__); // undefined

// 따라서 __proto__ 보다 Object.getPrototypeOf 메서드를 사용하는 편이 좋다
log(Object.getPrototypeOf(obj)); // null

// 🔥 프로토타입 체인의 마지막인지 판단하려면 Object.getPrototypeOf() 메서드로 확인하자
