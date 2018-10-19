import { IAuthor } from 'app/shared/model//author.model';

export interface IBook {
  id?: number;
  title?: string;
  genre?: string;
  language?: string;
  year?: number;
  author?: IAuthor;
}

export class Book implements IBook {
  constructor(
    public id?: number,
    public title?: string,
    public genre?: string,
    public language?: string,
    public year?: number,
    public author?: IAuthor
  ) {}
}
