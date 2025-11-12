{
  interface Person {
    name: string;
    greet(): void;
  }

  class Employee implements Person {
    constructor(public name: string) {}

    greet() {
      console.log(`Hello, my name is ${this.name}`);
    }
  }

  const aEmployee = new Employee("james");
  aEmployee.greet();
}
