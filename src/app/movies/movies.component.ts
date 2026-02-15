import { Component, OnInit, signal, inject } from '@angular/core';
import { MovieService } from '../service/movie/movie.service';
import { Result } from '../models/result';
import { catchError, EMPTY, finalize } from 'rxjs';
import { UpdateMoviesComponent } from '../update-movies/update-movies.component';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-movies',
    standalone: true,
    imports: [UpdateMoviesComponent, CommonModule],
    templateUrl: './movies.component.html',
    styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {
  private movieService = inject(MovieService);

  movies = signal<Result | null>(null);
  error = signal<string>('');
  isLoading = signal<boolean>(false);
  hasError = signal<boolean>(false);

  ngOnInit(): void {
    this.fetchPopularMovies();
  }

  fetchPopularMovies(): void {
    this.isLoading.set(true);
    this.hasError.set(false);
    this.error.set('');

    this.movieService.getPopularMovies().pipe(
      catchError((err) => {
        this.error.set(err.message);
        this.hasError.set(true);
        return EMPTY;
      }),
      finalize(() => {
        this.isLoading.set(false);
      })
    ).subscribe(data => this.movies.set(data));
  }

  refreshPage(): void {
    this.fetchPopularMovies();
  }
}
