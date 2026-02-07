/**
 * Partial<T>
 * 부분적인, 일부분의
 * 특정 객체 타입의 모든 프로퍼티를 선택적 프로퍼티로 바꿔줌
 */
interface Post {
  title: string;
  tags: string[];
  content: string;
  thumbnailURL?: string;
}

const draft: Partial<Post> = {
  title: "제목 나중에 짓자",
  content: "초안...",
};

// Partail 타입 구현
type Partial<T> = {
  [key in keyof T]?: T[key];
};

/**
 * Required<T>
 */
interface Post {
  title: string;
  tags: string[];
  content: string;
  thumbnailURL?: string;
}

const withThumbnailPost: Required<Post> = {
  title: "두번다시 이강사꺼 안들어",
  tags: ["듣지말것"],
  content: "",
  thumbnailURL: "https://...",
};

// Required 타입 구현
type Required<T> = {
  [key in keyof T]-?: T[key];
};

/**
 * Readonly<T>
 */
interface Post {
  title: string;
  tags: string[];
  content: string;
  thumbnailURL?: string;
}

const readonlyPost: Readonly<Post> = {
  title: "보호된 게시글입니다.",
  tags: [],
  content: "",
};

// readonlyPost.content = '해킹당함'; // 오류발생

type Readonly<T> = {
  readonly [key in keyof T]: T[key];
};
