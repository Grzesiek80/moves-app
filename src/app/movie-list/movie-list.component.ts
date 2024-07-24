import { Component, Input } from '@angular/core';
import { Result } from '../models/result';

@Component({
  selector: 'app-movie-list',
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
