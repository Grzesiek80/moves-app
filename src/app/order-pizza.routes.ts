import { Routes } from '@angular/router';
import { UnsavedChangesGuard } from './unsaved-changes.guard';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./order-pizza/order-pizza.component').then(m => m.OrderPizzaComponent),
    canDeactivate: [UnsavedChangesGuard]
  }
];