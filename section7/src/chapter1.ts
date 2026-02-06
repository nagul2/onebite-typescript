/**
 * 사례 1
 */
function swap<T, U>(a: T, b: U) {
  return [b, a];
}

const [a, b] = swap("1", 2);

/**
 * 사례 2
 */
function returnFirstValue1<T>(data: T[]) {
  return data[0];
}

let num1 = returnFirstValue1([0, 1, 2]); // number
let str1 = returnFirstValue1([1, "hello", "mynameis"]); // number | string

/**
 * 사례 3
 */
function returnFirstValue2<T>(data: [T, ...unknown[]]) {
  return data[0];
}

let str2 = returnFirstValue2([1, "hello", "mynameis"]); // number

/**
 * 사례 4
 */
function getLength<T extends { length: number }>(data: T) {
  return data.length;
}

getLength("123");
getLength([1, 2, 3]);
getLength({ length: 1 });
// getLength(undefined);     // 오류
// getLength(10);          // 오류
