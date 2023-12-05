import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddedMoviesPageRoutingModule } from './added-movies-routing.module';

import { AddedMoviesPage } from './added-movies.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddedMoviesPageRoutingModule
  ],
  declarations: [AddedMoviesPage]
})
export class AddedMoviesPageModule {}
