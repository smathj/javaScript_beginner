const { log, dir } = require("../log");

let obj = new Object();
log(obj); // {}

obj = Object();
log(obj); // {}

let f = new Function("x", "return x ** x");
log(f); // [Function: anonymous]

f = Function("x", "return x ** x");
log(f); // [Function: anonymous]

/**
 * π₯ λΉνΈμΈ μμ±μ ν¨μλ
 * new κ° μμ΄λ λμΌνκ² λμνλ€
 *
 * String, Number, Booleanμ newκ° μμ΄ νΈμΆλλ©΄
 * λ¬Έμμ΄/ μ«μ/ λΆλ¦¬μΈ κ°μ λ°ννλ€
 * λ°μ΄ν° νμλ λ³νλλ ν¨κ³Όλ μλ€.
 */
