import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { FavoriteTvComponent } from './favorite-tv.component';

describe('FavoriteTvComponent', () => {
  let component: FavoriteTvComponent;
  let fixture: ComponentFixture<FavoriteTvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ FavoriteTvComponent, RouterTestingModule, ReactiveFormsModule, CommonModule, HttpClientTestingModule ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FavoriteTvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
