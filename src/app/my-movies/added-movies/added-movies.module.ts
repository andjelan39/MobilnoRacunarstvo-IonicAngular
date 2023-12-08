import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddedMoviesPageRoutingModule } from './added-movies-routing.module';

import { AddedMoviesPage } from './added-movies.page';
import { AddedMovieElementComponent } from '../added-movie-element/added-movie-element.component';
import { EditMovieModalComponent } from '../edit-movie-modal/edit-movie-modal.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddedMoviesPageRoutingModule
  ],
  declarations: [AddedMoviesPage, AddedMovieElementComponent, EditMovieModalComponent]
})
export class AddedMoviesPageModule {}
