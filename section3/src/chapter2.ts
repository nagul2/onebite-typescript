/**
 * Unknown 타입
 */
function unnkownExam() {
  let a: unknown = 1; // number -> unknown
  let b: unknown = "hello"; // string -> unknown
  let c: unknown = true; // boolean -> unknown
  let d: unknown = null; // null -> unknown
  let e: unknown = undefined; // undefined -> unknown
  let f: unknown = []; // Array -> unknown
  let g: unknown = {}; // Object -> unknown
  let h: unknown = () => {}; // Function -> unknown

  let unknownValue: unknown;
  // let num: number = unknownValue; // 오류 : unknown 타입은 number 타입에 할당할 수 없음
  // let bool: boolean = unknownValue; // 오류 : unknown 타입은 Boolean 타입에 할당할 수 없음
  // let str: string = unknownValue; // 오류 : unknown 타입은 string 타입에 할당할 수 없음
}

/**
 * never 타입
 */
function neverExam() {
  function errorFunc(): never {
    throw new Error();
  }

  let a: number = errorFunc();
  let b: string = errorFunc();
  let c: boolean = errorFunc();
  let d: null = errorFunc();
  let e: undefined = errorFunc();
  let f: [] = errorFunc();
  let g: {} = errorFunc();

  //   let never1: never = 10; // 오류
  //   let never2: never = "hello"; // 오류
  //   let never3: never = true; // 오류
}

/**
 * void 타입
 */
function voidExam() {
  function noReturnFunc(): void {
    console.log("hi");
  }
  function noReturnFuncA(): void {
    return undefined;
  }

  let voidVar: void;

  voidVar = undefined; // undefined -> void (ok)

  function errorFunc(): never {
    throw new Error();
  }
  voidVar = errorFunc(); // never -> void (ok)
}

/**
 * any 타입
 */
function anyExam() {
  let unknownVar: unknown; // any의 슈퍼타입
  let anyVar: any;
  let undefinedVar: undefined; // any의 서브 타입

  // any는 슈퍼타입도 담을 수 있고 never를 제외한 모든 서브 타입도 남을 수 있음
  anyVar = unknownVar;
  undefinedVar = anyVar;

  let neverVar: never;
  //   neverVar = anyVar // 오류 발생
}
