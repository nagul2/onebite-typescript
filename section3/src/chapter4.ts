/**
 *  합집합 타입 - Union 타입
 */

let a: string | number | boolean;

a = 1;
a = "hello";
a = true;

let arr: (number | string | boolean)[] = ["hello", false, 100];

type Dog = {
  name: string;
  color: string;
};

type Person = {
  name: string;
  language: string;
};

type Union1 = Dog | Person;

let union1: Union1 = {
  name: "",
  color: "",
};

let union2: Union1 = {
  name: "",
  language: "",
};

let union3: Union1 = {
  name: "",
  color: "",
  language: "",
};

// let union4: Union1 = { // 오류
//   name: "",
// };

/**
 * 교집합(Intersection) 타입
 */
let variable: number & string; // never 타입으로 추론됨

type Dog2 = {
  name: string;
  color: string;
};

type Person2 = {
  name: string;
  language: string;
};

type Intersection = Dog2 & Person2;

let intersection1: Intersection = {
  name: "",
  color: "",
  language: "",
};

// let intersection2: Intersection = { // 오류 발생
//   name: "",
//   language: "",
// };
