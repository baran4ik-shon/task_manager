class Person {
  id: number;
  fName: string;
}

export class Task {
  id: number;
  name: string;
  startDate: string;
  endDate: string;
  person: Person;
}
