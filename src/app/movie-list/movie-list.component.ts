import { Component, Input } from '@angular/core';
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

  @Input()
  movies!: Result | null;
  @Input()
  isLoading!: boolean;
  @Input()
  hasError!: boolean;
  @Input()
  error!: string;

}
