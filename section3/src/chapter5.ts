/**
 * 타입 추론
 */
let a = 10;
let b = "hello";

let c = {
  id: 1,
  name: "오소리",
  profile: {
    nickname: "sol",
  },
  urls: ["https://solsol.com"],
};

let { id, name, profile } = c;

let [one, tow, three] = [1, "string", false];

function func() {
  return "hello"; // 반환값의 타입인 string으로 추론
}

// 함수의 매개변수에 기본값을 적용할 때에도 타입추론이 됨
function func2(message = "hello") {
  return message;
}

/**
 * 주의해야 할 상황들
 */
let d; // 암시적인 any 타입으로 추론

d = 10; // number 타입으로 추론
d.toFixed();

d = "hello"; // string 타입으로 추론
d.toUpperCase();
// d.toFixed(); // 오류

const num = 10;
const strHello = "hello";

let arr = [1, "string"]; // (string | number)[] 타입으로 추론
