export interface IAuthor {
  id?: number;
  firstName?: string;
  lastName?: string;
  age?: number;
  country?: string;
}

export class Author implements IAuthor {
  constructor(public id?: number, public firstName?: string, public lastName?: string, public age?: number, public country?: string) {}
}
