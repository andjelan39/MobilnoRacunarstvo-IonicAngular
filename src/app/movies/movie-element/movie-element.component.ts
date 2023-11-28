import { Component, Input, OnInit } from '@angular/core';
import { Movie } from '../movie.model';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-movie-element',
  templateUrl: './movie-element.component.html',
  styleUrls: ['./movie-element.component.scss'],
})
export class MovieElementComponent implements OnInit {
  @Input() movie: Movie = {
    id: 'm3',
    title: 'American Psycho',
    releaseYear: 2000,
    director: 'Mary Harron',
    genre: 'horror',
    description: 'Description',
    cast: 'Christian Bale',
    imageUrl:
      'https://m.media-amazon.com/images/M/MV5BZTM2ZGJmNjQtN2UyOS00NjcxLWFjMDktMDE2NzMyNTZlZTBiXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg',
    coverUrl: 'https://pbs.twimg.com/media/C5EyOh9W8AARBNI.jpg'
  };

  constructor(private alertCtrl: AlertController) {}

  ngOnInit() {}

  openAlert(event: { preventDefault: any; stopPropagation: () => void }) {
    event.stopPropagation();
    event.preventDefault();

    this.alertCtrl
      .create({
        header: 'Like movie',
        message: 'Are you sure you want to like this movie?',
        buttons: [
          {
            text: 'Like',
            handler: () => {
              console.log('Liked');
            },
          },
          {
            text: 'Cancel',
            role: 'cancel',
            handler: () => {
              console.log('Not liked');
            },
          },
        ],
      })
      .then((alert: HTMLIonAlertElement) => {
        alert.present();
      });
  }
}
