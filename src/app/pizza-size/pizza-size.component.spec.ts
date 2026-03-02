import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { PizzaSizeComponent } from './pizza-size.component';

describe('PizzaSizeComponent', () => {
  let component: PizzaSizeComponent;
  let fixture: ComponentFixture<PizzaSizeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ PizzaSizeComponent, RouterTestingModule, ReactiveFormsModule, CommonModule, HttpClientTestingModule ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PizzaSizeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
