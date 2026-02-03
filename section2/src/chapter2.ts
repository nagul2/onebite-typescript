// 타입 어노테이션 방식
let numArr: number[] = [1, 2, 3];
let strArr: string[] = ["hello", "im", "gul"];

// 제네릭 방식
let boolArr: Array<boolean> = [true, false, true];

// 다양한 타입 요소를 갖는 배열 타입 정의
let multiArr: (number | string)[] = [1, "hello"];

// 다차원 배열
let doubleArr: number[][] = [
  [1, 2, 3],
  [4, 5],
];

// 튜플
let tup1: [number, number] = [1, 2];
let tup2: [number, string, boolean] = [1, "hello", true];

// tup1 = [3, 4, 5] // 오류 발생
// tup2 = ["1"] // 오류 발생
// tup1 = [1] // 오류 발생

tup1.push(3);
tup1.pop();
tup1.pop();
tup1.pop();

const users: [string, number][] = [
  ["이정환", 1],
  ["이아무개", 2],
  ["김아무개", 3],
  ["박아무개", 4],
  //   [5, "조아무개"], // 오류 발생
];
