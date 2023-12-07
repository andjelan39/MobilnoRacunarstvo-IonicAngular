import { Component, Input, OnInit } from '@angular/core';
import { ReviewModel } from 'src/app/review.model';

@Component({
  selector: 'app-review-element',
  templateUrl: './review-element.component.html',
  styleUrls: ['./review-element.component.scss'],
})
export class ReviewElementComponent implements OnInit {
  @Input() review: ReviewModel = {
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
    user: null,
  };

  constructor() {}

  ngOnInit() {}
}
