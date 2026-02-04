/**
 * 타입 단언
 */
type Person = {
  name: string;
  age: number;
};

// let person: Person = {}; // 오류 발생

let person = {} as Person; // Person으로 간주

// 나중에 객체의 프로퍼티에 값을 채움
person.name = "";
person.age = 23;

type Dog = {
  name: string;
  color: string;
};

let dog = {
  name: "돌돌이",
  color: "brown",
  breed: "진도",
} as Dog;

/**
 * 타입 단언의 규칙
 * 값 as 단언 <- 단언식
 * A as B 일때
 * A가 B의 슈퍼타입이거나 A가 B의 서브타입이어야 함
 */

let num1 = 10 as never;
let num2 = 10 as unknown;

// let num3 = 10 as string; // 오류

let num3 = 10 as unknown as string;

let num4 = 10 as const;
// 10 Number Literal 타입으로 단언됨

let cat = {
  name: "야옹이",
  color: "yellow",
} as const;
// 모든 프로퍼티가 readonly를 갖도록 단언됨

type Post = {
  title: string;
  author?: string;
};

let post: Post = {
  title: "게시글1",
  author: "작성자",
};

const len: number = post.author!.length;
