import { Component, OnInit } from '@angular/core';
import { TmdbService } from '../service/tmdb.service';

@Component({
  selector: 'app-watchlist-movies',
  templateUrl: './watchlist-movies.component.html',
  styleUrls: ['./watchlist-movies.component.scss']
})
export class WatchlistMoviesComponent implements OnInit {

  watchlistMovies: any[] = [];

  constructor(private tmdbService: TmdbService) { }

  ngOnInit(): void {
    this.fetchWatchlist();
  }

  addMovieToWatchlist(movieId: number) {
    this.tmdbService.updateWatchlist(movieId, false).subscribe((data) => this.fetchWatchlist())
    console.log(movieId)
}

 fetchWatchlist() {
  this.tmdbService.getWatchlistMovies().subscribe(
    (data: any) => (this.watchlistMovies = data.results)
  );
}

}
