import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Movie } from 'src/app/movie.model';
import { MoviesService } from 'src/app/movies.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit, OnDestroy {
  movies: Movie[] = [];
  private movieSub!: Subscription;
  public results: Movie[] = [...this.movies];

  constructor(private movieService: MoviesService) {}

  ngOnInit() {
    this.movieSub = this.movieService.movies.subscribe((movies) => {
      this.movies = movies;
    });
  }

  ngOnDestroy() {
    if (this.movieSub) {
      this.movieSub.unsubscribe;
    }
  }

  ionViewWillEnter() {
    this.movieService.getMovies().subscribe((movieData) => {});
  }

  handleInput(event: any) {
    const query = event.target.value.toLowerCase();
    this.results = this.movies.filter(
      (movie) => movie.title.toLowerCase().indexOf(query) > -1
    );
  }
}
