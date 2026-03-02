import { Component, OnInit, OnDestroy, signal, inject } from '@angular/core';
import { MovieService } from '../service/movie/movie.service';
import { Result } from '../models/result';
import { catchError, EMPTY, finalize, Subject, takeUntil } from 'rxjs';
import { UpdateMoviesComponent } from '../update-movies/update-movies.component';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-movies',
    standalone: true,
    imports: [UpdateMoviesComponent, CommonModule],
    templateUrl: './movies.component.html',
    styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit, OnDestroy {
  private movieService = inject(MovieService);

  movies = signal<Result | null>(null);
  error = signal<string>('');
  isLoading = signal<boolean>(false);
  hasError = signal<boolean>(false);

  private destroy$ = new Subject<void>();

  ngOnInit(): void {
    this.fetchPopularMovies();
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
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
      }),
      takeUntil(this.destroy$)
    ).subscribe(data => this.movies.set(data));
  }

  refreshPage(): void {
    this.fetchPopularMovies();
  }
}
