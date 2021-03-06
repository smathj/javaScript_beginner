const log = require("../log");

// ๐ฅ ECMAScript ์ฌ์ ๐ฅ
// Object ์์ฑ์ ํจ์์ ์ํ ๊ฐ์ฒด ์์ฑ
// ์ธ์๊ฐ ์ ๋ฌ๋์ง ์์์๋ ์ถ์ ์ฐ์ฐ OridinaryObjectCreate๋ฅผ ํธ์ถํ์ฌ
// ๋น ๊ฐ์ฒด๋ฅผ ์์ฑํ๋ค.
let obj = new Object();
log(obj);

// 1. new.target์ด undefined ์ด๋ Object๊ฐ ์๋ ๊ฒฝ์ฐ
// ์ธ์คํด์ค -> Foo.prototype -> Object.prototype ์์ผ๋ก
// ํ๋กํ ํ์ ์ฒด์ธ์ด ์์ฑ๋๋ค
class Foo extends Object {}
new Foo();

// 3. ์ธ์๊ฐ ์ ๋ฌ๋ ๊ฒฝ์ฐ์๋ ์ธ์๋ฅผ ๊ฐ์ฒด๋ก ๋ณํํ๋ค.
// Numer ๊ฐ์ฒด ์์ฑ
obj = new Object(123);
log(obj); // [Number: 123]

// String ๊ฐ์ฒด ์์ฑ
obj = new Object("123");
log(obj); // [String: '123']
