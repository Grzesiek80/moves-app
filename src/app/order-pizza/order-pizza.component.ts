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
      name: ['', [Validators.required, Validators.pattern('^[a-zA-Z]+$'), Validators.minLength(2)], { updateOn: 'blur' }],
      address: ['', [Validators.required, Validators.minLength(8)], { updateOn: 'blur' }],
      phone: ['', [Validators.required, Validators.pattern('^\\d{9}$')], { updateOn: 'blur' }],
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
  get name() {
    return this.pizzaOrderForm.get('name');
  }

  get address() {
    return this.pizzaOrderForm.get('address');
  }

  get phone() {
    return this.pizzaOrderForm.get('phone');
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
