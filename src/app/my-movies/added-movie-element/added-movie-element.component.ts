import { Component, Input, OnInit } from '@angular/core';
import { Movie } from 'src/app/movie.model';

@Component({
  selector: 'app-added-movie-element',
  templateUrl: './added-movie-element.component.html',
  styleUrls: ['./added-movie-element.component.scss'],
})
export class AddedMovieElementComponent  implements OnInit {

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
    addedByUser: null
  };

  constructor() { }

  ngOnInit() {}

}
