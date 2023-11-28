import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ExplorePageRoutingModule } from './explore-routing.module';

import { ExplorePage } from './explore.page';
import { MovieElementComponent } from '../movie-element/movie-element.component';
import { AddMovieModalComponent } from '../add-movie-modal/add-movie-modal.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ExplorePageRoutingModule
  ],
  declarations: [ExplorePage, MovieElementComponent, AddMovieModalComponent],
  //entryComponents: [AddMovieModalComponent],
})
export class ExplorePageModule {}
