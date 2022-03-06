const { log, dir } = require("../log");

// 여러가지 빌트인 생성자 함수로 객체를 만들어보자

// String 생성자 함수로, String 객체 만들기
const strObj = new String("하북");
log(typeof strObj); // object
log(strObj);

// Numer 생성자 함수로, Numer 객체 만들기
const numObj = new Number(123);
log(typeof numObj); // object
log(numObj);

// Boolean 생성자 함수로, Boolean 객체 만들기
const boolObj = new Boolean(true);
log(typeof boolObj); // object
log(boolObj);

// Function 생성자 함수로, Function 객체 만들기
const func = new Function("x", "return x * x");
log(typeof func); // 🔥 function 🔥
dir(func); // [Function: anonymous]

// Array 생성자 함수로, Array 객체 만들기
const arr = new Array(1, 2, 3);
log(typeof arr); // object
log(arr);

// RegExp 생성자 함수로, RegExp 객체 만들기
const regExp = new RegExp(/ab+c/i);
log(typeof regExp); // object
log(regExp); // /ab+c/i

// Date 생성자 함수로, Date 객체 생성
const date = new Date();
log(typeof date); // object
log(date);

/**
 * 가만 보면 Function 객체를 제외한 모든
 * typeof 연산자에대해서는 'object'라고 나온다
 * Function인 경우에는 typeof 연산자가 'function' 이라고 나온다
 */
