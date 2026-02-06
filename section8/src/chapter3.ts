/**
 * 맵드 타입
 */
interface User {
  id: number;
  name: string;
  age: number;
}

interface PartialUser {
  id?: number;
  name?: string;
  age?: number;
}

function fetchUser(): User {
  // ... 기능
  return {
    id: 1,
    name: "오소리",
    age: 50,
  };
}

function updateUser1(user: User) {
  // ... 유저 정보 수정 기능
}

updateUser1({
  id: 1,
  name: "너구리",
  age: 50,
});

function updateUser2(user: PartialUser) {
  // ... 유저 정보 수정 기능
}

updateUser2({
  name: "너구리",
});

type MappedTypeUser = {
  [key in "id" | "name" | "age"]?: User[key];
};

type MappedTypeWithKeyofUser = {
  [key in keyof User]?: User[key];
};

type ReadonlyUser = {
  readonly [key in keyof User]: User[key];
};
