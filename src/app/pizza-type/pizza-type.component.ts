import { Component, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-pizza-type',
  templateUrl: './pizza-type.component.html',
  styleUrls: ['./pizza-type.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => PizzaTypeComponent),
      multi: true
    }
  ]
})
export class PizzaTypeComponent implements ControlValueAccessor {

  constructor() { }
  pizzaList: string[] = ['Margherita', 'Pepperoni', 'Hawajska'];
  selectedPizza: string = ''; 

  onChange: (value: any) => void = () => {};
  onTouched: () => void = () => {};

  writeValue(value: any): void {
    this.selectedPizza = value;
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState?(isDisabled: boolean): void {
    // Obsługa stanu wyłączonego (disabled)
  }

  onSelectChange(event: Event): void {
    const value = (event.target as HTMLSelectElement).value;
    this.selectedPizza = value;
    this.onChange(value);  // Informujemy formularz o zmianie
    this.onTouched();
  }
}
