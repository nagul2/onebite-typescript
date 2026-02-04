// void
function func1(): string {
  return "hello";
}

function func2(): void {
  console.log("hello");
}

let a: void;
// a = "new"; // 오류 발생
a = undefined;
// "strictNullChecks: false" 일 경우
// a = null;

// naver
function func3(): never {
  while (true) {}
}
function func4(): never {
  throw new Error();
}

let anyVar: any;
let b: never;

// 전부 에러 발생
// b = 1;
// b = null;
// b = undefined;
// b = anyVar;
