import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavoriteTvComponent } from './favorite-tv.component';

describe('FavoriteTvComponent', () => {
  let component: FavoriteTvComponent;
  let fixture: ComponentFixture<FavoriteTvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FavoriteTvComponent ]
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
