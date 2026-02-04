/**
 * 타입 좁히기
 * 조건문 등을 이용하여 넓은 타입에서 좁은타입으로 타입을 상황에 따라 좁히는 방법을 말함
 */
function func(value: number | string) {
  //   value.toFixed(); // 오류
  //   value.toUpperCase(); // 오류

  if (typeof value === "number") {
    console.log(value.toFixed());
  } else if (typeof value === "string") {
    console.log(value.toUpperCase());
  }
}

type Person = {
  name: string;
  age: number;
};

function func2(value: Date | null | Person) {
  if (value instanceof Date) {
    console.log(value.getTime());
  } else if (value && "age" in value) {
    console.log(`${value.name}은 ${value.age}살 입니다`);
  }
}
