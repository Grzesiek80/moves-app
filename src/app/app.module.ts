import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MoviesComponent } from './movies/movies.component';
import { FavoriteTvComponent } from './favorite-tv/favorite-tv.component';
import { TmdbService } from './service/tmdb.service';
import { WatchlistMoviesComponent } from './watchlist-movies/watchlist-movies.component';

@NgModule({
  declarations: [
    AppComponent,
    MoviesComponent,
    FavoriteTvComponent,
    WatchlistMoviesComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [{provide: HTTP_INTERCEPTORS,
    useClass: TmdbService,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
