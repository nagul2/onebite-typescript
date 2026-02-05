/**
 * 함수 타입 표현식
 */
type Operation = (a: number, b: number) => number;

const add: Operation = (a, b) => a + b;
const sub: Operation = (a, b) => a - b;
const mul: Operation = (a, b) => a * b;
const div: Operation = (a, b) => a / b;

const add1: (a: number, b: number) => number = (a, b) => a + b;

/**
 * 호출 시그니쳐
 */
type Operation2 = {
  (a: number, b: number): number;
};

const add2: Operation2 = (a, b) => a + b;
const sub2: Operation2 = (a, b) => a - b;
const mult2: Operation2 = (a, b) => a * b;
const div2: Operation2 = (a, b) => a / b;

// 하이브리드 타입
type Operation3 = {
  (a: number, b: number): number;
  description: string;
};

const add3: Operation3 = (a, b) => a + b;

add3.description = "더하는 연산";
add3(1, 2);
