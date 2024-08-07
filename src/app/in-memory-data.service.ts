import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {

  createDb() {
    const pizzas = [
      { id: 1, name: 'Mario', address: 'wroclove', phone: '555-288-333', type: 'hawajska', size: 'Medium', toppings: ['Chesse'] },
    ];
    return { pizzas };
  }
}
