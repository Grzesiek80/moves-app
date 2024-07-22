import { Component, OnInit } from '@angular/core';
import { AccountService } from '../service/account/account.service';
import { catchError, EMPTY, finalize, Observable, switchMap } from 'rxjs';
import { Result } from '../models/result';

@Component({
  selector: 'app-watchlist-movies',
  templateUrl: './watchlist-movies.component.html',
  styleUrls: ['./watchlist-movies.component.scss'],
})
export class WatchlistMoviesComponent implements OnInit {
  movies: Observable<Result> = EMPTY;
  error?: string;
  isLoading: boolean = false;
  hasError: boolean = false;

  constructor(private accountService: AccountService) {}

  ngOnInit(): void {
    this.movies = this.fetchWatchlist();
  }

  fetchWatchlist(): Observable<Result> {
    this.isLoading = true;
    this.hasError = false;
    this.error = undefined;
    return this.accountService.getWatchlistMovies().pipe(
      catchError((err) => {
        this.error = err.message;
        this.hasError = true;
        return EMPTY;
      }),
      finalize(() => {
        this.isLoading = false;
      }),
    );
  }

  updateWatchlist(movieId: number) {
    this.isLoading = true;
    this.hasError = false;
    this.error = undefined;
    this.movies = this.accountService
      .updateWatchlist(movieId, false)
      .pipe(
        catchError((err) => {
          this.error = err.message;
          this.hasError = true;
          return EMPTY;
        }),
        switchMap(() => this.accountService.getWatchlistMovies()),
        finalize(() => {
          this.isLoading = false;
        }),
      );
  }

  refreshPage() {
    this.movies = this.fetchWatchlist();
  }
}
