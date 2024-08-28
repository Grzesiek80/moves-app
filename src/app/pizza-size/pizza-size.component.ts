import { Component, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-pizza-size',
  templateUrl: './pizza-size.component.html',
  styleUrls: ['./pizza-size.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => PizzaSizeComponent),
      multi: true
    }
  ]
})
export class PizzaSizeComponent implements ControlValueAccessor {

  constructor() { }
  pizzaSize: string[] = ['Small', 'Medium', 'Large'];
  selectedSize: string = ''; 

  onChange: (value: any) => void = () => {};
  onTouched: () => void = () => {};

  writeValue(value: any): void {
    this.selectedSize = value;
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
    this.selectedSize = value;
    this.onChange(value);  // Informujemy formularz o zmianie
    this.onTouched();
  }


}
