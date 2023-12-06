import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MyMoviesPage } from './my-movies.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: MyMoviesPage,
    children: [
      {
        path: 'added-movies',
        loadChildren: () => import('./added-movies/added-movies.module').then( m => m.AddedMoviesPageModule)
      },
      {
        path: 'search',
        loadChildren: () => import('./search/search.module').then( m => m.SearchPageModule)
      },
      {
        path: '',
        redirectTo: '/my-movies/tabs/added-movies',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/my-movies/tabs/added-movies',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MyMoviesPageRoutingModule {}
