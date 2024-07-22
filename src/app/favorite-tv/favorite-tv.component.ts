import { Component, OnInit } from '@angular/core';
import { AccountService } from '../service/account/account.service';
import { Result } from '../models/result';
import { Observable } from 'rxjs';
import { BaseMovieList } from '../base.movie.list';

@Component({
  selector: 'app-favorite-tv',
  templateUrl: './favorite-tv.component.html',
  styleUrls: ['./favorite-tv.component.scss'],
})
export class FavoriteTvComponent extends BaseMovieList implements OnInit {
  listName: string = 'Favorite movies';

  constructor(private accountService: AccountService) {
    super();
  }

  ngOnInit(): void {
    this.movies = this.loadMovies();
  }

  override getMovieList(): Observable<Result> {
    return this.accountService.getFavoriteMovies();
  }
  override updateList(movieId: number): Observable<any> {
    return this.accountService
      .updateFavoriteMovies(movieId, false);
  }

}
