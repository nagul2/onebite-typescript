// any
// let anyVar = 10;
// anyVar = "hello"; // 오류 발생!

let anyVar: any = 10;
anyVar = "hello";

anyVar = true;
anyVar = {};

anyVar.toUpperCase();
anyVar.toFixed();
anyVar.a;

// let num: number = 10;
// num = anyVar;

// unknown
let unknownVar: unknown = 10;
unknownVar = "hello";
unknownVar = true;
unknownVar = () => {};

let num: number = 10;

// num = unknownVar; // 오류
// unknownVar.toUpperCase(); // 오류
// unknownVar * 10; // 오류

if (typeof unknownVar === "number") {
  num = unknownVar;
  unknownVar.toFixed();
  unknownVar * 10;
}
