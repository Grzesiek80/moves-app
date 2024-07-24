import { Component, OnInit } from '@angular/core';
import { AccountService } from '../service/account/account.service';
import { MovieService } from '../service/movie/movie.service';
import { Result } from '../models/result';
import { catchError, EMPTY, finalize, Observable } from 'rxjs';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss'],
})
export class MoviesComponent implements OnInit {
  movies: Observable<Result> = EMPTY;
  error: string = "";
  isLoading: boolean = false;
  hasError: boolean = false;

  constructor(private movieService: MovieService) {}

  ngOnInit(): void {
    this.movies = this.movieService.getPopularMovies();
  }

  fetchPopularMovies(): Observable<Result> {
    this.isLoading = true;
    this.hasError = false;
    this.error = "";
    return this.movieService.getPopularMovies().pipe(
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

  refreshPage() {
    this.movies = this.fetchPopularMovies();
  }
}
