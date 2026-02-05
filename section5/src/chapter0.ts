/**
 * 인터페이스
 */
interface Person {
  name: string;
  age: number;
  gender?: string; // 선택적 프로퍼티
  readonly id: number; // 읽기 전용 프로퍼티

  sayHi1: () => void; // 함수 타입 표현식으로 메서드 타입 정의
  //   sayHi1: (a , b) => void; // 함수 타입 표현식은 메서드 타입 오버로딩이 불가능

  sayHi2(): void; // 호출 시그니쳐로 메서드 타입 정의
  sayHi2(a: number, b: number): void; // 호출 시그니쳐로 메서드의 타입을 오버로딩 할 수 있음
}

const person: Person = {
  name: "마멋",
  age: 30,
  id: 2,
  sayHi1: function () {
    console.log("hi1");
  },
  sayHi2: () => {
    console.log("hi2");
  },
};

person.sayHi2();
person.sayHi2(1, 2);

type type1 = number | string; // 유니온 타입
type type2 = number & string; // 인터섹션 타입

// interface  Person2 {
// } | number // 오류

interface Person2 {
  name: string;
  age: number;
}

// 타입 별칭이나 타입 주석으로 활용해야 함
type Type1 = number | string | Person;
type Type2 = number & string & Person;

const person2: Person2 | number = {
  name: "공룡",
  age: 27,
};

// interface Inter {
//   value: string;
//   (): void;
// }

// const test: Inter = {
//   value: "값",
//   test(): void {
//     console.log("test");
//   },
// };

interface IPerson {}
