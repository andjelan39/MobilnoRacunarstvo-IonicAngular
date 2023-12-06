import { Movie } from './movie.model';
import { UserModel } from './user.model';

export class ReviewModel {
  constructor(
    public id: string | null,
    public text: string,
    public movie: Movie,
    public user: UserModel | null
  ) {}
}
