const person = {
  name: "Kim",
};

// 프로퍼티 어트리뷰트 정보를 제공하는 프로퍼티 디스크립터 객체를 반환한다
/**
 * person 객체의 name이라는 프로퍼티에 대해서 설명해준다
 */
console.log(Object.getOwnPropertyDescriptor(person, "name"));
