import { Component, OnInit, signal, inject } from '@angular/core';
import { AccountService } from '../service/account/account.service';
import { FavoritesService } from '../service/favorites/favorites.service';
import { Result } from '../models/result';
import { catchError, EMPTY, finalize } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-favorite-tv',
    templateUrl: './favorite-tv.component.html',
    styleUrls: ['./favorite-tv.component.scss'],
    standalone: true,
    imports: [CommonModule]
})
export class FavoriteTvComponent implements OnInit {
  movies = signal<Result | null>(null);
  error = signal<string>("");
  isLoading = signal<boolean>(false);
  hasError = signal<boolean>(false);
  private favoritesService = inject(FavoritesService);

  constructor(private accountService: AccountService) {}

  ngOnInit(): void {
    this.refreshPage();
  }

  fetchFavorites() {
    this.isLoading.set(true);
    this.hasError.set(false);
    this.error.set("");
    return this.accountService.getFavoriteMovies().pipe(
      catchError((err) => {
        this.error.set(err.message);
        this.hasError.set(true);
        return EMPTY;
      }),
      finalize(() => {
        this.isLoading.set(false);
      }),
    );
  }

  updateFavoriteMovies(movieId: number) {
    this.favoritesService.removeFavorite(movieId).subscribe({
      next: () => {
        this.refreshPage();
      },
      error: (err) => {
        this.error.set(err.message);
        this.hasError.set(true);
      }
    });
  }

  refreshPage() {
    this.fetchFavorites().subscribe(res => {
      this.movies.set(res);
    });
  }
}
