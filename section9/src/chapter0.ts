/**
 * 조건부 타입
 */
type A = number extends string ? number : string;

type ObjA = {
  a: number;
};

type ObjB = {
  a: number;
  b: number;
};

type B = ObjB extends ObjA ? number : string;

/**
 * 제네릭 조건부 타입
 */
type StringNumberSwitch<T> = T extends number ? string : number;

let varA: StringNumberSwitch<number>; // 조건이 true -> string 타입으로 추론
let varB: StringNumberSwitch<string>; // 조건이 false -> number 타입으로 추론

function removeSpaces1(text: string | undefined | null) {
  if (typeof text === "string") {
    return text.replaceAll(" ", "");
  } else {
    return undefined;
  }
}

let result1 = removeSpaces1("hi i am gul") as string; // string | undefined
result1.toUpperCase(); // 오류 발생

function removeSpaces2<T>(text: T): T extends string ? string : undefined {
  if (typeof text === "string") {
    // return text.replaceAll(" ", "") as any;
    return 0 as any;
  } else {
    return undefined as any;
  }
}

let result2 = removeSpaces2("hi i am gul"); // string
let result3 = removeSpaces2(undefined); // undefined

function removeSpaces<T>(text: T): T extends string ? string : undefined;

function removeSpaces(text: any) {
  if (typeof text === "string") {
    return text.replaceAll(" ", "");
  } else {
    return undefined;
  }
}

let result4 = removeSpaces2("hi i am gul"); // string
let result5 = removeSpaces2(undefined); // undefined
