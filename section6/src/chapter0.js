let studentA = {
  name: "신정환",
  grade: "A+",
  age: 27,
  study() {
    console.log("열심히 공부 함");
  },
  introduce() {
    console.log("안녕하세요!");
  },
};

let studentB = {
  name: "홍길동",
  grade: "A+",
  age: 27,
  study() {
    console.log("열심히 공부 함");
  },
  introduce() {
    console.log("안녕하세요!");
  },
};

class Student {
  // 필드
  name;
  age;
  grade;

  // 생성자
  constructor(name, grade, age) {
    this.name = name;
    this.grade = grade;
    this.age = age;
  }

  // 메서드
  study() {
    console.log("열심히 공부 함");
  }
  hi() {
    console.log("안녕하세요!");
  }

  introduce() {
    console.log(`안녕하세요! ${this.name} 입니다.`);
  }
}

// 클래스를 이용해서 만든 객체 -> 인스턴스
// Student 인스턴스
const studentC = new Student("임꺽정", "A+", 27);
console.log(studentC);

studentC.study();
studentC.hi();
studentC.introduce();

// 상속
class StudentDeveloper extends Student {
  favoriteSkill;

  constructor(name, grade, age, favoriteSkill) {
    super(name, grade, age);
    this.favoriteSkill = favoriteSkill;
  }

  programming() {
    console.log(`${this.favoriteSkill}로 프로그래밍`);
  }
}

const studentDeveloper = new StudentDeveloper("장발장", "A+", 27, "Kotlin");

console.log(studentDeveloper);
studentDeveloper.programming();
