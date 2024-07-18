import { Component, OnInit } from '@angular/core';
import { TmdbService } from '../service/interceptor/tmdb.service';
import { AccountService } from '../service/account/account.service';
import { MovieService } from '../service/movie/movie.service';
import { Movie } from '../models/movie';
import { Result } from '../models/result';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss'],
})
export class MoviesComponent implements OnInit {
  popularMovies: Movie[] = [];

  constructor(private movieService: MovieService, private accountService: AccountService) {}

  ngOnInit(): void {
    this.movieService
      .getPopularMovies()
      .subscribe((data: Result) => ((this.popularMovies = data.results)));
  }

  addMovieToWatchlist(movieId: number) {
    this.accountService.updateWatchlist(movieId, true).subscribe();
  }

  addMovieToFavorite(movieId: number) {
    this.accountService.updateFavoriteMovies(movieId, true).subscribe();
  }
}
