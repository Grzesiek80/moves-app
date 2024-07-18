import { Component, OnInit } from '@angular/core';
import { AccountService } from '../service/account/account.service';
import { catchError, EMPTY, Observable, switchMap, throwError } from 'rxjs';
import { Result } from '../models/result';

@Component({
  selector: 'app-watchlist-movies',
  templateUrl: './watchlist-movies.component.html',
  styleUrls: ['./watchlist-movies.component.scss'],
})
export class WatchlistMoviesComponent implements OnInit {

  movies: Observable<Result> = EMPTY;
  error?: string;

  constructor(private accountService: AccountService) {}

  ngOnInit(): void {
    this.movies = this.fetchWatchlist();
  }

  fetchWatchlist(): Observable<Result> {
    return this.accountService.getWatchlistMovies().pipe(catchError( err => {this.error = err; return throwError(() => new Error(err))}));
  }

  updateWatchlist(movieId: number) {
    this.accountService
      .updateWatchlist(movieId, false)
      .pipe(switchMap((data) => this.movies =this.accountService.getWatchlistMovies()))
      .subscribe();
  }
}
