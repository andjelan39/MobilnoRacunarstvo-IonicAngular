import { Component, OnDestroy, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Subscription } from 'rxjs';
import { Movie } from 'src/app/movie.model';
import { MoviesService } from 'src/app/movies.service';

@Component({
  selector: 'app-added-movies',
  templateUrl: './added-movies.page.html',
  styleUrls: ['./added-movies.page.scss'],
})
export class AddedMoviesPage implements OnInit, OnDestroy {
  movies!: Movie[];
  private movieSub!: Subscription;

  constructor(
    private moviesService: MoviesService,
    private modalCtrl: ModalController
  ) {}

  ngOnInit() {
    this.movieSub = this.moviesService.mymovies.subscribe((movies) => {
      this.movies = movies;
    });
  }

  ionViewWillEnter() {
    this.moviesService.getMyMovies().subscribe((movies) => {
      //this.movies = movies;
    });
  }

  ngOnDestroy() {
    if (this.movieSub) {
      this.movieSub.unsubscribe();
    }
  }
}
