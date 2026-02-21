import { Component, OnInit, signal, inject } from '@angular/core';
import { AccountService } from '../service/account/account.service';
import { WatchlistService } from '../service/watchlist/watchlist.service';
import { catchError, EMPTY, finalize } from 'rxjs';
import { Result } from '../models/result';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-watchlist-movies',
    templateUrl: './watchlist-movies.component.html',
    styleUrls: ['./watchlist-movies.component.scss'],
    standalone: true,
    imports: [CommonModule]
})
export class WatchlistMoviesComponent implements OnInit {
  movies = signal<Result | null>(null);
  error = signal<string>("");
  isLoading = signal<boolean>(false);
  hasError = signal<boolean>(false);
  private watchlistService = inject(WatchlistService);

  constructor(private accountService: AccountService) {}

  ngOnInit(): void {
    this.refreshPage();
  }

  fetchWatchlist() {
    this.isLoading.set(true);
    this.hasError.set(false);
    this.error.set("");
    return this.accountService.getWatchlistMovies().pipe(
      catchError((err) => {
        this.error.set(err.message);
        this.hasError.set(true);
        return EMPTY;
      }),
      finalize(() => {
        this.isLoading.set(false);
      }),
    );
  }

  updateWatchlist(movieId: number) {
    this.watchlistService.removeFromWatchlist(movieId).subscribe({
      next: () => {
        this.refreshPage();
      },
      error: (err) => {
        this.error.set(err.message);
        this.hasError.set(true);
      }
    });
  }

  refreshPage() {
    this.fetchWatchlist().subscribe(res => {
      this.movies.set(res);
    });
  }
}
