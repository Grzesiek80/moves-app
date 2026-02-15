import { Component, signal, inject } from '@angular/core';
import { MovieService } from '../service/movie/movie.service';
import { catchError, EMPTY, finalize } from 'rxjs';
import { Result } from '../models/result';
import { MovieListComponent } from '../movie-list/movie-list.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-search',
    standalone: true,
    imports: [MovieListComponent, CommonModule,
        FormsModule],
    templateUrl: './search.component.html',
    styleUrls: ['./search.component.scss']
})
export class SearchComponent {
  private movieService = inject(MovieService);

  query = signal<string>('');
  results = signal<Result | null>(null);
  isLoading = signal<boolean>(false);
  error = signal<string>('');
  hasError = signal<boolean>(false);

  search(): void {
    const searchQuery = this.query();
    if (searchQuery) {
      this.isLoading.set(true);
      this.hasError.set(false);
      this.error.set('');
      this.movieService.searchMovies(searchQuery).pipe(
        catchError((err) => {
          this.error.set(err.message);
          this.hasError.set(true);
          return EMPTY;
        }),
        finalize(() => {
          this.isLoading.set(false);
        }),
      ).subscribe(data => this.results.set(data));
    }
    this.query.set('');
  }
}
