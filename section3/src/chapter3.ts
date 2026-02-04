type Animal = {
  name: string;
  color: string;
};

type Dog = {
  name: string;
  color: string;
  breed: string;
};

let animal: Animal = {
  name: "기린",
  color: "yellow",
};

let dog: Dog = {
  name: "돌돌이",
  color: "brown",
  breed: "진도",
};

animal = dog; // 업 캐스팅 허용
// dog = animal; // 다운 캐스팅 오류

type ProgrammingBook = {
  name: string;
  price: number;
  skill: string;
};

let book: Book;
let programmingBook: ProgrammingBook = {
  name: "재미없는 리액트",
  price: 30000,
  skill: "react",
};

book = programmingBook; // 업 캐스팅 허용
// programmingBook = book; // 다운 캐스팅 오류

type Book = {
  name: string;
  price: number;
};

let book2: Book = {
  name: "한 입 크기로 잘라먹는 리액트",
  price: 33000,
  //   skill: "reactjs", // 오류 발생
};

function func(book: Book) {}
func({
  name: "재미없는 타입스크립트",
  price: 20000,
  //   skill: "typescript", // 오류 발생
});

let programmingBook2: ProgrammingBook = {
  name: "재미없는 타입스크립트",
  price: 20000,
  skill: "typescript",
};

let book3: Book = programmingBook2;
func(programmingBook2);
