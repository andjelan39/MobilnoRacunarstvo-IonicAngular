import { Component, OnInit } from '@angular/core';
import { Movie } from '../../movie.model';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from '../../movies.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.page.html',
  styleUrls: ['./movie-details.page.scss'],
})
export class MovieDetailsPage implements OnInit {
  movie: Movie = {
    id: 'm4',
    title: 'American Psycho',
    releaseYear: 2000,
    director: 'Mary Harron',
    genre: 'horror',
    description:
      'In New York City in 1987, a handsome, young urban professional, Patrick Bateman, lives a second life as a gruesome serial killer by night. The cast is filled by the detective, the fiance, the mistress, the coworker, and the secretary. This is a biting, wry comedy examining the elements that make a man a monster.',
    cast: 'Christian Bale',
    imageUrl:
      'https://m.media-amazon.com/images/M/MV5BZTM2ZGJmNjQtN2UyOS00NjcxLWFjMDktMDE2NzMyNTZlZTBiXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg',
    coverUrl: 'https://pbs.twimg.com/media/C5EyOh9W8AARBNI.jpg'
  };

  constructor(
    private route: ActivatedRoute,
    private moviesService: MoviesService
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe((paramMap) => {
      this.movie = this.moviesService.getMovie(paramMap.get('movieId'));
    });
  }
}
