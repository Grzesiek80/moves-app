import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TmdbService implements HttpInterceptor {

  constructor(private http: HttpClient) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const authreq = req.clone({setHeaders: {Authorization: `Bearer ${environment.token}`}});
    return next.handle(authreq);
  }

  getPopularMovies(): Observable<any> {
    return this.http.get(`${environment.apiUrl}/movie/popular?api_key=${environment.apiKey}`);
  }

  getFavoriteMovies(): Observable<any> {
    return this.http.get(`${environment.apiUrl}/account/${environment.account_id}/favorite/movies`);
  }

  getWatchlistMovies(): Observable<any> {
    return this.http.get(`${environment.apiUrl}/account/${environment.account_id}/watchlist/movies`);
  }

  updateWatchlist(movieId: number, watchlist: boolean): Observable<any> {
    const body = {
      media_type: "movie", 
      media_id: movieId, 
      watchlist: watchlist
    }
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    })
    return this.http.post(`${environment.apiUrl}/account/${environment.account_id}/watchlist`, body, { headers });
  }

  updateFavoriteMovies(movieId: number, favorite: boolean): Observable<any> {
    const body = {
      media_type: "movie", 
      media_id: movieId, 
      favorite: favorite
    }
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    })
    return this.http.post(`${environment.apiUrl}/account/${environment.account_id}/favorite`, body, { headers });
  }

}
