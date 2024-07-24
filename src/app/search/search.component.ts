import { Component } from '@angular/core';
import { MovieService } from '../service/movie/movie.service';
import { catchError, EMPTY, finalize, Observable } from 'rxjs';
import { Result } from '../models/result';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent {
  query: string = '';
  results: Observable<Result> = EMPTY;
  isLoading: boolean = false;
  error: string = '';
  hasError: boolean = false;

  constructor(private movieService: MovieService) {}

  search(): void {
    if (this.query) {
      this.isLoading = true;
      this.hasError = false;
      this.error = '';
      this.results = this.movieService.searchMovies(this.query).pipe(
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
    this.query = '';
  }
}
