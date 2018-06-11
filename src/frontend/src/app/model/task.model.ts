import {jsonIgnore} from "json-ignore";


export class Person {
  id: number;
  fName: string;
  @jsonIgnore ()
  is  = false;
}

export class Task {
  id: number;
  taskName : string;
  startDate: Date;
  endDate: Date;
  person: Person[];
}
