import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'movies-app';
  links = [
    { path: '/movies', icon: 'movie', title: 'Popular Movies' },
    { path: '/favorite-tv', icon: 'favoriteTV', title: 'Favorite Movies' },
    { path: '/watchlist-movies', icon: 'watchlistMovies', title: 'Watchlist Movies' },
    { path: '/search', icon: 'search', title: 'Search Movies' },
  ];
}
