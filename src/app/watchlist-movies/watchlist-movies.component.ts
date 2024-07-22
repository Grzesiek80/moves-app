import { Component, OnInit } from '@angular/core';
import { AccountService } from '../service/account/account.service';
import { Observable } from 'rxjs';
import { Result } from '../models/result';
import { BaseMovieList } from '../base.movie.list';

@Component({
  selector: 'app-watchlist-movies',
  templateUrl: './watchlist-movies.component.html',
  styleUrls: ['./watchlist-movies.component.scss'],
})
export class WatchlistMoviesComponent extends BaseMovieList implements OnInit {
  listName: string = 'Watchlist movies';

  constructor(private accountService: AccountService) {
    super();
  }

  ngOnInit(): void {
    this.movies = this.loadMovies();
  }

  override getMovieList(): Observable<Result> {
    return this.accountService.getWatchlistMovies();
  }
  override updateList(movieId: number): Observable<any> {
    return this.accountService.updateWatchlist(movieId, false);
  }
}
