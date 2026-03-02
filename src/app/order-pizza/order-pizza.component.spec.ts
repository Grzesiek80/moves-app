import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { OrderPizzaComponent } from './order-pizza.component';

describe('OrderPizzaComponent', () => {
  let component: OrderPizzaComponent;
  let fixture: ComponentFixture<OrderPizzaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ OrderPizzaComponent, RouterTestingModule, ReactiveFormsModule, CommonModule, HttpClientTestingModule ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrderPizzaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
