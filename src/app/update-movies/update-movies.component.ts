import { Component, Input, OnInit } from '@angular/core';
import { AccountService } from '../service/account/account.service';

@Component({
  selector: 'app-update-movies',
  templateUrl: './update-movies.component.html',
  styleUrls: ['./update-movies.component.scss']
})
export class UpdateMoviesComponent {

  @Input()
  movieId!: number;

  constructor(private accountService: AccountService) {}

  addMovieToWatchlist(movieId: number) {
    this.accountService.updateWatchlist(movieId, true).subscribe();
  }

  addMovieToFavorite(movieId: number) {
    this.accountService.updateFavoriteMovies(movieId, true).subscribe();
  }

}
