/**
 * 접근제어자
 */
class Employee {
  name: string = "";
  age: number = 0;
  public position?: string = "";

  constructor(name: string, age: number, position?: string) {
    this.name = name;
    this.age = age;
    this.position = position;
  }

  work() {
    console.log("일함");
  }
}

const employeeA = new Employee("마멋", 30, "비개발자");
employeeA.name = "바뀐사람";
employeeA.age = 40;
employeeA.position = "풀스택개발자";

class Employee2 {
  name: string = "";
  private age: number = 0;
  private position: string = "";

  constructor(name: string, age: number, position: string) {
    this.name = name;
    this.age = age;
    this.position = position;
  }

  work() {
    console.log(`${this.position} 일함`); // 접근 가능
  }
}

const employeeB = new Employee2("마멋", 30, "비개발자");
employeeB.name = "바뀐사람";
// employeeB.age = 40; // 오류
// employeeB.position = "풀스택개발자"; // 오류

class Employee3 {
  name: string = "";
  private age: number = 0;
  protected position: string = "";

  constructor(name: string, age: number, position: string) {
    this.name = name;
    this.age = age;
    this.position = position;
  }

  work() {
    console.log(`${this.position} 일함`); // 접근 가능
  }
}

class ExecutiveOfficer extends Employee3 {
  officeNumber: number;

  constructor(
    name: string,
    age: number,
    position: string,
    officeNumber: number,
  ) {
    super(name, age, position);
    this.officeNumber = officeNumber;
  }

  execute() {
    this.name; // public 접근 가능
    // this.age; // private 접근 불가 오류
    this.position; // protected 상속 접근가능
  }
}

const executiveEmployee = new ExecutiveOfficer("마멋", 30, "비개발자", 7);
executiveEmployee.name; // public 접근 가능
// executiveEmployee.age; // private 외부 접근 불가 오류
// executiveEmployee.position; // protected 외부 접근 불가 오류

class Employee4 {
  //   public name: string = "";
  //   private age: number = 0;
  //   protected position: string = "";

  constructor(
    public name: string,
    private age: number,
    protected position: string,
  ) {
    // this.name = name;
    // this.age = age;
    // this.position = position;
  }
}

const employee4 = new Employee4("마멋", 30, "비개발자");
console.log(employee4);
