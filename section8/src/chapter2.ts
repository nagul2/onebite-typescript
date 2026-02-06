/**
 * keyof 연산자
 */
interface Person {
  name: string;
  age: number;
  location: string;
}

const person: Person = {
  name: "김갑수",
  age: 43,
  location: "서울시",
};

function getPropertyKey(person: Person, key: "name" | "age") {
  return person[key];
}

console.log(getPropertyKey(person, "name"));

function getPropertyKey2(person: Person, key: keyof Person) {
  return person[key];
}

console.log(getPropertyKey2(person, "name"));

type NewPerson = typeof newPerson;

const newPerson = {
  name: "김갑수",
  age: 43,
  location: "서울시",
};

function getPropertyKey3(person: Person, key: keyof typeof newPerson) {
  return person[key];
}
