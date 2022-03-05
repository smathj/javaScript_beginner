// 일반 객체의 __proto__는 "접근자 프로퍼티"이다
console.log(Object.getOwnPropertyDescriptor(Object.prototype, "__proto__"));
/*
    {
    get: [Function: get __proto__],
    set: [Function: set __proto__],
    enumerable: false,
    configurable: true
    }
*/

// 함수 객체의 prototype은 "데이터 프로퍼티"이다
console.log(Object.getOwnPropertyDescriptor(function () {}, "prototype"));
/*
{ value: {}, writable: true, enumerable: false, configurable: false }
*/
