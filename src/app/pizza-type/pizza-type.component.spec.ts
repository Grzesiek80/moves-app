import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PizzaTypeComponent } from './pizza-type.component';

describe('PizzaTypeComponent', () => {
  let component: PizzaTypeComponent;
  let fixture: ComponentFixture<PizzaTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PizzaTypeComponent ]
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
