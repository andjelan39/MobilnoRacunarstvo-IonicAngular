import { UserModel } from "./user.model";

export class Movie {
  constructor(
    public id: string | null,
    public title: string,
    public releaseYear: number,
    public director: string,
    public genre: string,
    public length: string,
    public description: string,
    public cast: string,
    public imageUrl: string,
    public coverUrl: string,
    public addedByUser: UserModel | null
  ) {}
}
