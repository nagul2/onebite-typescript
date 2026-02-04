// enum Role {
//   ADMIN = 0,
//   USER = 1,
//   GUEST = 2,
// }

// enum Role {
//   ADMIN = 0, // 0 할당
//   USER = 11, // 11 할당
//   GUEST, // 12 할당
// }

enum Role {
  ADMIN, // 0 할당
  USER, // 1 할당
  GUEST, // 2 할당
}

enum Language {
  korean = "ko",
  english = "en",
  japanese = "jp",
}

const user1 = {
  name: "이정환",
  role: Role.ADMIN,
  language: Language.korean,
};

const user2 = {
  name: "홍길동",
  role: Role.USER,
  language: Language.english,
};

const user3 = {
  name: "아무개",
  role: Role.GUEST,
  language: Language.japanese,
};

console.log(user1, user2, user3);
