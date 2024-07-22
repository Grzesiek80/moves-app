import { Result } from './models/result';
import { catchError, EMPTY, finalize, Observable, switchMap } from 'rxjs';

export abstract class BaseMovieList {

  movies: Observable<Result> = EMPTY;
  error?: string;
  isLoading: boolean = false;
  hasError: boolean = false;

  abstract getMovieList(): Observable<Result>;
  abstract updateList(movieId: number): Observable<any>;

  loadMovies(): Observable<Result> {
    this.isLoading = true;
    this.hasError = false;
    this.error = undefined;
    return this.getMovieList().pipe(
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

  updateMovies(movieId: number) {
    this.isLoading = true;
    this.hasError = false;
    this.error = undefined;
    this.movies = this.updateList(movieId).pipe(
      catchError((err) => {
        this.error = err.message;
        this.hasError = true;
        return EMPTY;
      }),
      switchMap(() => this.getMovieList()),
      finalize(() => {
        this.isLoading = false;
      }),
    );
  }

  refreshPage() {
    this.movies = this.getMovieList();
  }
}
