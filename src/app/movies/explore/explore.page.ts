import { Component, OnDestroy, OnInit } from '@angular/core';
import { Movie } from '../../movie.model';
import { MoviesService } from '../../movies.service';
import { ModalController } from '@ionic/angular';
import { AddMovieModalComponent } from '../add-movie-modal/add-movie-modal.component';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-explore',
  templateUrl: './explore.page.html',
  styleUrls: ['./explore.page.scss'],
})
export class ExplorePage implements OnInit, OnDestroy {
  movies!: Movie[];
  private movieSub!: Subscription;

  constructor(
    private moviesService: MoviesService,
    private modalCtrl: ModalController
  ) {
    //this.movies = this.moviesService.movies;
  }

  ngOnInit() {
    this.movieSub = this.moviesService.movies.subscribe((movies) => {
      this.movies = movies;
    });
  }

  ionViewWillEnter() {
    this.moviesService.getMovies().subscribe((movies) => {
      //this.movies = movies;
    });
  }

  openModal() {
    this.modalCtrl
      .create({
        component: AddMovieModalComponent,
      })
      .then((modal: HTMLIonModalElement) => {
        modal.present();
        return modal.onDidDismiss();
      })
      .then((resultData) => {
        if (resultData.role === 'confirm') {
          console.log(resultData);
          this.moviesService
            .addMovie(
              resultData.data.movieData.title,
              resultData.data.movieData.releaseYear,
              resultData.data.movieData.genre,
              resultData.data.movieData.director,
              resultData.data.movieData.cast,
              resultData.data.movieData.length,
              resultData.data.movieData.description,
              resultData.data.movieData.imageUrl,
              resultData.data.movieData.coverUrl
            )
            .subscribe((movies) => {
              //this.movies = movies;
            });
        } else {
          console.log('canceled');
        }
      });
  }

  ngOnDestroy() {
    if (this.movieSub) {
      this.movieSub.unsubscribe();
    }
  }
}
