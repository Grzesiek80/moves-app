import { Component, OnInit } from '@angular/core';
import { TmdbService } from '../service/tmdb.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {

  popularMovies: any[] = [];

  constructor(private tmdbService: TmdbService) { }

  ngOnInit(): void {
        this.tmdbService.getPopularMovies().subscribe(
      (data: any) => (this.popularMovies = data.results,
        console.log(data.results)
      )
    );
  }

}
