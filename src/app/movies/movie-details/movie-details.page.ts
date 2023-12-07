import { Component, OnDestroy, OnInit } from '@angular/core';
import { Movie } from '../../movie.model';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from '../../movies.service';
import { ReviewModel } from 'src/app/review.model';
import { NgForm } from '@angular/forms';
import { UserModel } from 'src/app/user.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.page.html',
  styleUrls: ['./movie-details.page.scss'],
})
export class MovieDetailsPage implements OnInit, OnDestroy {
  movie: Movie = {
    id: 'm4',
    title: 'American Psycho',
    releaseYear: 2000,
    director: 'Mary Harron',
    genre: 'horror',
    length: '120 min',
    description:
      'In New York City in 1987, a handsome, young urban professional, Patrick Bateman, lives a second life as a gruesome serial killer by night. The cast is filled by the detective, the fiance, the mistress, the coworker, and the secretary. This is a biting, wry comedy examining the elements that make a man a monster.',
    cast: 'Christian Bale',
    imageUrl:
      'https://m.media-amazon.com/images/M/MV5BZTM2ZGJmNjQtN2UyOS00NjcxLWFjMDktMDE2NzMyNTZlZTBiXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg',
    coverUrl: 'https://pbs.twimg.com/media/C5EyOh9W8AARBNI.jpg',
    addedByUser: null,
  };

  /*oldreviews: ReviewModel[] = [
    {
      id: 'r1',
      text: 'Such a great movie!',
      movie: {
        id: 'm3',
        title: 'American Psycho',
        releaseYear: 2000,
        director: 'Mary Harron',
        genre: 'horror',
        length: '120 min',
        description: 'Description',
        cast: 'Christian Bale',
        imageUrl:
          'https://m.media-amazon.com/images/M/MV5BZTM2ZGJmNjQtN2UyOS00NjcxLWFjMDktMDE2NzMyNTZlZTBiXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg',
        coverUrl: 'https://pbs.twimg.com/media/C5EyOh9W8AARBNI.jpg',
        addedByUser: null,
      },
      user: new UserModel('', 'nikola@gmail.com', '', '', new Date()),
    },
    {
      id: 'r2',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
      movie: {
        id: 'm3',
        title: 'American Psycho',
        releaseYear: 2000,
        director: 'Mary Harron',
        genre: 'horror',
        length: '120 min',
        description: 'Description',
        cast: 'Christian Bale',
        imageUrl:
          'https://m.media-amazon.com/images/M/MV5BZTM2ZGJmNjQtN2UyOS00NjcxLWFjMDktMDE2NzMyNTZlZTBiXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg',
        coverUrl: 'https://pbs.twimg.com/media/C5EyOh9W8AARBNI.jpg',
        addedByUser: null,
      },
      user: new UserModel('', 'andjela@gmail.com', '', '', new Date()),
    },
  ];*/

  reviews!: ReviewModel[];
  private reviewSub!: Subscription;

  constructor(
    private route: ActivatedRoute,
    private moviesService: MoviesService
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe((paramMap) => {
      this.movie = this.moviesService.getMovie(paramMap.get('movieId'));
    });
    this.reviewSub = this.moviesService.reviews.subscribe((reviews) => {
      this.reviews = reviews;
    });
  }

  ionViewWillEnter() {
    this.moviesService.getReviews(this.movie).subscribe((reviewData) => {
      // this.reviews = reviewData;
    });
  }

  ngOnDestroy() {
    if (this.reviewSub) {
      this.reviewSub.unsubscribe();
    }
  }

  addMovieReview(reviewForm: NgForm) {
    this.moviesService
      .addReview(reviewForm.value.review, this.movie)
      .subscribe((res) => {
        console.log(res);
      });
    reviewForm.reset();
  }
}
