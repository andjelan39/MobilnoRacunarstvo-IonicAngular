import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { Movie } from 'src/app/movie.model';
import { MoviesService } from 'src/app/movies.service';

@Component({
  selector: 'app-edit-movie-modal',
  templateUrl: './edit-movie-modal.component.html',
  styleUrls: ['./edit-movie-modal.component.scss'],
})
export class EditMovieModalComponent implements OnInit {
  movie!: Movie;
  defaultTitle!: string;
  defaultReleaseYear!: number;
  defaultLength!: string;
  defaultGenre!: string;
  defaultDirector!: string;
  defaultCast!: string;
  defaultDescription!: string;
  defaultImageUrl!: string;
  defaultCoverUrl!: string;

  constructor(
    private modalCtrl: ModalController,
    private route: ActivatedRoute,
    private movieService: MoviesService
  ) {}
  @ViewChild('f', { static: true }) form!: NgForm;

  ngOnInit() {
    this.movie = this.movieService.getEdit();
    this.defaultTitle = this.movie.title;
    this.defaultReleaseYear = this.movie.releaseYear;
    this.defaultLength = this.movie.length;
    this.defaultGenre = this.movie.genre;
    this.defaultDirector = this.movie.director;
    this.defaultCast = this.movie.cast;
    this.defaultDescription = this.movie.description;
    this.defaultImageUrl = this.movie.imageUrl;
    this.defaultCoverUrl = this.movie.coverUrl;
  }

  onCancel() {
    this.modalCtrl.dismiss(null, 'cancel');
  }

  onEditMovie() {
    if (!this.form.valid) {
      return;
    }
    this.modalCtrl.dismiss(
      {
        movieData: {
          id: this.movie.id,
          title: this.form.value['title'],
          releaseYear: this.form.value['releaseYear'],
          director: this.form.value['director'],
          genre: this.form.value['genre'],
          length: this.form.value['length'],
          description: this.form.value['description'],
          cast: this.form.value['cast'],
          imageUrl: this.form.value['imageUrl'],
          coverUrl: this.form.value['coverUrl'],
          addedByUser: this.movie.addedByUser,
        },
      },
      'confirm'
    );
  }
}
