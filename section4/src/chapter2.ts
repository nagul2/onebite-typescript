/**
 * 함수 타입의 호환성
 */

// 반환값 타입이 호환되는가
type A = () => number;
type B = () => 10;

let a: A = () => 10;
let b: B = () => 10;

a = b; // ok
// b = a; // 오류

// 두 함수의 매개변수의 타입이 호환되는가
// 2-1 매개변수의 개수가 같을 때
type C = (value: number) => void;
type D = (value: 10) => void;

let c: C = (value) => {};
let d: D = (value) => {};

// c = d; // 오류
d = c; // ok

type Animal = {
  name: string;
};

type Dog = {
  name: string;
  color: string;
};

let animalFunc = (animal: Animal) => {
  console.log(animal.name);
};

let dogFunc = (dog: Dog) => {
  console.log(dog.name);
  console.log(dog.color);
};

// animalFunc = dogFunc; // 오류
dogFunc = animalFunc; // ok

let animalFunc2 = (animal: Animal) => {
  console.log(animal.name); // ok
  //   console.log(animal.color); // 오류
};

let dogFunc2 = (dog: Dog) => {
  console.log(dog.name);
};

// 2-2 매개변수의 개수가 다를 때
type Func1 = (a: number, b: number) => void;
type Func2 = (a: number) => void;

let func1: Func1 = (a, b) => {};
let func2: Func2 = (a) => {};

func1 = func2; // ok
// func2 = func1; // 오류
