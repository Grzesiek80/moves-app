import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { UpdateMoviesComponent } from './update-movies.component';

describe('UpdateMoviesComponent', () => {
  let component: UpdateMoviesComponent;
  let fixture: ComponentFixture<UpdateMoviesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ UpdateMoviesComponent, RouterTestingModule, ReactiveFormsModule, CommonModule, HttpClientTestingModule ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateMoviesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
