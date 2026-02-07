/**
 * 분산적인 조건부 타입
 */

type StringNumberSwitch<T> = T extends number ? string : number;

let a: StringNumberSwitch<number | string>;

/**
 * 실용적인 예제 - 유니온에서 특정 타입만 제거
 */
type Exclude<T, U> = T extends U ? never : T;

type A = Exclude<number | string | boolean, string>;

type Extract<T, U> = T extends U ? T : never;

type B = Extract<number | string | boolean, string>;

/**
 * 분산적인 조건부 타입 막기
 */
type StringNumberSwitch2<T> = [T] extends [number] ? string : number;
let c: StringNumberSwitch2<number | string | boolean>;
