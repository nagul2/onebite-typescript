/**
 * 인덱스드 엑세스 타입
 */

interface Post {
  title: string;
  content: string;
  author: {
    id: number;
    name: string;
  };
}

const post: Post = {
  title: "게시글 제목",
  content: "게시글 본문",
  author: {
    id: 1,
    name: "이사람",
  },
};

// 작성자의 아이디와 이름을 붙여서 출력하는 함수 -> Post 타입의 author 프로퍼티가 추가되거나 변경되면 계속 수정해야 함
function printAuthorInfo1(author: { id: number; name: string }) {
  console.log(`${author.id} - ${author.name}`);
}

function printAuthorInfo2(author: Post["author"]) {
  // author 프로퍼티의 타입을 지정
  console.log(`${author.id} - ${author.name}`);
}

function printAuthorId(authorId: Post["author"]["id"]) {
  // author의 id 프로퍼티만을 가져옴
  console.log(`authorId: ${authorId}`);
}

/**
 * 배열 요소 타입 추출
 */
type PostList = {
  title: string;
  content: string;
  author: {
    id: number;
    name: string;
    age: number;
  };
}[];

const post1: PostList[number] = {
  title: "게시글 제목",
  content: "게시글 본문",
  author: {
    id: 1,
    name: "이사람",
    age: 27,
  },
};

const post2: PostList[0] = {
  title: "게시글 제목",
  content: "게시글 본문",
  author: {
    id: 1,
    name: "이정환",
    age: 27,
  },
};

function printAuthorInfo3(author: PostList[number]["author"]) {
  console.log(`${author.id} - ${author.name}`);
}

/**
 * 튜플의 요소 타입 추출
 */
type Tup = [number, string, boolean];

type Tup0 = Tup[0]; // number
type Tup1 = Tup[1]; // string
type Tup2 = Tup[2]; // boolean
type Tup3 = Tup[number]; // number | string | boolean
