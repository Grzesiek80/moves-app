import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MoviesComponent } from './movies/movies.component';
import { FavoriteTvComponent } from './favorite-tv/favorite-tv.component';
import { TmdbService } from './service/interceptor/tmdb.service';
import { WatchlistMoviesComponent } from './watchlist-movies/watchlist-movies.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { SearchComponent } from './search/search.component';
import { MovieListComponent } from './movie-list/movie-list.component';
import { FormsModule } from '@angular/forms';
import { UpdateMoviesComponent } from './update-movies/update-movies.component';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';
import { OrderPizzaModule } from './order-pizza.module';

@NgModule({
  declarations: [
    AppComponent,
    MoviesComponent,
    FavoriteTvComponent,
    WatchlistMoviesComponent,
    PagenotfoundComponent,
    SearchComponent,
    MovieListComponent,
    UpdateMoviesComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    OrderPizzaModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, { passThruUnknownUrl: true }),
  ],
  providers: [{provide: HTTP_INTERCEPTORS,
    useClass: TmdbService,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
