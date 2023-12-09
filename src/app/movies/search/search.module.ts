import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SearchPageRoutingModule } from './search-routing.module';

import { SearchPage } from './search.page';
import { MovieModule } from 'src/app/movie.module';

import { SearchMovieElementComponent } from '../search-movie-element/search-movie-element.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SearchPageRoutingModule,
    MovieModule,
  ],
  declarations: [SearchPage, SearchMovieElementComponent],
})
export class SearchPageModule {}
