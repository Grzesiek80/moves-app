import { Component, input, inject } from '@angular/core';
import { FavoritesService } from '../service/favorites/favorites.service';
import { WatchlistService } from '../service/watchlist/watchlist.service';

@Component({
  selector: 'app-update-movies',
  standalone: true,
  templateUrl: './update-movies.component.html',
  styleUrls: ['./update-movies.component.scss']
})
export class UpdateMoviesComponent {
  movieId = input<number>(0);
  public favoritesService = inject(FavoritesService);
  public watchlistService = inject(WatchlistService);

  toggleWatchlist(movieId: number) {
    if (this.watchlistService.isInWatchlist(movieId)) {
      this.watchlistService.removeFromWatchlist(movieId).subscribe();
    } else {
      this.watchlistService.addToWatchlist(movieId).subscribe();
    }
  }

  toggleFavorite(movieId: number) {
    if (this.favoritesService.isFavorite(movieId)) {
      this.favoritesService.removeFavorite(movieId).subscribe();
    } else {
      this.favoritesService.addFavorite(movieId).subscribe();
    }
  }

}
