import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Result } from '../../models/result'

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private http: HttpClient) { }

  getPopularMovies(): Observable<Result> {
    return this.http.get<Result>(`${environment.apiUrl}/movie/popular?api_key=${environment.apiKey}`);
  }

  searchMovies(query: string): Observable<Result> {
    const url = `${environment.apiUrl}/search/movie?api_key=${environment.apiKey}&query=${encodeURIComponent(query)}`;
    return this.http.get<Result>(url);
  }
}
