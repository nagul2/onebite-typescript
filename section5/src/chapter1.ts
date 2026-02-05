/**
 * 인터페이스의 확장
 */

// interface Animal {
//   name: string;
//   age: number;
// }

// interface Dog {
//   name: string;
//   age: number;
//   isBark: boolean;
// }

// interface Cat {
//   name: string;
//   age: number;
//   isScratch: boolean;
// }

// interface Chicken {
//   name: string;
//   age: number;
//   isFly: boolean;
// }

interface Animal {
  name: string;
  color: string;
}

interface Dog extends Animal {
  breed: string;
}

// interface Cat extends Animal {
//   isScratch: boolean;
// }

interface Chicken extends Animal {
  isFly: boolean;
}

const dog: Dog = {
  name: "멍멍이",
  color: "white",
  breed: "푸들",
};

interface Animal {
  name: string;
  color: string;
}

interface Cat extends Animal {
  //   name: "야옹이";
  //   name: number; // 오류
  isScratch: boolean;
}

// const cat: Cat = {
//   //   name: "살쾡이", // 오류발생
//   color: "white",
//   isScratch: true,
// };

type Animal2 = {
  name: string;
  color: string;
};

interface Dog extends Animal2 {
  breed: string;
}

interface DogCat extends Dog, Cat {}

const dogCat: DogCat = {
  name: "",
  color: "",
  breed: "",
  isScratch: true,
};
