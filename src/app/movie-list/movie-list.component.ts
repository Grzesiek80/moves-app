import { Component, input } from '@angular/core';
import { Result } from '../models/result';
import { UpdateMoviesComponent } from '../update-movies/update-movies.component';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-movie-list',
    standalone: true,
    imports: [UpdateMoviesComponent, CommonModule],
    templateUrl: './movie-list.component.html',
    styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent {

  movies = input<Result | null>(null);
  isLoading = input<boolean>(false);
  hasError = input<boolean>(false);
  error = input<string>('');

}
