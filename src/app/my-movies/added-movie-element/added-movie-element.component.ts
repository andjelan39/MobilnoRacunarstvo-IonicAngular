import { Component, Input, OnInit } from '@angular/core';
import { AlertController, ModalController } from '@ionic/angular';
import { Movie } from 'src/app/movie.model';
import { MoviesService } from 'src/app/movies.service';
import { EditMovieModalComponent } from '../edit-movie-modal/edit-movie-modal.component';

@Component({
  selector: 'app-added-movie-element',
  templateUrl: './added-movie-element.component.html',
  styleUrls: ['./added-movie-element.component.scss'],
})
export class AddedMovieElementComponent implements OnInit {
  @Input() movie: Movie = {
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
  };

  constructor(
    private moviesService: MoviesService,
    private modalCtrl: ModalController,
    private alertCtrl: AlertController
  ) {}

  ngOnInit() {}

  openEdit(movie: Movie) {
    this.moviesService.setEdit(movie);
    this.modalCtrl
      .create({
        component: EditMovieModalComponent,
      })
      .then((modal: HTMLIonModalElement) => {
        modal.present();
        return modal.onDidDismiss();
      })
      .then((resultData) => {
        if (resultData.role === 'confirm') {
          this.moviesService
            .editMovie(
              resultData.data.movieData.id,
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
            .subscribe((res) => {
              //console.log(res);
            });
        } else {
          console.log('canceled');
        }
      });
  }

  deleteMovie(movie: Movie) {
    this.alertCtrl
      .create({
        header: 'Delete movie',
        message: 'Are you sure you want to delete this movie?',
        buttons: [
          {
            text: 'Cancel',
            handler: () => {
              console.log('Cancel delete');
            },
          },
          {
            text: 'Delete',
            handler: () => {
              this.moviesService.deleteMovie(movie).subscribe((res) => {});
              console.log('Movie deleted successfully');
            },
          },
        ],
      })
      .then((alert: HTMLIonAlertElement) => {
        alert.present();
      });
  }
}
