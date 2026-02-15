import { Component, input, inject } from '@angular/core';
import { AccountService } from '../service/account/account.service';

@Component({
  selector: 'app-update-movies',
  standalone: true,
  templateUrl: './update-movies.component.html',
  styleUrls: ['./update-movies.component.scss']
})
export class UpdateMoviesComponent {
  movieId = input<number>(0);
  private accountService = inject(AccountService);

  addMovieToWatchlist(movieId: number) {
    this.accountService.updateWatchlist(movieId, true).subscribe();
  }

  addMovieToFavorite(movieId: number) {
    this.accountService.updateFavoriteMovies(movieId, true).subscribe();
  }

}
