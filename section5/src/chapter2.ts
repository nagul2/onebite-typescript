/**
 * 선언 합침
 */
type Person = {
  name: string;
};

// type Person = { // 오류 발생
//   age: number;
// };

interface Person2 {
  name: string;
}

interface Person2 {
  // ok
  age: number;
}

interface Person2 {
  // name: number; // 오류발생
  age: number;
}
