import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Result } from '../../models/result'

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(private http: HttpClient) { }

  getFavoriteMovies(): Observable<Result> {
    return this.http.get<Result>(this.getUrl() + "/favorite/movies");
  }

  getWatchlistMovies(): Observable<Result> {
    return this.http.get<Result>(this.getUrl() + "/watchlist/movies");
  }

  updateWatchlist(movieId: number, watchlist: boolean): Observable<any> {
    const body = {
      media_type: 'movie',
      media_id: movieId,
      watchlist: watchlist,
    };
    return this.http.post(this.getUrl() + "/watchlist", body);
  }

  updateFavoriteMovies(movieId: number, favorite: boolean): Observable<any> {
    const body = {
      media_type: 'movie',
      media_id: movieId,
      favorite: favorite,
    };
    return this.http.post(this.getUrl() + "/favorite", body);
  }

  private getUrl() {
    return `${environment.apiUrl}/account/${environment.account_id}`;
  }

}
