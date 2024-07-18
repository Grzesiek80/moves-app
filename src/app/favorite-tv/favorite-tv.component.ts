import { Component, OnInit } from '@angular/core';
import { AccountService } from '../service/account/account.service';
import { Movie } from '../models/movie';
import { Result } from '../models/result';
import { switchMap } from 'rxjs';

@Component({
  selector: 'app-favorite-tv',
  templateUrl: './favorite-tv.component.html',
  styleUrls: ['./favorite-tv.component.scss'],
})
export class FavoriteTvComponent implements OnInit {
  favoriteTv: Movie[] = [];

  constructor(private accountService: AccountService) {}

  ngOnInit(): void {
    this.fetchFavorites();
  }

  fetchFavorites() {
    this.accountService.getFavoriteMovies().subscribe((data: Result) => (this.favoriteTv = data.results));
  }

  updateFavoriteMovies(movieId: number) {
    console.log(movieId);
    this.accountService
    .updateFavoriteMovies(movieId, false)
    .pipe(switchMap((data) => this.accountService.getFavoriteMovies()))
    .subscribe((data: Result) => (this.favoriteTv = data.results));
  }
}
