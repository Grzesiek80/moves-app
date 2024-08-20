import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function noOnlySpacesValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const value = control.value;

    if (value === null || value === undefined || value === '') {
      return null;
    }

    const isValid = value.trim().length > 0;

    return isValid ? null : { noOnlySpaces: true };
  };
}


