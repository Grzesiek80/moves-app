import { Component, OnInit, AfterViewInit, inject } from '@angular/core';
import { FavoritesService } from './service/favorites/favorites.service';
import { WatchlistService } from './service/watchlist/watchlist.service';
import { ToastService } from './service/toast/toast.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    standalone: false
})
export class AppComponent implements OnInit {
  title = 'movies-app';
  links = [
    { path: '/movies', icon: 'movie', title: 'Popular Movies' },
    { path: '/favorite-tv', icon: 'favoriteTV', title: 'Favorite Movies' },
    { path: '/watchlist-movies', icon: 'watchlistMovies', title: 'Watchlist Movies' },
    { path: '/search', icon: 'search', title: 'Search Movies' },
    { path: '/order', icon: 'orderPizza', title: 'Order Pizza' },
  ];

  private favoritesService = inject(FavoritesService);
  private watchlistService = inject(WatchlistService);
  private toastService = inject(ToastService);

  messages = this.toastService.messages;

  ngAfterViewInit(): void {
    // initialize bootstrap tooltips
    try {
      const bs = (window as any).bootstrap;
      if (bs && bs.Tooltip) {
        Array.from(document.querySelectorAll('[data-bs-toggle="tooltip"]')).forEach((el: any) => {
          new bs.Tooltip(el);
        });
      }
    } catch (e) {
      // ignore if bootstrap not available
    }
  }

  ngOnInit(): void {
    this.favoritesService.loadInitial();
    this.watchlistService.loadInitial();
  }

  removeToast(id: number) {
    this.toastService.remove(id);
  }
}
