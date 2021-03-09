import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router'
import { MoviesComponent } from './movies/movies.component';
import { FavoritesComponent } from './favorites/favorites.component'

const routes: Routes = [
  { path: '', component: MoviesComponent },
  { path: 'favorites', component: FavoritesComponent }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
