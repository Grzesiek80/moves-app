import { Component, OnInit } from '@angular/core';
import { AccountService } from '../service/account/account.service';
import { Result } from '../models/result';
import { catchError, EMPTY, finalize, Observable, switchMap } from 'rxjs';

@Component({
  selector: 'app-favorite-tv',
  templateUrl: './favorite-tv.component.html',
  styleUrls: ['./favorite-tv.component.scss'],
})
export class FavoriteTvComponent implements OnInit {
  movies: Observable<Result> = EMPTY;
  error: string = "";
  isLoading: boolean = false;
  hasError: boolean = false;

  constructor(private accountService: AccountService) {}

  ngOnInit(): void {
    this.movies = this.fetchFavorites();
  }

  fetchFavorites(): Observable<Result> {
    this.isLoading = true;
    this.hasError = false;
    this.error = "";
    return this.accountService.getFavoriteMovies().pipe(
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

  updateFavoriteMovies(movieId: number) {
    this.isLoading = true;
    this.hasError = false;
    this.error = "";
    this.movies = this.accountService
      .updateFavoriteMovies(movieId, false)
      .pipe(
        catchError((err) => {
          this.error = err.message;
          this.hasError = true;
          return EMPTY;
        }),
        switchMap(() => this.accountService.getFavoriteMovies()),
        finalize(() => {
          this.isLoading = false;
        }),
      );
  }

  refreshPage() {
    this.movies = this.fetchFavorites();
  }
}
