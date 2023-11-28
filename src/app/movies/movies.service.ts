import { Injectable } from '@angular/core';
import { Movie } from './movie.model';

@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  movies: Movie[] = [
    {
      id: 'm1',
      title: 'American Psycho',
      releaseYear: 2000,
      director: 'Mary Harron',
      genre: 'horror',
      description:
        'In New York City in 1987, a handsome, young urban professional, Patrick Bateman, lives a second life as a gruesome serial killer by night. The cast is filled by the detective, the fiance, the mistress, the coworker, and the secretary. This is a biting, wry comedy examining the elements that make a man a monster.',
      cast: 'Christian Bale · Willem Dafoe · Chloe Sevigny',
      imageUrl:
        'https://m.media-amazon.com/images/M/MV5BZTM2ZGJmNjQtN2UyOS00NjcxLWFjMDktMDE2NzMyNTZlZTBiXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg',
      coverUrl: 'https://i.guim.co.uk/img/media/5ca5fa80076dbe8f0ea2ad399dcc655d6667ed82/0_48_3504_2103/master/3504.jpg?width=1200&quality=85&auto=format&fit=max&s=185dbcbc51bcecf499da469cc58dcf02',
    },
    {
      id: 'm2',
      title: 'Trainspotting',
      releaseYear: 1996,
      director: 'Danny Boyle',
      genre: 'thriller',
      description: 'A wild, freeform, Rabelaisian trip through the darkest recesses of Edinburgh low-life, focusing on Mark Renton and his attempt to give up his heroin habit, and how the latter affects his relationship with family and friends: Sean Connery wannabe Sick Boy, dimbulb Spud and a psycho Begbie.',
      cast: 'Ewan McGregor · Jonny Lee Miller · Ewen Bremner',
      imageUrl:
        'https://i.etsystatic.com/32739938/r/il/500217/3617286456/il_794xN.3617286456_roo0.jpg',
      coverUrl: 'https://so-s.nflximg.net/soa1/849/515319849.jpg',
    },
    {
      id: 'm3',
      title: 'Fallen Angels',
      releaseYear: 1995,
      director: 'Wong Kar-Wai',
      genre: 'thriller',
      description:
        'This Hong Kong-set crime drama features two intertwined storylines: one tells the story of a hitman wishing to leave the criminal underworld, and his agent, who is infatuated with him. The other story is of a mute ex-convict on the run from the police and a mentally unstable woman dumped by her boyfriend.',
      cast: 'Leon Lai · Michelle Reis · Takeshi Kaneshiro',
      imageUrl:
        'https://preview.redd.it/whats-your-favorite-movie-poster-by-color-day-4-green-v0-5dfmizri1jub1.png?width=640&crop=smart&auto=webp&s=a31670212902272df20b0bec718c7911fa3edb12',
      coverUrl: 'https://miro.medium.com/v2/resize:fit:1400/1*2yXRX4hNnGRoVWIjeAkfTg.jpeg',
    },
    {
      id: 'm4',
      title: 'Witness',
      releaseYear: 1985,
      director: 'Peter Weir',
      genre: 'drama',
      description:
        'After witnessing a brutal murder, young Amish boy Samuel and his mother Rachel seek protection from police officer John Book. When Book uncovers evidence of police corruption involving narcotics lieutenant James McFee, Book must take Rachel and Samuel, and flee to the Amish countryside where Rachel grew up. There, immersed in Amish culture and tradition, Book and Rachel begin a cautious romance.',
      cast: 'Harrison Ford · Kelly McGillis · Lukas Haas',
      imageUrl:
        'https://image.tmdb.org/t/p/original/lDnC1Woa9nEnrwlKDxdFvHx2gDc.jpg',
      coverUrl: 'https://media.ouest-france.fr/v1/pictures/f63008859997c69ee1cb5b837de4f3a4-witness-thriller-programme-tv.jpg?width=1260&sign=0c72e1f3c08ea3ee8b416c70fb0677c4780757eade308f1778ef3d7f46d054fe&client_id=bpservices',
    },
    {
      id: 'm5',
      title: 'Pump Up The Volume',
      releaseYear: 1990,
      director: 'Allan Moyle',
      genre: 'comedy',
      description:
        'In Arizona, an introverted and insightful teenager, Mark Hunter (Christian Slater), finds an outlet for his viewpoints through a shortwave radio. Broadcasting as "Hard Harry," Hunter uses his pirate radio show to rant against the injustices and hypocrisies taking place in the area, and in society in general.',
      cast: 'Christian Slater · Samantha Mathis · Scott Paulin',
      imageUrl:
        'https://a.ltrbxd.com/resized/sm/upload/j7/2k/aq/21/5Re4KeKhTXRdTb52R31zNisGwqc-0-230-0-345-crop.jpg?v=46a71c3f77',
      coverUrl: 'https://mutantreviewers.files.wordpress.com/2022/04/pump-up-the-volume.jpg?w=723&h=482',
    },
  ];

  //constructor() { }

  getMovie(id: string | null) {
    return this.movies.find((movie) => movie.id === id)!;
  }
}
