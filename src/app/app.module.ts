import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS, provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { provideRouter, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { FavoriteTvComponent } from './favorite-tv/favorite-tv.component';
import { TmdbService } from './service/interceptor/tmdb.service';
import { WatchlistMoviesComponent } from './watchlist-movies/watchlist-movies.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { FormsModule } from '@angular/forms';
import { MoviesComponent } from './movies/movies.component';
import { SearchComponent } from './search/search.component';
import { Routes } from '@angular/router';

const routes: Routes = [
  { path: 'movies', component: MoviesComponent },
  { path: 'favorite-tv', component: FavoriteTvComponent },
  { path: 'watchlist-movies', component: WatchlistMoviesComponent },
  { path: 'search', component: SearchComponent },
  { path: 'order', loadChildren: () => import('./order-pizza.routes').then(m => m.routes) },
  { path: '', redirectTo: '/movies', pathMatch: 'full' },
  { path: '**', component: PagenotfoundComponent },
];

@NgModule({ declarations: [
        AppComponent
    ],
    bootstrap: [AppComponent], imports: [BrowserModule,
        FormsModule,
        RouterModule,
        FavoriteTvComponent,
        WatchlistMoviesComponent,
        PagenotfoundComponent], providers: [provideRouter(routes), { provide: HTTP_INTERCEPTORS,
            useClass: TmdbService,
            multi: true
        }, provideHttpClient(withInterceptorsFromDi())] })
export class AppModule { }
