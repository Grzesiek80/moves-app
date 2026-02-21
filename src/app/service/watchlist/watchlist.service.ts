import { Injectable, signal, inject } from '@angular/core';
import { AccountService } from '../account/account.service';
import { tap, catchError } from 'rxjs/operators';
import { of, throwError } from 'rxjs';
import { ToastService } from '../toast/toast.service';

@Injectable({ providedIn: 'root' })
export class WatchlistService {
  watchlist = signal<number[]>([]);


  private toastService = inject(ToastService);

  constructor(private accountService: AccountService) {}

  loadInitial() {
    this.accountService.getWatchlistMovies().pipe(
      catchError(() => of(null)),
    ).subscribe((res: any) => {
      if (res && res.results) {
        const ids = res.results.map((m: any) => m.id);
        this.watchlist.set(ids);
      }
    });
  }

  isInWatchlist(id: number): boolean {
    return this.watchlist().includes(id);
  }

  addToWatchlist(id: number) {
    if (this.isInWatchlist(id)) {
      return of(null);
    }
    this.watchlist.update(list => [...list, id]);
    return this.accountService.updateWatchlist(id, true).pipe(
      tap(() => this.toastService.show('Dodano do watchlisty', 'success')),
      catchError((err) => {
        this.watchlist.update(list => list.filter(i => i !== id));
        this.toastService.show('Błąd dodawania do watchlisty', 'danger');
        return throwError(() => err);
      })
    );
  }

  removeFromWatchlist(id: number) {
    if (!this.isInWatchlist(id)) {
      return of(null);
    }
    this.watchlist.update(list => list.filter(i => i !== id));
    return this.accountService.updateWatchlist(id, false).pipe(
      tap(() => this.toastService.show('Usunięto z watchlisty', 'info')),
      catchError((err) => {
        this.watchlist.update(list => [...list, id]);
        this.toastService.show('Błąd usuwania z watchlisty', 'danger');
        return throwError(() => err);
      })
    );
  }
}
