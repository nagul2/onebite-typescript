/**
 * 프로미스
 */

const promise1 = new Promise<number>((resolve, reject) => {
  setTimeout(() => {
    resolve(20);
    // resolve("string"); // 오류
  }, 3000);
});

promise1.then((response) => {
  console.log(response * 10);
});

const promise2 = new Promise<number>((resolve, reject) => {
  setTimeout(() => {
    reject("실패!"); // 실패했을 때의 타입은 정의할 수 없음
  }, 3000);
});

promise2.catch((error) => {
  //   if (typeof error === "string") {
  console.log(error);
  //   }
});

/**
 * 프로미스를 반환하는 함수의 타입을 정의
 */
interface Post {
  id: number;
  title: string;
  content: string;
}

function fetchPost1() {
  return new Promise<Post>((resolve, reject) => {
    setTimeout(() => {
      resolve({
        id: 1,
        title: "게시글 제목",
        content: "게시글 내용",
      });
    }, 3000);
  });
}

const postReqeust = fetchPost1();

postReqeust.then((post) => {
  post.id;
});

function fetchPost2(): Promise<Post> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        id: 1,
        title: "게시글 제목",
        content: "게시글 내용",
      });
    }, 3000);
  });
}
