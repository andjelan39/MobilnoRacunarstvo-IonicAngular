import { Component, OnInit } from '@angular/core';
import { Movie } from '../movie.model';
import { MoviesService } from '../movies.service';
import { ModalController } from '@ionic/angular';
import { AddMovieModalComponent } from '../add-movie-modal/add-movie-modal.component';

@Component({
  selector: 'app-explore',
  templateUrl: './explore.page.html',
  styleUrls: ['./explore.page.scss'],
})
export class ExplorePage implements OnInit {
  /*movies: Movie[] = [
    {id: 'm1', title: 'American Psycho', releaseYear: 2000, director: 'Mary Harron', genre: 'horror', description: 'Description', cast: 'Christian Bale', imageUrl: 'https://m.media-amazon.com/images/M/MV5BZTM2ZGJmNjQtN2UyOS00NjcxLWFjMDktMDE2NzMyNTZlZTBiXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg'},
    {id: 'm2', title: 'Trainspotting', releaseYear: 1996, director: 'Danny Boyle', genre: 'thriller', description: 'Description', cast: 'Ewan McGregor', imageUrl: 'https://i.etsystatic.com/32739938/r/il/083fc6/3525803948/il_1080xN.3525803948_bhtv.jpg'}
  ];*/

  movies: Movie[];

  constructor(private moviesService: MoviesService, private modalCtrl: ModalController) {
    this.movies = this.moviesService.movies;
   }

  ngOnInit() {
  }

  openModal(){
    this.modalCtrl.create({
      component: AddMovieModalComponent
    }).then((modal: HTMLIonModalElement) => {
      modal.present();
      return modal.onDidDismiss();
    }).then((resultData) => {
      if(resultData.role ==='confirm'){
        console.log(resultData);
    }else{
      console.log('canceled');
    }
    });
  }

}
