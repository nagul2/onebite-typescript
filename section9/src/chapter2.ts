/**
 * infer
 */
type ReturnType<T> = T extends () => infer R ? R : never;

type FuncA = () => string;

type FuncB = () => number;

type A = ReturnType<FuncA>; // string 타입 반환

type B = ReturnType<FuncB>; // number 타입 반환

type C = ReturnType<number>; // 조건식을 만족하는 R추론 불가능 -> never 타입 반환

type PromiseUnpack<T> = T extends Promise<infer R> ? R : never;
// 1. T는 프로미스 타입이어야 한다.
// 2. 프로미스 타입의 결과값 타입을 반환해야 한다.

type PromiseA = PromiseUnpack<Promise<number>>; // number 타입 반환

type PromiseB = PromiseUnpack<Promise<string>>; // string 타입 반환
