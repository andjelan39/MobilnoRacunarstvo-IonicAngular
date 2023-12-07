import { Injectable } from '@angular/core';
import { Movie } from './movie.model';
import { HttpClient } from '@angular/common/http';
import { AuthService } from './auth/auth.service';
import { BehaviorSubject, map, switchMap, take, tap } from 'rxjs';
import { UserModel } from './user.model';
import { ReviewModel } from './review.model';

interface MovieData {
  title: string;
  releaseYear: number;
  genre: string;
  director: string;
  cast: string;
  length: string;
  description: string;
  imageUrl: string;
  coverUrl: string;
  addedByUser: UserModel;
}

interface ReviewData {
  text: string;
  movie: Movie;
  user: UserModel;
}

@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  /*oldmovies: Movie[] = [
    {
      id: 'm1',
      title: 'American Psycho',
      releaseYear: 2000,
      director: 'Mary Harron',
      genre: 'horror',
      length: '102 min',
      description:
        'In New York City in 1987, a handsome, young urban professional, Patrick Bateman, lives a second life as a gruesome serial killer by night. The cast is filled by the detective, the fiance, the mistress, the coworker, and the secretary. This is a biting, wry comedy examining the elements that make a man a monster.',
      cast: 'Christian Bale · Willem Dafoe · Chloe Sevigny',
      imageUrl:
        'https://m.media-amazon.com/images/M/MV5BZTM2ZGJmNjQtN2UyOS00NjcxLWFjMDktMDE2NzMyNTZlZTBiXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg',
      coverUrl:
        'https://i.guim.co.uk/img/media/5ca5fa80076dbe8f0ea2ad399dcc655d6667ed82/0_48_3504_2103/master/3504.jpg?width=1200&quality=85&auto=format&fit=max&s=185dbcbc51bcecf499da469cc58dcf02',
    },
    {
      id: 'm2',
      title: 'Trainspotting',
      releaseYear: 1996,
      director: 'Danny Boyle',
      genre: 'thriller',
      length: '94 min',
      description:
        'A wild, freeform, Rabelaisian trip through the darkest recesses of Edinburgh low-life, focusing on Mark Renton and his attempt to give up his heroin habit, and how the latter affects his relationship with family and friends: Sean Connery wannabe Sick Boy, dimbulb Spud and a psycho Begbie.',
      cast: 'Ewan McGregor · Jonny Lee Miller · Ewen Bremner',
      imageUrl:
        'https://i.etsystatic.com/32739938/r/il/500217/3617286456/il_794xN.3617286456_roo0.jpg',
      coverUrl: 'https://so-s.nflximg.net/soa1/849/515319849.jpg',
    },
    {
      id: 'm3',
      title: 'Fallen Angels',
      releaseYear: 1995,
      director: 'Wong Kar-Wai',
      genre: 'thriller',
      length: '99 min',
      description:
        'This Hong Kong-set crime drama features two intertwined storylines: one tells the story of a hitman wishing to leave the criminal underworld, and his agent, who is infatuated with him. The other story is of a mute ex-convict on the run from the police and a mentally unstable woman dumped by her boyfriend.',
      cast: 'Leon Lai · Michelle Reis · Takeshi Kaneshiro',
      imageUrl:
        'https://preview.redd.it/whats-your-favorite-movie-poster-by-color-day-4-green-v0-5dfmizri1jub1.png?width=640&crop=smart&auto=webp&s=a31670212902272df20b0bec718c7911fa3edb12',
      coverUrl:
        'https://miro.medium.com/v2/resize:fit:1400/1*2yXRX4hNnGRoVWIjeAkfTg.jpeg',
    },
    {
      id: 'm4',
      title: 'Witness',
      releaseYear: 1985,
      director: 'Peter Weir',
      genre: 'drama',
      length: '112 min',
      description:
        'After witnessing a brutal murder, young Amish boy Samuel and his mother Rachel seek protection from police officer John Book. When Book uncovers evidence of police corruption involving narcotics lieutenant James McFee, Book must take Rachel and Samuel, and flee to the Amish countryside where Rachel grew up. There, immersed in Amish culture and tradition, Book and Rachel begin a cautious romance.',
      cast: 'Harrison Ford · Kelly McGillis · Lukas Haas',
      imageUrl:
        'https://image.tmdb.org/t/p/original/lDnC1Woa9nEnrwlKDxdFvHx2gDc.jpg',
      coverUrl:
        'https://media.ouest-france.fr/v1/pictures/f63008859997c69ee1cb5b837de4f3a4-witness-thriller-programme-tv.jpg?width=1260&sign=0c72e1f3c08ea3ee8b416c70fb0677c4780757eade308f1778ef3d7f46d054fe&client_id=bpservices',
    },
    {
      id: 'm5',
      title: 'Pump Up The Volume',
      releaseYear: 1990,
      director: 'Allan Moyle',
      genre: 'comedy',
      length: '105 min',
      description:
        'In Arizona, an introverted and insightful teenager, Mark Hunter (Christian Slater), finds an outlet for his viewpoints through a shortwave radio. Broadcasting as "Hard Harry," Hunter uses his pirate radio show to rant against the injustices and hypocrisies taking place in the area, and in society in general.',
      cast: 'Christian Slater · Samantha Mathis · Scott Paulin',
      imageUrl:
        'https://a.ltrbxd.com/resized/sm/upload/j7/2k/aq/21/5Re4KeKhTXRdTb52R31zNisGwqc-0-230-0-345-crop.jpg?v=46a71c3f77',
      coverUrl:
        'https://mutantreviewers.files.wordpress.com/2022/04/pump-up-the-volume.jpg?w=723&h=482',
    },
    {
      id: 'm6',
      title: 'Jack's Back',
      releaseYear: 1988,
      director: 'Rowdy Herrington',
      genre: 'crime',
      length: '97 min',
      description:
        'A young doctor is suspected when a series of Jack the Ripper copycat killings is committed. However, when the doctor himself is murdered, his identical twin brother claims to have seen visions of the true killer. Police wonder if he could be the ripper. In the meantime, he tries to figure out what happened to his brother.',
      cast: 'James Spader · Cynthia Gibb · Jim Haynie',
      imageUrl:
        'https://a.ltrbxd.com/resized/film-poster/2/3/1/0/1/23101-jack-s-back-0-230-0-345-crop.jpg?v=c7454c5a86',
      coverUrl:
        'https://blurayauthority.com/wp-content/uploads/2016/03/jacksbackhd_pub.png',
    },
  ];*/

  private _movies = new BehaviorSubject<Movie[]>([]);
  private myMovies = new BehaviorSubject<Movie[]>([]);
  private movieArray: Movie[] = [];
  private _reviews = new BehaviorSubject<ReviewModel[]>([]);

  constructor(private http: HttpClient, private authService: AuthService) {}

  get movies() {
    return this._movies.asObservable();
  }

  get mymovies() {
    return this.myMovies.asObservable();
  }

  get reviews() {
    return this._reviews.asObservable();
  }

  addMovie(
    title: string,
    releaseYear: number,
    genre: string,
    director: string,
    cast: string,
    length: string,
    description: string,
    imageUrl: string,
    coverUrl: string
  ) {
    let generatedId: string;
    let newMovie: Movie;
    let fetchedUser: UserModel | null;

    return this.authService.user.pipe(
      take(1),
      switchMap((user) => {
        fetchedUser = user;
        return this.authService.token;
      }),
      take(1),
      switchMap((token) => {
        newMovie = new Movie(
          null,
          title,
          releaseYear,
          director,
          genre,
          length,
          description,
          cast,
          imageUrl,
          coverUrl,
          fetchedUser
        );
        return this.http.post<{ name: string }>(
          'https://movie-app-flicks-default-rtdb.europe-west1.firebasedatabase.app/movies.json?auth=' +
            token,
          newMovie
        );
      }),
      take(1),
      switchMap((resData) => {
        generatedId = resData.name;
        return this.movies;
      }),
      take(1),
      tap((movies) => {
        newMovie.id = generatedId;
        this._movies.next(movies.concat(newMovie));
      })
    );
  }

  getMovies() {
    return this.authService.token.pipe(
      take(1),
      switchMap((token) => {
        return this.http.get<{ [key: string]: MovieData }>(
          'https://movie-app-flicks-default-rtdb.europe-west1.firebasedatabase.app/movies.json?auth=' +
            token
        );
      }),
      map((moviesData) => {
        const movies: Movie[] = [];

        for (const key in moviesData) {
          if (moviesData.hasOwnProperty(key)) {
            movies.push(
              new Movie(
                key,
                moviesData[key].title,
                moviesData[key].releaseYear,
                moviesData[key].director,
                moviesData[key].genre,
                moviesData[key].length,
                moviesData[key].description,
                moviesData[key].cast,
                moviesData[key].imageUrl,
                moviesData[key].coverUrl,
                moviesData[key].addedByUser
              )
            );
          }
        }
        return movies;
      }),
      tap((movies) => {
        this._movies.next(movies);
      })
    );
  }

  getMovie(id: string | null) {
    this._movies.subscribe((_movies) => {
      this.movieArray = _movies;
    });
    return this.movieArray.find((movie) => movie.id === id)!;
  }

  getMyMovies() {
    let userLogged: UserModel | null;
    return this.authService.user.pipe(
      take(1),
      switchMap((user) => {
        userLogged = user;
        return this.authService.token;
      }),
      take(1),
      switchMap((token) => {
        return this.http.get<{ [key: string]: MovieData }>(
          'https://movie-app-flicks-default-rtdb.europe-west1.firebasedatabase.app/movies.json?auth=' +
            token
        );
      }),
      take(1),
      switchMap((moviesData) => {
        const movies: Movie[] = [];
        for (const key in moviesData) {
          if (
            moviesData.hasOwnProperty(key) &&
            userLogged != null &&
            userLogged.email === moviesData[key].addedByUser.email
          ) {
            movies.push({
              id: key,
              title: moviesData[key].title,
              releaseYear: moviesData[key].releaseYear,
              director: moviesData[key].director,
              genre: moviesData[key].genre,
              length: moviesData[key].length,
              description: moviesData[key].description,
              cast: moviesData[key].cast,
              imageUrl: moviesData[key].imageUrl,
              coverUrl: moviesData[key].coverUrl,
              addedByUser: moviesData[key].addedByUser,
            });
          }
        }
        this.myMovies.next(movies);
        return movies;
      })
    );
  }

  addReview(text: string, movie: Movie) {
    let generatedId: string;
    let userLogged: UserModel | null;
    let newReview: ReviewModel;
    return this.authService.user.pipe(
      take(1),
      switchMap((user) => {
        userLogged = user;
        return this.authService.token;
      }),
      take(1),
      switchMap((token) => {
        newReview = new ReviewModel(null, text, movie, userLogged);
        return this.http.post<{ name: string }>(
          'https://movie-app-flicks-default-rtdb.europe-west1.firebasedatabase.app/reviews.json?auth=' +
            token,
          newReview
        );
      }),
      take(1),
      switchMap((reviewData) => {
        generatedId = reviewData.name;
        return this.reviews;
      }),
      take(1),
      tap((reviews) => {
        newReview.id = generatedId;
        this._reviews.next(reviews.concat(newReview));
      })
    );
  }

  getReviews(movie: Movie) {
    return this.authService.token.pipe(
      take(1),
      switchMap((token) => {
        return this.http.get<{ [key: string]: ReviewData }>(
          'https://movie-app-flicks-default-rtdb.europe-west1.firebasedatabase.app/reviews.json?auth=' +
            token
        );
      }),
      map((reviewData) => {
        const reviews: ReviewModel[] = [];
        for (const key in reviewData) {
          if (
            reviewData.hasOwnProperty(key) &&
            movie.id == reviewData[key].movie.id
          ) {
            reviews.push({
              id: key,
              text: reviewData[key].text,
              movie: reviewData[key].movie,
              user: reviewData[key].user,
            });
          }
        }
        return reviews;
      }),
      tap((reviews) => {
        this._reviews.next(reviews);
      })
    );
  }
}
