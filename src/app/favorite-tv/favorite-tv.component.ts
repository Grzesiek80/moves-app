import { Component, OnInit } from '@angular/core';
import { TmdbService } from '../service/tmdb.service';

@Component({
  selector: 'app-favorite-tv',
  templateUrl: './favorite-tv.component.html',
  styleUrls: ['./favorite-tv.component.scss']
})
export class FavoriteTvComponent implements OnInit {

  favoriteTv: any[] = [];

  constructor(private tmdbService: TmdbService) { }

  ngOnInit(): void {
        this.tmdbService.getFavoriteMovies().subscribe(
      (data: any) => (this.favoriteTv = data.results,
        console.log(data.results)
      )
    );
  }

}
