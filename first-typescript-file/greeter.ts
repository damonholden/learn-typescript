class Student {
  fullName: string;
  constructor(
    public firstName: string,
    public middleInitial: string,
    public lastName: string
  ) {
    this.fullName = firstName + " " + middleInitial + " " + lastName;
  }
}

interface Person {
  firstName: string;
  lastName: string;
}

const greeter = (person: Person): string => {
  return `hello, ${person.firstName} ${person.lastName}`;
};

let user = new Student("Jane", "M.", "User");

greeter(user);
