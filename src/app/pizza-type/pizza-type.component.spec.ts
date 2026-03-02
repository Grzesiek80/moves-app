import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { PizzaTypeComponent } from './pizza-type.component';

describe('PizzaTypeComponent', () => {
  let component: PizzaTypeComponent;
  let fixture: ComponentFixture<PizzaTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ PizzaTypeComponent, RouterTestingModule, ReactiveFormsModule, CommonModule, HttpClientTestingModule ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PizzaTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
