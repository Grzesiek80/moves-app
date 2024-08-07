import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'app-order-pizza',
  templateUrl: './order-pizza.component.html',
  styleUrls: ['./order-pizza.component.scss']
})
export class OrderPizzaComponent {

  pizzaOrderForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.pizzaOrderForm = this.fb.group({
      name: ['', Validators.required],
      address: ['', Validators.required],
      phone: ['', [Validators.required, Validators.pattern(/^\d{10}$/)]],
      pizzas: this.fb.array([this.createPizza()])
    });
  }

  createPizza(): FormGroup {
    return this.fb.group({
      type: ['margheritha', Validators.required],
      size: ['medium', Validators.required],
      toppings: this.fb.group({
        cheese: [false],
        pepperoni: [false],
        mushrooms: [false]
      })
    });
  }

  get pizzas(): FormArray {
    return this.pizzaOrderForm.get('pizzas') as FormArray;
  }

  addPizza(): void {
    this.pizzas.push(this.createPizza());
  }

  removePizza(index: number): void {
    this.pizzas.removeAt(index);
  }

  onSubmit(): void {
    console.log(this.pizzaOrderForm.value);
  }

}
