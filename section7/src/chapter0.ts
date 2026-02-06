/**
 * 제네릭
 */
function func1(value: any) {
  return value;
}

let num = func1(10); // any 타입

let str = func1("string"); // any 타입

num.toUpperCase();
num.toFixed();

function func2(value: unknown) {
  return value;
}

let num2 = func2(10); // unknown 타입

let str2 = func2("string"); // unknown 타입

// num2.toUpperCase(); // 오류
// num2.toFixed(); // 오류

if (typeof num2 === "number") {
  num2.toFixed();
}

/**
 * 제네릭 함수
 */
function genericFunc<T>(value: T): T {
  return value;
}

let num3 = genericFunc(10);

function genericFunc2<T>(value: T): T {
  return value;
}

let tupleArr = genericFunc2<[number, number, number]>([1, 2, 3]);
let numberArr = genericFunc2([1, 2, 3]);
