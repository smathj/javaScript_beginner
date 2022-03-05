const person = {
  name: "Kim",
};

person.job = "Web Dev";

// 프로퍼티 어트리뷰트 정보를 제공하는 프로퍼티 디스크립터 객체를 반환한다
/**
 * person 객체의 모든 프로퍼티에 대해서 설명한다
 */

console.log(Object.getOwnPropertyDescriptors(person));
/* ## 결과 ##
{
  name: {
    value: 'Kim',               💭 프로퍼티 값
    writable: true,             💭 값 변경 가능여부(Read Only)
    enumerable: true,           💭 반복문에서 열거 가능 여부
    configurable: true          💭 프로퍼티 재정의여부(삭제)
  },
  job: {
    value: 'Web Dev',
    writable: true,
    enumerable: true,
    configurable: true
  }
}
*/
