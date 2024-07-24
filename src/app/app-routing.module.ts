import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MoviesComponent } from './movies/movies.component';
import { FavoriteTvComponent } from './favorite-tv/favorite-tv.component';
import { WatchlistMoviesComponent } from './watchlist-movies/watchlist-movies.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { SearchComponent } from './search/search.component';

const routes: Routes = [
  { path: 'movies', component: MoviesComponent },
  { path: 'favorite-tv', component: FavoriteTvComponent },
  { path: 'watchlist-movies', component: WatchlistMoviesComponent },
  { path: 'search', component: SearchComponent },
  { path: '', redirectTo: '/movies', pathMatch: 'full' },
  { path: '**', component: PagenotfoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
