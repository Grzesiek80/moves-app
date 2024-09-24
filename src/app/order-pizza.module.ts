import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderPizzaComponent } from './order-pizza/order-pizza.component';
import { RouterModule, Routes } from '@angular/router';
import { PizzaSizeComponent } from './pizza-size/pizza-size.component';
import { PizzaTypeComponent } from './pizza-type/pizza-type.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  { path: '', component: OrderPizzaComponent }
];

@NgModule({
  declarations: [OrderPizzaComponent, PizzaSizeComponent, PizzaTypeComponent],
  exports: [OrderPizzaComponent, PizzaSizeComponent, PizzaTypeComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ]
})
export class OrderPizzaModule { }
