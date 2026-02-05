/**
 * 함수 타입 정의
 */

// 함수를 설명하는 가장 좋은 방법
// 어떤 타입의 매개변수를 받고, 어떤 타입의 결괄르 반환하는지
function func1(a: number, b: number): number {
  return a + b;
}

function func2(a: number, b: number) {
  return a + b;
}

const add1 = (a: number, b: number): number => {
  return a + b;
};

const add2 = (a: number, b: number) => {
  return a + b;
};

function introduce1(name = "소리") {
  console.log(`name: ${name}`);
}

// function introduce2(name: number = "소리") {} // 당연히 에러
// introduce1(1);  // 당연히 에러

function introduce2(name = "오솔군", size?: number) {
  console.log(`name : ${name}`);
  console.log(`tall : ${size}`);
}

introduce2("너굴군", 20);
introduce2("너굴군");

function introduce3(name = "오솔군", size?: number) {
  console.log(`name : ${name}`);
  if (typeof size === "number") {
    console.log(`tall : ${size + 10}`);
  }
}

// function introduce4(name = "오솔군", size?: number, age: number) {} // 오류
function introduce4(name = "오솔군", age: number, size?: number) {} // 정상

function getSum1(...rest: number[]) {
  let sum = 0;
  rest.forEach((it) => (sum += it));
  return sum;
}

console.log(getSum1(1, 2, 3, 4, 5));

function getSum2(...rest: [number, number, number]) {
  let sum = 0;
  rest.forEach((it) => (sum += it));
  return sum;
}

console.log(getSum2(1, 2, 3));
// console.log(getSum2(1, 2, 3, 4)); // 오류
