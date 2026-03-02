import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Result } from '../../models/result'

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  // BehaviorSubject to hold current account/user state; new subscribers receive latest value
  private currentUserSubject = new BehaviorSubject<any>(null);
  currentUser$ = this.currentUserSubject.asObservable();

  constructor(private http: HttpClient) {}

  // Methods to update or clear the current user state
  setCurrentUser(user: any) {
    this.currentUserSubject.next(user);
  }

  clearCurrentUser() {
    this.currentUserSubject.next(null);
  }

  getFavoriteMovies(): Observable<Result> {
    return this.http.get<Result>(this.getUrl() + '/favorite/movies');
  }

  getWatchlistMovies(): Observable<Result> {
    return this.http.get<Result>(this.getUrl() + '/watchlist/movies');
  }

  updateWatchlist(movieId: number, watchlist: boolean): Observable<any> {
    const body = {
      media_type: 'movie',
      media_id: movieId,
      watchlist: watchlist,
    };
    return this.http.post(this.getUrl() + '/watchlist', body);
  }

  updateFavoriteMovies(movieId: number, favorite: boolean): Observable<any> {
    const body = {
      media_type: 'movie',
      media_id: movieId,
      favorite: favorite,
    };
    return this.http.post(this.getUrl() + '/favorite', body);
  }

  private getUrl() {
    return `${environment.apiUrl}/account/${environment.account_id}`;
  }
}
