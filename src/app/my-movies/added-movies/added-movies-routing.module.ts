import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddedMoviesPage } from './added-movies.page';

const routes: Routes = [
  {
    path: '',
    component: AddedMoviesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddedMoviesPageRoutingModule {}
