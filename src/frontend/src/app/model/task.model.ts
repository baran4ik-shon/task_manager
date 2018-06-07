export class Person {
  id: number;
  fName: string;
  is  = false;
}

export class Task {
  id: number;
  taskName : string;
  startDate: Date;
  endDate: Date;
  person: Person[];
}
