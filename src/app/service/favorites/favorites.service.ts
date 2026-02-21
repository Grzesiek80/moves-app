import { Injectable, signal, inject } from '@angular/core';
import { AccountService } from '../account/account.service';
import { Result } from '../../models/result';
import { tap, catchError } from 'rxjs/operators';
import { of, throwError } from 'rxjs';
import { ToastService } from '../toast/toast.service';

@Injectable({ providedIn: 'root' })
export class FavoritesService {
  // lista id ulubionych filmów
  favorites = signal<number[]>([]);

  private toastService = inject(ToastService);

  constructor(private accountService: AccountService) {}

  // Load initial favorites from server
  loadInitial() {
    this.accountService.getFavoriteMovies().pipe(
      catchError(() => of(null)),
    ).subscribe((res: Result | null) => {
      if (res?.results) {
        const ids = res.results.map(m => m.id);
        this.favorites.set(ids);
      }
    });
  }

  isFavorite(id: number): boolean {
    return this.favorites().includes(id);
  }

  addFavorite(id: number) {
    if (this.isFavorite(id)) {
      return of(null);
    }
    // optimistic update
    this.favorites.update(list => [...list, id]);
    return this.accountService.updateFavoriteMovies(id, true).pipe(
      tap(() => this.toastService.show('Dodano do ulubionych', 'success')),
      catchError((err) => {
        // rollback on error
        this.favorites.update(list => list.filter(i => i !== id));
        this.toastService.show('Błąd dodawania do ulubionych', 'danger');
        return throwError(() => err);
      }),
    );
  }

  removeFavorite(id: number) {
    if (!this.isFavorite(id)) {
      return of(null);
    }
    // optimistic remove
    this.favorites.update(list => list.filter(i => i !== id));
    return this.accountService.updateFavoriteMovies(id, false).pipe(
      tap(() => this.toastService.show('Usunięto z ulubionych', 'info')),
      catchError((err) => {
        // rollback on error
        this.favorites.update(list => [...list, id]);
        this.toastService.show('Błąd usuwania z ulubionych', 'danger');
        return throwError(() => err);
      }),
    );
  }
}
