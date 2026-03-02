import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { WatchlistMoviesComponent } from './watchlist-movies.component';

describe('WatchlistMoviesComponent', () => {
  let component: WatchlistMoviesComponent;
  let fixture: ComponentFixture<WatchlistMoviesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ WatchlistMoviesComponent, RouterTestingModule, ReactiveFormsModule, CommonModule, HttpClientTestingModule ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WatchlistMoviesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
