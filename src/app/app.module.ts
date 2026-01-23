import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS, provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FavoriteTvComponent } from './favorite-tv/favorite-tv.component';
import { TmdbService } from './service/interceptor/tmdb.service';
import { WatchlistMoviesComponent } from './watchlist-movies/watchlist-movies.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { FormsModule } from '@angular/forms';

@NgModule({ declarations: [
        AppComponent,
        FavoriteTvComponent,
        WatchlistMoviesComponent,
        PagenotfoundComponent
    ],
    bootstrap: [AppComponent], imports: [BrowserModule,
        FormsModule,
        AppRoutingModule], providers: [{ provide: HTTP_INTERCEPTORS,
            useClass: TmdbService,
            multi: true
        }, provideHttpClient(withInterceptorsFromDi())] })
export class AppModule { }
