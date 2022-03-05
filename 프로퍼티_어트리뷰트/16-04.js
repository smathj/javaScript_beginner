// 데이터 프로퍼티
const person = {
  name: "Kim",
};

/**
 * 앞서 설명했떤 프로퍼티는 "데이터 프로퍼티" 이다
 * 
 * {
  name: {
    value: 'Kim',               💭 프로퍼티 값
    writable: true,             💭 값 변경 가능여부(Read Only)
    enumerable: true,           💭 반복문에서 열거 가능 여부
    configurable: true          💭 프로퍼티 재정의여부(삭제)
  },
}

value,writable, enumerable, configurable은 
프로퍼티 디스크립터 객체의 프로퍼티이고
프로퍼티 어트리뷰트(자바스크립트 엔진이 관리하는 내부 상태 값, 내부슬롯)
[[Value]], [[Writable]], [[Enumerable]], [[Configuration]] 가 있다


다음은 접근자 프로퍼티를 보자(자바의 getter, setter와 같은 컨셉이다)
 */
