import { Component, OnInit } from '@angular/core';
import { AccountService } from '../service/account/account.service';
import { Observable, switchMap } from 'rxjs';
import { Movie } from '../models/movie';
import { Result } from '../models/result';

@Component({
  selector: 'app-watchlist-movies',
  templateUrl: './watchlist-movies.component.html',
  styleUrls: ['./watchlist-movies.component.scss'],
})
export class WatchlistMoviesComponent implements OnInit {
  watchlistMovies: Movie[] = [];

  movies!: Observable<Result>;

  constructor(private accountService: AccountService) {}

  ngOnInit(): void {
    this.fetchWatchlist();
    this.movies = this.fetchWatchlist1();
  }

  updateWatchlist(movieId: number) {
    this.accountService
      .updateWatchlist(movieId, false)
      .pipe(switchMap((data) => this.accountService.getWatchlistMovies()))
      .subscribe((data) => (this.watchlistMovies = data.results));
    console.log(movieId);
  }

  fetchWatchlist() {
    this.accountService.getWatchlistMovies().subscribe((data: Result) => (this.watchlistMovies = data.results));
  }

  fetchWatchlist1(): Observable<Result> {
    return this.accountService.getWatchlistMovies();
  }

  updateWatchlist1(movieId: number) {
    this.accountService
      .updateWatchlist(movieId, false)
      .pipe(switchMap((data) => (this.movies = this.accountService.getWatchlistMovies())));
    console.log(movieId + ' update');
  }
}
