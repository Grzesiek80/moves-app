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
        this.tmdbService.getWatchlistMovies().subscribe(
      (data: any) => (this.watchlistMovies = data.results,
        console.log(data.results)
      )
    );
  }

}
